import React from 'react';
import RenderNote from './RenderNote.jsx';

class MotifGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridNotes: [null],
      reversedScale: this.props.scale.reverse(),
    }
    this.mapScaleToGrid = this.mapScaleToGrid.bind(this);
  }
  componentDidMount() {
    let fillNotes = Array(112).fill(0);
    fillNotes.forEach((note, index) => {
      fillNotes[index] = this.state.reversedScale[index % 7];
    });
    this.setState({ gridNotes: fillNotes });
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

  render() {
    return (
      <div className='motif-grid-note'>
        {this.state.gridNotes.map(this.mapScaleToGrid)}
      </div>
    )
  }
}

export default MotifGrid;
