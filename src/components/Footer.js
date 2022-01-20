const Footer = (props) => {
  return (
    <footer className='footer'>
      <h5 className='footerCopy'>Awesome profile-cards &copy; 2021</h5>
      <img className='imageLogoAdalab' src={props.logo} alt='logo' title='logo' />
    </footer>
  );
};

export default Footer;
