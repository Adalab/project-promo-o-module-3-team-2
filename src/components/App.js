import '../styles/App.scss';
import logo from '../images/logo-awesome-profile-cards.svg';
import logoFooter from '../images/marilogo.svg';
import { useEffect, useState } from 'react';
import dataApi from '../services/api.js';
import Header from './Header';
import CardPreview from './CardPreview';
import Label from './Label';
import ls from '../services/localStorage';

function App() {
  const [data, setData] = useState(
    ls.get('dataLS', {
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: 'https://www.anipedia.net/imagenes/perros-800x375.jpg',
    })
  );

  //<----------------Local Storage----------------->
  useEffect(() => {
    // Guardamos el nombre y el email en el local storage
    ls.set('dataLS', data);
  }, [data]);

  const [collapsable, setCollapsable] = useState(true);

  const handleInput = (ev) => {
    const inputChanged = ev.currentTarget.name;
    setData({
      ...data,
      [inputChanged]: ev.currentTarget.value,
    });
  };

  const handleClickReset = () => {
    setData({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: null,
    });
  };

  const [cardUrl, setCardUrl] = useState({});

  const HandleClickBtnCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(data).then((data) => {
      console.log(data);
      setCardUrl(data);
    });
  };

  return (
    <div>
      <Header img={logo} />
      <main className='card__main'>
        <CardPreview
          palette={data.palette}
          name={data.name}
          job={data.job}
          phone={data.phone}
          email={data.email}
          linkedin={data.linkedin}
          github={data.github}
        />
        <form action='' method='post' className='form'>
          <fieldset className='fieldset__design'>
            <Label title='diseña' icon='far fa-object-ungroup' name='design' />
            <div className='select js_designContainer'>
              <h3 className='select__title'>Colores</h3>
              <div className='select__options'>
                <label htmlFor='optioncolor1' className='select__options--palette'>
                  <input
                    onChange={handleInput}
                    type='radio'
                    value='1'
                    name='palette'
                    className='select__options--input js_palette js_palette_1'
                    checked={data.palette === '1'}
                  />
                  <div className='palette palette__cold1'></div>
                  <div className='palette palette__cold2'></div>
                  <div className='palette palette__cold3'></div>
                </label>
                <label htmlFor='optioncolor2' className='select__options--palette'>
                  <input
                    onChange={handleInput}
                    type='radio'
                    value='2'
                    name='palette'
                    className='select__options--input js_palette'
                    checked={data.palette === '2'}
                  />
                  <div className='palette palette__hot1'></div>
                  <div className='palette palette__hot2'></div>
                  <div className='palette palette__hot3'></div>
                </label>
                <label htmlFor='optioncolor3' className='select__options--palette'>
                  <input
                    onChange={handleInput}
                    type='radio'
                    value='3'
                    name='palette'
                    className='select__options--input js_palette'
                    checked={data.palette === '3'}
                  />
                  <div className='palette palette__mix1'></div>
                  <div className='palette palette__mix2'></div>
                  <div className='palette palette__mix3'></div>
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset className='fieldset__fill'>
            <Label title='Rellena' icon='far fa-keyboard' name='fill' />

            {/* js_collapse : para collapsar */}
            <div className='form_container  js_fillContainer'>
              <label className='form__label' htmlFor='name'>
                Nombre completo
              </label>
              <input
                onChange={handleInput}
                value={data.name}
                className='form__input js_inputName js_allInputs'
                type='text'
                id='name'
                name='name'
                placeholder='Ej: Amparo Smith'
                pattern='^[a-zA-Z]{1-50}$'
                required
              />

              <label className='form__label' htmlFor='job'>
                Puesto
              </label>
              <input
                onChange={handleInput}
                value={data.job}
                className='form__input js_inputJob js_allInputs'
                type='text'
                id='job'
                name='job'
                placeholder='Ej: Front-end unicorn'
                pattern='^[a-zA-Z]{1-50}$'
                required
              />

              <label className='form__label'> Imagen de perfil </label>
              <div className='form__img'>
                <label htmlFor='photo' className='button__img js__profile-trigger'>
                  Añadir imagen
                </label>
                <input
                  type='file'
                  name='photo'
                  id='photo'
                  className='hidden js__profile-upload-btn'
                />
                <div className='form__button--square js__profile-preview'></div>
              </div>

              <label className='form__label' htmlFor='email'>
                Email
              </label>
              <input
                onChange={handleInput}
                value={data.email}
                className='form__input js_inputMail js_allInputs'
                type='email'
                id='email'
                name='email'
                placeholder='Ej: amparo-smith@gmail.com'
                pattern='^[a-zA-Z]{1-50}$'
                required
              />

              <label className='form__label' htmlFor='phone'>
                Teléfono
              </label>
              <input
                onChange={handleInput}
                value={data.phone}
                className='form__input js_inputPhone js_allInputs'
                type='tel'
                id='phone'
                name='phone'
                placeholder='Ej: 555-55-55-55'
              />

              <label className='form__label' htmlFor='linkedin'>
                Linkedin
              </label>
              <input
                onChange={handleInput}
                value={data.linkedin}
                className='form__input js_inputLinkedin js_allInputs'
                type='text'
                id='linkedin'
                name='linkedin'
                placeholder='Ej: linkedin.com/in/amparo.smith'
                pattern='^[a-zA-Z]{1-50}$'
                required
              />

              <label className='form__label' htmlFor='github'>
                Github
              </label>
              <input
                onChange={handleInput}
                value={data.github}
                className='form__input github js_inputGithub js_allInputs'
                type='text'
                id='github'
                name='github'
                placeholder='Ej: @amparo-smith'
                pattern='^[a-zA-Z]{1-50}$'
                required
              />
            </div>
          </fieldset>

          <fieldset className='fieldset__share'>
            <Label title='Comparte' icon='fas fa-share-alt' name='share' />

            <div className='js_shareContainer'>
              <div className='container__button '>
                <button
                  className='container__button__btn--card js_create_button'
                  onClick={HandleClickBtnCreateCard}
                >
                  <i className='far fa-address-card container__button--icon'></i>
                  crear tarjeta
                </button>
              </div>
            </div>
          </fieldset>

          <fieldset className='fieldset__share  js_shareCollapse '>
            <div className='container__created'>
              <h4 className='container__created--title'>La tarjeta ha sido creada:</h4>
              <a href='' className='container__created--link js_cardURL'></a>
              <a href='#' className='btn--twitter js_btnTwitter' target='_blank'></a>
              <a
                href='#'
                className='container__created--link js_cardURL js_twitterFetch '
                target='_blank'
              ></a>
              <a type='submit' className='btn--twitter js_btnTwitter ' target='_blank'>
                <i className='fab fa-twitter twitter-icon'></i>Compartir en twitter
              </a>
            </div>
          </fieldset>
        </form>
      </main>
      <footer className='footer'>
        <h5 className='footerCopy'>Awesome profile-cards &copy; 2021</h5>

        <a href='#' target='_blank'>
          <img className='imageLogoAdalab' src={logoFooter} alt='logo' title='logo' />
        </a>
      </footer>
    </div>
  );
}

export default App;
