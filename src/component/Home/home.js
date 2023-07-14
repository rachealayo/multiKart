import React from "react";
import styled from "styled-components";
import SliderPage from "../Slider/slider";
import Feature from "./features";
import Shop from "../Shop/shop";
// import Background from "../Assets/28.jpg";
import Product from "../Product/product";
import Page from "../Pages/page";
import Footer from "../Footer/footer";

const Home = () =>{
    return(
        <Container>
            <SliderPage/>
            <Feature/>
            <Shop/>
            <Section>
                <Fixhold>
                    <Sale>SALE</Sale>
                    <Fashion>FASHION TRENDS</Fashion>
                    <Offer>SPECIAL OFFER</Offer>
               </Fixhold>
            </Section>
            {/* <Fixed></Fixed> */}

            <Product/>
            <Page/>
            <Footer/>
        </Container>
    )
}
export default Home;

const Container = styled.div`
   height: auto;
   width: 100%;
   background-color: transparent;
`;

const Section = styled.div`
height: 80vh;
width: 100%;
background-image: url(/Mulitikart/5.jpg);
background-color: linen;
background-position: center;
backgroud-size: cover;
//    background-attachment: fixed;
position: static;
display: flex;
align-items: center;
justify-content: center;
`;

// const Fixed = styled.div`
//    height: 80vh;
//    width: 100%;
//    background-image: url(/Mulitikart/fashion.jpg);
//    background-color: blue;
//    background-position: center;
//    backgroud-size: cover;
// //    background-attachment: fixed;
//   position: static;
// `;

const Fixhold = styled.div`
   height: 150px;
   width: 300px;
   background-color: transparent;
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-direction: column;
   border: 2px solid grey;
`;

const Sale = styled.div`
color: rgba(0, 0, 139, 0.398);
font-size: 45px;
font-weight: bold;

`;

const Fashion = styled.div`
font-size: 35px;
// font-weight: bold;
color: black;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Offer = styled.div`
font-family: 'Courier New', Courier, monospace;
`;