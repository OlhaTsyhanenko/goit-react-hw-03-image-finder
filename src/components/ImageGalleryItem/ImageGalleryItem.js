import PropTypes from 'prop-types';
import styles from '../ImageGalleryItem/imageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  const fullImage = () => onImageClick(image.largeImageURL);

  return (
    <li className={styles.imageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        onClick={fullImage}
        className ={styles.imageGalleryItem__image}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  tags: '',
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
  onImageClick: PropTypes.func.isRequired,
};

 export default ImageGalleryItem;

