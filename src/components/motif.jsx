import React from 'react';
import MotifGrid from './MotifGrid.jsx';
import DrumkitGrid from './DrumkitGrid.jsx';
import Tone from 'tone';

class Motif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cMajScale: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      currentScale: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      transport: null,
      vol: null,
      bpm: 120,
      synth: null,
      loop: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    const vol = new Tone.Volume(-12).toMaster();
    const synth = new Tone.PolySynth();
    synth.connect(vol);

    // const transporttttt = {
    //   bpm  : 120 ,
    //   swing  : 0 ,
    //   swingSubdivision  : 8n ,
    //   timeSignature  : 4 ,
    //   loopStart  : 0 ,
    //   loopEnd  : '4m' ,
    //   PPQ  : 192
    // }

    Tone.context.latencyHint = 'fastest';
    Tone.Transport.bpm.value = 230;
    ////////// Tone.context.latencyHint options //////////
    // 'playback' - (prioritizes sustained playback)
    // 'interactive' - (default, prioritizes low latency)
    // 'balanced' - (balances latency and performance)
    Tone.Transport.loop = true;
    Tone.Transport.loopStart = "0:0:0";
    Tone.Transport.loopEnd = "2:0:0";
    ////////// Tone.Transport defaults ///////////////////
    // Tone.Transport.swing.value = 0; 
    // Tone.Transport.swingSubdivision.value = '8n';
    // Tone.Transport.timeSignature.value = 4;
    // Tone.Transport.PPQ.value = 192;
    //////////////////////////////////////////////////////

    this.setState({
      transport: Tone.Transport,
      vol: vol,
      synth: synth,
    });
  }

  handleClick(note) {

  }
  handlePlay() {
    console.log('spin that shit up');
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



    Tone.Transport.toggle('+0.2');
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
            <button onClick={() => this.handlePlay()}>Play/Stop</button>
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
          {/* <DrumkitGrid
            transport={this.state.transport}
          /> */}
        </div>
      </div>
    )
  }
}

export default Motif;
