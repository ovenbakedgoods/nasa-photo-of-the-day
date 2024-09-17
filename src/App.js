import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";
import ShowDate from "./Date"
import ShowTitle from "./Title"
import ShowImage from "./NasaPic"
import ShowExplanation from './Explanation';

function App() {
  const [url, setUrl] = useState("")
  const [date, setDate] = useState("")
  const [title, setTitle] = useState("")
  const [explanation, setExplanation] = useState("")
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=bydNdCSGbfz2MqBGNGFxlmPJhepfwkap0cgXSCEm&date=2021-06-13`)
      .then(data => {
        setDate(data.data.date);
        setUrl(data.data.url);
        setTitle(data.data.title);
        setExplanation(data.data.explanation);
        
      })
      .catch(err => console.log('Error getting details: ', err))
  }, [])
 
  return (
    <div className="App">
    
      <ShowTitle title={title}/>
      <ShowDate date={date} />
      <ShowImage url={url} />
      <ShowExplanation explanation={explanation}/>
    </div>
  );
}

export default App;
