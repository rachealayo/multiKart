import React from "react";
import styled from "styled-components";

const Page = () => {
    return(
        <Section>
            <Wrap>
                <Top>
                    <Shipping>
                        <H1>FREE SHIPPING</H1>
                        <Text>Free Shipping World Wide</Text>
                    </Shipping>
                    <Service>
                        <H1>24 x 7 SERVICE</H1>
                        <Text>Online Service For 24 x 7</Text>
                    </Service>
                    <Offer>
                        <H1>FESTIVAL OFFER</H1>
                        <Text>New Online Special Festival Offer</Text>
                    </Offer>
                </Top>
                <Bottom>
                    <Hashtag># INSTAGRAM</Hashtag>
                    <Know>
                        <Left>
                            <H1>KNOW IT ALL FIRST</H1>
                            <Text>Never Miss Anything From Multikart By Signing Up To Our Newsletter</Text>
                        </Left>
                        <Right>
                            <Email placeholder="Enter your email"></Email>
                            <Subscribe>SUBSCRIBE</Subscribe>
                        </Right>
                    </Know>
                </Bottom>
            </Wrap>
        </Section>
    )
}

export default Page;

const Section = styled.div`
height: 80vh;
width: 100%;
// background-color: orange;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrap = styled.div`
height: 90%;
width: 95%;
// background-color: pink;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`;

const Top = styled.div`
height: 45%;
width: 100%;
// background-color: green;
border-top: 1px solid grey;
border-bottom: 1px solid grey;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Shipping = styled.div`
height: 70%;
width: 34%;
// background-color: tomato;
color: darkblue;
border-right: 1px solid grey;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Service = styled.div`
height: 70%;
width: 34%;
// background-color: orange;
color: darkblue;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Offer = styled.div`
height: 70%;
width: 34%;
// background-color: darkblue;
color: darkblue;
border-left: 1px solid grey;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const H1 = styled.div`
font-size: 22px;
font-weight: bold;
`;

const Text = styled.div`
font-size: 12px;
`;

const Bottom = styled.div`
height: 40%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Hashtag = styled.div`
font-size: 22px;
font-weight: bold;
color: darkblue;
`;

const Know = styled.div`
height: 70%;
width: 100%;
background-color: rgba(116, 116, 255, 0.111);
color: darkblue;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid grey;
`;

const Left = styled.div`
height: 60%;
width: 50%;
display: flex;
justify-content: center;
flex-direction: column;
border-right: 1px solid grey;
`;

const Right = styled.div`
height: 60%;
width: 40%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Email = styled.input`
height: 40%;
width: 65%;
background-color: white;
padding-left: 5px;
`;

const Subscribe = styled.button`
height: 50%;
width: 30%;
background-color: darkblue;
color: white;
border: none;
cursor: pointer;
`;
