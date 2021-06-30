import styled from 'styled-components';
import { ContentProfile } from '../Profile/styles';

export const Wrapper = styled(ContentProfile)`
  // Redefine atributos de ContentProfile
  & > form > label:first-child {
    align-items: flex-start;
    cursor: default;
    border-radius: 0;
  }
  
  //..........................................
`;