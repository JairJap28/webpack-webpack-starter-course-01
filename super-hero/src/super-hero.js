import Heading from "./components/heading/heading";
import SuperHeroImage from "./components/super-hero-image/super-hero-image";

new Heading().render('Super Hero');
new SuperHeroImage().render()

import('HelloWorldApp/HelloWorldButton')
    .then((HelloWorldButtonModule) => {
        const HelloWorldButton = HelloWorldButtonModule.default;
        const helloWorldButton = new HelloWorldButton();
        helloWorldButton.render();
    })