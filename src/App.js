import './App.css';
import { Navbar, Header, Features, Download, Subscribe, Faq, Footer } from './components/index'

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar/>
        <Header/>
      </header>
      <Features/>
      <Download/>
      <Subscribe/>
      <Faq/>
      <Footer/>
    </main>
  );
}

export default App;
