import styled from "styled-components";

export const NavStyle = styled.nav`
    min-height: 15vh;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    a {
        font-size: 1.2rem;
        color: white;
        text-decoration: none;
    }
    h3 {
        color: white;
    }

    #menu {
        list-style: none;
        height: 48px;
    }
    #menu li {
        text-align: left;
        color: #fff;
    }
    #menu li a {
        text-decoration: none;
        font-size: 16px;
        display: block;
        padding: 15px;
        color: #fff;
        /* background-color: #333; */
    }
    #menu > li {
        float: left;
        /* border-right: 1px solid #fff; */
        position: relative;
    }
    #menu > li > ul.dropdown_menu {
        position: absolute;
        list-style: none;
        display: none;
        top: 48px;
        left: 0;
        width: 200px;
    }
    /* #menu > li:hover > a {
        background-color: #5C5C5C;
    } */
    #menu > li:hover > ul.dropdown_menu {
        z-index: 10000;
        display: block;
        background-color: #333;
    }
    ul.dropdown_menu > li > ul.submenu {
        position: absolute;
        display: none;
        left: 200px;
        list-style: none;
        width: 200px;
    }
    ul.dropdown_menu > li:hover > a {
        background-color: #5C5C5C !important;
    }
    ul.dropdown_menu > li:hover > ul.submenu {
        z-index: 100;
        display: block;
    }
    ul.submenu > li:hover > a {
        background-color: #5C5C5C !important;
    }
    .arrow {
        width: 0;
        height: 0;
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
    }
    .arrow-down {
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 7px solid #fff;
    }
    .arrow-right {
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 7px solid #fff;
    }
`;

export const NavItems = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    div{
        margin-left: 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3{
        font-size: 1rem;
        padding: 0.25rem;
    }
    svg{
        font-size: 1.5rem;
    }

`;