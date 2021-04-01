import data from '../data/cache';

const stylesArray = [
  "background: #191919",
  "color: #3cea43;",
  "padding: 15px 25px",
  "font-size: 12px;"
].join(';');

const stylesArray2 = [
  "background: #191919",
  "color: #f5f5f5;",
  "padding: 15px",
  "line-height: 25px",
  "font-size: 12px;"
].join(';');

const firmLogger = () => (
  console.log(`%c⚫️ josesentis.com %cthanks for visiting my portfolio website. contact for project inquiries:\n- ${data.social.email}\n - ${data.social.linkedin}\n - ${data.social.instagram}`, stylesArray, stylesArray2)
);

export default firmLogger;