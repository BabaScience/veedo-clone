
import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Tools from './components/Tools'

function App() {
  

  return (
    <>
      <div className="contaiiner">
        <div className="navbar"><NavBar/></div>
        <div className="hero"><Hero /></div>
        <h1 id='tools-title'>Tools</h1>
        <div className="tooldiv">
            <Tools />
            <Tools />
            <Tools />
            <Tools />
        </div>
        <footer className="foot">
          <div className="name-footer">
            VEEDO.ONLINE
          </div>
          <div className="mark">
           <p>copyright 2022</p> 
           <p>downloader converter txt-audio compressor</p> 
          </div>
        </footer>
      </div>
     
    

    </>
  )
}

export default App
