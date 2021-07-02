import styled from 'styled-components';
import { ContentProfile } from '../Profile/styles';

export const Wrapper = styled(ContentProfile)`
  
  & > button {
    margin-top: 20px;
    padding: 6px 20px;
    background-color: transparent;
    border: solid 2px var(--primary-color);
    border-radius: 5px;
    font-size: 1.2em;
    transition: all .3s ease;
  }

  & > button:hover {
    background-color: var(--primary-color);
    color: #efefef;
  }

  & > span {
    margin: 2em 0;
    font-weight: 600;
    font-size: 1.2em;
    color: var(--primary-color);
  }

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5em;
    background-color: #83bf02;
    color: #efefef;
    padding: .5em;
    font-weight: 600;
    font-size: 1.1em;
    border-radius: 6px;
    transition: all .2s ease;
  }

  & > a:hover {
    filter: brightness(1.1);
    transform: scale(1.05);
  }

  & > a > svg {
    margin-right: 5px;
  }

  & > table {
    //border: solid 1px #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    color: #252437;
    box-shadow: var(--my-shadow);
  }

  & > table > thead {
    background-color: #EEE;
    border-bottom: solid 2px var(--purple-logo);
  }

  & table caption {
    font-size: 1.5em;
    margin: .5em 0 .75em;
  }

  & table tbody > tr:nth-child(odd) {
    background-color: #FFF;
    //border: solid 1px #ddd;
    padding: 1em;
  }

  & table tbody > tr:hover {
    background-color: rgba(122, 117, 188, .1);
  }

  & > table th, table td {
    padding: .62em;
    text-align: center;
  }

  & > table th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  & > table td > span {
    padding: 5px;
    align-items: center;
    display: inline-block;
    border-radius: 4px;
    color: #efefef;
  }

  & > table td > button {
    border: 0;
    padding: 5px;
    margin-right: 5px;
    align-items: center;
    display: inline-block;
    border-radius: 4px;
  }

  & > table td > button > svg {
    vertical-align: middle;
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      border-bottom: solid 3px #ddd;
      display: block;
      margin-bottom: .65em;
      margin-top: 2em;
    }

    table td {
      border-bottom: solid 1px #ddd;
      display: block;
      font-size: .8em;
      text-align: right;
    }

    table td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
    }

    table td:last-child {
      border: 0;
    }
  }
`;