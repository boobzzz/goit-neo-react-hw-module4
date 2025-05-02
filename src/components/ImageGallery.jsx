import ImageCard from './ImageCard.jsx';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ images }) {
    return (
        <section>
            <ul className={css.list}>
                {images.map(({ id, description, urls }) => (
                    <li key={id}>
                        <ImageCard
                            preview={urls.small}
                            original={urls.regular}
                            description={description}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
        urls: PropTypes.shape({
            small: PropTypes.string,
            regular: PropTypes.string
        }),
    })).isRequired
};
