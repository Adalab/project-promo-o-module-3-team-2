import './styles/components/Footer.scss';
import '../styles/core/Variables.scss';
import logoFooter from '../images/marilogo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <h5 className="footerCopy">Awesome profile-cards &copy; 2021</h5>

      <a href="#" target="_blank">
        <img
          className="imageLogoAdalab"
          src={logoFooter}
          alt="logo"
          title="logo"
        />
      </a>
    </footer>
  );
};

export default Footer;
