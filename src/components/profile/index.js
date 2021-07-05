import React from 'react';
import forEach from '@runroom/purejs/lib/forEach';
import gsap from 'gsap';

import withQuery from '../../hocs/withQuery';
import BackgroundImage from '../backgroundImage';
import { toggleCursor } from '../cursor';
import Social from '../social';

import ProfileWrapper from './styles';
import GET_PROFILE from './queries';

class Profile extends React.Component {
  links = null;
  image = null;
  content = null;

  componentDidMount () {
    this.links = document.querySelectorAll('.hover-target a');
    this.image = document.getElementById('image');
    this.content = document.getElementById('content');

    this.triggerHover();
    this.handleScroll();
    document.addEventListener('mousemove', this.handleMouseMove, false);
    document.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount () {
    this.removeHover();
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleMouseMove = event => {
    const tl = gsap.timeline();
    const clientX = event.clientX;
    const clientY = event.clientY;

    tl.to(this.image, { left: clientX, top: clientY });
  }

  handleScroll = () => {
    const { y, height } = this.content.getBoundingClientRect();
    const tl = gsap.timeline();

    if (y + height <= window.innerHeight / 2) tl.to(this.image, { opacity: 0 });
    else tl.to(this.image, { opacity: 1 });
  }

  triggerHover = () => {
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
        <div id="content" className="content-wrapper">
          <div id="image" className="profile-image"><BackgroundImage src={image} /></div>
          <div className="content">
            <div className="p-big">
              <div
                className="hover-target"
                dangerouslySetInnerHTML={{
                  __html: content
                }}
                data-scroll
              />
              <Social
                twitter={twitter}
                github={github}
                linkedin={linkedin}
                instagram={instagram}
              />
              <p
                className="thanks hover-target"
                data-scroll
              >
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
            data-scroll
          />
        </div>
      </ProfileWrapper>
    );
  }
}

export default withQuery(Profile, GET_PROFILE);
