import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/product/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid"><a href="#" className="navbar-brand">Classwork</a></div>
        </nav>
        <ProductList/>
      
      </div>
    </>
  );
}

export default App;
