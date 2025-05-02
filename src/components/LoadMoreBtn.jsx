import css from './LoadMoreBtn.module.css';
import PropTypes from 'prop-types';

export default function LoadMoreBtn({ onClick }) {
    return (
        <div className={css.container}>
            <button onClick={onClick}>
                Load more
            </button>
        </div>
    );
}

LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired
};
