import Modal from 'react-modal';
import css from './ImageModal.module.css';
import PropTypes from 'prop-types';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    content: {
        padding: '0',
        border: 'none',
        overflow: 'none'
    }
}

export default function ImageModal({ isOpen, closeModal, image }) {
    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Gallery modal"
        >
            {image &&
                <div className={css.container}>
                    <img
                        src={image.urls.regular}
                        alt={image.description}
                    />
                    <div className={css.info}>
                        <p className={css.desc}>{image.description ?? 'Title unknown'}</p>
                        <p className={css.name}>Author: {image.user.name}</p>
                    </div>
                </div>
            }
        </Modal>
    );
}

ImageModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    image: PropTypes.shape({
        description: PropTypes.string,
        user: PropTypes.shape({
            name: PropTypes.string,
        }),
        urls: PropTypes.shape({
            regular: PropTypes.string,
        }),
    }).isRequired
};
