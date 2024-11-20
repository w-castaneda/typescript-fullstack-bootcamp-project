import React from 'react'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <main className="container flex flex-col gap-8 justify-center items-center min-h-screen p-8 text-center mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold text-balance max-w-screen-lg">
        Wilfredo Castaneda - Welcome to the Typescript Fullstack Project!
      </h1>
      <p>This is the client starting point 🚀</p>
      <button
        className="px-4 py-2 rounded-md bg-blue-600 text-white"
        onClick={() => setCounter((v) => v + 1)}
      >
        Clicks: {counter}
      </button>
    </main>
  )
}

export default App
