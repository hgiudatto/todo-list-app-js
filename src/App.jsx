/* eslint-disable no-extra-semi */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import "./App.css"
import { Toaster, toast } from "react-hot-toast"
import http from "./httpService"

const App = () => {
  const [ricks, setRicks] = useState([])
  const [searchSingleRick, setSearchSingleRick] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    getRickAndMorty(searchSingleRick)
    setSearchSingleRick("")
  }

  const getRickAndMorty = async (name) => {
    try {
      const resp = await http.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      )
      setRicks(resp.data.results[0])
      toast.success("Rick Found!!", {
        icon: "😀",
        duration: 5000,
        iconTheme: {
          primary: "#000",
          secondary: "#fff"
        },
        ariaProps: {
          role: "status",
          "aria-live": "polite"
        },
        style: {},
        className: ""
      })
    } catch (err) {
      setRicks([])
      toast.error(err.response.data.error, {
        icon: "☹️",
        duration: 5000,
        iconTheme: {
          primary: "#000",
          secondary: "#fff"
        },
        ariaProps: {
          role: "status",
          "aria-live": "polite"
        },
        style: {},
        className: ""
      })
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
        <div>
          <Toaster position="top-left" reverseOrder={true} />
        </div>
      </div>
    </div>
  )
}

export default App
