import React from 'react';

import Cheat from './Cheat';

const Category = ({ category }) => (
  <div className="category col s4">
    <span className="category-title">{category.title}</span>
    <div className="category-cheat">
      {
        category.cheats.map(cheat => <Cheat key={cheat._id} cheat={cheat} />)
      }
    </div>
  </div>
);

export default Category;