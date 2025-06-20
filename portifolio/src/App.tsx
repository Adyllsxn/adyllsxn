import { Routes, Route } from 'react-router-dom';
import Home from './containers/pages/Home/Home';
import Header from './components/Header/Header';

import './core/styles/App.css';

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default App
