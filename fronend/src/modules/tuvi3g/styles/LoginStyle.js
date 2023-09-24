import styled from "styled-components";

export const LoginStyle = styled.div`
    background-color: white;
    @media (min-width: 1200px) {
        .container {
            zoom: 90%;
            //  transform: scale(0.9);
            max-width: 1440px;
        }
    }

    ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgb(203, 203, 203);
    }
    .wrap-custom-button {
    height: 44px;
    }
    .custom-button {
        background: $color;
        color: white;
        border: 1px solid transparent;
        padding: 7px 8px;
        border-radius: 8px;
        font-family: $font-semibold;
        font-size: 16px;
        box-shadow: 0px 4px 0px darken($color, 10%);
        min-width: 80px;
        &:focus {
            outline: none;
            margin-top: 4px;
            box-shadow: none;
        }
    }
    .custom-container {
        padding: 16px 2rem;
    }
    .modal-content {
        min-height: 200px;
    }
    .popup-content {
        border-radius: 8px;
    }

    .font-bold {
        font-family: $font-bold;
    }
    .popup-content .modal-content {
        border: none;
        max-height: 100%;
        overflow-y: auto;
        box-shadow: none;
    }
    .font-semibold {
        font-family: $font-semibold;
    }
    .max-2-lines {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
    }

    a:hover {
        text-decoration: none !important;
    }
    .input-custom {
        border-radius: 4px;
        color: black;
        border-color: #e2e8f0;
    }
    .form-group {
        margin-bottom: 0 !important;
        label {
            display: inline-block;
            margin-bottom: 0;
        }
        .form-label {
            width: 120px;
            padding-right: 5px;
            color: #9d9d9d;
        }
        .form-input {
            width: calc(100% - 110px);
        }
    }
    .error-message {
        font-size: 12px;
        color: red;
        margin-top: 5px;
    }
    .icon-action {
        color: #6b7280;
        &:hover {
            color: $color;
        }
        &.color-theme {
            color: $color;
        }
    }

    .th-table {
    background-color: #f9fafb;
    font-weight: unset;
    font-size: 14px;
    }
    .td-table {
    font-size: 14px;
    }
    .w-28 {
    width: 7rem;
    }
    .input-search input[type="text"]:focus,
    .input-search input,
    .input-search input[type="text"],
    .input-search input[type="text"]:active,
    .input-search input:focus,
    .form-input input[type="text"],
    .form-input input[type="text"]:focus {
    outline: none !important;
    outline-offset: 0 !important;
    transition: unset !important;
    }
    a:focus {
    text-decoration: unset;
    }
    .wrap-icon-action {
    height: 36px;
    width: 36px;
    border: 1px solid #ffa338;
    color: #ffa338;
    border-radius: 50%;
    line-height: 36px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin-bottom: 4px;
    cursor: pointer;
    &:hover {
        background-color: #ffa338;
        color: #fff;
    }
    }

`;