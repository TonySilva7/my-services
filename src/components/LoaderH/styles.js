import styled from 'styled-components';

export const Ball = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  background-color: #7a75bc;
  border-radius: 50%;
  animation: bouncer 0.4s cubic-bezier(.19, .57, .3, .98) infinite alternate;
  z-index: 999;
  cursor: pointer;
`;

export const Bouncer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 70px;
  height: 70px;

  @keyframes bouncer {
    from {
      transform: translateY(0) scaleX(.7);
    }
    to {
      transform: translateY(-40px) scaleX(1);
    }
  }

  ${ Ball }:nth-child(2) {
    animation-delay: 0.1s;
    opacity: .8;
  }
  
  ${ Ball }:nth-child(3) {
    animation-delay: 0.2s;
    opacity: .6;
  }
   
  ${ Ball }:nth-child(4) {
    animation-delay: 0.3s;
    opacity: .4;
  }
`;