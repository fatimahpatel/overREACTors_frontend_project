import './App.css';
import BookContainer from './containers/BookContainer';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
import HeaderContainer from './containers/HeaderContainer';
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext(null);


function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value = {[user, setUser]}>
    <header>
      <h1>Biblion</h1>
      <HeaderContainer/>
    </header>
    <Home/>
    <body>
   <BookContainer />
   </body>
   </UserContext.Provider>
  );
}

export default App;
