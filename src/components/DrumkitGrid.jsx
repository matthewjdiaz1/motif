import React from 'react';
import Tone from 'tone';
import kickFile from '../../public/assets/fateKick02.mp3'
import snareFile from '../../public/assets/snareHard01.mp3'

class DrumkitGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridNotes: Array(288).fill(0),
      style: { "backgroundColor": "white" },
      kick: null,
      snare: null,
    }
    this.mapNotesToGrid = this.mapNotesToGrid.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    let kick = new Tone.Player({
      "url": kickFile,
      "autostart": false,
    }).toMaster();
    let snare = new Tone.Player({
      "url": snareFile,
      "autostart": false,
    }).toMaster();
    this.setState({ kick, snare });
  }

  handleClick(index, note) {
    let column = Math.floor(index / 9) + 1;
    let row = (index % 9) + 1;
    console.log('column:', column);
    console.log('row', row);
    // console.log('index:', index);

    note.start();
    if (column < 5) {
      this.props.transport.schedule(() => {
        note.start();
        console.log(`0:0:${column}`)
      }, `0:0:${column}`, '4n');
    } else if (column < 9) {
      this.props.transport.schedule(() => {
        note.start();
        console.log(`0:1:${column - 4}`)
      }, `0:1:${column - 4}`, '4n');
    } else if (column < 13) {
      this.props.transport.schedule(() => {
        note.start();
        console.log(`0:2:${column - 8}`)
      }, `0:2:${column - 8}`, '4n');
    } else {
      this.props.transport.schedule(() => {
        note.start();
        console.log(`0:3:${column - 12}`)
      }, `0:3:${column - 12}`, '4n');
    }
  }
  mapNotesToGrid(note, index) {
    if (note === null) return;
    let row = (index % 9) + 1;
    switch (row) {
      case 9:
        return (
          <button
            className="drumkit-grid-button"
            key={index}
            onClick={() => this.handleClick(index, this.state.kick)}>
            K
          </button>
        )
      case 8:
        return (
          <button
            className="drumkit-grid-button"
            key={index}
            onClick={() => this.handleClick(index, this.state.snare)}>
            S
          </button>
        )
      default:
        return (
          <button
            className="drumkit-grid-button"
            key={index} onClick={() => console.log()}>
            {/* {Math.floor(index / 9) + 1} */}-
          </button>
        )
    }
  }
  render() {
    return (
      <div className="drumkit-grid">
        {this.state.gridNotes.map(this.mapNotesToGrid)}
      </div>
    )
  }
}

export default DrumkitGrid;
