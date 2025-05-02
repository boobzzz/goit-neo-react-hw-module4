import css from './SearchBox.module.css';
import PropTypes from 'prop-types';

export default function SearchBox({ onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        onSubmit(form.elements.query.value);

        form.reset();
    }

    return (
        <form
            className={css.form}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
        </form>
    );
}

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired
};
