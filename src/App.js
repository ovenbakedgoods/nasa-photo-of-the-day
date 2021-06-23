import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";


function App() {
  const [url, setUrl] = useState("")
  const [date, setDate] = useState("")
  const [title, setTitle] = useState("")
  const [explanation, setExplanation] = useState("")
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
      .then(data => {
        setDate(data.data.date);
        setUrl(data.data.url);
        setTitle(data.data.title);
        setExplanation(data.data.explanation);
        console.log(data.data);
        
      })
      .catch(err => console.log('Error getting details: ', err))
  }, [])
  console.log(url)
  console.log(date)
  console.log(title)
  return (
    <div className="App">
    
      <h1>{title}</h1>
      <h3>Today's Date is {date}</h3>
      <img alt = "NASA daily image " src = {url}></img>
      <p>{explanation}</p>


    </div>
  );
}

export default App;
