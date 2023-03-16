import React from 'react';
import './index.scss';

//модальное окно
const Modal = ({open, setOpen, children}) => {
  return (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
      <div className="modal">
        {/*Кнопка закрытия модального окна */}
        <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>  
        {/*Изображение в модальном окне */}
        {children}      
      </div>
    </div>
  )
}

//полная функция открытия модального окна
function App() {
  //состояние открытия модального окна
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      {/*Кнопка открытия модального окна*/}
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        Open window
      </button>
      {/*Само модальное окно с передаваемыми в него props*/}
      <Modal open={open} setOpen={setOpen}>
        {/*Это дочерние элементы в модальном окне*/}
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="something" />
        <h3>This modal window</h3>  
        <button>Cusen</button>
      </Modal>
    </div>
  )
}

export default App;