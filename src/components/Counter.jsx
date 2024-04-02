import { useState, useEffect } from "react"

const Counter = () => {
  const [data, setData] = useState({ count: 0 })

  const onIncrement = () => {
    setData({ count: data.count + 1 })
  }

  useEffect(() => console.log(`New count! ${data.count}`), [data])

  return (
    <button
      onClick={onIncrement}
      className="px-4 py-2 rounded-full bg-slate-800 text-white border-2"
    >
      Increment {data.count}
    </button>
  )
}

export default Counter
