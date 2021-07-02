import styled from 'styled-components';

export const MyModal = styled.div`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, .5) ;
  z-index: 999;
`;

export const Container = styled.div`
  position: fixed;
  max-width: 600px;
  top: 15%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 5em 2em;
  border-radius: 7px;
  color: var(--primary-color);
  box-shadow: 0 0 20px rgba(37, 36, 55, .4);

  background-color: #efefef;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1em;
    border: 0;
    border-radius: 5px;
    color: #efefef;
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: #7a75bc;
    padding: 5px 8px;

    transition: all .2s ease;
  }

  button > svg {
    margin-right: 5px;
    transition: all .5s ease;
  }

  button:hover {
    box-shadow: 1px 4px 9px -6px rgba(37, 36, 55, 0.7);
    svg {
      transform: rotate(-90deg);
    }
  }

  div > h2 {
    margin-bottom: 1.1em;
    font-size: 2em;
  }

  div > p {
    padding-top: 0.5em;
    white-space: pre-wrap;
    font-size: 1.2em;
    font-style: italic;
  }

  @media screen and (max-width: 600px) {
    margin: 0 8px;
  }
`;

export const MyRow = styled.div`
  
  margin-bottom: .8em;
  
  span {
    font-weight: bold;
    font-size: 1.2em;
  }
  
  span > i {
    font-weight: 400;
    margin-left: .1em;
    padding: 2px 8px;
    border-radius: 5px;
  }
`;