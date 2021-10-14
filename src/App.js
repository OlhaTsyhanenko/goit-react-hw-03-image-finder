import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import * as dataApi from './api';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';


class App extends Component {
  state = {
    data: [],
    showModal: false,
    isLoading: false,
    query: '',
    page: 1,
    largeImage: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchData();
    }
  }

  handleFormSubmit = query => {
    this.setState({
      query,
      page: 1,
      data: []
    });
  }

  fetchData = () => {
    this.setState({ isLoading: true })
    const { query, page } = this.state;
    dataApi
      .fetchData(query, page)
      .then(data => {
        this.setState(state => ({
          data: [...state.data, ...data],
          page: state.page + 1,
        }));
        if (page !== 1) {
          this.scrollOnLoadButton();
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }))
  }
  
  handleGalleryItem = fullImageUrl => {
    this.setState({
      largeImage: fullImageUrl,
      showModal: true,
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImage: '',
    }));
  };

  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };


  render() {
    console.log(this.state.data);
    const {showModal} = this.state;
    const showLoadMore = this.state.data.length > 0 && this.state.data.length >= 12;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery onImageClick={this.handleGalleryItem} data={this.state.data} />
        {showLoadMore && <Button onClick={this.fetchData} />}
        {showModal && <Modal onClose={this.toggleModal} largeImage={this.state.largeImage} />}
        {this.state.isLoading && <Loader />}
        {this.error && <h2>{this.error.message}</h2>}
        <ToastContainer autoClose={2000}/>
    </>  
    )
  }
}

export default App;
