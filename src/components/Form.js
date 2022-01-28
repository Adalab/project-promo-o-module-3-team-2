import Label from './Label';
import Palettes from './Palettes';
import Input from './Input';
import ShareBtn from './ShareBtn';
import ShareUrl from './ShareUrl';

const Form = (props) => {
  return (
    <form action='' method='post' className='form'>
      <fieldset className='fieldset__design'>
        <Label
          title='diseña'
          icon='far fa-object-ungroup'
          name='design'
          handleClickCollapse={props.handleClickCollapse}
          arrow={props.designOpen}
        />
        <div className={`select js_designContainer ${props.designOpen ? '' : 'hidden'}`}>
          <h3 className='select__title'>Colores</h3>
          <div className='select__options'>
            <Palettes
              number='1'
              color='cold'
              data={props.data.palette}
              handleInput={props.handleInput}
            />
            <Palettes
              number='2'
              color='hot'
              data={props.data.palette}
              handleInput={props.handleInput}
            />
            <Palettes
              number='3'
              color='mix'
              data={props.data.palette}
              handleInput={props.handleInput}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className='fieldset__fill'>
        <Label
          title='Rellena'
          icon='far fa-keyboard'
          name='fill'
          handleClickCollapse={props.handleClickCollapse}
          arrow={props.fillOpen}
        />

        <div className={`form_container  ${props.fillOpen ? '' : 'hidden'}`}>
          <Input
            labelText='Nombre Completo'
            id='name'
            placeholder='Ej: Amparo Smith'
            pattern='^[a-zA-Z]{1 - 50}$'
            required='required'
            handleInput={props.handleInput}
            data={props.data.name}
            type='text'
          />

          <Input
            labelText='Puesto'
            id='job'
            placeholder='Ej: Front-end unicorn'
            pattern='^[a-zA-Z]{1 - 50}$'
            required='required'
            handleInput={props.handleInput}
            data={props.data.job}
            type='text'
          />

          <label className='form__label'> Imagen de perfil </label>
          <div className='form__img'>
            <label htmlFor='photo' className='button__img js__profile-trigger'>
              Añadir imagen
            </label>
            <input type='file' name='photo' id='photo' className='hidden js__profile-upload-btn' />
            <div className='form__button--square js__profile-preview'></div>
          </div>

          <Input
            labelText='Email'
            id='email'
            placeholder='Ej:amparo-smith@gmail.com'
            pattern='^[a-zA-Z]{1 - 50}$'
            required='required'
            handleInput={props.handleInput}
            data={props.data.email}
            type='text'
          />

          <Input
            labelText='Teléfono'
            id='phone'
            placeholder='Ej: 555-55-55-55'
            pattern='^[a-zA-Z]{1 - 50}$'
            required='required'
            handleInput={props.handleInput}
            data={props.data.phone}
            type='tel'
          />

          <Input
            labelText='Linkedin'
            id='linkedin'
            placeholder='Ej: linkedin.com/in/amparo.smith'
            pattern='^[a-zA-Z]{1 - 50}$'
            required='required'
            handleInput={props.handleInput}
            data={props.data.linkedin}
            type='text'
          />

          <Input
            labelText='Github'
            id='github'
            placeholder='Ej: @amparo-smith'
            pattern='^[a-zA-Z]{1 - 50}$'
            required='required'
            handleInput={props.handleInput}
            data={props.data.github}
            type='text'
          />
        </div>
      </fieldset>

      <fieldset className='fieldset__share'>
        <Label
          title='Comparte'
          icon='fas fa-share-alt'
          name='share'
          handleClickCollapse={props.handleClickCollapse}
          arrow={props.shareOpen}
        />
        <div className={props.shareOpen ? '' : 'hidden'}>
          <ShareBtn
            HandleClickBtnCreateCard={props.HandleClickBtnCreateCard}
            apiData={props.apiData}
          />

          <ShareUrl apiData={props.apiData} />
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
