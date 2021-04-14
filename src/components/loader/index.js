import React from 'react';

import Noise from '../noise';

import LoaderWrapper from './styles';
import { AppearingText } from '../navigation';

class Home extends React.Component {
  render () {
    return (
      <LoaderWrapper className="playground">
        <Noise />
        <div className="title">
          <AppearingText>
            <span className="text">j</span>
            <span className="text">o</span>
            <span className="text">s</span>
            <span className="text">e</span>
            <span className="text">&nbsp;</span>
            <span className="text">s</span>
            <span className="text">e</span>
            <span className="text">n</span>
            <span className="text">t</span>
            <span className="text">i</span>
            <span className="text">s</span>
          </AppearingText>
        </div>
      </LoaderWrapper>
    );
  }
}

export default Home;
