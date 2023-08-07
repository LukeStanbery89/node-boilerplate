import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    );
};

export default Router;
