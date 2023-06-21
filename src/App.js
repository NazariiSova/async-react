import Header from "./components/header/Header.jsx";
import Post from "./components/post/Post.jsx";
import Footer from "./components/footer/Footer.jsx";
import './App.scss';

function App() {
  return (
    <div className="App__container">
      <Header />
      <div className="App__body">
        

        <div className="App__post">
          <Post />
          <Post />
        </div>

      </div>
      <div className="App__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
