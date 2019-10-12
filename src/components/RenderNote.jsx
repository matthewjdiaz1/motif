import React from 'react';
// import Tone from 'tone';


class RenderNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNoteClicked: false,
      synth: null,
      note: null,
      style: { "backgroundColor": "white" }
    }
  }
  componentDidMount() {
    this.setState({
      synth: this.props.synth,
      note: this.props.note,
    });
  }
  handleClick() {
    console.log('column:', Math.floor(this.props.index / 7));

    if (this.state.isNoteClicked) {
      this.setState({ style: { "backgroundColor": "white" } })
      console.log('note already clicked');
      //todo, remove note from transport queue 
      // this.setState({ isNoteClicked: !this.state.isNoteClicked });
    } else {
      console.log('new note clicked');
      this.setState({
        style: { "backgroundColor": "blueviolet" },
        isNoteClicked: !this.state.isNoteClicked,
      });

      const synth = this.props.synth;
      const note = this.props.note;
      synth.triggerAttackRelease(note + '3', '1n');

      this.props.transport.schedule(() => {
        console.log('from RenderNote props');
        synth.triggerAttackRelease(note + '3');
      }, `0:0:${Math.floor(this.props.index / 7)}`, '8n');
    }
  }
  render() {
    return (
      <button style={this.state.style} onClick={() => this.handleClick()} className='motif-grid-button'>{this.props.note}</button>
    )
  }
}

export default RenderNote;