import React from 'react';
import Tone from 'tone';
import kickFile from '../../public/assets/fateKick02.mp3'
import snareFile from '../../public/assets/snareHard01.mp3'

class DrumkitGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //////////////////////////////////// TODO //////////////////////////////////////
      // fill with object containing all button values
      // give the option to pass in empty state, or previous state from previous Tone.Event
      ////////////////////////////////////////////////////////////////////////////////
      gridNotes: Array(288).fill(0),
      style: { "backgroundColor": "white" },
      kick: null,
      snare: null,
      test: [
        // `0:0:0`,
        // `0:0:1`,
        `0:0:2`,
        `0:0:3`,
        `0:0:4`,
        `0:0:5`,
        // `0:1:1`,
        `0:1:2`,
        `0:1:3`,
        `0:1:4`,
        `0:1:5`,
        `0:2:1`,
        `0:2:2`,
        `0:2:3`,
        `0:2:4`,
        `0:3:1`,
        `0:3:2`,
        `0:3:3`,
        `0:3:4`,
        `0:4:1`,
        `0:4:2`,
        `0:4:3`,
        `0:4:4`,
      ]
    }
    this.mapNotesToGrid = this.mapNotesToGrid.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTest = this.handleTest.bind(this);
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

  handleTest() {
    console.log(typeof this.state.test);
    this.state.test.forEach((eventTime) => {
      this.props.transport.schedule(() => {
        this.state.kick.start();
        console.log(eventTime)
      }, eventTime, '4n');
      // console.log(eventTime);
    });
    this.props.transport.toggle('+.02');
    // console.log('transport', this.props.transport);
  }

  handleClick(index, note) {
    let column = Math.floor(index / 9) + 1;
    let row = (index % 9) + 1;
    console.log('column:', column);
    console.log('row', row);
    // console.log('index:', index);
    console.log(this.props.transport);

    note.start();
    if (column < 33) {
      this.props.transport.schedule((time) => {
        note.start();
        console.log(`0:0:${column - 1}`)
        console.log(`time:${time}`)
      }, `0:0:${column - 1}`, '8n');
    } else if (column < 9) {
      // this.props.transport.schedule(() => {
      //   note.start();
      //   console.log(`0:1:${column - 4}`)
      // }, `0:1:${column - 4}`, '4n');
    } else if (column < 13) {
      // this.props.transport.schedule(() => {
      //   note.start();
      //   console.log(`0:2:${column - 8}`)
      // }, `0:2:${column - 8}`, '4n');
    } else {
      // this.props.transport.schedule(() => {
      //   note.start();
      //   console.log(`0:3:${column - 12}`)   // TODO 32, not 16
      // }, `0:3:${column - 12}`, '4n');
    }
  }
  mapNotesToGrid(note, index) {
    /*
    i - (noteFile, row, col, function)
    o - <button> 
    
    pass everything in thru props (including function) schedule note 
    TODO STRETCH (do these functions belong here?)
      - adjust grid to account for diff time signatures
      - adjust grid to account for triplet notes
    */
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
            key={index}
            onClick={() => this.handleTest(index, this.state.snare)}>
            T
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
