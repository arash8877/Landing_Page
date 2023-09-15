import './App.css';
import { Navbar, Header, Features, Download, Faq, Footer } from './components/index'

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar/>
        <Header/>
      </header>
      <Features/>
      <Download/>
      <Faq/>
      <Footer/>
    </main>
  );
}

export default App;
