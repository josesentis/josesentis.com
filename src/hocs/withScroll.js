import React from 'react';

const withScrollTop = WrappedComponent => {
  return class extends React.Component {
    _documentElement;
    state = {
      scrollTop: 0,
    }

    componentDidMount () {
      this._documentElement = document.documentElement;

      this.calculteUserScroll();
      document.addEventListener('scroll', this.calculteUserScroll);
    };

    componentWillUnmount () {
      document.removeEventListener('scroll', this.calculteUserScroll);
    };

    calculteUserScroll = () => { this.setState({ scrollTop: this._documentElement.scrollTop }) }

    render () {
      console.log(this.state.scrollTop);

      return <WrappedComponent {...this.props} scrollTop={this.state.scrollTop} />;
    }
  }
};

export default withScrollTop;
