/* eslint-disable no-extra-semi */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"

const App = () => {
  const [ricks, setRicks] = useState([])
  const [searchSingleRick, setSearchSingleRick] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchRickAndMorty(searchSingleRick)
    setSearchSingleRick(0)
  }

  const fetchRickAndMorty = async (id) => {
    try {
      const rick = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      )
      setRicks(rick.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {}, [])

  return (
    <div className="App">
      <div className="App-header">
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="rick"
            value={searchSingleRick}
            onChange={(e) => setSearchSingleRick(e.target.value)}
            placeholder="Enter Rick..."
          />
          <button>Go</button>
        </form>
        <div>
          {ricks && (
            <>
              <div>
                <img src={ricks.image} alt={ricks.name} />
              </div>
              <div>
                <span style={{ color: "blue" }}>{ricks.name}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
