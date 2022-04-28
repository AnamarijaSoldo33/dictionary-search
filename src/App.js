import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://www.avantixlearning.ca/wp-content/uploads/2020/08/stop-words-splitting-at-the-end-of-a-line-980x652.jpeg"
            className="App-logo img-fluid"
            alt="logo"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Anamarija Soldo</small>
        </footer>
      </div>
    </div>
  );
}
