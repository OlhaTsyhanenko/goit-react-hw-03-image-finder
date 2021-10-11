import { Component } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(state => ({
            showModal: !state.showModal
        }))
    }

  render() {
    const {showModal} = this.state;
    const {toggleModal} = this;
    return (
      <>
        <button type="button" onClick={toggleModal}>Открыть модалку</button>
        {showModal && <Modal onClose={toggleModal}/> }
    </>  
    )
  }
}

export default App;
