import css from './Output.module.css';

const Output = () => {
  const sortByName = () => {

  };
  const sortByValue = () => {

  };
  const deleteHandler = () => {

  };
  const showXML = () => {

  };

  return (
    <div className={css.main_div}>
      <p className={css.block_caption}>Name/Value Pair List</p>

      <div className={css.input_block}>
        <input
          type="text"
          value=""
          className={css.showInput}
          readOnly={true}
        />

        <div className={css.buttons_block}>
          <button className={css.btn} onClick={sortByName}>Sort by Name</button>
          <button className={css.btn} onClick={sortByValue}>Sort by Value</button>
          <button className={css.btn} onClick={deleteHandler}>Delete</button>
          <button className={css.btn} onClick={showXML}>Show XML</button>
        </div>
      </div>
    </div>
  );
};
export default Output;
