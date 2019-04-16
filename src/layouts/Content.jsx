import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import prism from '../styles/prism';
import theme from '../../config/theme';

const Wrapper = styled.div`
  ${prism};
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 1.1rem;
    font-family: 'PT Serif', serif;
    line-height: 2;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  }
  img {
    border: 1px black solid;
  }
  table {
  display: block;
    width: 100%;
    font-size:1rem;
    td {
      text-align: left;
      padding-bottom: .25rem;;
      vertical-align: baseline;
            @media screen and (max-width: 420px) {
        display: block;
        width: 100vw;
      }
    }
    td:first-of-type{
      width: 220px;
      font-style: italic;
      @media screen and (max-width: 420px) {
        display: block;
        width: 100vw;
        color: red;
      }
    }
    th {
      text-align: left;
      padding-bottom: .25rem;;
      vertical-align: baseline;
            @media screen and (max-width: 420px) {
        display: block;
        width: 100vw;
      }
    }
    th:first-of-type{
      width: 220px;
      font-style: italic;
      @media screen and (max-width: 420px) {
        display: block;
        width: 100vw;
        color: red;
      }
    }
  }
  a:not(.gatsby-resp-image-link):not(.anchor) {
    color: black;
    box-shadow: inset 0 -2px 0 ${props => props.theme.colors.primary.base};
    border-bottom: 1px solid ${props => props.theme.colors.primary.base};
    transition: ${props => props.theme.transitions.default.transition};
    text-decoration: none;
    &:hover,
    &:focus {
      background: ${props => props.theme.colors.primary.base};
      color: black;
    }
  }
  blockquote {
    background-position: 9px 0px;
    background-repeat: no-repeat;
    background-color: #FCFCFC;
    border: solid 1px #203A43;
    line-height: 18px;
    overflow: hidden;
    padding: 15px 20px;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
  }
  h1 {
    margin-top: 3rem;
    font-size: 2.5rem;
  }
  h2 {
    margin-top: 1rem;
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1.125rem;
  }
  h6 {
    font-size: 1.11rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: inline-block;
    position: relative;
    font-family: 'PT-Sans', sans-serif;
    font-weight: bold;
    a {
      box-shadow: none;
      border-bottom: none;
      &:hover,
      &:focus {
        background: none;
      }
    }
    &:hover {
      .anchor svg {
        opacity: 0.8;
      }
    }
  }
`;

const Content = ({ input }) => (
  <Wrapper dangerouslySetInnerHTML={{ __html: input }} />
);

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};
