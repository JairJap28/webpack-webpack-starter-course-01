import superHeroImage from './super-hero.jpg';
import './super-hero-image.css'

class SuperHeroImage {
    render() {
        const img = document.createElement('img');
        img.src = superHeroImage;
        img.alt = 'Super Heros';
        img.classList.add('super-hero-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}

export default SuperHeroImage;