import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro"
import Login from "../pages/Login"

const Private = ({Item}) => {
    const signed = false;

    return signed > 0 ? <Item /> : <Login/>;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/" element={<Login />} />
                    <Route exact path="/cadastro" element={<Cadastro />} />
                    <Route exact ="*" element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );

};

export default RoutesApp;

