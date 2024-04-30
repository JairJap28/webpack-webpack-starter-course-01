import superHeroImage from './super-hero.jpg';
import './super-hero-image.scss'

class SuperHeroImage {
    render() {
        const img = document.createElement('img');
        img.src = superHeroImage;
        img.alt = 'Super Heros';
        img.classList.add('super-hero-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);

        import('ImageCaptionApp/IamgeCaption').then((ImageCaptionModule) => {
            const ImageCaption = ImageCaptionModule.default;
            new ImageCaption().render('Super Hero - caption')
        })
    }
}

export default SuperHeroImage;