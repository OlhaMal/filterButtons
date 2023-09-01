import css from './Dropdown.module.css';
import { useState } from 'react';
import categories from '../../categories.json';

export const Dropdown = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [showList, setShowList] = useState(false);

  const handleClick = categ => {
    if (activeCategories.includes(categ)) {
      setActiveCategories(activeCategories.filter(cat => cat !== categ));
      setCategory(null);
      setShowList(false)
    } else {
      setActiveCategories([categ]);
      setCategory(categ);
      setShowList(false)
    }
  };

  const clearAll = () => {
    setActiveCategories([]);
    setCategory(null);
  };

  const showDropdown = () => {
    showList ? setShowList(false) : setShowList(true);
  };

  return (
    <div className={css.dropdown}>
      <div className={css.container}>
          <button type="button" className={css.title} onClick={showDropdown}>
            Список проєктів
          </button>
          <div className={css.dropdownlist}>
          <ul className={`${showList ? css.visible : css.hidden} ${css.list}`}>
            <li
              className={`${css.filter} ${
                activeCategories.length === 0 ? css.active : ''
              }`}
              onClick={clearAll}
            >
              Всі категорії
            </li>
            {categories.map(({ category, category_id }) => (
              <li
                key={category_id}
                className={`${css.filter} ${
                  activeCategories.includes(category) ? css.active : ''
                }`}
                onClick={() => handleClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
          </div>
          <div>{category ? <h3>{category}</h3> : <h3>Всі проєкти</h3>}</div>
      </div>
    </div>
  );
};
