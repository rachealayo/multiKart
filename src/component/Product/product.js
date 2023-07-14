import React from "react";
import styled from "styled-components";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
// import Recommend from "../Home/features";
import Banner from "../Assets/banner.jpg"

const Detail = () => {
    return (
        <Container>
          <Wrapper>
             <Left>
                 <Top>
                     UNDER $20 | FREE DELIVERY
                     <Arrows>
                        <AiOutlineArrowLeft/>
                        <AiOutlineArrowRight/>
                     </Arrows>
                 </Top>
                 <Emptyleft></Emptyleft>
             </Left>
             <Right>
                  <Up>
                     <Recommend>RECOMMENDATIONS FOR YOU</Recommend>
                     <Product>
                         <New>New Products</New>
                         <Featured>Featured Products</Featured>
                     </Product>
                  </Up>
                  <Down src={Banner}></Down>
             </Right>
          </Wrapper>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
height: 70vh;
width: 100%;
// background-color: black;
display: flex;
justify-content: center;
align-items: center;


@media screen and (max-width: 768px){
    height: 100vh;
    // width: 100%;
 }
`;

const Wrapper = styled.div`
height: 85%;
width: 90%;
// background-color: hotpink; 
display: flex;
justify-content: space-between;

@media screen and (max-width: 768px){
    height: 100%;
    // width: 100%;
    flex-direction: column;
 }
`;

const Left = styled.div`
 height: 100%;
 width: 33%;
 background-color: white;

 @media screen and (max-width: 768px){
    // height: 100%;
    width: 100%;
 }

`;

const Top = styled.div`
height: 35px;
width: 100%;
background-color: navy;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 3px;
border: none;
font-size: 15px;

@media screen and (max-width: 768px){
    font-size: 15px;
 }
`;

const Emptyleft = styled.div`

`;

const Arrows = styled.div`
// background-color: peru;
color: white;
cursor: pointer;
`;

const Right = styled.div`
height: 100%;
width: 65%;
background-color: white; 

@media screen and (max-width: 768px){
    // height: 100%;
    width: 100%;
 }
`;

const Up = styled.div`
height: 35px;
width: 100%;
background-color: navy;
display: flex;
justify-content: space-between;
border-radius: 3px;
`;

const Recommend = styled.div`
height: auto;
width: 28%;
// background-color: blue;
display: flex;
align-items: center;
font-size: 13px;
color: white;
padding-left: 5px;

@media screen and (max-width: 768px){
    width: 30%;
    font-size: 10px;
 }
`;

const Product = styled.div`
height: auto;
width: 30%;
// background-color: purple;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 13px;
color: white;

@media screen and (max-width: 768px){
    width: 45%;
 }
`;

const New = styled.div`
cursor: pointer;

:hover{
    text-decoration: underline;
}

// @media screen and (max-width: 768px){
//    font-size: 15px;
//  }
`;

const Featured = styled.div`
cursor: pointer;

:hover{
    text-decoration: underline;
}

// @media screen and (max-width: 768px){
//    font-size: 15px;
//  }
`;

const Down = styled.img`
height: 55%;
width: 100%;
background-color: orange;
margin-top: 50px;
// background-image: url("../Assets/banner.jpg");
// background-size: cover;
`;
