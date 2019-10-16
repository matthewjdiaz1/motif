import React from 'react';
import MotifGrid from './MotifGrid.jsx';
import ToneSettings from './ToneSettings.jsx';
import DrumkitGrid from './DrumkitGrid.jsx';
import Tone from 'tone';

class Motif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cMajScale: [0, 2, 4, 5, 7, 9, 11],
      // currentScale: [0, 2, 4, 5, 7, 9, 11], // c maj
      currentScale: [0, 1, 4, 5, 7, 8, 11], // double harmonic
      volume: 75,
      tempo: 120,
      synth: null,
      loop: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    const volume = new Tone.Volume(-12).toMaster();
    const synth = new Tone.Synth();
    synth.connect(volume);


    Tone.context.latencyHint = 'fastest';
    Tone.Transport.bpm.value = 200;

    Tone.Transport.loop = true;
    Tone.Transport.loopStart = "0:0:0";
    Tone.Transport.loopEnd = "2:0:0";

    const sequencer = new Tone.Sequence(function (time, note) {
      console.log(note);
      synth.triggerAttackRelease(note, "8n");
    }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]);
    Tone.Transport.toggle('+0.2');
    sequencer.start();
    this.setState({
      volume: volume,
      synth: synth,
      sequencer: sequencer,
    });
  }
  handleClick(note) {
    console.log('transport stopped');
    Tone.Transport.toggle();
  }
  handlePlay() {
    console.log('spin that shit up');
    Tone.Transport.toggle('+0.2');
    this.state.sequencer.start();
  }

  render() {
    if (this.state.synth) {
      return (
        <div className='motif-container'>
          <div className='controls-container'>
            <div className='controls-current-chord'>
              controls-current-chord
            </div>
            <div className='controls-controls'>
              <ToneSettings
                transport={Tone.Transport}
                volume={this.state.volume}
                changeVolume={this.changeVolume}
              />
            </div>
            <div className='controls-chord-builder'>
              <button onClick={() => this.handlePlay()}>Play/Stop</button>
              controls-chord-builder
            </div>
          </div>
          <div className='motif-grid'>
            <MotifGrid
              scale={this.state.currentScale}
              transport={Tone.Transport}
              volume={this.state.volume}
              synth={this.state.synth}
              tone={Tone}
            />
            {/* <DrumkitGrid
              transport={this.state.transport}
            /> */}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default Motif;
