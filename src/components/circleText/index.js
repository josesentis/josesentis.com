import React from 'react';
import { TweenMax } from 'gsap';

import withScroll from '../../hocs/withScroll';
import TextWrapper, { Character } from './styles';

class circleText extends React.Component {
  _headerElement;
  _tween;
  state = {
    hover: false
  }

  componentDidMount () {
    this.rotateElement();

    this._headerElement = document.getElementById('moving-text');
  };

  rotateElement = () => {
    this._tween = TweenMax.to(this._circleRef, {
      duration: 5,
      rotate: 360,
      repeat: -1,
      ease: 'none'
    });
  }

  shouldShow = () => {
    if (this._headerElement) {
      if (this.props.scrollTop > this._headerElement.offsetHeight) return true;
    }

    return false;
  }

  handleMouseEnter = () => {
    this.setState({ hover: true });
  }

  handleMouseLeave = () => {
    this.setState({ hover: false });
  }

  render () {
    const { text, onMouseEnter, onMouseLeave, ...props } = this.props;
    const characters = text.split("");
    const degrees = 360 / characters.length;
    let tempDegrees = 0;
    let textClass = '';

    if (this.shouldShow()) textClass = 'visible';
    if (this.state.hover) textClass += ' hover';

    return (
      <TextWrapper
        className={textClass}
        onMouseEnter={() => {
          if (this.shouldShow()) {
            this.handleMouseEnter();
            onMouseEnter();
          }
        }}
        onMouseLeave={() => {
          if (this.shouldShow()) {
            this.handleMouseLeave();
            onMouseLeave();
          }
        }}
        ref={ref => this._circleRef = ref}
        {...props}
      >
        <p
          ref={ref => this._wrapperRef = ref}
        >
          {characters.map(char => {
            tempDegrees += degrees;

            return <Character key={`circle-${char}`} rotate={tempDegrees}>{char}</Character>;
          })}
        </p>
      </TextWrapper>
    );
  }
}

export default withScroll(circleText);
