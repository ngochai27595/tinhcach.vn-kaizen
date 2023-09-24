import styled from "styled-components";

export const NumerologyStyle = styled.div `
    #body {
        margin: 30px;
        font-size: 1.2em;
        font-family: sans-serif;
        color: #1d1d1d;
    }
    #body > div {
        margin-bottom: 20px;
    }
    a {
    text-decoration: none;
    border-bottom: 1px solid #0091ea;
    color: #1d1d1d;
    }
    a:hover {
    background-color: rgb(241, 248, 255);
    border-bottom-color: #0091ea;
    }
    h1 {
    margin: 10px 0 40px;
    }
    h1 > span {
    font-weight: 300;
    font-size: 0.6em;
    white-space: nowrap;
    }
    h2 {
    margin: 12px 0 5px;
    font-size: 1.2em;
    }
    label {
    color: #1d1d1d;
    display: block;
    margin-bottom: 3px;
    }
    input,
    select {
    padding: 5px 4px 3px 8px;
    font-size: 20px;
    line-height: 25px;
    font-family: sans-serif;
    background-color: white;
    border: solid grey 1px;
    border-radius: 5px;
    }
    article {
    margin: 0 0 15px 0;
    padding: 5px 5px 10px 30px;
    }
    section {
    position: relative;
    background-color: rgb(241, 248, 255);
    margin-bottom: 20px;
    padding: 20px;
    border: 2px solid #c8e1ff;
    border-radius: 20px;
    }
    #day {
        width: 60px;
        margin-right: 20px
    }
    #month {
        margin-right: 20px
    }
    #year {
        width: 100px;
    }
    #fname #lname #wname {
        width: 100%;
        display: block;
    }
    .fname > input, .lname > input, .wname > input {
        width: 100%;
    }
    .spaced {
    margin: 0 10px;
    }
    .linespace > li {
    margin: 10px;
    }
    .linespace > li > a {
    font-weight: 600;
    }
    .field {
    line-height: 32px;
    margin-bottom: 30px;
    }
    .inputForm {
    z-index: 300;
    min-height: 190px;
    }
    .desc {
    display: inline-block;
    margin: 10px 0 20px;
    }

    .calc {
    display: block;
    margin: 10px 0;
    }
    .calc > div {
    color: #0091ea;
    margin: 5px 0;
    }
    .calc > .meaning {
    margin: 15px 0 20px -10px;
    color: #1a1a1a;
    border-left: none;
    min-height: 50px;
    }
    .meaning {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    }
    .meaning > div {
    padding: 7px 0 0 90px;
    }
    .meaning > .num {
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 35px;
    border-width: 6px;
    line-height: 42px;
    height: 42px;
    width: 42px;
    padding: 5px;
    margin-right: 10px;
    }
    .num {
    display: inline-block;
    border: 4px solid grey;
    background-color: white;
    line-height: 24px;
    height: 24px;
    width: 24px;
    text-align: center;
    border-radius: 50%;
    }
    .fl {
    float: left;
    margin: 10px 30px;
    }
    .fl > a {
    border-bottom: none;
    }
    .fl img {
    border-radius: 10px;
    }
    .clearer {
    clear: both;
    height: 0;
    width: 0;
    }
    .i18n {
    position: absolute;
    top: 10px;
    right: 20px;
    padding: 4px;
    }
    .i18n img {
    cursor: pointer;
    margin-left: 4px;
    height: 11px;
    width: 16px;
    }

    .artnum {
    border-left: 10px solid grey;
    }
    .ml210 {
    margin: 0 20px 0 260px;
    }
    #allNumbers {
    margin: 0 0 20px 0;
    }
    #allNumbers > span {
    padding: 5px;
    display: inline-block;
    height: 24px;
    width: 24px;
    margin-right: 10px;
    }
    .c1,
    .c10,
    .c19,
    .c28 {
    border-color: #f44336 !important;
    }
    .c2,
    .c20 {
    border-color: #ff9800 !important;
    }
    .c3,
    .c12,
    .c21,
    .c30 {
    border-color: #ffeb3b !important;
    }
    .c4,
    .c13,
    .c31 {
    border-color: #4caf50 !important;
    }
    .c5,
    .c14,
    .c23 {
    border-color: #48d1cc !important;
    }
    .c6,
    .c15,
    .c24 {
    border-color: #2196f3 !important;
    }
    .c7,
    .c16,
    .c25 {
    border-color: #6a0dad !important;
    }
    .c8,
    .c17,
    .c26 {
    border-color: #d000d0 !important;
    }
    .c9,
    .c18,
    .c27 {
    border-color: #ffc107 !important;
    }
    .c11,
    .c29 {
    border-color: #9c27b0 !important;
    }
    .c22 {
    border-color: #3f51b5 !important;
    }

    .k1,
    .k10,
    .k19,
    .k28 {
    border-bottom-color: #f44336 !important;
    }
    .k2,
    .k20 {
    border-bottom-color: #ff9800 !important;
    }
    .k3,
    .k12,
    .k21,
    .k30 {
    border-bottom-color: #ffeb3b !important;
    }
    .k4,
    .k13,
    .k31 {
    border-bottom-color: #4caf50 !important;
    }
    .k5,
    .k14,
    .k23 {
    border-bottom-color: #48d1cc !important;
    }
    .k6,
    .k15,
    .k24 {
    border-bottom-color: #2196f3 !important;
    }
    .k7,
    .k16,
    .k25 {
    border-bottom-color: #6a0dad !important;
    }
    .k8,
    .k17,
    .k26 {
    border-bottom-color: #d000d0 !important;
    }
    .k9,
    .k18,
    .k27 {
    border-bottom-color: #ffc107 !important;
    }
    .k11,
    .k29 {
    border-bottom-color: #9c27b0 !important;
    }
    .k22 {
    border-bottom-color: #3f51b5 !important;
    }

    .copy {
    margin: 50px 0 20px;
    color: gray;
    font-size: 0.8em;
    }
    .grey {
    color: gray;
    }

    #sally {
    display: none;
    }
    #sally li {
    margin-bottom: 10px;
    }

    .divBtnCalc{
        display: flex;
        align-items: end;
    }
    .calcBtn {
        min-width: 150px;
    }

    .fullStar {
        position: absolute;
        top: 0;
        left: 5px;
        min-height: 220px;
    }
    #star-holder {
        z-index: 200;
        padding: 20px;
        left: 10px;
        top: 10px;
        position: absolute;
        height: 240px;
        width: 240px;
    }
    #star-holder::after, #star-holder::before {
        content: "";
        box-sizing: content-box !important;
    }
    #star-holder * {
        box-sizing: content-box !important;
    }
    #star-holder .num {
    position: absolute;
    padding: 4px;
    }
    #star-holder .num > span {
    display: block;
    opacity: 0;
    position: relative;
    top: 17px;
    left: -34px;
    width: 100px;
    z-index: 100;
    font-size: 0.9rem;
    transition: opacity 0.3s ease 0.1s;
    }
    #star-holder .num:hover > span {
    opacity: 1;
    }

    #star-holder .character {
    top: 0px;
    left: 95px;
    }
    #star-holder .soul {
    top: 66px;
    left: 9px;
    }
    #star-holder .agenda {
    top: 65px;
    left: 179px;
    }
    #star-holder .attitude {
    top: 158px;
    left: 144px;
    }
    #star-holder .personality {
    top: 158px;
    left: 44px;
    }
    #star-holder .destiny {
    top: 88px;
    left: 95px;
    }
    #star-holder .purpose {
    display: none;
    }
    #star-holder .character > span {
    left: 12px;
    top: 0;
    }
    #star-holder .destiny > span {
    left: 28px;
    top: 0;
    }
    #star-holder .agenda > span {
    top: 22px;
    left: -28px;
    }

    .star > div {
    z-index: 110;
    width: 0;
    height: 0;
    border-left: 23px solid transparent;
    border-right: 23px solid transparent;
    border-bottom: 64px solid #c8e1ff;
    }

    .t0 {
    position: absolute;
    display: inline-block;
    border-radius: 50%;
    border: solid 39px #c8e1ff;
    top: 81px;
    left: 86px;
    background-color: #c8e1ff;
    }
    .t1,
    .t2,
    .t3,
    .t4,
    .t5 {
    position: absolute;
    }
    .t1 {
    top: 24px;
    left: 102px;
    }
    .t2 {
    transform: rotate(72deg);
    top: 68px;
    left: 163px;
    }
    .t3 {
    transform: rotate(144deg);
    top: 139px;
    left: 140px;
    }
    .t4 {
    transform: rotate(-144deg);
    top: 139px;
    left: 64px;
    }
    .t5 {
    transform: rotate(-72deg);
    top: 68px;
    left: 41px;
    }
    .rpt-perso .num {
    padding: 4px;
    }

    @media only screen and (max-width: 670px) {
    .ml210 {
        margin-left: 10px;
    }
    .fullStar {
        position: relative;
    }
    .meaning > .num {
        left: -10px;
    }
    .meaning > div {
        padding-left: 60px;
    }
    .fl {
        margin: 10px 0px;
    }
    }

    @media print {
    @page {
        margin: 1cm 1cm;
    }
    #sally,
    article {
        page-break-inside: avoid;
        margin-bottom: 40px;
    }
    a[href^="http"]::after {
        font-weight: 500;
        content: " (" attr(href) ") ";
    }
    .num > span,
    .field > label > span.grey {
        display: none !important;
    }
    section {
        border: none;
        border-bottom: 2px solid silver;
    }
    }

`;

