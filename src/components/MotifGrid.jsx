import React from 'react';
import RenderNote from './RenderNote.jsx';

class MotifGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ////////////////////// add style={{"display":"none"}} when drums or bass is pulled
      isLoaded: false,
      sequencers: Array(12),
      synths: Array(12),
      events: [
        ["C3", null, null, null, null, null, null, null, null, null, null, null, "C3", "C3", "C4", "C4"],
        [null, "C#3", null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, "D3", null, null, null, null, null, null, null, null, null, null, null, "D3", "D3"],
        [null, null, null, "D#3", null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, "E3", null, null, null, null, null, null, null, "E3", "E3", null, null],
        [null, null, null, null, null, "F3", null, null, null, null, null, null, null, null, "F3", "F3"],
        [null, null, null, null, null, null, "F#3", null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, "G3", null, null, null, null, "G3", "G3", null, null],
        [null, null, null, null, null, null, null, null, "G#3", null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, "A3", null, null, null, null, "A3", "A3"],
        [null, null, null, null, null, null, null, null, null, null, "A#3", null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, "B3", "B3", "B3", null, null],
      ],
    }
    this.updateSequencer = this.updateSequencer.bind(this);
    this.updateAllSequencers = this.updateAllSequencers.bind(this);
    this.mapScaleToGrid = this.mapScaleToGrid.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // GOALLLLLL => create a sequencer and synth for each note of the scale
    // events, synths, and sequencers must be stored in state
    // for each sequencer
    console.log(this.props.scale);
    for (let i = 0; i < 12; i++) {
      // screate a synth and setstate
      const synth = new this.props.tone.Synth().toMaster();
      let synths = this.state.synths;
      synths[i] = synth;
      this.setState({
        synths,
      });
      // then, create a sequencer and setstate
      // const sequencer = new this.props.tone.Sequence(function (time, note) {
      //   console.log(`${note} at ${time}`);
      //   console.log(state.events[i]);
      //   synth.triggerAttackRelease(note, "8n");
      // }, this.state.events[i], "8n");
      // sequencer.start();

      // let sequencers = this.state.sequencers;
      // state.sequencers[i] = sequencer;

      // this.setState({
      //   synths: state.synths,
      //   sequencers: state.sequencers,
      // });

    }
    this.updateAllSequencers(this.state);

    this.setState({
      isLoaded: true,
    });
  }
  updateSequencer(state, index) {
    // TODO - updates sequencer with state.synths and state.events
    // schedules it to the beginning of transport beat 0 allowing it to be updated while playing (hit it next round)
    // clean up old sequencers

  }
  updateAllSequencers(state) {
    // TODO - updates all sequencers with state.synths and state.events
    // schedules them to the beginning of transport beat 0 allowing it to be updated while playing (hit it next round)
    // clean up old sequencers
    // for each sequencer, if the event has changed, 
    for (let i = 0; i < state.synths.length; i++) {
      // then, create a sequencer and setstate
      const sequencer = new this.props.tone.Sequence(function (time, note) {
        console.log(`${note}`);
        state.synths[i].triggerAttackRelease(note, "8n");
      }, this.state.events[i], "8n");
      sequencer.start();

      let sequencers = state.sequencers;
      sequencers[i] = sequencer;

      this.setState({
        sequencers,
      });
    };
    // console.log(state);
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
  handleClick(note) {
    // console.log(this.state.sequencers[note].events);
    // let editSequencer = this.state.sequencers;
    // console.log(editSequencer[note].events);
    // if (note === 0 || note === 1) {
    //   let editSequencer = this.state.sequencers;
    //   editSequencer[note].events = [this.state.cromaticScale[note], null, null, null, this.state.cromaticScale[note], null, null, null, this.state.cromaticScale[note], null, null, null, this.state.cromaticScale[note], null, null, null];
    //   this.setState({ sequencers: editSequencer });
    // }
    // // console.log(this.state.sequencers);
    // this.updateSequencers(this.state.sequencers);
    this.setState({
      events: [
        ["C3", "C3", "C4", "C4"],
        [null, null, null, null],
        [null, null, "D3", "D3"],
        [null, null, null, null],
        ["E3", "E3", null, null],
        [null, null, "F3", "F3"],
        [null, null, null, null],
        ["G3", "G3", null, null],
        [null, null, null, null],
        [null, null, "A3", "A3"],
        [null, null, null, null],
        ["B3", "B3", null, null],
      ],
    }, () => this.updateAllSequencers(this.state));
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
