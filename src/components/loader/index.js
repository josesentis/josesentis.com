import React from 'react';

import Noise from '../noise';

import LoaderWrapper from './styles';
import { AppearingText } from '../navigation';

class Home extends React.Component {
  render() {
    return (
      <LoaderWrapper className="playground">
        <Noise />
        <div>
          <AppearingText>
            <span className="text title">j</span>
            <span className="text title">o</span>
            <span className="text title">s</span>
            <span className="text title">e</span>
            <span className="text title">&nbsp;</span>
            <span className="text title">s</span>
            <span className="text title">e</span>
            <span className="text title">n</span>
            <span className="text title">t</span>
            <span className="text title">i</span>
            <span className="text title">s</span>
          </AppearingText>
        </div>
      </LoaderWrapper>
    );
  }
}

export default Home;
