import '../styles/App.scss';
import logo from '../images/logo-awesome-profile-cards.svg';
import logoFooter from '../images/marilogo.svg';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    palette: 1,
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: null,
  });

  const handleInput = (ev) => {
    const inputChanged = ev.currentTarget.name;
    if (inputChanged === 'name') {
      setData({
        ...data,
        name: ev.currentTarget.value,
      });
    } else if (inputChanged === 'job') {
      setData({
        ...data,
        job: ev.currentTarget.value,
      });
    } else if (inputChanged === 'email') {
      setData({
        ...data,
        email: ev.currentTarget.value,
      });
    } else if (inputChanged === 'phone') {
      setData({
        ...data,
        phone: ev.currentTarget.value,
      });
    } else if (inputChanged === 'linkedin') {
      setData({
        ...data,
        linkedin: ev.currentTarget.value,
      });
    } else if (inputChanged === 'github') {
      setData({
        ...data,
        github: ev.currentTarget.value,
      });
    }
  };

  const handleClickPalette = (ev) => {
    const radioChecked = ev.currentTarget.value;
    console.log(radioChecked);
    if (radioChecked === 1) {
    } else if (radioChecked === 2) {
    } else if (radioChecked === 3) {
    }
  };

  return (
    <div>
      <header className="header__card">
        <a href="./index.html">
          <img className="header__card--logo" src={logo} alt="logo-awesome" />
        </a>
      </header>
      <main className="card__main">
        <section className="card-preview className">
          <div className="container">
            <button className="reset js_reset">
              <i className="far fa-trash-alt reset__icon"></i>
              Reset
            </button>
            <article className="card">
              <div className="card__decoration card__decoration__palette1"></div>
              <div className="card__info">
                <h3 className="card__info--name js_previewName js_previeNameColor">
                  {data.name || 'Nombre Completo'}
                </h3>

                <p className="card__info--job js_previewJob">
                  {data.job || 'Front-End Developer'}
                </p>
              </div>
              <div className="card__img js__profile-image"></div>
              <ul className="card__social">
                <li className="card__social--icon js_icon_border">
                  <a
                    className="js_previewPhone"
                    href={data.phone === '' ? '#' : `tel:+34${data.phone}`}
                  >
                    <i className="fas fa-mobile-alt js_icon_image"></i>
                  </a>
                </li>
                <li className="card__social--icon js_icon_border">
                  <a
                    className="js_previewEmail"
                    href={data.email === '' ? '#' : `mailto:${data.email}`}
                  >
                    <i className="far fa-envelope js_icon_image"></i>
                  </a>
                </li>
                <li className="card__social--icon js_icon_border">
                  <a
                    className="js_previewLinkedin"
                    href={
                      data.linkedin === ''
                        ? '#'
                        : `https://www.linkedin.com/in/${data.linkedin}`
                    }
                  >
                    <i className="fab fa-linkedin-in js_icon_image"></i>
                  </a>
                </li>
                <li className="card__social--icon js_icon_border">
                  <a
                    className="js_previewGithub"
                    href={
                      data.github === ''
                        ? '#'
                        : `https://github.com/${data.github}`
                    }
                  >
                    <i className="fab fa-github-alt js_icon_image"></i>
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>
        <form action="" method="post" className="form">
          <fieldset className="fieldset__design">
            <div className="container__design js_designHeader">
              <i
                className="far fa-object-ungroup container__design--icon"
                alt="design"
              ></i>
              <h3 className="container__design--title">diseña</h3>
              <i className="fas fa-chevron-up container__design--iconArrow js_arrowDesign"></i>
            </div>
            <div className="select js_designContainer">
              <h3 className="select__title">Colores</h3>
              <div className="select__options">
                <label
                  htmlFor="optioncolor1"
                  className="select__options--palette"
                >
                  <input
                    onClick={handleClickPalette}
                    type="radio"
                    value="1"
                    name="palette"
                    className="select__options--input js_palette js_palette_1"
                    defaultChecked
                  />
                  <div className="palette palette__cold1"></div>
                  <div className="palette palette__cold2"></div>
                  <div className="palette palette__cold3"></div>
                </label>
                <label
                  htmlFor="optioncolor2"
                  className="select__options--palette"
                >
                  <input
                    onClick={handleClickPalette}
                    type="radio"
                    value="2"
                    name="palette"
                    className="select__options--input js_palette"
                  />
                  <div className="palette palette__hot1"></div>
                  <div className="palette palette__hot2"></div>
                  <div className="palette palette__hot3"></div>
                </label>
                <label
                  htmlFor="optioncolor3"
                  className="select__options--palette"
                >
                  <input
                    onClick={handleClickPalette}
                    type="radio"
                    value="3"
                    name="palette"
                    className="select__options--input js_palette"
                  />
                  <div className="palette palette__mix1"></div>
                  <div className="palette palette__mix2"></div>
                  <div className="palette palette__mix3"></div>
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset className="fieldset__fill">
            <div className="container__fill js_formHeader">
              <div className="container__fill--icon">
                <i className="far fa-keyboard" alt="Fill"></i>
                <h3 className="container__fill--title">Rellena</h3>
              </div>
              <i
                className="
                  fas
                  fa-chevron-up
                  container__fill--iconArrow
                  js_arrowFill js_arrowRotate
                "
              ></i>
            </div>

            {/* js_collapse : para collapsar */}
            <div className="form_container  js_fillContainer">
              <label className="form__label" htmlFor="name">
                Nombre completo
              </label>
              <input
                onChange={handleInput}
                className="form__input js_inputName js_allInputs"
                type="text"
                id="name"
                name="name"
                placeholder="Ej: Amparo Smith"
                pattern="^[a-zA-Z]{1-50}$"
                required
              />

              <label className="form__label" htmlFor="job">
                Puesto
              </label>
              <input
                onChange={handleInput}
                className="form__input js_inputJob js_allInputs"
                type="text"
                id="job"
                name="job"
                placeholder="Ej: Front-end unicorn"
                pattern="^[a-zA-Z]{1-50}$"
                required
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

              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input
                onChange={handleInput}
                className="form__input js_inputMail js_allInputs"
                type="email"
                id="email"
                name="email"
                placeholder="Ej: amparo-smith@gmail.com"
                pattern="^[a-zA-Z]{1-50}$"
                required
              />

              <label className="form__label" htmlFor="phone">
                Teléfono
              </label>
              <input
                onChange={handleInput}
                className="form__input js_inputPhone js_allInputs"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ej: 555-55-55-55"
              />

              <label className="form__label" htmlFor="linkedin">
                Linkedin
              </label>
              <input
                onChange={handleInput}
                className="form__input js_inputLinkedin js_allInputs"
                type="text"
                id="linkedin"
                name="linkedin"
                placeholder="Ej: linkedin.com/in/amparo.smith"
                pattern="^[a-zA-Z]{1-50}$"
                required
              />

              <label className="form__label" htmlFor="github">
                Github
              </label>
              <input
                onChange={handleInput}
                className="form__input github js_inputGithub js_allInputs"
                type="text"
                id="github"
                name="github"
                placeholder="Ej: @amparo-smith"
                pattern="^[a-zA-Z]{1-50}$"
                required
              />
            </div>
          </fieldset>

          <fieldset className="fieldset__share">
            <div className="container__share js_shareHeader">
              <div className="container__share--icon">
                <i className="fas fa-share-alt" alt="Share"></i>
                <h3 className="container__share--title">Comparte</h3>
              </div>
              <i
                className="fas fa-chevron-up js_arrowShare container__share--iconArrow
                  arrowShare js_arrowRotate"
              ></i>
            </div>
            <div className="js_collapsed js_shareContainer">
              <div className="container__button js_collapsed">
                <button className="container__button__btn--card js_create_button">
                  <i className="far fa-address-card container__button--icon"></i>
                  crear tarjeta
                </button>
              </div>
            </div>
          </fieldset>

          <fieldset className="fieldset__share js_collapsed js_shareCollapse ">
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
                className="btn--twitter js_btnTwitter js_collapsed"
                target="_blank"
              >
                <i className="fab fa-twitter twitter-icon"></i>Compartir en
                twitter
              </a>
            </div>
          </fieldset>
        </form>
      </main>
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
    </div>
  );
}

export default App;
