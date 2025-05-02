import css from './Powered.module.css';

export default function Powered() {
    return (
        <div className={css.container}>
            <span>Powered by</span>
            <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
                <svg width="32" height="32">
                    <use href="./unsplash-logo-black.svg#unsplash-logo"></use>
                </svg>
                unsplash
          </a>
      </div>
    );
}