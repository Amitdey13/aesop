import styled from "styled-components";
import home from "./home.webp";



export const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
    `;
    
export const StyledTopbar = styled.div`
  text-align: ${(props) => (props.center ? "center" : "start")};
  font-family: Suisse Regular, sans-serif;
  font-size: ${(props) => (props.small ? "14px" : "16px")};
  background: #252525;
  color: #fffef2;
  z-index: 10;
  align-items: center
  font-weight: lighter;
  justify-content: ${(props) => (props.start ? "start" : "center")};
  padding: ${(props) => (props.padding ? "12px 40px 12px 40px" : "0px")};
  line-height: ${(props) => (props.lineheight ? "21px" : "normal")};
  display: flex;
  cursor: ${(props) => (props.pointer ? "pointer" : "auto")};
  letter-spacing: normal;
  border-bottom: ${(props) => (props.hover ? "1px #252525 solid" : "none")};
  transition: .5s ease-in-out;
  &:hover{
      border-bottom: ${(props) => (props.hover ? "1px white solid" : "none")};
  }
`;

export const StyledHome = styled.div`
  background: url(${home});
  background-repeat: no-repeat;
  display: block;
  transition: 0.5s ease-in-out;
  background-size: 125%;
  margin-bottom: 50px;
  background-position-x: 53%;
  background-position-y: 100%;
`;

export const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 100;
  padding: 30px 0px 30px 0px;
`;

export const StyledNavDiv = styled.div`
  padding: 0px 40px;
  display: flex;
  font-size: 16px;
  letter-spacing: normal;                           
`;

export const StyledHomeDiv = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 120px;
  padding-bottom:100px;   
`;

export const StyledNavLink = styled.div`
  cursor: pointer;
  color: #333333;
  text-align: left;
  font-family: Suisse Medium, sans-serif;
  font-size: 14px;
  margin: ${(props) => (props.left ? "0px 0px 0px 30px" : "0px 20px 0px 0px")};
  &:after {
    content: "";
    border-bottom: 1.5px #252525 solid;
    display: block;
    position: relative;
    transform: scaleX(0);
    transform-origin: 0% 100%;
    transition: transform 0.5s;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;


export const StyledHomeText = styled.div`
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  text-align: start;
`;
export const StyleddHomeTextHeading = styled.div`
  font-family: Suisse Medium, sans-serif;
  font-size: 14px;
  line-height: 23.8px;
`;

export const StyledText = styled.div`
  font-size:${props=>props.fontsize};
  font-family: ${props=>props.fontfamily};
  line-height:${props => props.lineheight};
  text-align: start;
  margin-bottom: ${props=>props.marginbottom};
  `
export const StyledButton = styled.button`
  background: ${(props) => props.background};
  font-size: 14px;
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-itmes: center;
  line-height: 19.6px;
  padding: 19px 23px 19px 23px;
  margin-bottom: 20px;
  transition: 0.4s;
  border: 1px rgb(170, 170, 170) solid;
  cursor: pointer;
  &:hover {
    background: #333333;
    color: #fffef2;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  text-align:center;
  padding: 0px 40px 150px 40px;
  flex-direction: column;
`

export const StyledContainer1 = styled.div`
    display:flex;
    padding-bottom:150px;
`

export const StyledContainer1Text = styled.div`
  display:flex;
  flex-direction: column;
  color: #333333;
  font-size: 16px;
  padding: ${props=>props.right?"0px 80px 0px 0px":"0px 0px 0px 80px"};
`
export const StyledContainer1Head = styled.div`
  font-size: 30px;
  line-height: 39.9px;
  margin-bottom: 30px;
`
export const StyledContainer1Tag = styled.div`
  font-size: 14px;
  line-height: 23.8px;
  margin-bottom: 20px;
  font-weight: 500;
`
export const StyledContainer1Description = styled.div`
  line-height: 27.2px;
  margin-bottom: 30px;
  width: 426px;
`
export const StyledProduct = styled.div`
  font-size: 16px;
  display: flex;
  padding-bottom: 150px;
  flex-direction: column;
`
export const StyledProductList = styled.div`
  display: flex;
  transition: 0.6s ease-in-out;
  left:80px;
  transform: translateX(${(props) => props.slide}px);
  position: relative;
`;
export const StyledPagination = styled.div`
  height: 2px;
  width: 100%;
  background: #cccccc;
  margin: 0px 80px 40px 80px;
`;
export const StyledPaginationProgress = styled.div`
  width: ${props=>props.part};
  height: 2px;
  position:relative;
  transition: 0.5s ease-in-out;
  left: ${props => props.left};
  background: #444444;
`
export const StyledScrollButton = styled.div`
  background: #333333;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transform: translateX(${(props) => props.hide});
  position: absolute;
  z-index: 10;
  font-size: 26px;
  color: #ffffff;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const StyledProductContainer = styled.div`
min-width: 453px;
max-width: 453px;
display: flex;
align-items:center;
flex-direction: column;
cursor: pointer;
margin-bottom: 50px;
justify-content: flex-end;
`
export const StyledFooterbar = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`
export const StyledFootercard1 = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction:column;
  width:38%;
  margin-right:3%;
  `
export const StyledFootercard2 = styled.div`
display: flex;
flex-direction:column;
text-align: start;
margin-bottom: 10px;
width:17%;
margin-right:3%;
`;

export const StyledFootercardhead = styled.div`
  font-weight: 700;
  display:flex;
  margin-bottom: 15px;
`
export const StyledFootercardtext = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  color:white;
  display: flex;
`;


// ${props=>props.?"":""}