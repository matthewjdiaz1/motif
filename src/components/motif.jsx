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
      tempo: 40,
      synth: null,
      loop: null,
      tone: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    const volume = new Tone.Volume(-80).toMaster();
    const synth = new Tone.Synth();
    synth.connect(volume);

    Tone.context.latencyHint = 'fastest';
    Tone.Transport.bpm.value = 175;

    Tone.Transport.loop = true;
    Tone.Transport.loopStart = "0:0:0";
    Tone.Transport.loopEnd = "2:0:0";

    this.setState({
      volume: volume,
      synth: synth,
      // sequencer: sequencer,
    });
    synth.triggerAttackRelease("B2", '1n');
  }
  handleClick(note) {
    console.log('handleClick');
  }
  handlePlay() {
    console.log('spin that shit up');
    Tone.Transport.toggle('+0.2');
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
          {/* <div className='motif-grid'>
              <MotifGrid
                scale={this.state.currentScale}
                volume={this.state.volume}
                synth={this.state.synth}
                tone={Tone}
              /> */}
          <div className='motif-grid'>
            <DrumkitGrid
              transport={Tone.Transport}
            />
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
