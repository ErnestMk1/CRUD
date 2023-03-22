import css from './Input.module.css';
import {
  useState,
  useRef,
  useEffect
} from 'react';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const input = useRef<HTMLInputElement | any>();

  const onAddClick = () => {

  };
  const inputHandler = (e: any) => {
    e.preventDefault();
    setInputValue(input.current.value);
  };

  return (
    <div className={css.main_div}>
      <p className={css.block_caption}>Name/Value Pair</p>

      <div className={css.input_block}>
        <input
          type="text"
          placeholder="Name=Value"
          className={css.input}
          value={inputValue}
          onChange={inputHandler}
          ref={input}
        />

        <button
          className={css.add_btn}
          onClick={onAddClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
