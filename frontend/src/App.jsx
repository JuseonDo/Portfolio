import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!data) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="App">
      <Hero contact={data.contact} />
      <About />
      <Publications publications={data.publications} />
      <Experience experiences={data.experiences} education={data.education} />
      <Skills />
      <Contact contact={data.contact} />

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {data.contact?.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
