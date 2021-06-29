import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-left: 200px;
  padding: 16px;

  @media screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

export const ContentProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: #f8f8f8;
  border-radius: 5px;
  padding: .8em 1.2em;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
  }

  & > form > label {
    margin-bottom: .5em;
    font-size: 1.4em;
  }

  & > form > input, textarea, select {
    margin-bottom: 1em;
    padding: .7em;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
    min-width: 300px;
    font-size: 1.1em;
    color: #3c3f41;
  }

  & > form > input:disabled {
    cursor: not-allowed;
  }

  & > form > label > div {
    display: flex;
    background: linear-gradient(349.4deg, #524CA7 16.75%, #A2E2F9 79.35%);
    border-radius: 50%;
    padding: .4em;
  }

  & > form > label > div > img {
    border-radius: 50%;
    height: 200px;
    width: 200px;
    object-fit: cover;
  }

  & > form > label > div > svg {
    height: 200px;
    width: 200px;
    object-fit: cover;
  }

  & > form > label > span > svg {
    border-radius: 50%;
    background-color: #a0e5f8;
  }

  & > form > label:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 275px;
    height: 275px;
    cursor: pointer;
    border-radius: 50%;
  }

  & > form > label:first-child > input {
    display: none;
  }

  & > form > label:first-child > span {
    z-index: 99;
    position: absolute;
    margin-bottom: -236px;
    //margin-bottom: -192px;
    //margin-right: -115px;
    transition: all .5s ease;
  }

  & > form > label:first-child > span:hover {
    border-radius: 50%;
    transform: scale(1.2);
    filter: hue-rotate(325deg);
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

export const LogOut = styled(ContentProfile)`
  margin-top: 16px;
  & > button {
    padding: 8px 20px;
    background-color: transparent;
    border: solid 2px var(--primary-color);
    border-radius: 5px;
    font-size: 1.2em;
  }
`;