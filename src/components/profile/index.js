import React from 'react';
import forEach from '@runroom/purejs/lib/forEach';

import withQuery from '../../hocs/withQuery';
import BackgroundImage from '../backgroundImage';
import { toggleCursor } from '../cursor';
import Social from '../social';

import ProfileWrapper from './styles';
import GET_PROFILE from './queries';

class Profile extends React.Component {
  mainTag = null;
  content = null;
  image = null;

  componentDidMount () {
    this.mainTag = document.getElementsByTagName('main')[0];
    this.content = document.getElementById('content');
    this.image = document.getElementById('image');

    this.triggerHover();
    this.mainTag.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount () {
    this.removeHover();
    this.mainTag.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const { y, height } = this.content.getBoundingClientRect();

    if (y + height <= window.innerHeight) this.image.classList.add('fixed');
    else this.image.classList.remove('fixed');
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

  render () {
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
        <div id="content" className="content-wrapper">
          <div id="image" className="profile-image"><BackgroundImage src={image} /></div>
          <div className="content">
            <div className="p-big">
              <div
                dangerouslySetInnerHTML={{
                  __html: content
                }}
              />
              <Social
                twitter={twitter}
                github={github}
                linkedin={linkedin}
                instagram={instagram}
              />
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
