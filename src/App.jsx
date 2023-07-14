import './App.scss'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
const App = () => {
  return (
    <>
     <div className="main-container">
        <Navbar/>
        <div className="content">
          <Hero/>
        </div>
        <Footer/>
     </div>
    </>
  )
}

export default App
