import React from 'react';
import forEach from '@runroom/purejs/lib/forEach';

import withQuery from '../../hocs/withQuery';
import BackgroundImage from '../backgroundImage';
import { toggleCursor } from '../cursor';

import ProfileWrapper from './styles';
import GET_PROFILE from './queries';

class Profile extends React.Component {
  componentDidMount() {
    this.triggerHover();
  }

  componentWillUnmount() {
    this.removeHover();
  }

  triggerHover = () => {
    const links = this._text.querySelectorAll('a');

    forEach(links, item => {
      item.addEventListener('mouseover', () => { toggleCursor(); });
      item.addEventListener('mouseleave', () => { toggleCursor(); });
    });
  }

  removeHover = () => {
    const links = this._text.querySelectorAll('a');

    forEach(links, item => {
      item.removeEventListener('mouseover', () => { toggleCursor(); }, false);
      item.removeEventListener('mouseleave', () => { toggleCursor(); }, false);
    });
  }

  render() {
    const {
      social: {
        github,
        linkedin,
        instagram,
        twitter,
        email
      },
      pages: {
        about: {
          content,
          image,
          sayhi
        }
      }
    } = this.props.data;

    return (
      <ProfileWrapper ref={ref => this._text = ref}>
        <div className="profile-image"><BackgroundImage src={image} /></div>
        <div className="content-wrapper">
          <div className="content">
            <div className="p-big">
              <div
                dangerouslySetInnerHTML={{
                  __html: content
                }}
              />
              <div className="social">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
              <p className="thanks">
                Designed by&nbsp;
                <a
                  href="http://cris-garcia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cris García
                </a>.
              </p>
            </div>
          </div>
        </div>
        <div
          className="say-hi"
        >
          <div
            className="title2"
            dangerouslySetInnerHTML={{
              __html: sayhi.replace('%link', email)
            }}
          />
        </div>
      </ProfileWrapper>
    );
  }
}

export default withQuery(Profile, GET_PROFILE);
