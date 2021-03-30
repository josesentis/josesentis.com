import React from 'react';

const withScrollTop = WrappedComponent => {
  return class extends React.Component {
    _mainElement;
    state = {
      scrollTop: 0,
    }

    componentDidMount() {
      this._mainElement = document.getElementsByTagName('main')[0];
      this._mainElement.addEventListener('scroll', this.calculteUserScroll);

      this.calculteUserScroll();
    };

    componentWillUnmount() {
      this.cancelScroll();
    };

    calculteUserScroll = () => {
      this.setState({ scrollTop: this.scrollTop() });
    }

    cancelScroll = () => {
      this._mainElement.removeEventListener('scroll', this.calculteUserScroll);
    }

    scrollTop = () => this._mainElement.scrollTop;

    render() {
      return <WrappedComponent {...this.props} scrollTop={this.state.scrollTop} cancelScroll={this.cancelScroll} />;
    }
  }
};

export default withScrollTop;
