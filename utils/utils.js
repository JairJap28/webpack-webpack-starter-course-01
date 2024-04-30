const DASHBOARD_PORT = 9000;
const HELLO_WORLD_PORT = 9001;
const SUPER_HERO_PORT = 9002;

const getDomainPath = (port) =>
  `https://webpackwebpackstartercourse01-ciaw--${port}--41fbae16.local-credentialless.webcontainer.io`;

const helloWorldDomain = getDomainPath(HELLO_WORLD_PORT);
const superHeroDomain = getDomainPath(SUPER_HERO_PORT);
const dashboardDomain = getDomainPath(DASHBOARD_PORT);

module.exports = {
  DASHBOARD_PORT,
  HELLO_WORLD_PORT,
  SUPER_HERO_PORT,
  getDomainPath,
  helloWorldDomain,
  superHeroDomain,
  dashboardDomain
}