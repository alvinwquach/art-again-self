import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PieceOfArt from './PieceofArt';
// on page load, make a call to the Rijks museum API
// store the data from the API in state
// display the results to the page
// -> image and art piece information

function App() {
  // piece of state to hold our art pieces
  const [art, setArt] = useState([])
  //when the component mounts, call our API
  useEffect(() => {
    // in here we will call our API using axios
    const APIkey = '6GHMDh5H';
    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: 'GET',
      responseType: 'json',
      params: {
        key: APIkey,
        imgonly: true
      }
    })
    .then(response => {
      console.log(response.data.artObjects)
      setArt(response.data.artObjects)
    })
  }, [])

  return (
<div className="App">
      <h1>Look at our art!!</h1>
      {
        // logging out artwork variable to vew it
        art.map(artwork => {
          return(
            <PieceOfArt 
              key={artwork.id}
              alt={artwork.title}
              title={artwork.longTitle}
              imagePath={artwork.webImage.url}
            />
          )
        })
      }
    </div>
  );
}

export default App;
