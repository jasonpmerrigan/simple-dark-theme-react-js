import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';
import { FaSun } from 'react-icons/fa';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Light 🌗 Dark</h1>
          <button className='btn' onClick={toggleTheme}>
            toggle {theme === 'light-theme' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((post) => {
          return <Article key={post.id} {...post} />;
        })}
      </section>
    </main>
  );
}

export default App;
