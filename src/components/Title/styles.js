import styled from 'styled-components';

export const MyTitle = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 5px;
  background-color: #f8f8f8;
  padding: .8em;
  width: 100%;
  
  & > span {
    margin-left: 1em;
    font-size: 1.5em;
  }

  @media screen and (max-width: 700px) {
    margin: 1em 16px 1em 16px;
  }
`;