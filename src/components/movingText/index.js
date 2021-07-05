import React from 'react';

import TextWrapper from './styles';

class movingText extends React.PureComponent {
  render () {
    const { children, ...props } = this.props;

    return (
      <TextWrapper {...props} aria-hidden="true">
        <div>{children}</div>
      </TextWrapper>
    );
  }
}

export default movingText;