export const MasterNumber = styled.div `
    
    .customStyle {
        position: relative;
        text-align: center;
        color: #1140AE;
        animation: zoom-in-zoom-out 1s ease infinite;
    }

    /* Centered text */
    .customTextCentered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }

    @keyframes zoom-in-zoom-out {
        0% {
            transform: scale(1, 1);
        }

        50% {
            transform: scale(1.01, 1.01);
        }

        100% {
            transform: scale(1, 1);
        }
    }
    .text-color {
        color: #1140AE;
    }
    #chitiet_so, #chitiet_ten, #chitiet_noitam, #chitiet_bieulo, #chitiet_vanmenh, #chitiet_truongthanh, #chitiet_duongdoi, #chitiet_tacy {
        display: none;
    }
    .img-khung {
        width: 45%;
    }
    .hidden {
        display: none;
    }
    
    .btn-circle {
        border-radius: 100%;
        height: 2.5rem;
        width: 2.5rem;
        font-size: 1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }


    .btn-circle.btn-sm, .btn-group-sm > .btn-circle.btn {
        height: 1.8rem;
        width: 1.8rem;
        font-size: 0.75rem;
    }

    .btn-circle.btn-lg, .btn-group-lg > .btn-circle.btn {
        height: 3.5rem;
        width: 3.5rem;
        font-size: 1.35rem;
    }
        
    body {
        font-size: 14px;
        color: #4c5258;
        letter-spacing: .5px;
        background: #f7f7ff;
        overflow-x: hidden;
        font-family: Roboto, sans-serif
    }

    a {
        text-decoration: none
    }

    .wrapper {
        width: 100%;
        position: relative
    }

    .sidebar-wrapper {
        width: 250px;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        background: #fff;
        border-right: 0 solid #e4e4e4;
        z-index: 11;
        box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)!important;
        transition: all .2s ease-out
    }

    .sidebar-header {
        width: 250px;
        height: 60px;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        bottom: 0;
        padding: 0 15px;
        z-index: 5;
        background: #fff;
        background-clip: padding-box;
        border-bottom: 1px solid #e4e4e4
    }

    .logo-icon {
        width: 45px
    }

    .logo-text {
        font-size: 22px;
        margin-left: 10px;
        margin-bottom: 0;
        letter-spacing: 1px;
        color: #008cff
    }

    .toggle-icon {
        font-size: 22px;
        cursor: pointer;
        color: #008cff
    }

    .topbar {
        position: fixed;
        top: 0;
        left: 250px;
        right: 0;
        height: 60px;
        background: #fff;
        border-bottom: 1px solid rgb(228 228 228 / 0%);
        z-index: 10;
        -webkit-box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 0px 6px 0 rgb(206 206 238 / 54%);
        box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 0px 6px 0 rgb(206 206 238 / 54%);
    }

    .topbar .navbar {
        width: 100%;
        height: 60px;
        padding-left: 30px;
        padding-right: 30px
    }

    .page-wrapper {
        height: 100%;
        margin-top: 60px;
        margin-bottom: 30px;
        margin-left: 250px
    }

    .page-content {
        padding: 1.5rem 1.5rem 0.7rem 1.5rem
    }

    .page-footer {
        background: #fff;
        left: 250px;
        right: 0;
        bottom: 0;
        position: fixed;
        text-align: center;
        padding: 7px;
        font-size: 14px;
        border-top: 1px solid #e4e4e4;
        z-index: 3
    }

    .wrapper.toggled .topbar {
        left: 70px
    }

    .wrapper.toggled .page-wrapper {
        margin-left: 70px
    }

    .wrapper.toggled .page-footer {
        left: 70px
    }

    .sidebar-wrapper ul {
        padding: 0;
        margin: 0;
        list-style: none;
        background: 0 0
    }

    .sidebar-wrapper .metismenu {
        background: 0 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 10px;
        margin-top: 60px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }

    .sidebar-wrapper .metismenu li+li {
        margin-top: 5px
    }

    .sidebar-wrapper .metismenu li:first-child {
        margin-top: 5px
    }

    .sidebar-wrapper .metismenu li:last-child {
        margin-bottom: 5px
    }

    .sidebar-wrapper .metismenu>li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative
    }

    .sidebar-wrapper .metismenu a {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: left;
        padding: 8px 15px;
        font-size: 15px;
        color: #5f5f5f;
        outline-width: 0;
        text-overflow: ellipsis;
        overflow: hidden;
        letter-spacing: .5px;
        border: 1px solid #ffffff00;
        transition: all .3s ease-out
    }

    .sidebar-wrapper .metismenu a .parent-icon {
        font-size: 24px;
        line-height: 1
    }

    .sidebar-wrapper .metismenu a .menu-title {
        margin-left: 10px
    }

    .sidebar-wrapper .metismenu ul a {
        padding: 6px 15px 6px 15px;
        font-size: 15px;
        border: 0
    }

    .sidebar-wrapper .metismenu ul a i {
        margin-right: 10px
    }

    .sidebar-wrapper .metismenu ul {
        border: 1px solid #ededed;
        background: #fff
    }

    .sidebar-wrapper .metismenu ul ul a {
        padding: 8px 15px 8px 30px
    }

    .sidebar-wrapper .metismenu ul ul ul a {
        padding: 8px 15px 8px 45px
    }

    .sidebar-wrapper .metismenu .mm-active>a,
    .sidebar-wrapper .metismenu a:active,
    .sidebar-wrapper .metismenu a:focus,
    .sidebar-wrapper .metismenu a:hover {
        color: #008cff;
        text-decoration: none;
        background: rgb(13 110 253 / .12)
    }

    .menu-label {
        padding: 20px 15px 5px 5px;
        color: #b0afaf;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: .5px
    }

    .metismenu .has-arrow:after {
        position: absolute;
        content: "";
        width: .5em;
        height: .5em;
        border-style: solid;
        border-width: 1.2px 0 0 1.2px;
        border-color: initial;
        right: 15px;
        transform: rotate(-45deg) translateY(-50%);
        transform-origin: top;
        top: 50%;
        transition: all .3s ease-out
    }

    @media screen and (min-width:1025px) {
        .wrapper.toggled:not(.sidebar-hovered) .sidebar-wrapper .sidebar-header .logo-text {
            display: none
        }
        .wrapper.toggled:not(.sidebar-hovered) .sidebar-wrapper {
            width: 70px
        }
        .wrapper.toggled:not(.sidebar-hovered) .sidebar-wrapper .sidebar-header {
            width: 70px
        }
        .wrapper.toggled:not(.sidebar-hovered) .sidebar-wrapper .sidebar-header .toggle-icon {
            display: none
        }
        .wrapper.toggled:not(.sidebar-hovered) .sidebar-wrapper .sidebar-header {
            justify-content: center
        }
        .wrapper.toggled:not(.sidebar-hovered) .sidebar-wrapper .sidebar-header {
            width: 70px
        }
        .wrapper.toggled:not(.sidebar-hovered) .sidebar-wrapper .metismenu a {
            justify-content: center
        }
        .wrapper.toggled:not(.sidebar-hovered) .sidebar-wrapper .metismenu .menu-title {
            display: none
        }
        .wrapper.toggled:not(.sidebar-hovered) .sidebar-wrapper .metismenu li ul {
            display: none
        }
        .wrapper.toggled:not(.sidebar-hovered) .sidebar-wrapper .metismenu li.menu-label {
            display: none
        }
        .wrapper.toggled:not(.sidebar-hovered) .sidebar-wrapper .metismenu .has-arrow:after {
            display: none
        }
        .email-toggle-btn {
            display: none!important
        }
        .chat-toggle-btn {
            display: none!important
        }
    }

    .product-show {
        font-size: 18px;
        left: 15px
    }

    .product-discount {
        width: 2.5rem;
        height: 2.5rem;
        font-size: 14px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%
    }

    .color-indigator-item {
        width: 1.2rem;
        height: 1.2rem;
        background-color: #e6e0e0;
        border-radius: 50%;
        cursor: pointer
    }

    .product-grid .card {
        -webkit-transition: all .2s;
        -o-transition: all .2s;
        transition: all .2s
    }

    @media (min-width:992px) {
        .product-grid .card:hover {
            margin-top: -.25rem;
            margin-bottom: .25rem;
            -webkit-box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .3);
            box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .3)
        }
    }

    .back-to-top {
        display: none;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 26px;
        color: #fff;
        position: fixed;
        border-radius: 10px;
        bottom: 20px;
        right: 12px;
        background-color: #008cff;
        z-index: 5
    }

    .back-to-top:hover {
        color: #fff;
        background-color: #000;
        transition: all .5s
    }

    .breadcrumb-title {
        font-size: 20px;
        border-right: 1.5px solid #aaa4a4
    }

    .page-breadcrumb .breadcrumb li.breadcrumb-item {
        font-size: 16px
    }

    .page-breadcrumb .breadcrumb-item+.breadcrumb-item::before {
        display: inline-block;
        padding-right: .5rem;
        color: #6c757d;
        font-family: LineIcons;
        content: "\ea5c"
    }

    .icon-badge {
        width: 45px;
        height: 45px;
        background: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%
    }

    .widgets-icons {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ededed;
        font-size: 26px;
        border-radius: 10px
    }

    .widgets-icons-2 {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ededed;
        font-size: 27px;
        border-radius: 10px
    }

    #geographic-map {
        width: 100%;
        height: 440px
    }

    #geographic-map-2 {

        width: 100%;

        height: 300px

    }

    #geographic-map-3 {

        width: 100%;

        height: 350px

    }

    .product-img {
        width: 60px;
        height: 60px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 1px solid #e6e6e6
    }

    .product-img img {
        width: 60px;
        height: 60px;
        padding: 6px
    }

    .product-img-2 {
        width: 45px;
        height: 45px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 1px solid #e6e6e6
    }

    .product-img-2 img {
        width: 45px;
        height: 45px;
        padding: 1px
    }

    .border-light-2 {
        border-color: rgb(255 255 255 / 12%)!important;
    }

    .product-list {
        position: relative;
        height: 380px
    }

    .dashboard-top-countries {
        position: relative;
        height: 360px
    }

    .customers-list {
        position: relative;
        height: 450px
    }

    .store-metrics {
        position: relative;
        height: 450px;
    }

    .product-list-2 {
        position: relative;
        height: 450px;
    }

    .product-list .row {
        background-color: #f8f9fa;
        -webkit-transition: all .2s;
        -o-transition: all .2s;
        transition: all .2s
    }

    @media (min-width:992px) {
        .product-list .row:hover {
            background-color: #fff;
            margin-top: -.25rem;
            margin-bottom: .25rem;
            -webkit-box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .2);
            box-shadow: 0 .25rem .5rem 0 rgba(0, 0, 0, .2)
        }
    }

    .recent-product-img {
        width: 40px;
        height: 40px;
        background-color: #fbfbfb;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 1px solid #e6e6e6
    }

    .recent-product-img img {
        width: 40px;
        height: 40px;
        padding: 6px
    }

    .theme-icons {
        background-color: #fff
    }

    .lead-table .table {
        border-collapse: separate;
        border-spacing: 0 10px
    }

    .fm-menu .list-group a {
        font-size: 16px;
        color: #5f5f5f;
        display: flex;
        align-items: center
    }

    .fm-menu .list-group a i {
        font-size: 23px
    }

    .fm-menu .list-group a:hover {
        background: #008cff;
        color: #fff;
        transition: all .2s ease-out
    }

    .fm-file-box {
        font-size: 25px;
        background: #e9ecef;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .25rem
    }

    .fm-icon-box {
        font-size: 32px;
        background: #fff;
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .25rem
    }

    .user-plus {
        width: 33px;
        height: 33px;
        margin-left: -14px;
        line-height: 33px;
        background: #fff;
        border-radius: 50%;
        text-align: center;
        font-size: 22px;
        cursor: pointer;
        border: 1px dotted #a9b2bb;
        color: #404142
    }

    .user-groups img {
        margin-left: -14px;
        border: 1px solid #e4e4e4;
        padding: 2px;
        cursor: pointer
    }

    .contacts-social a {
        font-size: 16px;
        width: 36px;
        height: 36px;
        line-height: 36px;
        background: #fff;
        border: 1px solid #eeecec;
        text-align: center;
        border-radius: 50%;
        color: #2b2a2a
    }

    .customers-contacts a {
        font-size: 16px;
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border: 1px solid #eeecec;
        text-align: center;
        border-radius: 50%;
        color: #2b2a2a
    }

    .order-actions a {
        font-size: 18px;
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f1f1f1;
        border: 1px solid #eeecec;
        text-align: center;
        border-radius: 20%;
        color: #2b2a2a
    }

    .customers-list .customers-list-item {
        -webkit-transition: all .2s;
        -o-transition: all .2s;
        transition: all .2s
    }

    @media (min-width:992px) {
        .customers-list .customers-list-item:hover {
            background-color: #f8f9fa;
            border-radius: 10px;
            margin-top: -.25rem;
            margin-bottom: .25rem;
            -webkit-box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .2);
            box-shadow: 0 .25rem .5rem 0 rgba(0, 0, 0, .2)
        }
    }

    .right-15 {
        right: 15px!important
    }

    .font-13 {
        font-size: 13px
    }

    .font-14 {
        font-size: 14px
    }

    .font-18 {
        font-size: 18px
    }

    .font-20 {
        font-size: 20px
    }

    .font-22 {
        font-size: 22px
    }

    .font-24 {
        font-size: 24px
    }

    .font-26 {
        font-size: 26px;
    }

    .font-30 {
        font-size: 30px
    }

    .font-35 {
        font-size: 35px
    }

    .font-50 {
        font-size: 50px
    }

    .font-60 {
        font-size: 60px
    }

    .radius-30 {
        border-radius: 30px
    }

    .radius-10 {
        border-radius: 10px
    }

    .radius-15 {
        border-radius: 15px
    }

    .row.row-group>div {
        border-right: 1px solid rgba(0, 0, 0, 0.12);
    }

    .row.row-group>div:last-child {
        border-right: none;
    }

    .cursor-pointer {

        cursor: pointer

    }

    .dash-wrapper {
        margin: -1.5rem -1.5rem -3.5rem -1.5rem;
        padding: 1.5rem 1.5rem 3.5rem 1.5rem;
    }

    .dash-array-chart-box {
        width: 105px;
        height: 90px;
        position: relative;
        top: -15px;
        right: 30px;
    }

    .chart-container-0{
        position:relative;
        height:320px;
    }

    .chart-container-1{
        position:relative;
        height:260px;
    }

    .chart-container-2{
        position:relative;
        height:220px;
    }

    .chart-container-3{
        position:relative;
        height:188px;
    }

    .chart-container-4{
        position:relative;
        height:162px;
    }

    .chart-container-5{
        position:relative;
        height:110px;
    }

    .chart-container-6{
        position:relative;
        height:205px;
    }

    .chart-container-7{
        position:relative;
        height:60px;
    }
    .chart-container-8 {
    position: relative;
    height: 260px;
    }
    .chart-container-9 {
    position: relative;
    height: 280px;
    }
    .chart-container-10 {
    position: relative;
    height: 300px;
    top: 20px;
    }
    .chart-container-11 {
    position: relative;
    height: 280px;
    }

    .chart-container-12 {
    position: relative;
    height: 160px;
    }
    .chart-container-13 {
    position: relative;
    height: 240px;
    }
    .chart-container-14{
    position:relative;
    height:40px;
    }

    .w_chart {
        position: relative;
        display: inline-block;
        width: 65px !important;
        height: 65px !important;
        text-align: center;
        color: #32393f;
    }

    
    .w_chart canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 65px !important;
        height: 65px !important;
    }
    .w_percent {
        display: inline-block;
        line-height: 65px !important;
        z-index: 2;
    }
    .w_percent:after {
        content: '%';
        margin-left: 0.1em;
        font-size: .8em;
    }

    .chip {
        display: inline-block;
        height: 32px;
        padding: 0 12px;
        margin-right: 1rem;
        margin-bottom: 1rem;
        font-size: 14px;
        font-weight: 500;
        line-height: 32px;
        color: rgba(0, 0, 0, .7);
        cursor: pointer;
        background-color: #f1f1f1;
        border: 1px solid rgba(0, 0, 0, .15);
        border-radius: 16px;
        -webkit-transition: all .3s linear;
        transition: all .3s linear;
        box-shadow: none
    }

    .chip img {
        float: left;
        width: 32px;
        height: 32px;
        margin: 0 8px 0 -12px;
        border-radius: 50%
    }

    .chip .closebtn {
        padding-left: 10px;
        font-weight: 700;
        float: right;
        font-size: 16px;
        cursor: pointer
    }

    .chip.chip-md {
        height: 42px;
        line-height: 42px;
        border-radius: 21px
    }

    .chip.chip-md img {
        height: 42px;
        width: 42px
    }

    #invoice {
        padding: 0
    }

    .invoice {
        position: relative;
        background-color: #fff;
        min-height: 680px;
        padding: 15px
    }

    .invoice header {
        padding: 10px 0;
        margin-bottom: 20px;
        border-bottom: 1px solid #008cff
    }

    .invoice .company-details {
        text-align: right
    }

    .invoice .company-details .name {
        margin-top: 0;
        margin-bottom: 0
    }

    .invoice .contacts {
        margin-bottom: 20px
    }

    .invoice .invoice-to {
        text-align: left
    }

    .invoice .invoice-to .to {
        margin-top: 0;
        margin-bottom: 0
    }

    .invoice .invoice-details {
        text-align: right
    }

    .invoice .invoice-details .invoice-id {
        margin-top: 0;
        color: #008cff
    }

    .invoice main {
        padding-bottom: 50px
    }

    .invoice main .thanks {
        margin-top: -100px;
        font-size: 2em;
        margin-bottom: 50px
    }

    .invoice main .notices {
        padding-left: 6px;
        border-left: 6px solid #008cff;
        background: #e7f2ff;
        padding: 10px
    }

    .invoice main .notices .notice {
        font-size: 1.2em
    }

    .invoice table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 20px
    }

    .invoice table td,
    .invoice table th {
        padding: 15px;
        background: #eee;
        border-bottom: 1px solid #fff
    }

    .invoice table th {
        white-space: nowrap;
        font-weight: 400;
        font-size: 16px
    }

    .invoice table td h3 {
        margin: 0;
        font-weight: 400;
        color: #008cff;
        font-size: 1.2em
    }

    .invoice table .qty,
    .invoice table .total,
    .invoice table .unit {
        text-align: right;
        font-size: 1.2em
    }

    .invoice table .no {
        color: #fff;
        font-size: 1.6em;
        background: #008cff
    }

    .invoice table .unit {
        background: #ddd
    }

    .invoice table .total {
        background: #008cff;
        color: #fff
    }

    .invoice table tbody tr:last-child td {
        border: none
    }

    .invoice table tfoot td {
        background: 0 0;
        border-bottom: none;
        white-space: nowrap;
        text-align: right;
        padding: 10px 20px;
        font-size: 1.2em;
        border-top: 1px solid #aaa
    }

    .invoice table tfoot tr:first-child td {
        border-top: none
    }

    .invoice table tfoot tr:last-child td {
        color: #008cff;
        font-size: 1.4em;
        border-top: 1px solid #008cff
    }

    .invoice table tfoot tr td:first-child {
        border: none
    }

    .invoice footer {
        width: 100%;
        text-align: center;
        color: #777;
        border-top: 1px solid #aaa;
        padding: 8px 0
    }

    @media print {
        .invoice {
            font-size: 11px!important;
            overflow: hidden!important
        }
        .invoice footer {
            position: absolute;
            bottom: 10px;
            page-break-after: always
        }
        .invoice>div:last-child {
            page-break-before: always
        }
    }

    .main-row {
        height: 100vh
    }

    .main-col {
        max-width: 500px;
        min-height: 300px
    }

    .todo-done {
        text-decoration: line-through
    }

    .chat-wrapper {
        width: auto;
        height: 600px;
        border-radius: .25rem;
        position: relative;
        background: #fff;
        box-shadow: 0 .1rem .7rem rgba(0, 0, 0, .1)
    }

    .chat-sidebar {
        width: 340px;
        height: 100%;
        position: absolute;
        background: #fff;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        overflow: hidden;
        border-right: 1px solid rgba(0, 0, 0, .125);
        border-top-left-radius: .25rem;
        border-bottom-left-radius: .25rem
    }

    .chat-sidebar-header {
        width: auto;
        height: auto;
        position: relative;
        background: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, .125);
        border-right: 0 solid rgba(0, 0, 0, .125);
        border-top-left-radius: .25rem;
        padding: 15px
    }

    .chat-sidebar-content {
        padding: 0
    }

    .chat-user-online {
        position: relative
    }

    .chat-sidebar-header .chat-user-online:before {
        content: '';
        position: absolute;
        bottom: 7px;
        left: 40px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #fff;
        background: #16e15e
    }

    .chat-list .chat-user-online:before {
        content: '';
        position: absolute;
        bottom: 7px;
        left: 36px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #fff;
        background: #16e15e
    }

    .chat-content {
        margin-left: 340px;
        padding: 85px 15px 15px 15px
    }

    .chat-header {
        position: absolute;
        height: 70px;
        left: 340px;
        right: 0;
        top: 0;
        padding: 15px;
        background: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, .125);
        border-top-right-radius: .25rem;
        z-index: 1
    }

    .chat-footer {
        position: absolute;
        height: 70px;
        left: 340px;
        right: 0;
        bottom: 0;
        padding: 15px;
        background: #f8f9fa;
        border-top: 1px solid rgba(0, 0, 0, .125);
        border-bottom-right-radius: .25rem
    }

    .chat-footer-menu a {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: #6c757d;
        text-align: center;
        border-radius: 50%;
        margin: 3px;
        background-color: #fff;
        border: 1px solid rgb(0 0 0 / 15%)
    }

    .chat-tab-menu li a.nav-link {
        padding: .3rem .2rem;
        line-height: 1.2;
        color: #4a4b4c
    }

    .chat-tab-menu .nav-pills .nav-link.active,
    .chat-tab-menu .nav-pills .show>.nav-link {
        color: #008cff;
        background-color: rgb(0 123 255 / 0%)
    }

    .chat-title {
        font-size: 14px;
        color: #272b2f
    }

    .chat-msg {
        font-size: 13px;
        color: #6c757d
    }

    .chat-time {
        font-size: 13px;
        color: #6c757d
    }

    .chat-list {
        position: relative;
        height: 300px
    }

    .chat-list .list-group-item {
        border: 1px solid rgb(0 0 0 / 0%);
        background-color: transparent
    }

    .chat-list .list-group-item:hover {
        border: 1px solid rgb(0 0 0 / 0%);
        background-color: rgb(13 110 253 / .12)
    }

    .chat-list .list-group-item.active {
        background-color: rgb(13 110 253 / .12)
    }

    .chart-online {
        color: #16e15e
    }

    .chat-top-header-menu a {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: #6c757d;
        text-align: center;
        border-radius: 50%;
        margin: 3px;
        background-color: #fff;
        border: 1px solid rgb(0 0 0 / 15%)
    }

    .chat-content {
        position: relative;
        width: auto;
        height: 520px
    }

    .chat-content-leftside .chat-left-msg {
        width: fit-content;
        background-color: #eff2f5;
        padding: .8rem;
        border-radius: 12px;
        max-width: 480px;
        text-align: left;
        border-top-left-radius: 0
    }

    .chat-content-rightside .chat-right-msg {
        width: fit-content;
        background-color: #dcedff;
        padding: .8rem;
        border-radius: 12px;
        float: right;
        max-width: 480px;
        text-align: left;
        border-bottom-right-radius: 0
    }

    .chat-toggle-btn {
        width: 40px;
        height: 40px;
        line-height: 40px;
        margin-right: 15px;
        text-align: center;
        font-size: 24px;
        color: #6c757d;
        border-radius: 50%;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid rgb(0 0 0 / 15%)
    }

    .email-wrapper {
        width: auto;
        height: 600px;
        overflow: hidden;
        border-radius: .25rem;
        position: relative;
        background: #fff;
        box-shadow: 0 .1rem .7rem rgba(0, 0, 0, .1)
    }

    .email-sidebar {
        width: 250px;
        height: 100%;
        position: absolute;
        background: #fff;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        overflow: hidden;
        border-right: 1px solid rgba(0, 0, 0, .125);
        border-top-left-radius: .25rem;
        border-bottom-left-radius: .25rem
    }

    .email-sidebar-header {
        width: auto;
        height: auto;
        position: relative;
        background: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, .125);
        border-right: 0 solid rgba(0, 0, 0, .125);
        border-top-left-radius: .25rem;
        padding: 15px
    }

    .email-navigation {
        position: relative;
        padding: 0;
        height: 345px;
        border-bottom: 1px solid rgba(0, 0, 0, .125)
    }

    .email-header {
        position: absolute;
        height: 70px;
        left: 250px;
        right: 0;
        top: 0;
        padding: 15px;
        background: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, .125);
        border-top-right-radius: .25rem;
        z-index: 1
    }

    .email-content {
        position: absolute;
        left: 0;
        right: 0;
        width: auto;
        top: 70px;
        height: auto;
        margin-left: 250px;
        padding: 0;
        background: #fff;
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem
    }

    .email-navigation a.list-group-item {
        color: #404142;
        padding: .35rem 1.25rem;
        background-color: #fff;
        border-bottom: 1px solid rgb(0 0 0 / 0%);
        transition: all .3s ease-out
    }

    .email-navigation a.list-group-item:hover {
        background-color: rgb(13 110 253 / .12)
    }

    .email-navigation a.list-group-item.active {
        color: #0b5ed7;
        font-weight: 600;
        background-color: rgb(13 110 253 / .12)
    }

    .email-meeting {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0
    }

    .email-meeting a.list-group-item {
        color: #404142;
        padding: .35rem 1.25rem;
        background-color: #fff;
        border-bottom: 1px solid rgb(0 0 0 / 0%)
    }

    .email-meeting a.list-group-item:hover {
        background-color: rgb(0 123 255 / 15%);
        transition: all .3s ease-out
    }

    .email-hangout .chat-user-online:before {
        content: '';
        position: absolute;
        bottom: 8px;
        left: 45px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #fff;
        background: #16e15e
    }

    .email-toggle-btn {
        width: auto;
        height: auto;
        margin-right: 10px;
        text-align: center;
        font-size: 24px;
        color: #404142;
        border-radius: 0;
        cursor: pointer;
        background-color: #fff;
        border: 0 solid rgb(0 0 0 / 15%)
    }

    .email-actions {
        width: 230px
    }

    .email-time {
        font-size: 13px;
        color: #6c757d
    }

    .email-list div.email-message {
        background: #fff;
        border-bottom: 1px solid rgb(0 0 0 / 8%);
        color: #383a3c
    }

    .email-list div.email-message:hover {
        transition: all .2s ease-out;
        background-color: #eceef1
    }

    .email-list {
        position: relative;
        height: 530px
    }

    .email-star {
        color: #6c757d
    }

    .email-read-box {
        position: relative;
        height: 530px
    }

    .compose-mail-popup {
        width: 42%;
        position: fixed;
        bottom: -30px;
        right: 30px;
        z-index: 15;
        display: none
    }

    .compose-mail-toggled {
        display: block
    }

    .compose-mail-title {
        font-size: 16px
    }

    .compose-mail-close {
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        font-size: 14px;
        border-radius: 2px;
        background-color: rgb(255 255 255 / 0%)
    }

    .compose-mail-close:hover {
        background-color: rgb(255 255 255 / 20%)
    }

    .nav-primary.nav-tabs .nav-link.active {
        color: #008cff;
        border-color: #008cff #008cff #fff
    }

    .nav-danger.nav-tabs .nav-link.active {
        color: #f41127;
        border-color: #f41127 #f41127 #fff
    }

    .nav-success.nav-tabs .nav-link.active {
        color: #17a00e;
        border-color: #17a00e #17a00e #fff
    }

    .nav-warning.nav-tabs .nav-link.active {
        color: #ffc107;
        border-color: #ffc107 #ffc107 #fff
    }

    .nav-pills-danger.nav-pills .nav-link.active {
        color: #fff;
        background-color: #f41127
    }

    .nav-pills-success.nav-pills .nav-link.active {
        color: #fff;
        background-color: #17a00e
    }

    .nav-pills-warning.nav-pills .nav-link.active {
        color: #000;
        background-color: #ffc107
    }

    .nav-search input.form-control {
        background-color: rgb(255 255 255 / 20%);
        border: 1px solid rgb(255 255 255 / 45%);
        color: #fff
    }

    .nav-search button[type=submit] {
        background-color: rgb(255 255 255 / 20%);
        border: 1px solid rgb(255 255 255 / 32%);
        color: #fff
    }

    .nav-search input.form-control::placeholder {
        opacity: .5!important;
        color: #fff!important
    }

    .nav-search input.form-control::-ms-input-placeholder {
        color: #fff!important
    }

    .round-pagination.pagination .page-item:first-child .page-link {
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px
    }

    .round-pagination.pagination .page-item:last-child .page-link {
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px
    }

    .bg-light-primary {
        background-color: rgb(13 110 253 / .11)!important
    }

    .bg-light-success {
        background-color: rgb(23 160 14 / .11)!important
    }

    .bg-light-danger {
        background-color: rgb(244 17 39 / .11)!important
    }

    .bg-light-warning {
        background-color: rgb(255 193 7 / .11)!important
    }

    .bg-light-info {
        background-color: rgb(13 202 240 / 18%)!important
    }

    .bg-light-transparent {
        background-color: rgb(0 0 0 / 15%)!important
    }

    .bg-gradient-deepblue {
        background: #6a11cb;
        background: -webkit-linear-gradient(
        45deg
        , #6a11cb, #2575fc)!important;
            background: linear-gradient(
        45deg
        , #6a11cb , #2575fc)!important;
    }


    .bg-gradient-orange {
        background: #fc4a1a;
        background: -webkit-linear-gradient(
        45deg
        , #fc4a1a, #f7b733)!important;
            background: linear-gradient(
        45deg
        , #fc4a1a, #f7b733)!important;
    }

    .bg-gradient-ohhappiness {
        background: #00b09b;
        background: -webkit-linear-gradient(
        45deg
        , #00b09b, #96c93d)!important;
            background: linear-gradient(
        45deg
        , #00b09b, #96c93d)!important;
    }


    .bg-gradient-ibiza {
        background: #ee0979;
        background: -webkit-linear-gradient(
        45deg
        , #ee0979, #ff6a00)!important;
            background: linear-gradient(
        45deg
        , #ee0979, #ff6a00)!important;
    }

    .bg-gradient-scooter {
        background: #17ead9;
        background: -webkit-linear-gradient(
    45deg
    , #17ead9, #6078ea)!important;
        background: linear-gradient(
    45deg
    , #17ead9, #6078ea)!important;
    }


    .bg-gradient-bloody {
        background: #f54ea2;
        background: -webkit-linear-gradient(
    45deg
    , #f54ea2, #ff7676)!important;
        background: linear-gradient(
    45deg
    , #f54ea2, #ff7676)!important;
    }


    .bg-gradient-quepal {
        background: #42e695;
        background: -webkit-linear-gradient(
    45deg
    , #42e695, #3bb2b8)!important;
        background: linear-gradient(
    45deg
    , #42e695, #3bb2b8)!important;
    }


    .bg-gradient-blooker {
        background: #ffdf40;
        background: -webkit-linear-gradient(
    45deg
    , #ffdf40, #ff8359)!important;
        background: linear-gradient(
    45deg
    , #ffdf40, #ff8359)!important;
    }


    .bg-gradient-cosmic {
        background: linear-gradient(to right, #8e2de2, #4a00e0)!important
    }

    .bg-gradient-burning {
        background: linear-gradient(to right, #ff416c, #ff4b2b)!important
    }

    .bg-gradient-lush {
        background: linear-gradient(to right, #56ab2f, #a8e063)!important
    }

    .bg-gradient-kyoto {
        background: linear-gradient(to right, #f7971e, #ffd200)!important
    }

    .bg-gradient-blues {
        background: linear-gradient(to right, #56ccf2, #2f80ed)!important
    }

    .bg-gradient-moonlit {
        background: linear-gradient(to right, #0f2027, #203a43, #2c5364)!important
    }

    .bg-gradient-crystalline {
        background: linear-gradient(to right, #00cdac 0%, #8ddad5)!important
    }

    .split-bg-primary {
        background-color: #0c62e0;
        border-color: #0c62e0
    }

    .split-bg-secondary {
        background-color: #515a62;
        border-color: #515a62
    }

    .split-bg-success {
        background-color: #128e0a;
        border-color: #128e0a
    }

    .split-bg-info {
        background-color: #0bb2d3;
        border-color: #0bb2d3
    }

    .split-bg-warning {
        background-color: #e4ad07;
        border-color: #e4ad07
    }

    .split-bg-danger {
        background-color: #e20e22;
        border-color: #e20e22
    }

    .bg-facebook {
        background-color: #3b5998!important
    }

    .bg-twitter {
        background-color: #55acee!important
    }

    .bg-google {
        background-color: #e52d27!important
    }

    .bg-linkedin {
        background-color: #0976b4!important
    }

    /* Text Color */

    .text-option{
        color: #32393f!important
    }

    .text-facebook{
        color: #3b5998!important
    }
    
    .text-twitter{
        color: #55acee!important
    }
    
    .text-youtube{
        color: #e52d27!important
    }

    .text-sky-light {
        color: #b4d2ff;
    }



    .section-authentication-signin {
        height: 100vh
    }

    .authentication-forgot {
        height: 100vh;
        padding: 0 1rem
    }

    .authentication-reset-password {
        height: 100vh;
        padding: 0 1rem
    }

    .authentication-lock-screen {
        height: 100vh;
        padding: 0 1rem
    }

    .error-404 {
        height: 100vh;
        padding: 0 1rem
    }

    .error-social a {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        margin: 5px;
        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075)!important
    }

    .bg-login {
        background-image: url(../images/login-images/bg-login-img.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed
    }

    .bg-forgot {
        background-image: url(../images/login-images/bg-forgot-password.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed
    }

    .bg-lock-screen {
        background-image: url(../images/login-images/bg-lock-screen.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed
    }

    .login-separater span {
        position: relative;
        top: 26px;
        margin-top: -10px;
        background: #fff;
        padding: 5px;
        font-size: 12px;
        color: #cbcbcb;
        z-index: 1
    }

    .btn i {
        vertical-align: middle;
        font-size: 1.3rem;
        margin-top: -1em;
        margin-bottom: -1em;
        margin-right: 5px
    }


    .btn-inverse-primary {
        color: #008cff;
        background-color: rgba(0, 140, 255, 0.18);
        border-color: rgb(209, 234, 255);
    }

    .btn-inverse-primary:hover {
        color: #008cff;
        background-color: rgba(0, 140, 255, 0.18);
        border-color: rgba(0, 140, 255, 0.18);
    }

    .btn-inverse-primary:focus {
        color: #008cff;
        background-color: rgba(0, 140, 255, 0.18);
        border-color: rgba(0, 140, 255, 0.18);
        box-shadow: 0 0 0 .25rem rgba(49, 132, 253, .3)
    }


    .btn-inverse-secondary {
        color: #75808a;
        background-color: rgba(117, 128, 138, 0.18);
        border-color: rgb(230, 232, 234);
    }

    .btn-inverse-secondary:hover {
        color: #75808a;
        background-color: rgba(117, 128, 138, 0.18);
        border-color: rgba(117, 128, 138, 0.18);
    }

    .btn-inverse-success {
        color: #15ca20;
        background-color: rgba(21, 202, 32, 0.18);
        border-color: rgb(212, 246, 214);
    }

    .btn-inverse-success:hover {
        color: #15ca20;
        background-color: rgba(21, 202, 32, 0.18);
        border-color: rgba(21, 202, 32, 0.18);
    }
    .btn-inverse-success:focus {
        color: #15ca20;
        background-color: rgba(21, 202, 32, 0.18);
        border-color: rgba(21, 202, 32, 0.18);
        box-shadow: 0 0 0 .25rem rgb(23 160 14 / 32%)
    }

    .btn-inverse-danger {
        color: #fd3550;
        background-color: rgba(253, 53, 80, 0.18);
        border-color: rgb(255, 218, 223);
    }

    .btn-inverse-danger:hover {
        color: #fd3550;
        background-color: rgba(253, 53, 80, 0.18);
        border-color: rgba(253, 53, 80, 0.18);
    }
    .btn-inverse-danger:focus {
        color: #fd3550;
        background-color: rgba(253, 53, 80, 0.18);
        border-color: rgba(253, 53, 80, 0.18);
        box-shadow: 0 0 0 .25rem rgba(225, 83, 97, .3)
    }


    .btn-inverse-warning {
        color: #ff9700;
        background-color: rgba(255, 151, 0, 0.18);
        border-color: rgb(255, 236, 209);
    }

    .btn-inverse-warning:hover {
        color: #ff9700;
        background-color: rgba(255, 151, 0, 0.18);
        border-color: rgba(255, 151, 0, 0.18);
    }

    .btn-inverse-warning:focus {
        color: #ff9700;
        background-color: rgba(255, 151, 0, 0.18);
        border-color: rgba(255, 151, 0, 0.18);
        box-shadow: 0 0 0 .25rem rgba(217, 164, 6, .3)
    }

    .btn-inverse-info {
        color: #0dceec;
        background-color: rgba(13, 206, 236, 0.18);
        border-color: rgb(211, 246, 252);
    }

    .btn-inverse-info:hover {
        color: #0dceec;
        background-color: rgba(13, 206, 236, 0.18);
        border-color: rgba(13, 206, 236, 0.18);
    }

    .btn-inverse-light {
        color: #a7aaaa;
        background-color: rgba(233, 234, 234, 0.2);
        border-color: rgb(251, 251, 251);
    }

    .btn-inverse-light:hover {
        color: #a7aaaa;
        background-color: rgba(233, 234, 234, 0.2);
        border-color: rgba(233, 234, 234, 0.2);
    }

    .btn-inverse-dark {
        color: #223035;
        background-color: rgba(34, 48, 53, 0.2);
        border-color: #d7d9da;
    }

    .btn-inverse-dark:hover {
        color: #223035;
        background-color: rgba(34, 48, 53, 0.2);
        border-color: rgba(34, 48, 53, 0.2);
    }

    .btn-facebook {
        box-shadow: 0 2px 2px 0 rgba(59, 89, 152, .14), 0 3px 1px -2px rgba(59, 89, 152, .2), 0 1px 5px 0 rgba(59, 89, 152, .12);
        background-color: #3b5998;
        border-color: #3b5998;
        color: #fff
    }

    .btn-facebook:hover {
        color: #fff
    }

    .btn-white {
        background-color: #fff;
        border-color: #e7eaf3
    }

    .chart-container1 {
        position: relative;
        height: 340px
    }

    .gmaps,
    .gmaps-panaroma {
        height: 400px;
        background: #eee;
        border-radius: 3px
    }

    .pricing-table .card {
        -webkit-transition: all .2s;
        -o-transition: all .2s;
        transition: all .2s;
        -webkit-border-radius: 15px;
        border-radius: 15px
    }

    .pricing-table .card .card-header {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px
    }

    @media (min-width:992px) {
        .pricing-table .card:hover {
            margin-top: -.25rem;
            margin-bottom: .25rem;
            -webkit-box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .3);
            box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .3)
        }
    }

    .pricing-table .card .card-title {
        font-size: 1rem;
        letter-spacing: .2rem;
        font-weight: 500
    }

    .pricing-table .card .card-price {
        font-size: 2.7rem
    }

    .pricing-table .card .card-price .term {
        font-size: .875rem
    }

    .pricing-table .card ul li.list-group-item {
        border-bottom: 1px solid rgb(0 0 0 / 0%);
        color: #3b3b3b;
        font-size: 16px
    }

    input::placeholder {
        color: #000!important;
        opacity: .3!important
    }

    .form-floating>.form-control::-moz-placeholder {
        color: transparent!important
    }
    .form-floating>.form-control::placeholder {
        color: transparent!important
    }

    .card-group {
        margin-bottom: 1.5rem
    }

    .search-bar-box {
        width: 45%
    }

    .search-control {
        background-color: #f7f7ff;
        border: 1px solid #e9e9f6;
        padding-left: 2.5rem
    }

    .search-control-2 {
        color: #fff;
        background-color: #212529;
        border: 1px solid rgb(255 255 255 / 12%)!important;
        padding-right: 2.5rem
    }

    .search-control-2:focus {
        color: #fff;
        padding-right: 2.5rem;
        background-color: #212529;
        box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25)
    }

    input.search-control-2::placeholder {
        color: #fff!important;
        opacity: .5!important
    }

    .search-show {
        font-size: 18px;
        left: 15px
    }

    .search-close {
        font-size: 24px;
        right: 10px;
        cursor: pointer;
        display: none
    }

    .topbar .navbar .navbar-nav .nav-link {
        padding-right: .8rem;
        padding-left: .8rem;
        color: #252323;
        font-size: 22px
    }

    .dropdown-toggle-nocaret:after {
        display: none
    }

    .alert-count {
        position: absolute;
        top: 5px;
        left: 22px;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 12px;
        font-weight: 500;
        color: #fff;
        background: #f62718
    }

    .user-img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        border: 0 solid #e5e5e5;
        padding: 0
    }

    .user-info .user-name {
        font-size: 15px;
        font-weight: 500;
        color: #413c3c
    }

    .user-info .designattion {
        font-size: 13px;
        color: #a9a8a8
    }
    .header-text {
        font-size: 12px;
        /* color: #a9a8a8 */
    }
    .user-box {
        display: flex;
        align-items: center;
        height: 60px;
        border-left: 1px solid #f0f0f0;
        margin-left: 1rem
    }

    .dropdown-large {
        position: relative
    }

    .dropdown-large .dropdown-menu {
        width: 360px;
        border: 0;
        padding: 0 0;
        border-radius: 10px;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15)
    }

    .topbar .navbar .dropdown-large .dropdown-menu::after {
        content: '';
        width: 13px;
        height: 13px;
        background: #fff;
        position: absolute;
        top: -6px;
        right: 16px;
        transform: rotate(45deg);
        border-top: 1px solid #ddd;
        border-left: 1px solid #ddd
    }

    .topbar .navbar .dropdown-menu::after {
        content: '';
        width: 13px;
        height: 13px;
        background: #ffff;
        position: absolute;
        top: -6px;
        right: 16px;
        transform: rotate(45deg);
        border-top: 1px solid #ddd;
        border-left: 1px solid #ddd
    }

    .dropdown-large .msg-header {
        padding: .8rem 1rem;
        border-bottom: 1px solid #ededed;
        background-clip: border-box;
        background: #fff;
        text-align: left;
        display: flex;
        align-items: center;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px
    }

    .dropdown-large .msg-header .msg-header-title {
        font-size: 15px;
        color: #1c1b1b;
        margin-bottom: 0;
        font-weight: 500
    }

    .dropdown-large .msg-header .msg-header-clear {
        font-size: 12px;
        color: #585858;
        margin-bottom: 0
    }

    .dropdown-large .msg-footer {
        padding: .8rem 1rem;
        color: #1c1b1b;
        border-top: 1px solid #ededed;
        background-clip: border-box;
        background: 0 0;
        font-size: 14px;
        font-weight: 500;
        border-bottom-left-radius: .25rem;
        border-bottom-right-radius: .25rem
    }

    .dropdown-large .user-online {
        position: relative
    }

    .dropdown-large .msg-name {
        font-size: 14px;
        margin-bottom: 0
    }

    .dropdown-large .msg-info {
        font-size: 13px;
        margin-bottom: 0
    }

    .dropdown-large .msg-avatar {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-right: 15px
    }

    .dropdown-large .msg-time {
        font-size: 12px;
        margin-bottom: 0;
        color: #919191
    }

    .dropdown-large .user-online:after {
        content: '';
        position: absolute;
        bottom: 1px;
        right: 17px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #fff;
        background: #16e15e
    }

    .dropdown-large .dropdown-menu .dropdown-item {
        padding: .5rem 1.3rem;
        border-bottom: 1px solid #ededed
    }

    .header-message-list {
        position: relative;
        height: 360px
    }

    .header-notifications-list {
        position: relative;
        height: 360px
    }

    .dropdown-large .notify {
        width: 45px;
        height: 45px;
        line-height: 45px;
        font-size: 22px;
        text-align: center;
        border-radius: 50%;
        background-color: #f1f1f1;
        margin-right: 15px
    }

    .app-box {
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        font-size: 26px;
        justify-content: center;
        cursor: pointer;
        border-radius: 10px;
        background-color: #f6f6f6
    }

    .app-title {
        font-size: 14px
    }

    .user-box .dropdown-menu i {
        vertical-align: middle;
        margin-right: 10px
    }

    .dropdown-menu {
        -webkit-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
        border: 0 solid #e9ecef;
        border-radius: 10px;
        font-size: 14px
    }

    .topbar .navbar .dropdown-menu {
        -webkit-animation: .6s cubic-bezier(.25, .8, .25, 1) 0s normal forwards 1 animdropdown;
        animation: .6s cubic-bezier(.25, .8, .25, 1) 0s normal forwards 1 animdropdown
    }

    @-webkit-keyframes animdropdown {
        from {
            -webkit-transform: translate3d(0, 6px, 0);
            transform: translate3d(0, 6px, 0);
            opacity: 0
        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            opacity: 1
        }
    }

    @keyframes animdropdown {
        from {
            -webkit-transform: translate3d(0, 6px, 0);
            transform: translate3d(0, 6px, 0);
            opacity: 0
        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            opacity: 1
        }
    }

    .mobile-search-icon {
        display: none
    }

    .mobile-toggle-menu {
        display: none;
        font-size: 26px;
        color: #404142;
        cursor: pointer
    }

    .switcher-wrapper {
        width: 280px;
        height: 100%;
        position: fixed;
        right: -280px;
        top: 0;
        bottom: 0;
        z-index: 16;
        background: #fff;
        border-left: 0 solid #d2d2d2;
        box-shadow: 0 .3rem .6rem rgba(0, 0, 0, .13);
        transition: all .2s ease-out
    }

    .switcher-btn {
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 24px;
        background: #008cff;
        box-shadow: 0 .3rem .6rem rgba(0, 0, 0, .13);
        color: #fff;
        text-align: center;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        position: absolute;
        top: 40%;
        right: 100%;
        cursor: pointer
    }

    .switcher-wrapper.switcher-toggled {
        right: 0
    }

    .switcher-body {
        padding: 1.25rem
    }

    .switcher-body .form-check .form-check-input,
    .switcher-body .form-check .form-check-label {
        cursor: pointer
    }

    .header-colors-indigators .indigator {
        width: 45px;
        height: 45px;
        background-color: #f4f2f2;
        border-radius: 10px;
        cursor: pointer
    }

    @media screen and (max-width:1280px) {
        .email-header {
            height: auto
        }
        .email-content {
            padding: 100px 0 0 0
        }
    }

    @media only screen and (max-width: 1199px) {

        .row.row-group>div {
            border-right: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        }

        .row.row-group>div:last-child {
            border-right: none;
            border-bottom: 0;
        }

    }

    @media screen and (max-width:1024px) {
        .topbar {
            left: 0!important
        }
        .mobile-search-icon {
            display: block
        }
        .mobile-toggle-menu {
            display: block
        }
        .sidebar-wrapper {
            left: -300px;
            box-shadow: none
        }
        .page-wrapper {
            margin-left: 0
        }
        .page-footer {
            left: 0
        }
        .search-bar {
            display: none
        }
        .full-search-bar {
            display: flex;
            align-items: center;
            width: 100%;
            position: absolute;
            left: 0;
            z-index: 100;
            background: #ffffff;
            height: 60px;
            padding: 0 1.4rem
        }
        .search-bar-box {
            width: 100%
        }
        .search-close {
            display: block
        }
        .search-show {
            left: 15px;
            right: auto
        }
        .search-control {
            background-color: #fff;
            border: 1px solid #f2efef00;
            padding-left: 2.5rem
        }
        .search-control-2 {
            color: #fff;
            background-color: #212529;
            border: 1px solid rgb(255 255 255 / 12%)!important;
            padding-left: 2.5rem
        }
        .wrapper.toggled .sidebar-wrapper {
            left: 0
        }
        .wrapper.toggled .page-wrapper {
            margin-left: 0
        }
        .wrapper.toggled .overlay {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: #000;
            opacity: .6;
            z-index: 10;
            display: block;
            cursor: move;
            transition: all .2s ease-out
        }
        .error-404 {
            height: auto;
            padding: 6rem 1rem
        }
        .chat-header {
            border-top-left-radius: .25rem
        }
        .chat-footer {
            border-bottom-left-radius: .25rem
        }
        .chat-sidebar {
            left: -370px
        }
        .chat-content {
            margin-left: 0
        }
        .chat-header {
            left: 0
        }
        .chat-footer {
            left: 0
        }
        .chat-toggled .chat-sidebar {
            left: 0
        }
        .chat-toggled .overlay {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 340px;
            background: #000;
            opacity: .5;
            z-index: 11;
            display: block;
            cursor: move;
            transition: all .3s ease-out
        }
        .email-header {
            border-top-left-radius: .25rem
        }
        .email-sidebar {
            left: -280px
        }
        .email-content {
            margin-left: 0
        }
        .email-header {
            left: 0
        }
        .email-toggled .email-sidebar {
            left: 0
        }
        .email-toggled .overlay {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 250px;
            background: #000;
            opacity: .5;
            z-index: 9;
            display: block;
            cursor: move;
            transition: all .3s ease-out
        }
    }

    @media screen and (max-width:991px) {
        .section-authentication-signin {
            height: 100%;
            margin-top: 6rem;
            margin-bottom: 2rem
        }
        .authentication-reset-password {
            height: auto;
            padding: 2rem 1rem
        }
        .authentication-lock-screen {
            height: auto;
            padding: 2rem 1rem
        }
        .compose-mail-popup {
            width: auto;
            position: fixed;
            bottom: -30px;
            right: 0;
            left: 0
        }
    }

    @media screen and (max-width:767px) {
        .user-box .user-info {
            display: none
        }
        .authentication-forgot {
            height: auto;
            padding: 2.5rem 1rem
        }
        .header-text {
            font-size: 12px;
            /* color: #a9a8a8 */
        }
    }

    @media screen and (max-width:620px) {
        .topbar .navbar .dropdown-menu::after {
            display: none
        }
        .topbar .navbar .dropdown {
            position: static!important
        }
        .topbar .navbar .dropdown-menu {
            width: 100%!important
        }
    }

    @media screen and (max-width:520px) {
        .chat-footer-menu,
        .chat-top-header-menu {
            display: none
        }
    }

    .personal-info {
        color: #1140AE;
    }

`;