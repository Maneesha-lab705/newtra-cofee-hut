import { useState } from 'react'
import './App.css'
import ProductHero from './components/ProductHero'
import NavBar from './components/NavBar'
import MobileProducts from './components/MobileProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
        <div className='mt-[70px]'>
        <ProductHero />
        </div>

        <div className='mt-[10px]'>
        <MobileProducts />
        </div>

      <div className="pt-20 px-4"> {/* Add padding top so content doesn’t hide behind the fixed div */}
        <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
        <div className="card">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            count is {count}
          </button>
          <p className="mt-4">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs bg-gray-100 mt-6 p-4 rounded-lg shadow-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
