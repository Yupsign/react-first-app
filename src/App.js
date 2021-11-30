import Day from './element/Day';
import DayList from './element/DayList';
import Header from './element/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './element/EmptyPage';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path="/" element={<DayList/>}/>
        <Route path="/day/:day" element={<Day/>}/>
        <Route element={<EmptyPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
