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
