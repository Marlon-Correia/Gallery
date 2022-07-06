import styled from 'styled-components';

export const Container = styled.div`
    background-color: #27282f;
    color: #fff;
    min-height: 100vh;
`;
export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;
export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;
export const ScreenWarning = styled.div`
    text-align: center;
    .emoji{
        font-size: 55px;
        margin-bottom: 20px;
    }
`;
export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
`;
export const UploadForm = styled.form`
    background-color: #3d3f43;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 30px;

    input[type=file]{
        display:none;
    }
    label{
        font-size: 14px;
        padding: 8px 16px;
        width: 100px;
        background-color: #756df4;
        color: #FFF;
        cursor: pointer;
        border-radius: 5px;
    }
    input[type=submit]{
        background-color: #756df4;
        border: 0;
        color: #fff;
        padding: 9px 16px;
        font-size: 15px;
        border-radius: 5px;
        margin: 0 30px;
        cursor: pointer;
        transition: all ease 0.4s;

        &:hover{
            opacity: 0.8;
        }
    }
`;
