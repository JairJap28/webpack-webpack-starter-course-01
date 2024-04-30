import NavigationBar from './components/navigation-bar/navigation-bar'

const navigationItems = [
  {
    url: '/hello-world-page',
    title: 'Hello World Page'
  },
  {
    url: '/super-hero-page',
    title: 'Super Hero Page'
  }
];

new NavigationBar().render(navigationItems);

const url = window.location.pathname;

if (url === "/hello-world-page") {
  import("HelloWorldApp/HelloWorldPage").then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    new HelloWorldPage().render();
  });
} else if (url === "/super-hero-page") {
  import("SuperHeroApp/SuperHeroPage").then((SuperHeroPageModule) => {
    const SuperHeroPage = SuperHeroPageModule.default;
    new SuperHeroPage().render();
  });
}
