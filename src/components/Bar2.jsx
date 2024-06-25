import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faCaretUp,faCaretDown,faSearch } from '@fortawesome/free-solid-svg-icons';
import './Bar2.css';

const Bar2 = ({ onCategoryClick, onOptionSelect, categories = [], options = ['Following','Popular','News&Noteworthy'], selectedCategory, selectedOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [selected, setSelected] = useState('Following');
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setIsDropdownOpen(true);
  };

  return (
    <div className="bar2-container">
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selected} <span className="arrow">{isDropdownOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}</span>
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              className={`dropdown-item ${option === selected ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
   
    
      {categories.map(category => (
        <button
          key={category}
          className={`bar2-new ${category === selectedCategory ? 'selected' : ''}`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
       <div className="bar2-right">
        <button className="bar2-button">
          <FontAwesomeIcon icon={faBars} className="bar2-button-icon" /> Filters
        </button>
      </div>

      
    </div>
  );
};

export default Bar2;



