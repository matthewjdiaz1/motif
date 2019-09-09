import React from 'react';
import MotifGrid from './MotifGrid.jsx';
import Tone from 'tone';

class Motif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cMajScale: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      currentScale: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      transport: null,
      vol: null,
      tempo: 120,
      synth: null,
      loop: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    const vol = new Tone.Volume(-12).toMaster();
    const synth = new Tone.Synth();
    synth.connect(vol);


    Tone.context.latencyHint = 'fastest';
    Tone.Transport.bpm.value = 120;

    // const loop = new Tone.Loop(function (time) {
    //   this.state.synth.start(time);
    //   this.state.synth.stop(time + 0.5);
    // }, 2);
    // this.setState({ loop: loop });

    this.setState({
      transport: Tone.Transport,
      vol: vol,
      synth: synth,
    });
  }

  handleClick(note) {
    console.log('transport stopped');
    this.state.synth.triggerAttackRelease('C3', '8n');
    this.state.transport.stop();
  }
  handlePlay() {
    console.log('spin that shit up')
    // let temp = this.state.synth;
    // temp.triggerAttackRelease('C3', '4n');

    // this.state.transport.scheduleRepeat(function (time) {
    //   //time = sample accurate time of the event
    //   // this.state.synth.triggerAttack('C3', '1m');
    //   temp.triggerAttackRelease('C3', '8n');
    //   console.log('pulse');
    // }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "8n");

    // const seq = new Tone.Sequence((time, note) => {
    //   temp.triggerAttackRelease(note, time);
    //   console.log('note at time:', note, time);
    // }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]], "1n");

    // this.state.transport.schedule(function (time) {
    //   //do something with the time
    //   console.log('testing that shiiiitt');
    //   temp.triggerAttackRelease('C3');
    // }, "0:2:0");

    Tone.Transport.start('+0.2');
  }

  render() {
    return (
      <div className='motif-container'>
        <div className='controls-container'>
          <div className='controls-current-chord'>
            controls-current-chord
          </div>
          <div className='controls-controls'>
            controls-controls
            <button onClick={() => this.handlePlay()}>Play</button>
            <button onClick={() => this.handleClick()}>Test w/ handleClick</button>
          </div>
          <div className='controls-chord-builder'>
            controls-chord-builder
          </div>
        </div>
        <div className='motif-grid'>
          <MotifGrid
            scale={this.state.currentScale}
            transport={this.state.transport}
            synth={this.state.synth}
          />
        </div>
      </div>
    )
  }
}

export default Motif;
