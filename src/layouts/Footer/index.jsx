import logoFooter from 'assets/images/logo-footer.svg'
import Button from 'components/Button';

import { FaFacebookSquare, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

const Footer = (props) => {
   function showAbout() {
     window.scrollTo({
       top: props.refAbout.current.offsetTop,
       behavior: "smooth",
     });
   }

   function showServices() {
     window.scrollTo({
       top: props.refServices.current.offsetTop - 40,
       behavior: "smooth",
     });
   }

       function showProjects() {
         window.scrollTo({
           top: props.refProjects.current.offsetTop - 80,
           behavior: "smooth",
         });
       }

  return (
    <footer>
     <img src={logoFooter} alt="sunnyside logo" className="footer__logo" />
     <ul className="footer__menu">
       <li><Button className="footer__menu__list" type="link" href="/" onClick={showAbout}>About</Button></li>
       <li><Button className="footer__menu__list" type="link" href="/" onClick={showServices}>Services</Button></li>
       <li><Button className="footer__menu__list" type="link" href="/" onClick={showProjects}>Projects</Button></li>
     </ul>
    <div className="footer__social-media">
      <Button className="footer__social-media__icon" type="link" href="/">
        <FaFacebookSquare />
      </Button>
      <Button className="footer__social-media__icon" type="link" href="/">
        <FaInstagram />
      </Button>
      <Button className="footer__social-media__icon" type="link" href="/">
        <FaTwitter />
      </Button>
      <Button className="footer__social-media__icon" type="link" href="/">
        <FaPinterest />
      </Button>
    </div>
    </footer>
  );
};

export default Footer;
