import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';

const heading = new Heading();
heading.render('Hello World');

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
