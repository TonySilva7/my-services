import styled from 'styled-components';
import { ContentProfile } from '../Profile/styles';

export const Wrapper = styled(ContentProfile)`

  & > form textarea {
      height: 105px;
      resize: none;
  }
  
  & > form input[type="radio"] {
    margin: 15px 7px 0 0;
  }
  
  & > form input[type="radio"]:not(:first-child) {
    margin-left: 15px;
  }
  
  & > form > div {
    display: flex;
    align-items: baseline;
    padding-left: .5em;
    font-size: 1.3em;
    margin-bottom: 15px;
  }
`;