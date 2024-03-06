import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux toolkit/slices/themeSlice';
import './theme.css'

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleToggleRed = () => {
    dispatch(toggleTheme('dimgray'));
  };

  const handleTogglePurple = () => {
    dispatch(toggleTheme('tealblue'));
  };

  const handleToggleYellow = () => {
    dispatch(toggleTheme('saddlebrown'));
  };

  const handleToggleGray = () => {
    dispatch(toggleTheme('mediumblue'));
  };

  const handleToggleDefault = () => {
    dispatch(toggleTheme('default'))
  }

  return (
    <div className='content'>
      <div className={`container ${theme === 'dark' ? 'dark-theme' : `${theme}-theme`}`}>
        <h2 className="title">Select Theme</h2>
        <div className="theme">
          <button className="theme-button fixed-width dimgray" onClick={handleToggleRed}>
            Dimgray
          </button>

          <button className="theme-button fixed-width tealblue" onClick={handleTogglePurple}>
            Tealblue
          </button>

          <button className="theme-button fixed-width saddlebrown" onClick={handleToggleYellow}>
            Saddlebrown
          </button>

          <button className="theme-button fixed-width mediumblue" onClick={handleToggleGray}>
            Mediumblue
          </button>

          <button className="theme-button fixed-width default" onClick={handleToggleDefault}>
            Default Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Theme;
