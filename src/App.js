import './App.css';
import { HomePage } from './components/HomePage';
import { Detail } from './components/Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="campaign/:SeoName/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
