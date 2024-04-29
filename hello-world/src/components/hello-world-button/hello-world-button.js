import './hello-world-button.scss';

class HelloWorldButton {
  buttonCssClass = 'hello-world-button';

  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello world';
    button.classList.add(this.buttonCssClass);
    button.onclick = function () {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = 'Hello World';
      paragraph.classList.add('hello-world-text');
      body.appendChild(paragraph);
    };

    const body = document.querySelector('body');
    body.appendChild(button);
  }
}

export default HelloWorldButton;
