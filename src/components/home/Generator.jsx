import React, { useState } from 'react';
import './Generator.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../redux toolkit/slices/favoritesSlice';
import { addToHistory } from '../redux toolkit/slices/historySlice';
import { nanoid } from 'nanoid';

const Generator = ({ }) => {
  const [password, setPassword] = useState('CLICK GENERATE PASSWORD');
  const [sliderValue, setSliderValue] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [isFavoriteAdded, setIsFavoriteAdded] = useState(false);

  const dispatch = useDispatch();

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?/{}';

    let characters = lowercaseChars;

    if (includeUppercase) characters += uppercaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSymbols) characters += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < sliderValue; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters.charAt(randomIndex);
    }

    setPassword(generatedPassword);

    return generatedPassword;
  };

  const handleGeneratePassword = () => {
    const generatedPassword = generatePassword();
    if (generatedPassword !== password) {
      dispatch(addToHistory({ id: nanoid(), password: generatedPassword }));
    }
    setIsFavoriteAdded(false)
  };

  const handleAddToFavorites = () => {
    // dispatch(addToFavorites({ id: Date.now(), password }));
    dispatch(addToFavorites({ id: nanoid(), password }));
    setIsFavoriteAdded(true);
  };

  const theme = useSelector((state) => state.theme.theme)

  return (
    <>
      <div className="content">
        <div className={`container ${theme === 'dark' ? 'dark-theme' : `${theme}-theme`}`}>
          <h2 className="title">Password Generator</h2>
          <div className="result">
            <div className="result__viewbox">
              {password}
            </div>
          </div>
          <div className="range__slider" data-min="4" data-max="32">
            <div className="length__title field-title" data-length={sliderValue}>
              length:
            </div>
            <input
              id="slider"
              type="range"
              min="4"
              max="32"
              value={sliderValue}
              onChange={(e) => setSliderValue(e.target.value)}
            />
          </div>
          <div className="settings">
            <span className="field-title">settings</span>
            <div className="setting">
              <input
                type="checkbox"
                id="uppercase"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
              />
              <label htmlFor="uppercase">Include Uppercase</label>
            </div>
            <div className="setting">
              <input
                type="checkbox"
                id="lowercase"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
              />
              <label htmlFor="lowercase">Include Lowercase</label>
            </div>
            <div className="setting">
              <input
                type="checkbox"
                id="number"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
              />
              <label htmlFor="number">Include Numbers</label>
            </div>
            <div className="setting">
              <input
                type="checkbox"
                id="symbol"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
              />
              <label htmlFor="symbol">Include Symbols</label>
            </div>
          </div>

          <button className="generate" onClick={handleGeneratePassword}>
            Generate Password
          </button>
        </div>
      </div>

      {password !== 'CLICK GENERATE PASSWORD' && !isFavoriteAdded && (
        <button className="favorite" onClick={handleAddToFavorites}>
          Add to Favorites
        </button>
      )}
    </>
  );
};

export default Generator;
