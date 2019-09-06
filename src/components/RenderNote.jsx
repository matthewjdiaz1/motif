import React from 'react';
import Tone from 'tone';


class RenderNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      synth: null,
    }
  }
  componentDidMount() {
    const synth = new Tone.Synth().toMaster();
    this.setState({ synth: synth });
  }
  handleClick() {
    console.log('test');
    this.state.synth.triggerAttackRelease(this.props.note + '3', '4n');
  }
  render() {
    return (
      <button onClick={() => this.handleClick()} className='motif-grid-button'>{this.props.note}</button>
    )
  }
}

export default RenderNote;