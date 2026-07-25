import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("white")
  return (
    <>

      <div className='w-full h-screen flex flex-col justify-between items-center p-10'
        style={{ backgroundColor: color }}>
        <h1 className="text-5xl font-bold border-4 border-black rounded-lg p-4"
        >
          Background Changer  
        </h1>
        <div className="flex gap-4 p-4">

          <button
            onClick={() => setColor("red")}
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600"
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600"
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600"
          >
            Green
          </button>

          <button
            onClick={() => setColor("white")}
            className="bg-white text-black px-6 py-2 rounded-lg font-semibold border hover:bg-gray-200"
          >
            White
          </button>
          <button
            onClick={() => setColor("orange")}
            className="bg-orange-500 text-black px-6 py-2 rounded-lg font-semibold border hover:bg-orange-200"
          >
            Orenge
          </button>

        </div>
      </div>



    </>
  )
}

export default App