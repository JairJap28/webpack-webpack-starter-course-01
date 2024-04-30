import Heading from "../heading/heading";
import SuperHeroImage from "../super-hero-image/super-hero-image";

class SuperHeroPage {
  render() {
    new Heading().render("Super Hero");
    new SuperHeroImage().render();

    import("HelloWorldApp/HelloWorldButton").then((HelloWorldButtonModule) => {
      const HelloWorldButton = HelloWorldButtonModule.default;
      const helloWorldButton = new HelloWorldButton();
      helloWorldButton.render();
    });
  }
}

export default SuperHeroPage;
