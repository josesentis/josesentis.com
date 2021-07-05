import gsap from 'gsap';
import forEach from '@runroom/purejs/lib/forEach';
import VirtualScroll from 'virtual-scroll';

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

    this.ease = opts.ease !== undefined ? opts.ease : this.defaults.ease;
    this.header = opts.header !== undefined ? opts.header : this.defaults.header;
    this.progress = opts.progress !== undefined ? opts.progress : this.defaults.progress;
    this.progressId = opts.progressId !== undefined ? opts.progressId : this.defaults.progressId;
    this.elementSelector = opts.elementSelector !== undefined ? opts.elementSelector : this.defaults.elementSelector;

    this.calcDocumentSizes();
    window.addEventListener('resize', () => this.calcDocumentSizes());
  }

  init () {
    this.scrollProgress = document.getElementById(this.progressId);
    this.elements = document.querySelectorAll(this.elementSelector);

    this.scroller = new VirtualScroll();
    this.scroller.on(e => this.scroll(e));

    this.loop();
    this.visibility();
  }

  scroll (e) {
    const newDelta = this.deltaY + e.deltaY;

    console.log('Scroll...', newDelta);
    console.log(this.documentHeight);
    console.log(window.innerHeight);
    // console.log(newDelta <= 0 && newDelta >= -(this.documentHeight - window.innerHeight));

    if (this.lastScroll === newDelta) this.direction = 0;
    else this.direction = this.lastScroll < newDelta ? -1 : 1;

    this.lastScroll = this.deltaY;

    if (
      newDelta <= 0
      // && newDelta >= -(this.documentHeight - window.innerHeight)
    ) this.deltaY = newDelta;
  }

  loop () {
    const tickerFunction = () => {
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

      if (this.progress) this.calcScrollProgress();
    };

    gsap.ticker.add(tickerFunction);
  }

  visibility () {
    const tickerFunction = () => {
      forEach(this.elements, element => {
        const { top, height } = element.getBoundingClientRect();
        const bottom = top + height;

        if (
          (top >= 0 && bottom <= window.innerHeight)
          || (top < 0 && bottom > 0)
          || (top < 1920 && bottom > window.innerHeight)
        ) {
          element.style.visibility = 'visible';
        } else if (element.style.visibility !== 'hidden') {
          element.style.visibility = 'hidden';
        }
      });
    };

    gsap.ticker.add(tickerFunction);
  }

  calcDocumentSizes () {
    const { height: rootHeight } = document.getElementById('root').getBoundingClientRect();
    this.documentHeight = rootHeight;

    console.log('Calc document sizes', rootHeight);
    // const { body, documentElement: html } = document;

    if (this.header) {
      const { height } = document.getElementById('header').getBoundingClientRect();

      this.appendedHeight += height - this.headerHeight;
      this.headerHeight = height;

      root.style.setProperty('--sizer-h', `${this.appendedHeight}px`);
      root.style.setProperty('--header-h', `${this.headerHeight}px`);
    }

    // this.documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
    //   html.clientHeight, html.scrollHeight, html.offsetHeight);
  }

  calcScrollProgress () {
    const progress = Math.abs(this.scrollPosition) / (this.documentHeight - window.innerHeight);
    this.scrollProgress.style.transform = `scale3d(${progress}, 1, 1)`;
  }
}

export default Scroll;
