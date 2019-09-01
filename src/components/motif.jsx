import React from 'react';
import Tone from 'tone';

class Motif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(note) {
    var synth = new Tone.Synth().toMaster();
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease(note + '3', '1n')
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
          <button onClick={() => this.handleClick('B')} className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          <button className='motif-grid-note'>B</button>
          {/* <button className='motif-grid-note'>Bb</button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button> */}
          <button onClick={() => this.handleClick('A')} className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          <button className='motif-grid-note'>A</button>
          {/* <button className='motif-grid-note'>Ab</button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button> */}
          <button onClick={() => this.handleClick('G')} className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          <button className='motif-grid-note'>G</button>
          {/* <button className='motif-grid-note'>Gb</button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button> */}
          <button onClick={() => this.handleClick('F')} className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button className='motif-grid-note'>F</button>
          <button onClick={() => this.handleClick('E')} className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          <button className='motif-grid-note'>E</button>
          {/* <button className='motif-grid-note'>Eb</button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></div>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button> */}
          <button onClick={() => this.handleClick('D')} className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          <button className='motif-grid-note'>D</button>
          {/* <button className='motif-grid-note'>Db</button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button>
          <button className='motif-grid-note'></button> */}
          <button onClick={() => this.handleClick('C')} className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
          <button className='motif-grid-note'>C</button>
        </div>
      </div>
    )
  }
}

export default Motif;
