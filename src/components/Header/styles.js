import styled from 'styled-components';
import img from '../../assets/cover.png';

export const SideBar = styled.aside`

  display: flex;
  flex-direction: column;
  align-self: start;
  margin: 0;
  padding: 0;
  min-width: 200px;
  background-color: var(--primary-color);
  position: fixed;
  height: 100%;
  overflow: auto;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    border-bottom: solid 1px var(--purple-logo);

    background-color: var(--primary-color);
    background-image: url(${ img });
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  //
  //& > div > svg {
  //  width: 100px;
  //  height: 100px;
  //  object-fit: cover;
  //  -webkit-filter: drop-shadow(2px 3px 6px #121212);
  //  filter: drop-shadow(2px 3px 6px #121212);
  //}

  & > a {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
    padding: 16px;
    text-decoration: none;
    transition: all .5s ease;
  }

  & > a:hover {
    background-color: #171624;
    color: #fff;
  }

  & > a > svg {
    margin-right: .7em;
  }
  
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    position: relative;

    & > div {
      display: none;
    }

    & > a {
      flex-direction: row;
    }

  }

  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    position: relative;

    & > div {
      display: none;
    }

    & > a {
      flex-direction: row;
      text-align: center;
    }

    & > a > svg {
      display: none;
    }

  }

`;

export const ImgContainer = styled.aside`
  display: flex;
  background: linear-gradient(349.4deg, #524CA7 16.75%, #A2E2F9 79.35%);
  border-radius: 50%;
  padding: .3em;
  -webkit-filter: drop-shadow(2px 3px 6px #121212);
  filter: drop-shadow(2px 3px 6px #121212);

  & > svg {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;