import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/HeaderApp/Header';
import { RouterApp } from './RouterApp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <RouterApp style={{ marginTop: 60 }} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
