import css from './Button.module.css';

export const Button = ({ onNextPage }) => {
  return (
    <button type="button" onClick={() => onNextPage()} className={css.button}>
      Load more
    </button>
  );
};
