import styled from 'styled-components';

export const  Container = styled.div`
  display: flex;
  position: relative;
  height: 7em;
  width: 7em;
`;

export const  Content = styled.div`
  display: flex;
  position: relative;
  border-radius: 50%;
  height: 80%;
  width: 80%;
  
  @keyframes main {
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes my-scale {
    0% {
      transform: scale(.4);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 100%;
    }
  }

  & {
    animation: main 2s infinite normal ease;
  }

  span {
    animation: my-scale 1s infinite alternate ease;
    display: flex;
    position: relative;
    border-radius: 50%;
    background-color: #5047a9;
  }

  span:first-child {
    animation-delay: .1s;
    position: absolute;
    top: 0%;
    right: 42%;
    opacity: 20%;

    height: .5em;
    width: .5em;


  }

  span:nth-child(2) {
    animation-delay: 100ms;
    position: absolute;

    top: 5.7%;
    right: 24%;
    opacity: 30%;

    height: .5em;
    width: .5em;
  }

  span:nth-child(3) {
    animation-delay: calc(100ms * 2);
    position: absolute;

    top: calc(8.7% * 2);
    right: 8%;
    opacity: 40%;

    height: .7em;
    width: .7em;
  }

  span:nth-child(4) {
    animation-delay: calc(100ms * 3);
    position: absolute;

    top: calc(12.7% * 3);
    right: 1%;
    opacity: 60%;

    height: .8em;
    width: .8em;
  }

  span:nth-child(5) {
    animation-delay: calc(100ms * 4);
    position: absolute;

    top: calc(16% * 4);
    right: 7%;
    margin-right: 0;
    opacity: 70%;

    height: .9em;
    width: .9em;
  }

  span:nth-child(6) {
    animation-delay: calc(100ms * 5);
    position: absolute;

    top: calc(16.2% * 5);
    right: 27%;
    opacity: 90%;

    height: .9em;
    width: .9em;
  }


  span:nth-child(7) {
    animation-delay: calc(100ms * 6);
    position: absolute;

    top: calc(20% * 4);
    left: 25%;
    opacity: 90%;

    height: 1em;
    width: 1em;
  }

  span:nth-child(8) {
    animation-delay: calc(100ms * 7);
    position: absolute;

    top: calc(19.7% * 3);
    left: 4%;
    opacity: 100%;

    height: 1em;
    width: 1em;
  }

  span:nth-child(9) {
    animation-delay: calc(100ms * 8);
    position: absolute;

    top: calc(15.7% * 2);
    left: 0;
    opacity: 100%;

    height: 1.1em;
    width: 1.1em;
  }

  span:last-child {
    animation-delay: calc(100ms * 9);
    position: absolute;

    top: 5.7%;
    left: 16%;
    opacity: 100%;

    height: 1.2em;
    width: 1.2em;
  }

`;
