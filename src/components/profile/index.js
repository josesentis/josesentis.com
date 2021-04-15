import React from 'react';
import forEach from '@runroom/purejs/lib/forEach';

import withQuery from '../../hocs/withQuery';
import BackgroundImage from '../backgroundImage';
import { toggleCursor } from '../cursor';
import Social from '../social';

import ProfileWrapper from './styles';
import GET_PROFILE from './queries';

class Profile extends React.Component {
  links = null;
  image = null;

  componentDidMount () {
    this.links = document.querySelectorAll('.hover-target a');
    this.image = document.getElementById('image');

    this.triggerHover();
    // window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount () {
    this.removeHover();
    // window.removeEventListener('scroll', this.onScroll);
  }

  // onScroll = () => {
  //   const { y, height } = this.content.getBoundingClientRect();

  //   if (y + height <= window.innerHeight) this.image.classList.add('fixed');
  //   else this.image.classList.remove('fixed');
  // }

  triggerHover = () => {
    console.log(this.links);
    forEach(this.links, item => {
      item.addEventListener('mouseover', () => { toggleCursor(); });
      item.addEventListener('mouseleave', () => { toggleCursor(); });
    });
  }

  removeHover = () => {
    forEach(this.links, item => {
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
        <div className="content-wrapper">
          <div id="image" className="profile-image"><BackgroundImage src={image} /></div>
          <div className="content">
            <div className="p-big">
              <div
                className="hover-target"
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
              <p className="thanks hover-target">
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
        <div className="say-hi hover-target">
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
