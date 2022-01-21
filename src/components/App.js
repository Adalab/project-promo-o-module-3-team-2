import '../styles/App.scss';
import logo from '../images/logo-awesome-profile-cards.svg';
import { useState, useEffect } from 'react';
import dataApi from '../services/api.js';
import Header from './Header';
import CardPreview from './CardPreview';
import Label from './Label';
import Input from './Input';
import Palettes from './Palettes';
import ls from '../services/localstorage';
import Footer from '../components/Footer';

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

  useEffect(() => {
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
      photo: 'https://www.anipedia.net/imagenes/perros-800x375.jpg',
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
      <main className="card__main">
        <CardPreview
          palette={data.palette}
          name={data.name}
          job={data.job}
          phone={data.phone}
          email={data.email}
          linkedin={data.linkedin}
          github={data.github}
          data={data}
          handleClickReset={handleClickReset}
        />
        <form action='' method='post' className='form'>
          <fieldset className='fieldset__design'>
            <Label title='diseña' icon='far fa-object-ungroup' name='design' />
            <div className='select js_designContainer'>
              <h3 className='select__title'>Colores</h3>
              <div className='select__options'>
                <Palettes number='1' color='cold' data={data.palette} handleInput={handleInput} />
                <Palettes number='2' color='hot' data={data.palette} handleInput={handleInput} />
                <Palettes number='3' color='mix' data={data.palette} handleInput={handleInput} />
              </div>
            </div>
          </fieldset>

          <fieldset className="fieldset__fill">
            <Label title="Rellena" icon="far fa-keyboard" name="fill" />

            {/* js_collapse : para collapsar */}
            <div className='form_container  js_fillContainer'>
              <Input
                labelText='Nombre Completo'
                id='name'
                placeholder='Ej: Amparo Smith'
                pattern='^[a-zA-Z]{1 - 50}$'
                required='required'
                handleInput={handleInput}
                data={data.name}
                type='text'
              />

              <Input
                labelText='Puesto'
                id='job'
                placeholder='Ej: Front-end unicorn'
                pattern='^[a-zA-Z]{1 - 50}$'
                required='required'
                handleInput={handleInput}
                data={data.job}
                type='text'
              />

              <label className="form__label"> Imagen de perfil </label>
              <div className="form__img">
                <label
                  htmlFor="photo"
                  className="button__img js__profile-trigger"
                >
                  Añadir imagen
                </label>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  className="hidden js__profile-upload-btn"
                />
                <div className="form__button--square js__profile-preview"></div>
              </div>

              <Input
                labelText='Email'
                id='email'
                placeholder='Ej:amparo-smith@gmail.com'
                pattern='^[a-zA-Z]{1 - 50}$'
                required='required'
                handleInput={handleInput}
                data={data.email}
                type="text"
              />

              <Input
                labelText='Teléfono'
                id='phone'
                placeholder='Ej: 555-55-55-55'
                pattern='^[a-zA-Z]{1 - 50}$'
                required='required'
                handleInput={handleInput}
                data={data.phone}
                type='tel'
              />

              <Input
                labelText='Linkedin'
                id='linkedin'
                placeholder='Ej: linkedin.com/in/amparo.smith'
                pattern='^[a-zA-Z]{1 - 50}$'
                required='required'
                handleInput={handleInput}
                data={data.linkedin}
                type='text'
              />

              <Input
                labelText='Github'
                id='github'
                placeholder='Ej: @amparo-smith'
                pattern='^[a-zA-Z]{1 - 50}$'
                required='required'
                handleInput={handleInput}
                data={data.github}
                type='text'
              />
            </div>
          </fieldset>

          <fieldset className="fieldset__share">
            <Label title="Comparte" icon="fas fa-share-alt" name="share" />

            <div className="js_shareContainer">
              <div className="container__button ">
                <button
                  className="container__button__btn--card js_create_button"
                  onClick={HandleClickBtnCreateCard}
                >
                  <i className="far fa-address-card container__button--icon"></i>
                  crear tarjeta
                </button>
              </div>
            </div>
          </fieldset>

          <fieldset className="fieldset__share  js_shareCollapse ">
            <div className="container__created">
              <h4 className="container__created--title">
                La tarjeta ha sido creada:
              </h4>
              <a href="" className="container__created--link js_cardURL"></a>
              <a
                href="#"
                className="btn--twitter js_btnTwitter"
                target="_blank"
              ></a>
              <a
                href="#"
                className="container__created--link js_cardURL js_twitterFetch "
                target="_blank"
              ></a>
              <a
                type="submit"
                className="btn--twitter js_btnTwitter "
                target="_blank"
              >
                <i className="fab fa-twitter twitter-icon"></i>Compartir en
                twitter
              </a>
            </div>
          </fieldset>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
