import React from 'react';
import { useSelector } from 'react-redux';
import './fav-his.css'

const History = () => {
  const { passwords } = useSelector((state) => state.histories);
  const theme = useSelector((state) => state.theme.theme)

  const copyPassword = (password) => {
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <div className='content'>
      <div className={`container ${theme === 'dark' ? 'dark-theme' : `${theme}-theme`}`}>
        <h2 className="title">Password History</h2>
        <p className='copy'>click to copy</p>
        <div className="list">
          <div className="history">
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

export default History;
