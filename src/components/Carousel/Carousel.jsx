import css from './Carousel.module.css';
import { useState } from 'react';
import categories from '../../categories.json';
import { Tabs, Tab } from 'react-tabs-scrollable';
import 'react-tabs-scrollable/dist/rts.css';

export const Carousel = () => {
  const [activeTab, setActiveTab] = useState(30);
  console.log(activeTab)

  const handleTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };

  const clearActiveTab = () => {
    setActiveTab(30); // Clear active tab by setting it to null
  };
  return (
    <div className={css.carousel}>
      <div className={css.container}>
        {/* <div className={css.tabContainer}>
          {categories.map(({ category, category_id }) => (
            <div
              key={category_id}
              className={`${css.item} ${
                activeTab === category ? css.active : ''
              }`}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </div>
          ))}
        </div> */}
        <Tabs
          activeTab={activeTab}
          onTabClick={handleTabClick}
        >
          {categories.map(({ category, category_id }) => (
            <Tab key={category_id} className={css.tabsing}>Tab {category}</Tab>
          ))}
        </Tabs>
        <button onClick={clearActiveTab} className={css.clearButt}>Clear Active Tab</button>
      </div>
    </div>
  );
};
