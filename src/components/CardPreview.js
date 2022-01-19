import Icons from './Icons';

const CardPreview = (props) => {
  return (
    <section className='card-preview className'>
      <div className='container'>
        <button className='reset js_reset' /*</div>onClick={handleClickReset}*/>
          <i className='far fa-trash-alt reset__icon'></i>
          Reset
        </button>
        <article className='card'>
          <div className={`card__decoration card__decoration__palette${props.palette}`}></div>
          <div className='card__info'>
            <h3
              className={`card__info--name js_previewName js_previeNameColor namePreview__pallete${props.palette}`}
            >
              {props.name || 'Nombre Completo'}
            </h3>

            <p className='card__info--job js_previewJob'>{props.job || 'Front-End Developer'}</p>
          </div>
          <div className='card__img js__profile-image'></div>
          <ul className='card__social '>
            <Icons type={props.phone} href='tel:+34' iconName='fas fa-mobile-alt' />
            <Icons type={props.palette} href='mailto:' iconName='far fa-envelope' />
            <Icons
              type={props.linkedin}
              href='https://www.linkedin.com/in/'
              iconName='fab fa-linkedin-in'
            />
            <Icons type={props.github} href='https://github.com/' iconName='fab fa-github-alt' />

            {/* <li
              className={`card__social--icon social__icon__palette${props.palette} js_icon_border`}
            >
              <a
                className='js_previewLinkedin'
                href={props.linkedin === '' ? '#' : `https://www.linkedin.com/in/${props.linkedin}`}
              >
                <i
                  className={` js_icon_image icon_image__pallete${props.palette}`}
                ></i>
              </a>
            </li> */}
            {/* <li
              className={`card__social--icon social__icon__palette${props.palette} js_icon_border`}
            >
              <a
                className='js_previewGithub'
                href={props.github === '' ? '#' : `https://github.com/${props.github}`}
              >
                <i className={` js_icon_image icon_image__pallete${props.palette}`}></i>
              </a>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default CardPreview;
