import './App.css';
import BookContainer from './containers/BookContainer';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
import HeaderContainer from './containers/HeaderContainer';
import { createContext } from 'react';
import { useState } from 'react';
import Navibar from './containers/Navibar';
import Footer from './components/Footer';



export const UserContext = createContext(null);



function App() {


  const [user, setUser] = useState(null);
  return (
    <div className='page-container'>
      <div className='content'>

    <UserContext.Provider value = {[user, setUser]}>
    <header>
      <Navibar />
    </header>
    {/* <Home/> */}
    <main>
   {/* <BookContainer /> */}
   </main>
   {/* <footer> Biblion (c) 2023</footer> */}
   </UserContext.Provider> 
   </div>
   <Footer />   
</div>
  );
}

export default App;
