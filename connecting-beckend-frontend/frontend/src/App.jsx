import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
   const [jokes, setJokes] = useState([])

   useEffect(() =>{
      axios
      .get('http://localhost:3000/api/jokes')
      .then( (response) => {
        setJokes(response.data)
        // console.log('Jokes fetched', response.data)
      })
      .catch((err) => {
        console.log('Error while fetching jokes', err)
      })
   }, [])
  return (
    <>
      <h1>I am in git</h1>
      <p>JOKES: { jokes.length }</p>

      {
        jokes.map(( joke ) => (
        <div key={ joke.id } >
          <h2>{ joke.title }</h2>
          <p>{ joke.content }</p>

        </div>

        ))
      }
    </>
  )
}

export default App
