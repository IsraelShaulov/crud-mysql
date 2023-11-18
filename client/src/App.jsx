import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import AddBooks from './pages/AddBooks';
import UpdateBooks from './pages/UpdateBooks';
import './style.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />}></Route>
          <Route path='/add' element={<AddBooks />}></Route>
          <Route path='/update/:id' element={<UpdateBooks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
