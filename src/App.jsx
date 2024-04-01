/* eslint-disable no-extra-semi */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"

const App = () => {
  const [ricks, setRicks] = useState([])

  const fetchRickAndMorty = async (id) => {
    try {
      const rick = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      )
      setRicks(rick.data.name)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchRickAndMorty(2)
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <input type="text" name="rick" placeholder="Enter Rick..." />
          {ricks && <span style={{ color: "blue" }}>{ricks}</span>}

          <button>Go</button>
        </div>
      </div>
    </div>
  )
}

export default App
