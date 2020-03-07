import React, { Component } from "react";
import Home from "../component/Menu/Home";
import About from "../component/Menu/About";

var routes=[
    {
        path:'/home',
        exact:true,
        main:()=><Home/>
    },
    {
        path:'/about',
        exact:false,
        main:()=><About/>
    },
]
export default routes