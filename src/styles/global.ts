import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Color palette */
    --white-1:      #FFFFFF;
    --white-2:      #FDFDFD;
    --white-3:     #FDFDFDA0;
    --grey:         #E1DCD5;
    --grey-1:       #333333;
    --grey-1-fade: #3333337b;
    --grey-2:       #f8f8f8;
    --grey-3:       #828282;
    --background:   #E5E5E5;
    --gray-6:      #f7f7f780;
    --gray-600:     #f2f2f2;
    --grey-100:     #F5F6FA;
    --grey-200:    #FFFFFF6A;
    --brand-1:      #AA8232;
    --brand-2:      #CF960D;
    --brand-3:      #D5B69A;
    --brand-4:      #F2994A;
    --red:          #B90032;
    --tile-blue:    #009BAA;
    --blue:         #00002D;
    --black:        #000000;
    --black-fade:  #00000050;

    /* Borders */
    --card-content-border: 0.5px solid #F2F2F2;

    /* Background-image */
    --departments-hover-in: linear-gradient(
        181.19deg, 
        #0000002e 0%, 
        #00000091 29%, 
        #000000bd 67%, 
        #000000b5 100%
    );
    --departments-hover-out: linear-gradient(
        181.19deg, 
        #00000000 28.75%, 
        #0000001a 67.96%, 
        #000000af 101.26%
    );
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section, label {
    display: block;
  }

  body {
    line-height: 1;
    font-family: 'Open Sans';

    &::-webkit-scrollbar {
    width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--ligth-grey);
      border-radius: 20px;
    }
  }

  input , button, textarea, select {
    font-family: inherit ;
  }

  ol, ul {
    list-style: none;
  }

  a {
    color: inherit;
    font-family: inherit;
    font-weight: 600;
    text-decoration: underline transparent;
    transition: 200ms ease-in-out;
  }

  html,body, #root{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4 ,h5 ,h6 , p  {
    margin:0px
  }

  button {
    cursor: pointer;
    outline: none;
  }
`;
