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
    <div className="container dark">
      <div className="app">

      <Header/>
      <Routes>
        <Route path="" element={<ListNotesPage/>} />
        <Route path="note/:id" element={<NotePage/>} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
