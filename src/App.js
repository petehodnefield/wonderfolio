import './App.css';
import './styles.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Project from '../src/components/Project'

function App() {
  return (
    <div>
      <header>
        <Header>
        </Header>
      </header>
      <main>
        <section>
          <Project></Project>
        </section>
        <Footer></Footer>
      </main> 
    </div>
  );
}

export default App;
