import React from 'react';
import RenderNote from './RenderNote.jsx';

class MotifGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      sequencers: [],
    }
    this.mapScaleToGrid = this.mapScaleToGrid.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateSequencers = this.updateSequencers.bind(this);
  }
  componentDidMount() {
    let cromaticScale = {
      0: "C",
      1: "C#",
      2: "D",
      3: "D#",
      4: "E",
      5: "F",
      6: "F#",
      7: "G",
      8: "G#",
      9: "A",
      10: "A#",
      11: "B",
    };

    // create a sequencer for each note of the scale and set the loop to true
    this.props.scale.forEach((note, index) => {
      const synth = new this.props.tone.Synth().toMaster();
      let event = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      let newSeqObj = { event, synth };
      let newSeqState = this.state.sequencers;
      newSeqState[note] = newSeqObj;
      // input array for the sequencers should be stored in state'
      this.setState({ sequencers: newSeqState });
      console.log(this.state.sequencers[note].event);
      const seq = new this.props.tone.Sequence((time, note) => {
        console.log(note);
        synth.triggerAttackRelease(cromaticScale[note] + '3', "16n");
      }, this.state.sequencers[note].event, "16n");
      // seq.loop = true;
      seq.start();

      newSeqObj.seq = seq;
      let newSeq = this.state.sequencers;
      newSeq[note] = {
        seq: seq,
        synth: synth,
        event: event,
      }

      this.setState({
        sequencers: newSeq,
        cromaticScale: cromaticScale,
        isLoaded: true,
      });
    });

    // onClick schedule and deschedule the notes for the sequencer in state to display on the grid
    // console.log(this.state.sequencers);
  }
  mapScaleToGrid(note, index) {
    if (note === null) return;
    return (
      <RenderNote
        key={index}
        note={note}
        index={index}
        scale={this.props.scale}
        transport={this.props.transport}
        synth={this.props.synth}
      />
    )
  }
  updateSequencers(sequencers) {
    sequencers.forEach((seq) => {
      console.log('starting?', seq.seq);
      seq.seq.start();
      console.log(seq.seq.state);
    });
    console.log(this.props.tone.Transport.state);
    console.log(this.props.tone.Transport);
    this.props.tone.Transport.toggle('+0.2');
    console.log(this.props.tone.Transport.state);
  }
  handleClick(note) {
    // console.log(this.state.sequencers[note].event);
    let editSequencer = this.state.sequencers;
    // console.log(editSequencer[note].event);
    if (note === 0 || note === 1) {
      let editSequencer = this.state.sequencers;
      editSequencer[note].event = [this.state.cromaticScale[note], null, null, null, this.state.cromaticScale[note], null, null, null, this.state.cromaticScale[note], null, null, null, this.state.cromaticScale[note], null, null, null];
      this.setState({ sequencers: editSequencer });
    }
    // console.log(this.state.sequencers);
    this.updateSequencers(this.state.sequencers);
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className='motif-grid-note' style={{ "gridTemplateRows": `repeat(${this.props.scale.length}, 1fr)` }}>
          {/* {this.state.gridNotes.map(this.mapScaleToGrid)} */}
          <div onClick={() => this.handleClick(0)}>0</div>
          <div onClick={() => this.handleClick(1)}>1</div>
          <div onClick={() => this.handleClick(2)}>2</div>
          <div onClick={() => this.handleClick(3)}>3</div>
          <div onClick={() => this.handleClick(4)}>4</div>
          <div onClick={() => this.handleClick(5)}>5</div>
          <div onClick={() => this.handleClick(6)}>6</div>
          <div onClick={() => this.handleClick(7)}>7</div>
          <div onClick={() => this.handleClick(8)}>8</div>
          <div onClick={() => this.handleClick(9)}>9</div>
          <div onClick={() => this.handleClick(10)}>10</div>
          <div onClick={() => this.handleClick(11)}>11</div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default MotifGrid;
