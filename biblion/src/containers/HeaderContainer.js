import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "../components/BookList";
import ReviewForm from "../components/ReviewForm";


import { createContext } from "react";

const HeaderContainer = ({books}) => {

    const readerContext = createContext();

    // GET request for userId

    return (
        <>
        <h1>This is the header</h1>
        </>
     );
}
 
export default HeaderContainer;