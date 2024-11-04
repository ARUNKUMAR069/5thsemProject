import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Siteroutes from './components/Siteroutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header/>
      <Siteroutes/>
      <ToastContainer theme="colored"/>
    </>
  );
}

export default App;

