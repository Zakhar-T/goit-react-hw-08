import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  function handleFilter(name) {
    dispatch(changeFilter(name));
  }

  return (
    <div className={styles.searchBox}>
      <label htmlFor="searchField">Find contacts by name</label>
      <input
        type="text"
        name="searchField"
        value={filter}
        onChange={(evt) => handleFilter(evt.target.value.toLowerCase())}
      />
    </div>
  );
}
