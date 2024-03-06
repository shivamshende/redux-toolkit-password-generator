import React from 'react';
import { useSelector } from 'react-redux';
import './fav-his.css'

const Favorites = () => {
  const theme = useSelector((state) => state.theme.theme);
  const { passwords } = useSelector((state) => state.favorites);

  const copyPassword = (password) => {
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <div className="content">
      <div className={`container ${theme === 'dark' ? 'dark-theme' : `${theme}-theme`}`}>
        <h2 className="title">Favorite Passwords</h2>
        <p className='copy'>click to copy</p>
        <div className="list">
          <div className="favorites">
            {passwords.map((item, index) => (
              <div key={index} className="content-item" onClick={() => copyPassword(item.password)}>
                {item.password}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;