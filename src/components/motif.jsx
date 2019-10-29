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
    const volume = new Tone.Volume().toMaster();
    const synth = new Tone.PolySynth(3);
    const synth2 = new Tone.Synth();
    const synth3 = new Tone.Synth();
    synth.connect(volume);
    synth2.connect(volume);
    synth3.connect(volume);

    Tone.context.latencyHint = 'fastest';
    Tone.Transport.bpm.value = 180;

    // Tone.Transport.loop = true;
    // Tone.Transport.loopStart = "0:0:0";
    // Tone.Transport.loopEnd = "8:0:0";

    //use an array of objects as long as the object has a "time" attribute
    const part = new Tone.Part((time, value) => {
      //the value is an object which contains both the note and the velocity
      synth.triggerAttackRelease(value.note, value.length, time, value.velocity);
      console.log('note', value.note);
      console.log('time', value.time);
    }, [
      // C, C#, D, D#, E, F, F#, G, G#, A, A#, B
      // C D E F G A B
      { "time": "0:0:0", "note": "B4", "velocity": 0.7, "length": "16n" },
      { "time": "0:0:0", "note": "D4", "velocity": 0.7, "length": "16n" },

      { "time": "0:0:2", "note": "G4", "velocity": 0.9, "length": "8n" },

      { "time": "0:1:0", "note": "B4", "velocity": 0.7, "length": "3n" },
      { "time": "0:1:0", "note": "D4", "velocity": 0.7, "length": "3n" },

      { "time": "0:3:0", "note": "B4", "velocity": 0.7, "length": "16n" },
      { "time": "0:3:0", "note": "D4", "velocity": 0.7, "length": "16n" },

      { "time": "0:3:2", "note": "G4", "velocity": 0.9, "length": "8n" },


      { "time": "1:0:0", "note": "B4", "velocity": 0.7, "length": "8n" },
      { "time": "1:0:0", "note": "D4", "velocity": 0.7, "length": "8n" },

      { "time": "1:0:2", "note": "Gb4", "velocity": 0.9, "length": "8n" },

      { "time": "1:1:0", "note": "B4", "velocity": 0.7, "length": "3n" },
      { "time": "1:1:0", "note": "D4", "velocity": 0.7, "length": "3n" },

      { "time": "1:3:0", "note": "B4", "velocity": 0.7, "length": "8n" },
      { "time": "1:3:0", "note": "D4", "velocity": 0.7, "length": "8n" },

      { "time": "1:3:2", "note": "Gb4", "velocity": 0.9, "length": "8n" },


      { "time": "2:0:0", "note": "B4", "velocity": 0.7, "length": "8n" },
      { "time": "2:0:0", "note": "E4", "velocity": 0.7, "length": "8n" },

      { "time": "2:0:2", "note": "G4", "velocity": 0.9, "length": "8n" },

      { "time": "2:1:0", "note": "B4", "velocity": 0.7, "length": "3n" },
      { "time": "2:1:0", "note": "E4", "velocity": 0.7, "length": "3n" },

      { "time": "2:3:0", "note": "B4", "velocity": 0.7, "length": "8n" },
      { "time": "2:3:0", "note": "E4", "velocity": 0.7, "length": "8n" },

      { "time": "2:3:2", "note": "G4", "velocity": 0.9, "length": "8n" },


      { "time": "3:0:0", "note": "C5", "velocity": 0.7, "length": "8n" },
      { "time": "3:0:0", "note": "E4", "velocity": 0.7, "length": "8n" },
      { "time": "3:0:0", "note": "G4", "velocity": 0.7, "length": "8n" },

      { "time": "3:1:0", "note": "C5", "velocity": 0.7, "length": "8n" }, // ???
      { "time": "3:1:0", "note": "E4", "velocity": 0.7, "length": "8n" }, // ???
      { "time": "3:1:0", "note": "G4", "velocity": 0.7, "length": "8n" }, // ???

      { "time": "3:2:0", "note": "C5", "velocity": 0.7, "length": "8n" },
      { "time": "3:2:0", "note": "E4", "velocity": 0.7, "length": "8n" },
      { "time": "3:2:0", "note": "G4", "velocity": 0.7, "length": "8n" },

      { "time": "3:2:2", "note": "B4", "velocity": 0.9, "length": "8n" },

      { "time": "3:3:0", "note": "A4", "velocity": 0.9, "length": "8n" },

      { "time": "3:3:2", "note": "B4", "velocity": 0.9, "length": "8n" },
    ]).start("0:0");
    part.loopStart = "0:0";
    part.loopEnd = "4:0";
    part.loop = 2;

    const part2 = new Tone.Part((time, value) => {
      //the value is an object which contains both the note and the velocity
      synth2.triggerAttackRelease(value.note, value.length, time, value.velocity);
      console.log('note', value.note);
      console.log('time', value.time);
    }, [
      // BASS
      { "time": "0:0", "note": "G2", "velocity": 0.7, "length": "1n" },
      { "time": "1:0", "note": "B2", "velocity": 0.7, "length": "1n" },
      { "time": "2:0", "note": "E2", "velocity": 0.7, "length": "1n" },
      { "time": "3:0", "note": "C3", "velocity": 0.7, "length": "2n" },
      { "time": "3:2", "note": "C3", "velocity": 0.7, "length": "2n" },
    ]).start("4:0");

    part2.loopStart = "0:0";
    part2.loopEnd = "4:0";
    part2.loop = 3;

    const part3 = new Tone.Part((time, value) => {
      //the value is an object which contains both the note and the velocity
      synth3.triggerAttackRelease(value.note, value.length, time, value.velocity);
      console.log('note', value.note);
      console.log('time', value.time);
      console.log('length', value.length);
    }, [
      // LEAD
      { "time": "0:0", "note": "G3", "velocity": 1, "length": "2n" },
      { "time": "0:2", "note": "G4", "velocity": 1, "length": "1n" },

      { "time": "1:2", "note": "GB4", "velocity": 1, "length": "8n" },
      { "time": "1:2:2", "note": "G4", "velocity": 1, "length": "8n" },
      { "time": "1:3", "note": "GB4", "velocity": 1, "length": "8n" },
      { "time": "1:3:2", "note": "D4", "velocity": 1, "length": "8n" },
      { "time": "1:4", "note": "E4", "velocity": 1, "length": "1n" },

      { "time": "3:0", "note": "C4", "velocity": 1, "length": "8n" },
      { "time": "3:1", "note": "C4", "velocity": 1, "length": "8n" },
      { "time": "3:2", "note": "C4", "velocity": 1, "length": "8n" },
      { "time": "3:2:2", "note": "B3", "velocity": 1, "length": "8n" },
      { "time": "3:3", "note": "A3", "velocity": 1, "length": "8n" },
      { "time": "3:3:2", "note": "B3", "velocity": 1, "length": "8n" },

      { "time": "4:0", "note": "G3", "velocity": 1, "length": "2n" },
      { "time": "4:2", "note": "G4", "velocity": 1, "length": "1n" },

      { "time": "5:2", "note": "GB4", "velocity": 1, "length": "8n" },
      { "time": "5:2:2", "note": "G4", "velocity": 1, "length": "8n" },
      { "time": "5:3", "note": "A4", "velocity": 1, "length": "8n" },
      { "time": "5:3:2", "note": "Gb4", "velocity": 1, "length": "8n" },

      { "time": "6:0", "note": "E4", "velocity": 1, "length": "2n" },
      { "time": "6:2", "note": "D4", "velocity": 1, "length": "8n" },
      { "time": "6:2:2", "note": "E4", "velocity": 1, "length": "8n" },
      { "time": "6:3", "note": "D4", "velocity": 1, "length": "8n" },
      { "time": "6:3:2", "note": "B3", "velocity": 1, "length": "8n" },

      { "time": "7:0", "note": "C4", "velocity": 1, "length": "4n" },
      { "time": "7:1", "note": "C4", "velocity": 1, "length": "4n" },/////// wtf????
      { "time": "7:2", "note": "C4", "velocity": 1, "length": "8n" },
      { "time": "7:2:2", "note": "B3", "velocity": 1, "length": "8n" },
      { "time": "7:3", "note": "A3", "velocity": 1, "length": "8n" },
      { "time": "7:3:2", "note": "B3", "velocity": 1, "length": "8n" },

      { "time": "8:0", "note": "G3", "velocity": 1, "length": "1n" },



    ]).start("8:0");

    this.setState({
      volume: volume,
      synth: synth,
      // testPart: testPart,
    });
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
