import css from './ImageCard.module.css';
import PropTypes from 'prop-types';

export default function ImageCard({ preview, original, description }) {
    return (
        <div className={css.container}>
            <img src={preview} alt={description} />
        </div>
    );
}

ImageCard.propTypes = {
    preview: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
