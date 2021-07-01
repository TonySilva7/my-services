import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: auto;
  //width: calc(100% - 232px);
  //width: calc(100vw - 230px);
  margin-left: 200px;
  padding: 16px;
  
  @media screen and (max-width: 700px) {
    margin-left: 0;
    width: 100%;
    height: 100vh;
  }

  @media screen and (max-width: 400px) {
    margin-left: 0;
    width: 100%;
    height: 100vh;
  }
`;

export const ContentProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  border-radius: 5px;
  padding: 1.8em 1.2em;
  box-shadow: var(--my-shadow);
  background-color: #f8f8f8;

  & > form {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  & > form > label {
    font-size: 1.3em;
    color: var(--primary-color);
    margin-bottom: 5px;
  }

  & > form > input, textarea, select {
    margin-bottom: 1em;
    padding: .3em .7em;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
    min-width: 300px;
    font-size: 1.1em;
    height: 35px;
  }

  & > form > input:disabled {
    cursor: not-allowed;
  }
  
  & > form > label:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & > form > button {
    height: 35px;
    border: 0;
    padding: 8px 20px;
    background-color: #252437;
    color: #fff;
    font-size: 1.2em;
    border-radius: 5px;
    max-width: 600px;
    min-width: 300px;
  }
`;

export const ImgProfile = styled.picture`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  border-radius: 50%;
  height: 220px;
  width: 220px;
  position: relative;

  & > span {
    z-index: 99;
    position: absolute;
    bottom: 15px;
    right: 15px;
    transition: all .5s ease;
  }

  & > span:hover {
    border-radius: 50%;
    transform: scale(1.2);
    filter: hue-rotate(325deg);
  }

  & > span > svg {
    border-radius: 50%;
    background-color: #a0e5f8;
  }

  & > input {
    display: none;
  }

  & > div {
    display: flex;
    background: linear-gradient(349.4deg, #524CA7 16.75%, #A2E2F9 79.35%);
    border-radius: 50%;
    padding: .4em;
  }

  & > div > img {
    border-radius: 50%;
    height: 200px;
    width: 200px;
    object-fit: cover;
  }

  & > div > svg {
    height: 200px;
    width: 200px;
    object-fit: cover;
  }
`;

export const LogOut = styled.footer`
  background-color: #f8f8f8;
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  padding: 12px 0;
  box-shadow: var(--my-shadow);
  
  & > button {
    padding: 6px 20px;
    background-color: transparent;
    border: solid 2px var(--primary-color);
    border-radius: 5px;
    font-size: 1.2em;
  }
`;