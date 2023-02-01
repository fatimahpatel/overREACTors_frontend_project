import './App.css';
import BookContainer from './containers/BookContainer';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';

function App() {
  return (
    <>
    <header>
      <h1>Biblion</h1>
    </header>
    <Home/>
    <body>
   <BookContainer />
   </body>
   </>
  );
}

export default App;
