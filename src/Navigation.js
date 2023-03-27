import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchPage from "./Pages/Search Page/SearchPage";
import RepositoriesPage from "./Pages/Repositories Page/RepositoriesPage";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SearchPage/>} exact/> :
                <Route path="/repos" element={<RepositoriesPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Navigation;
