import React from 'react';

import Noise from '../noise';

import LoaderWrapper from './styles';
import { AppearingText } from '../navigation';

const text = 'jose sentis';

class Home extends React.Component {
  render() {
    return (
      <LoaderWrapper className="playground">
        <Noise />
        <div>
          <span className="title duplicated-text stroke light">{text}</span>
          <span className="title duplicated-text stroke light">{text}</span>
          <span className="title duplicated-text stroke light">{text}</span>
          <span className="title duplicated-text stroke light">{text}</span>
          <span className="title duplicated-text stroke light">{text}</span>
          <AppearingText><span className="text title">{text}</span></AppearingText>
          <span className="title duplicated-text stroke light">{text}</span>
          <span className="title duplicated-text stroke light">{text}</span>
          <span className="title duplicated-text stroke light">{text}</span>
          <span className="title duplicated-text stroke light">{text}</span>
          <span className="title duplicated-text stroke light">{text}</span>
        </div>
      </LoaderWrapper>
    );
  }
}

export default Home;
