import './App.css';
import './styles.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Project from '../src/components/Project'
import ContactForm from '../src/components/Contact'
import About from '../src/components/About'

function App() {
  
  return (
    <div>
      <header>
        <Header>
        </Header>
      </header>
      <main>
      <About></About>
        <section>
          <Project></Project>
        </section>
        <Footer></Footer>
      </main> 
    </div>
    
  );
}

export default App;
