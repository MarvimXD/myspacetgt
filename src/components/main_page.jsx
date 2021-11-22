import React from "react";
import Headermain from "./main_page_comp/header_main";
import './main_page_comp/css/main_css.css';
import Bodypage from "./main_page_comp/body_main";
import Box from '@mui/material/Box';

export default function Mainpage() {
    return(
        <div>
            <Headermain />
            <Box m={2}/>
            <Bodypage />
        </div>
    );
}