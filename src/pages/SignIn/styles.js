import styled from 'styled-components';

export const ContainerCenter = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b1a28;
`;

export const LoginWrap = styled.div`
  background-color: #eaeaec;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  & > form {
    display: flex;
    flex-direction: column;
    margin-top: 1.5em;
    width: 90%;
  }
  
  & > form > h1 {
    text-align: center;
    margin-bottom: 0.5em;
    color: #252437;
  }
  
  & > form > input {
    margin-bottom: 15px;
    height: 35px;
    border: 0;
    border-radius: 4px;
    padding: 10px;
    font-size: 15px;
    color: #252437;
    background-color: #fff;
  }
  
  & > form > button {
    height: 35px;
    border: 0;
    border-radius: 4px;
    background-color: #252437;
    color: #fff;
    font-size: 1.2em;
  }
  
  & > a {
    margin: 1.5em 0;
    color: #252437;
    cursor: pointer;
  }
`;

export const LoginArea = styled.div`
  display: flex;
  justify-content: center;
  background-color: #252437;
  width: 100%;

  svg {
    padding: 20px;
    height: 130px;
  }
`;