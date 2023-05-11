import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <nav className="Nav-bar">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return <footer>2023 Perales development. All rights reserved.</footer>;
}

function Content() {
  return (
    <div className="Content">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
