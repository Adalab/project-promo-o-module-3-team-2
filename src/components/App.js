import '../styles/App.scss';
import logo from '../images/logo-awesome-profile-cards.svg';
import { useState, useEffect } from 'react';
import dataApi from '../services/api.js';
import Header from './Header';
import CardPreview from './CardPreview';
import ls from '../services/localstorage';
import Footer from './Footer';
import Form from './Form';

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

  //Local Storage:
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

  const handleReset = () => {
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

  const [apiData, setApiData] = useState({
    cardURL: '',
    success: false,
  });

  const HandleClickBtnCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(data).then((data) => {
      console.log(data);
      setApiData(data);
    });
  };

  const [designOpen, setDesignOpen] = useState(true);
  const [fillOpen, setFillOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  function handleClickCollapse(name) {
    if (name === 'design') {
      setDesignOpen(!designOpen);
      setFillOpen(false);
      setShareOpen(false);
    } else if (name === 'fill') {
      setDesignOpen(false);
      setFillOpen(!fillOpen);
      setShareOpen(false);
    } else if (name === 'share') {
      setDesignOpen(false);
      setFillOpen(false);
      setShareOpen(!shareOpen);
    }
  }

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
          data={data}
          handleReset={handleReset}
        />
        <Form
          data={data.palette}
          handleInput={handleInput}
          HandleClickBtnCreateCard={HandleClickBtnCreateCard}
          apiData={apiData}
          handleClickCollapse={handleClickCollapse}
          designOpen={designOpen}
          fillOpen={fillOpen}
          shareOpen={shareOpen}
        />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
