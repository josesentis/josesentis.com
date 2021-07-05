import gsap from 'gsap';
import forEach from '@runroom/purejs/lib/forEach';
import VirtualScroll from 'virtual-scroll';

import { isNewLocation } from '../utils/history';

const root = document.documentElement;

class Scroll {
  defaults = {
    ease: 0.08,
    header: true,
    progress: true,
    progressId: 'scroll-progress',
    elementSelector: '[data-scroll]'
  }

  constructor(opts = {}) {
    this.deltaY = 0;
    this.direction = 0;
    this.scrollPosition = 0;
    this.appendedHeight = 0;
    this.headerHeight = 0;
    this.scrolling = false;

    this.ease = opts.ease !== undefined ? opts.ease : this.defaults.ease;
    this.header = opts.header !== undefined ? opts.header : this.defaults.header;
    this.progress = opts.progress !== undefined ? opts.progress : this.defaults.progress;
    this.progressId = opts.progressId !== undefined ? opts.progressId : this.defaults.progressId;
    this.elementSelector = opts.elementSelector !== undefined ? opts.elementSelector : this.defaults.elementSelector;
  }

  init () {
    this.scroller = new VirtualScroll();
    this.scroller.on(e => this.scroll(e));

    this.loop();
    this.visibility();
  }

  destroy () {
    this.scroller.off(e => this.scroll(e));
    gsap.ticker.remove(this.loopFunction);
    gsap.ticker.remove(this.visibilityFunction);
  }

  scroll (e) {
    const newDelta = this.deltaY + e.deltaY;

    if (this.lastScroll === newDelta) {
      this.direction = 0;
      this.scrolling = false;
    } else {
      this.direction = this.lastScroll < newDelta ? -1 : 1;
      this.scrolling = true;
    }

    this.lastScroll = this.deltaY;

    if (
      !document.documentElement.classList.contains('no-scroll')
      && newDelta <= 0
      && newDelta >= -(this.documentHeight - window.innerHeight)
    ) this.deltaY = newDelta;
  }

  loop () {
    this.loopFunction = () => {
      this.scrollPosition += (this.deltaY - this.scrollPosition) * this.ease;
      root.style.setProperty('--pos-y', `${this.scrollPosition}px`);

      if (this.scrollPosition < 0) document.documentElement.classList.add('_scrolled');
      else document.documentElement.classList.remove('_scrolled');

      if (this.direction === -1) {
        document.documentElement.classList.add('_scrolled-up');
        document.documentElement.classList.remove('_scrolled-down');
      } else if (this.direction === 1) {
        document.documentElement.classList.remove('_scrolled-up');
        document.documentElement.classList.add('_scrolled-down');
      } else {
        document.documentElement.classList.remove('_scrolled-up');
        document.documentElement.classList.remove('_scrolled-down');
      }

      this.calcDocumentSizes();
    };

    gsap.ticker.add(this.loopFunction);
  }

  visibility () {
    this.visibilityFunction = () => {
      this.elements = document.querySelectorAll(this.elementSelector);

      forEach(this.elements, element => {
        const { top, height } = element.getBoundingClientRect();
        const bottom = top + height;

        if (
          (top >= 0 && bottom <= window.innerHeight)
          || (top < 0 && bottom > 0)
          || (top < window.innerHeight && bottom > window.innerHeight)
        ) {
          element.style.visibility = 'visible';
        } else if (element.style.visibility !== 'hidden') {
          element.style.visibility = 'hidden';
        }
      });
    };

    gsap.ticker.add(this.visibilityFunction);
  }

  calcDocumentSizes () {
    const { body, documentElement: html } = document;

    this.documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
}

export default Scroll;
