const ShareBtn = (props) => {
  const handleCreateCard = (ev) => {
    props.HandleClickBtnCreateCard(ev);
  };
  let htmlErrorMessage = <p></p>;
  if (props.apiData.success === false) {
    htmlErrorMessage = <p>{props.apiData.error}</p>;
  }
  return (
    <div>
      <div className='container__button '>
        <button className='container__button__btn--card' onClick={handleCreateCard}>
          <i className='far fa-address-card container__button--icon'></i>
          crear tarjeta
        </button>
      </div>
      {htmlErrorMessage}
    </div>
  );
};

export default ShareBtn;
