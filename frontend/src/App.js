import logo from './logo.svg';
import './App.css';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <main>
              <Routes>
                <Route path='/' element={<AdminPanel/>}/>
              </Routes>
            </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
