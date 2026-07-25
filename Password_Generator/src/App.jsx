import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [Password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*()_+{}|:?>[]<~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, character, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,9);

    window.navigator.clipboard.writeText(Password)
  }, [Password])


  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])


  return (
    <>
      <div className="min-h-screen bg-gray-950 flex flex-col items-center px-4">

        <h1 className="text-4xl md:text-5xl text-center text-white font-bold mt-16">
          Password Generator
        </h1>

        <p className="text-gray-400 mt-3 text-center">
          Generate a secure password instantly
        </p>


        <div className="w-full max-w-lg mx-auto mt-10 bg-gray-900 border border-gray-800 shadow-2xl rounded-2xl p-6">

          {/* Password */}
          <div className="flex rounded-xl overflow-hidden border border-gray-700 focus-within:border-blue-500 transition">

            <input
              type="text"
              value={Password}
              className="outline-none w-full py-3 px-4 bg-gray-800 text-white text-lg font-mono"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />

            <button
              onClick={copyPasswordToClipboard}
              className="bg-blue-600 text-white font-semibold px-6 py-3 hover:bg-blue-700 active:bg-blue-800 cursor-pointer transition"
            >
              Copy
            </button>

          </div>


          {/* Controls */}
          <div className="mt-8 space-y-6">

            {/* Length */}
            <div>

              <div className="flex justify-between items-center mb-3">
                <label className="text-gray-300 font-medium">
                  Password Length
                </label>

                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-lg font-semibold">
                  {length}
                </span>
              </div>

              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="w-full cursor-pointer accent-blue-600"
                onChange={(e) => { setLength(e.target.value) }}
              />

            </div>


            {/* Options */}
            <div className="grid grid-cols-2 gap-4">

              <label className="flex items-center gap-3 bg-gray-800 border border-gray-700 p-4 rounded-xl cursor-pointer hover:border-blue-500 transition">

                <input
                  type="checkbox"
                  defaultChecked={number}
                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                  onChange={() => {
                    setNumber((prev) => !prev);
                  }}
                />

                <span className="text-gray-200">
                  Numbers
                </span>

              </label>


              <label className="flex items-center gap-3 bg-gray-800 border border-gray-700 p-4 rounded-xl cursor-pointer hover:border-blue-500 transition">

                <input
                  type="checkbox"
                  defaultChecked={character}
                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                  onChange={() => {
                    setCharacter((prev) => !prev);
                  }}
                />

                <span className="text-gray-200">
                  Characters
                </span>

              </label>

            </div>


            {/* Generate Button */}
            <button
              onClick={passwordGenerator}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 active:scale-[0.98] transition cursor-pointer"
            >
              Generate Password
            </button>

          </div>

        </div>

      </div>
    </>
  )
}

export default App