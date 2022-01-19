const Header = (props) => {
  return (
    <header className='header__card'>
      <a href='./index.html'>
        <img className='header__card--logo' src={props.img} alt='logo-awesome' />
      </a>
    </header>
  );
};

export default Header;
