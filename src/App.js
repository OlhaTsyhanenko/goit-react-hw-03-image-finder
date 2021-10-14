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
      this.fetchData(false);
    }
  }

  handleFormSubmit = query => {
    this.setState({
      query,
      page: 1,
      data: []
    });
  }

  fetchData = scroll => {
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

  // getData = () => {
    //const keyApi = '23047569-c77e6b9c2c44e7090fa2652c3';
            // this.setState({ loading: true , data: []})
    // fetch(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12 `)
    //   .then(response => {
    //     if (response.ok) {
    //       return response.json();
    //     }
                  
    //     return Promise.reject(
    //       new Error(`Нет запроса для ${this.props.query}`)
    //     );
    //   })
    //   .then(data => this.setState(prevState => ({ data: [...prevState.data, ...data], page: prevState.page + 1 })))
    //             .catch(error => this.setState({error}))
    //           .finally(this.setState({ isLoading: false }));
    
    // if (this.state.page !== 1) {
    //     this.scrollOnLoadButton();
    //   }
    
  // }

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
