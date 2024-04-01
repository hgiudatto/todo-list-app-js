/* eslint-disable no-extra-semi */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"

const App = () => {
  const [rickSanchezDetails, setRickSanchezDetails] = useState()

  const rickSanchez = async () => {
    try {
      const rickAndMortysDetail = await axios.get(
        `https://rickandmortyapi.com/api/character`
      )
      console.log(rickAndMortysDetail.data.results[0])
      setRickSanchezDetails(rickAndMortysDetail.data.results[0])
    } catch (err) {
      console.log(`Oops... an error occurred: ${err}`)
    }
  }

  useEffect(() => {
    rickSanchez()
  }, [])

  return (
    <div className="App">
      <img src={rickSanchezDetails.image} alt="" />
    </div>
  )
}

export default App
