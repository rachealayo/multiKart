import React from "react"
import styled from "styled-components"

const Viewers = () =>{
    return(
        <Container>
            <Top>
               <Textwrap>
                  <H3>Special Offer</H3>
                  <H1>TOP COLLECTION</H1>
                  <Line></Line>
                  <Text>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has between
                     <Textt>the industry's standard dummy text ever since the 1500s.</Textt>
                  </Text>
               </Textwrap>
            </Top>
            <Cards>
                <Cardwrap>
                  <Card>
                    <Up></Up>
                    <Down>
                      <First></First>
                      <Sec></Sec>
                      <Third></Third>
                    </Down>
                  </Card>
                  <Card>
                  <Up></Up>
                    <Down>
                      <First></First>
                      <Sec></Sec>
                      <Third></Third>
                    </Down>
                  </Card>
                  <Card>
                  <Up></Up>
                    <Down>
                      <First></First>
                      <Sec></Sec>
                      <Third></Third>
                    </Down>
                  </Card>
                  <Card>
                  <Up></Up>
                    <Down>
                      <First></First>
                      <Sec></Sec>
                      <Third></Third>
                    </Down>
                  </Card>
                </Cardwrap> 
            </Cards>
        
        </Container>
    )
}
export default Viewers;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;

  @media Screen and (max-width: 768px){
    height: auto;
  }
`;

const Top = styled.div`
  height: 40%;
  width: 100%;
  //  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  @media screen and (max-width:768px){
   flex-direction: column;
    width: 95%;
  } 
`;

const Textwrap = styled.div`
  height: 63%;
  width: 50%;
// background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

 @media screen and (max-width: 768px){
    flex-direction: column;
    width: 95%;
  } 
`;

const H3 = styled.div`
  font-size: 15px;
//   font-weight: bold;
`;

const H1 = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Line = styled.div`
  width: 60px;
  border: 2px solid darkblue;
`;

const Text = styled.div`
  height: 40px;
  font-size: 12px;
//   background-color: yellow;
  margin-top: 10px;
  display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

const Textt = styled.div`
  font-size: 12px;
//   background-color: blue;
  margin-top: 10px;
  width: 310px;
`;

const Cards = styled.div`
    // background-color: teal;
   height: 60%;
   width: 100%;
   border-radius:10px;
   display: flex;
   justify-content: center;
   align-items: center;

    @media screen and (max-width: 768px){
        height: 200px;
        width: 100%;
        margin: 10px 0;
    }
`;

const Cardwrap = styled.div`
  height: 90%;
  width: 95%;
  margin: 0 5px;
  // background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;

    @media screen and (max-width: 768px){
        height: 200px;
        width: 100%;
        margin: 10px 0;
    }
`;

const Card = styled.div`
background-color: white;
height: 95%;
width: 23%;
margin: 0 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Up = styled.div`
background-color: grey;
height: 70%;
width: 100%;
`;

const Down = styled.div`
background-color: transparent;
height: 25%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const First = styled.div`
background-color: grey;
height: 10px;
width: 30%;
`;

const Sec = styled.div`
background-color: grey;
height: 10px;
width: 60%;
`;

const Third = styled.div`
background-color: grey;
height: 10px;
width: 50%;
`;
