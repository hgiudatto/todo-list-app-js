/* eslint-disable no-extra-semi */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import { Toaster, toast } from "react-hot-toast"

const App = () => {
  const [ricks, setRicks] = useState([])
  const [searchSingleRick, setSearchSingleRick] = useState("")
  const [found, setFound] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchRickAndMorty(searchSingleRick)
    setSearchSingleRick("")
  }

  const fetchRickAndMorty = async (name) => {
    try {
      const rick = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      )
      setRicks(rick.data.results[0])
      return
    } catch (err) {
      if (err.response.status === 404) {
        console.log("Not found.")
        setFound(false)
        ;() => toast()
        return
      }
    }
  }

  toast("Rick not found.", {
    duration: 4000,
    position: "top-right",
    reverseOrder: true,

    // Styling
    style: {},
    className: "",

    // Custom Icon
    icon: "☹️",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff"
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite"
    }
  })

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
            placeholder="Enter Rick name..."
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
        {!found && <Toaster />}
      </div>
    </div>
  )
}

export default App
