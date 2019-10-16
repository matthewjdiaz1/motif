import React from 'react';
import { MDCSlider } from '@material/slider';

class ToneSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cMajScale: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      currentScale: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      currentScaleName: 'C Major',
      volume: null,
      tempo: 120,
      synth: null,
      loop: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const bpmSlider = new MDCSlider(document.querySelector('.mdc-slider'));

    bpmSlider.listen('MDCSlider:change', () => this.props.transport.bpm.value = bpmSlider.value);
  }
  handleClick() {
    // console.log(this.props)
  }

  render() {
    return (
      <div className="ToneSettings-container">
        <div onClick={() => this.handleClick()}>handleClick</div>
        <div className="ToneSettings-volume-container">BPM
        <div className="mdc-slider" tabIndex="0" role="slider"
            aria-valuemin="40" aria-valuemax="300" aria-valuenow="130"
            aria-label="Select Value">
            <div className="mdc-slider__track-container">
              <div className="mdc-slider__track"></div>
            </div>
            <div className="mdc-slider__thumb-container">
              <svg className="mdc-slider__thumb" width="21" height="21">
                <circle cx="10.5" cy="10.5" r="7.875"></circle>
              </svg>
              <div className="mdc-slider__focus-ring"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ToneSettings;
