import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { string, func, arrayOf, shape } from 'prop-types';

const ImageGallery = ({ imgCollection, getModalData }) => {
  const onImageClick = e => {
    const originalImage = e.target.dataset.original;
    const altImage = e.target.alt;
    getModalData(originalImage, altImage);
  };

  return (
    <>
      <ul className={s.imageGallery}>
        {imgCollection.map(({ webformatURL, largeImageURL, tags }, i) => (
          <ImageGalleryItem
            key={i}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            alt={tags}
            onImageClick={onImageClick}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  imgCollection: arrayOf(
    shape({
      webformatURL: string.isRequired,
      largeImageURL: string.isRequired,
      tags: string.isRequired,
    }),
  ).isRequired,
  getModalData: func.isRequired,
};

export default ImageGallery;
