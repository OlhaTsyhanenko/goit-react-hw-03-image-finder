import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../ImageGallery/imageGallery.module.css';

const ImageGallery = ({ data, onImageClick }) => (
  <ul className={styles.ImageGallery}>
    {data.map(image => {
      return (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      );
    })}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;

// export default class ImageGallery extends Component {
//     state = {
//         data: [],
//         page: 1,
//         error: null,
//         loading: false,
//         showModal: false,
//         largeImage: ''

//     };

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.query !== this.props.query) {
//             console.log('New query');
//             console.log(prevProps.query);
//             console.log(this.props.query);
//             const keyApi = '23047569-c77e6b9c2c44e7090fa2652c3';
//             this.setState({ loading: true , data: null})
//             fetch(`https://pixabay.com/api/?q=${this.props.query}&page=1&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12 `)
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json();
//                     }

//                     return Promise.reject(
//                         new Error(`Нет запроса для ${this.props.query}`)
//                     );
//                 })
//                 .then(data => this.setState(prevState => ({ data: [...prevState.data.hits, ...data.hits], page: prevState.page + 1})))
//                 .catch(error => this.setState({error}))
//                 .finally(this.setState({ loading: false }));
            
//         }

        
//     }

    

   

  

//     render() {
//         const { data } = this.state;
//         console.log(data);
//         return (            
//             <ul className="ImageGallery">
//                 {this.error && <h2>{this.error.message}</h2>}
//                 {this.props.loading && <div>Loading...</div>}    
//                 {!this.props.query && <div>Enter your query</div>}
//                 {this.state.data && <ImageGalleryItem data={data} />}
//             </ul>
//         )
//     }
// }