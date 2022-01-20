const ShareBtn = (props) => {
  const handleCreateCard = (ev) => {
    props.HandleClickBtnCreateCard(ev);
  };
  return (
    <div>
      <div className='container__button '>
        <button className='container__button__btn--card' onClick={handleCreateCard}>
          <i className='far fa-address-card container__button--icon'></i>
          crear tarjeta
        </button>
      </div>
    </div>
  );
};

export default ShareBtn;
