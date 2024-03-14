import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './index.css';

const Homepage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10'
      );
      
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h2>Jokes</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Homepage;