import Icons from './Icons';

const CardPreview = (props) => {
  const handleClickReset = () => {
    props.handleClickReset();
  };

  return (
    <section className="card-preview className">
      <div className="container">
        <button className="reset js_reset" onClick={handleClickReset}>
          <i className="far fa-trash-alt reset__icon"></i>
          Reset
        </button>
        <article className="card">
          <div
            className={`card__decoration card__decoration__palette${props.palette}`}
          ></div>
          <div className="card__info">
            <h3
              className={`card__info--name js_previewName js_previeNameColor namePreview__pallete${props.palette}`}
              data={props.data}
            >
              {props.name || 'Nombre Completo'}
            </h3>

            <p className="card__info--job js_previewJob">
              {props.job || 'Front-End Developer'}
            </p>
          </div>
          <div className="card__img js__profile-image"></div>
          <ul className="card__social ">
            <Icons
              type={props.phone}
              href="tel:+34"
              iconName="fas fa-mobile-alt"
              palette={props.data.palette}
            />
            <Icons
              type={props.palette}
              href="mailto:"
              iconName="far fa-envelope"
              palette={props.data.palette}
            />
            <Icons
              type={props.linkedin}
              href="https://www.linkedin.com/in/"
              iconName="fab fa-linkedin-in"
              palette={props.data.palette}
            />
            <Icons
              type={props.github}
              href="https://github.com/"
              iconName="fab fa-github-alt"
              palette={props.data.palette}
            />
          </ul>
        </article>
      </div>
    </section>
  );
};

export default CardPreview;
