import React from 'react';

const CategoryBar = ({ selectedCategory, filterProjectsByCategory }) => {
  return (
    <div className="category-bar">
      <button 
        onClick={() => filterProjectsByCategory('Tous')} 
        className={selectedCategory === 'Tous' ? 'active' : ''}
      >
        Tous
      </button>
      <button 
        onClick={() => filterProjectsByCategory('HTML/CSS')} 
        className={selectedCategory === 'HTML/CSS' ? 'active' : ''}
      >
        HTML/CSS
      </button>
      <button 
        onClick={() => filterProjectsByCategory('JavaScript')} 
        className={selectedCategory === 'JavaScript' ? 'active' : ''}
      >
        JavaScript
      </button>
      <button 
        onClick={() => filterProjectsByCategory('React')} 
        className={selectedCategory === 'React' ? 'active' : ''}
      >
        React
      </button>
      <button 
        onClick={() => filterProjectsByCategory('SEO')} 
        className={selectedCategory === 'SEO' ? 'active' : ''}
      >
        SEO
      </button>
    </div>
  );
};

export default CategoryBar;
