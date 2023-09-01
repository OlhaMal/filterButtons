import css from './Select.module.css';
import { useState } from 'react';
import categories from '../../categories.json';

export const Select = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showList, setShowList] = useState(false);
  console.log(selectedCategory);

  //   const handleSelectChange = event => {
  //     setSelectedCategory(event.target.value);
  //   };

  const handleClearFilter = () => {
    setSelectedCategory('');
  };

  const showDropdown = () => {
    showList ? setShowList(false) : setShowList(true);
  };

  const SelectCategory = cat => {
    setSelectedCategory(cat);
    setShowList(false);
  };
  return (
    <div className={css.select}>
      <div className={css.container}>
        {/* <select value={selectedCategory} onChange={handleSelectChange} className={`${css.selectS} ${selectedCategory ? css.selected : ''}`}>
        {!selectedCategory && (
            <option value="" disabled className={css.notvisibleoption}>
              Список проєктів
            </option>
          )}
          {categories.map(({ category, category_id }) => (
            <option key={category_id} value={category} className={css.optinnn}>
              {category}
            </option>
          ))}
        </select> */}
        {/* {selectedCategory ? (
          <div>
            <h3>{selectedCategory}</h3>
            <button onClick={handleClearFilter} className={css.clear}>Clear Filter</button>
            
          </div>
        ) : (
          <div>
            <h3>Всі проєкти</h3>
          </div>
        )} */}
        <div
          className={`${css.wrapperdropdown} ${showList ? css.active : ''}`}
          onClick={showDropdown}
        >
          {selectedCategory.length === 0 ? (
            <span>Список проєктів</span>
          ) : (
            <span>{selectedCategory}</span>
          )}

          <ul className={css.customselect}>
            {categories.map(({ category, category_id }) => (
              <li
                key={category_id}
                value={category}
                onClick={() => SelectCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {selectedCategory.length === 0 ? (
          <span
            style={{
              marginTop: '50px',
              marginBottom: '50px',
              display: 'block',
            }}
          >
            Всі проєкти
          </span>
        ) : (
          <span
            style={{
              marginTop: '50px',
              marginBottom: '50px',
              display: 'block',
            }}
          >
            {selectedCategory}
          </span>
        )}

        { selectedCategory && <button onClick={handleClearFilter} className={css.clear}>
         Зняти фільтр
        </button>}
      </div>
    </div>
  );
};
