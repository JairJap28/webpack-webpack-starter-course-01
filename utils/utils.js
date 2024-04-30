const DASHBOARD_PORT = 9000;
const HELLO_WORLD_PORT = 9001;
const SUPER_HERO_PORT = 9002;
const IMAGE_CAPTION_PORT = 9003;

const getDomainPath = (port) =>
  `https://webpackwebpackstartercourse01-ciaw--${port}--41fbae16.local-credentialless.webcontainer.io`;

const dashboardDomain = getDomainPath(DASHBOARD_PORT);
const helloWorldDomain = getDomainPath(HELLO_WORLD_PORT);
const superHeroDomain = getDomainPath(SUPER_HERO_PORT);
const imageCaptionDomain = getDomainPath(IMAGE_CAPTION_PORT);

module.exports = {
  DASHBOARD_PORT,
  HELLO_WORLD_PORT,
  SUPER_HERO_PORT,
  IMAGE_CAPTION_PORT,
  getDomainPath,
  dashboardDomain,
  helloWorldDomain,
  superHeroDomain,
  imageCaptionDomain
}