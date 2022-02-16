import './App.css';
import Header from './components/Header';
import ListNotesPage from './pages/ListNotesPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotePage from './pages/NotePage';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="list" element={<ListNotesPage/>} />
        <Route path="note/:id" element={<NotePage/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
