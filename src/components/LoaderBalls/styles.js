import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  @keyframes load-balls {
    from {
      opacity: .1;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes turn-balls {
    to {
      transform: rotate(180deg);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  border-radius: 50%;

  svg {
    animation: turn-balls 1.9s ease infinite;

    ${ ({ size }) => css`
      width: ${ size }px;
      height: ${ size }px;
    ` }
  }

  // ............................
  svg > path:nth-child(2) {
    ${ ({ fill }) => css`
      fill: ${ fill };
    ` };
    animation: var(--my-anime);
    animation-delay: .1s;
  }

  svg > path:first-child {
    ${ ({ fill }) => css`
      fill: ${ fill };
    ` };
    animation: var(--my-anime);
    //opacity: .2;
  }

  svg > path:nth-child(3) {
    ${ ({ fill }) => css`
      fill: ${ fill };
    ` };
    animation: var(--my-anime);
    animation-delay: .1s;
  }

  svg > path:nth-child(4) {
    ${ ({ fill }) => css`
      fill: ${ fill };
    ` };
    animation: var(--my-anime);
    animation-delay: .2s;
  }

  svg > path:nth-child(5) {
    ${ ({ fill }) => css`
      fill: ${ fill };
    ` };
    animation: var(--my-anime);
    animation-delay: .3s;
  }

  svg > path:nth-child(6) {
    ${ ({ fill }) => css`
      fill: ${ fill };
    ` };
    animation: var(--my-anime);
    animation-delay: .4s;
  }

  svg > path:nth-child(7) {
    ${ ({ fill }) => css`
      fill: ${ fill };
    ` };
    animation: var(--my-anime);
    animation-delay: .4s;
  }

  svg > path:nth-child(8) {
    ${ ({ fill }) => css`
      fill: ${ fill };
    ` };
    animation: var(--my-anime);
    animation-delay: .5s;
  }

  svg > path:nth-child(9) {
    ${ ({ fill }) => css`
      fill: ${ fill };
    ` };
    animation: var(--my-anime);
    animation-delay: .6s;
  }

  svg > path:nth-child(10) {
    ${ ({ fill }) => css`
      fill: ${ fill };
    ` };
    animation: var(--my-anime);
    animation-delay: .7s;
  }

  svg > path:nth-child(11) {
    ${ ({ fill }) => css`
      fill: ${ fill };
    ` };
    animation: var(--my-anime);
    animation-delay: .8s;
  }

  svg > path:last-child {
    ${ ({ fill }) => css`
      fill: ${ fill };
    ` };
    animation: var(--my-anime);
    animation-delay: .9s;
  }
`;