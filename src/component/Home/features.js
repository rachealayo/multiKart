import React from "react";
import styled from "styled-components";
import slider3 from "../Assets/slider3.jpg";
import headphone from "../Assets/headphone.jpg";
import legs from "../Assets/legs.jpg";
import lovebox from "../Assets/lovebox.jpg";

const Recommend = () => {
    return (
        <Container>
            <Wrap>
              <Cardwrap>
                   <Cards>
                       <Card src={slider3} alt="img1"></Card>
                       <Card1 src={headphone} alt="img2"></Card1>
                       <Card2 src={legs} alt="img3"></Card2>
                       <Card3 src={lovebox} alt="img4"></Card3>
                    </Cards>
                    <Hold>
                        <Up>SAVE 30%</Up>
                        <Down>CAMERA</Down>
                    </Hold>
                    <Hold1>
                        <Up1>SAVE 60%</Up1>
                        <Down1>BAGS</Down1>
                    </Hold1>
                    <Hold2>
                        <Up2>SAVE 60%</Up2>
                        <Down2>TOYS</Down2>
                    </Hold2>
                    <Hold3>
                        <Up3>SAVE 60%</Up3>
                        <Down3>SHOES</Down3>
                    </Hold3>
                    
              </Cardwrap>
            </Wrap>
           
        </Container>
    )
}

export default Recommend;

const Container = styled.div`
height: auto;
width: 100%;
// background-color: black;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrap = styled.div`
height: 100%;
width: 100%;
// background-color: red;
`;

const Cardwrap = styled.div`
height: auto;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
color: red;
// background-color: green;
`;

const Cards = styled.div`
width: 95%;
margin-bottom: 10px;
display: flex;
align-items: center;
color: red;
// background-color: red;
flex-wrap: wrap;
justify-content: center;
`;

const Card = styled.img`
height: 200px;
width: 250px;
border-radius: 0.5rem;
margin: 10px;


@media screen and (max-width: 768px){
    height: 200px;
    width: 100%;
    // background-color: salmon;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
 }

 :hover{
    // background-color: plum;
    border: 1px solid black;
    transition: all ease-in-out 400ms;
    cursor: pointer;
    transform: scale(1.04);
}
`;

const Hold = styled.div`
width: 120px;
// background-color: hotpink;
color: black;
position: absolute;
top: 600px;
left: 210px;

@media screen and (max-width: 768px){
    width: 120px;
    // background-color: salmon;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    position: absolute;
    left: 350px; 
    top: 570px;
 }

`;

const Up = styled.div`
color: grey;
font-size: 20px;
`;
const Down = styled.div`
font-size: 25px;
font-weight: bold;
`;

const Card1 = styled.img`
height: 200px;
width: 250px;
border-radius: 0.5rem;
margin: 10px;


@media screen and (max-width: 768px){
    height: 200px;
    width: 100%;
    background-color: salmon;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
 }

 :hover{
    // background-color: plum;
    border: 1px solid black;
    transition: all ease-in-out 400ms;
    cursor: pointer;
    transform: scale(1.04);
}
`;

const Hold1 = styled.div`
width: 90px;
color: black;
position: absolute;
top: 600px;
left: 500px;
// background-color: purple;

@media screen and (max-width: 768px){
    width: 120px;
    // background-color: blue;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    position: absolute;
    left: 400px; 
    top: 780px;
 }
`;

const Up1 = styled.div`
color: grey;
// background-color: yellow;
font-size: 20px;
`;
const Down1 = styled.div`
font-size: 25px;
font-weight: bold;
margin-left: 10px;
// background-color: red; 
`;

const Card2 = styled.img`
height: 200px;
width: 250px;
border-radius: 0.5rem;
margin: 10px;

@media screen and (max-width: 768px){
    height: 200px;
    width: 100%;
    background-color: salmon;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
 }

 :hover{
    // background-color: plum;
    border: 1px solid black;
    transition: all ease-in-out 400ms;
    cursor: pointer;
    transform: scale(1.04);
}
`;

const Hold2 = styled.div`
width: 90px;
color: black;
position: absolute;
top: 600px;
left: 770px;
// background-color: purple;

@media screen and (max-width: 768px){
    width: 120px;
    // background-color: salmon;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    position: absolute;
    left: 400px; 
    top: 1000px;
 }
`;

const Up2 = styled.div`
color: grey;
// background-color: yellow;
font-size: 20px;
`;
const Down2 = styled.div`
font-size: 25px;
font-weight: bold;
margin-left: 10px;
// background-color: red; 
`;

const Card3 = styled.img`
height: 200px;
width: 250px;
color: red;
background-color: cyan;
border-radius: 0.5rem;
margin: 10px;

@media screen and (max-width: 768px){
    height: 200px;
    width: 100%;
    // background-color: salmon;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
 }

 :hover{
    // background-color: plum;
    border: 1px solid black;
    transition: all ease-in-out 400ms;
    cursor: pointer;
    transform: scale(1.04);
}
`;
const Hold3 = styled.div`
width: 90px;
color: black;
position: absolute;
top: 600px;
right: 100px;
// background-color: purple;

@media screen and (max-width: 768px){
    width: 120px;
    // background-color: green;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    position: absolute;
    top: 1200px;
    left: 100px;
 }
`;

const Up3 = styled.div`
color: grey;
// background-color: yellow;
font-size: 20px;
`;
const Down3 = styled.div`
font-size: 25px;
font-weight: bold;
margin-left: 10px;
// background-color: red; 
`;