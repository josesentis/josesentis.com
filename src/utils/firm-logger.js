import data from '../data/cache';

const stylesArray = [
  "background: #191919",
  "color: #3cea43;",
  "padding: 15px 10px",
  "font-size: 12px;"
].join(';');

const stylesArray2 = [
  "background: #191919",
  "color: #f5f5f5;",
  "padding: 15px 10px",
  "line-height: 22px",
  "font-size: 12px;"
].join(';');

const firmLogger = () => (
  console.log(`%cDeveloped by josesentis.com%cThanks for visiting my portfolio website. Contact for project inquiries:\n- ${data.social.email}\n- ${data.social.linkedin}\n- ${data.social.instagram}`, stylesArray, stylesArray2)
);

export default firmLogger;