import css from './ImageCard.module.css';
import PropTypes from 'prop-types';

export default function ImageCard({ id, preview, description, openModal }) {
    const handleClick = () => {
        openModal(id);
    }

    return (
        <div className={css.container} onClick={handleClick}>
            <img src={preview} alt={description} />
        </div>
    );
}

ImageCard.propTypes = {
    id: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired
};
