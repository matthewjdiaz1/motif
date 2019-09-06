import React from 'react';
import MotifGrid from './MotifGrid.jsx';
import Tone from 'tone';

class Motif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 100,
      tempo: 90,
      cMajScale: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      currentScale: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      synth: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.playMaj7th = this.playMaj7th.bind(this);
  }

  componentDidMount() {
    // const metalSynth = new Tone.MetalSynth().toMaster();
    // this.setState({ synth: metalSynth })
  }

  handleClick(note) {
    // const synth = new Tone.Synth().toMaster();
    // this.state.synth.triggerAttackRelease(note + '3', '1n');
  }
  playMaj7th(note) {
    // const polySynth = new Tone.PolySynth(3, Tone.synth).toMaster();

    // this.state.cMajScale.forEach((note, index) => {
    //   if (index % 2 === 0) {
    //     polySynth.triggerAttackRelease(note + '3', '1n')
    //   }
    // });
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
          </div>
          <div className='controls-chord-builder'>
            controls-chord-builder
          </div>
        </div>
        <div className='motif-grid'>
          <MotifGrid scale={this.state.currentScale} />
        </div>
      </div>
    )
  }
}

export default Motif;
