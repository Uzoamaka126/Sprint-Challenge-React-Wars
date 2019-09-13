import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Characters from './components/characters'


const stData = 'https://swapi.co/api/people/';

const WholeApp = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;

`
const Header = styled.div`
  background: #fff;
  width: 60%;
  border-radius: 6px;

  h2 {
    color: peru;
  }

`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starwarsData, setStarwarsData] = useState(null);

  const [error, setError] = useState([]);

  useEffect(() => {
    axios.get(stData)
    .then(res => {
      console.log(res);
      console.log(res.data);

      setStarwarsData(res.data);
    })
    .catch(error => {
      setError(error.message);
    })
  }, []);


  if(starwarsData) {
    return (
      <WholeApp>
        <Header>
          <h2>React Wars!!!</h2>
        </Header>
        <Characters character={starwarsData.results} />
      </WholeApp>
    );
  } else {
    return null;
  }
  // console.log(characters);
}

export default App;
