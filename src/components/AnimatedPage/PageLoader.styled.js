import styled, {keyframes} from 'styled-components';

export const LoaderWrapper = styled.div`
position:fixed;
top:0;
left:0;
width: 100%;
height: 100%;
background : rgba(255, 133, 28, 0.6);
display:flex;
align-items: center;
justify-content: center;
z-index: 200;
`
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const QloaderSvg = styled.svg`
width: 50%;
height: 50%;
stroke: black;
fill: black !important;
> path {
    stroke: black !important;
}
animation: ${spin} 1s linear infinite;
`

