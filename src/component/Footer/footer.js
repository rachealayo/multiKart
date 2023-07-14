import React from "react";
import styled from "styled-components";
import logo from "../Assets/18.png";
import {CgFacebook, CgGoogle, CgCopyright} from "react-icons/cg";
import {BsTwitter, BsInstagram, BsWifi, BsTelephoneFill} from "react-icons/bs";
import {GoLocation} from "react-icons/go";
import {AiOutlineMail} from "react-icons/ai";
import {FaFax} from "react-icons/fa";
import visa from "../Assets/visa.png";
import mastercard from "../Assets/mastercard.png";
import paypal from "../Assets/paypal.png";
import america from "../Assets/american-express.png";
import discover from "../Assets/discover.png";

const Footer = () =>{
    return(
        <Container>
          <LeftHold>
              <Leftwrap>
                    <Left1>
                        <Up>
                            <Logo src={logo}/>
                            <Lorem>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                               <p> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                enim ad minim veniam.
                            </Lorem>
                        </Up>
                        <Down>
                            <Socialmed>
                                <CgFacebook/>
                                <CgGoogle/>
                                <BsTwitter/>
                                <BsInstagram/>
                                <BsWifi/>
                            </Socialmed>
                            <Copyright>
                                <CgCopyright/> 2022-23 themeforest powered by pixelstrap
                            </Copyright>
                        </Down>
                    </Left1>
                    <Right1>
                        <Acc>MY ACCOUNT</Acc>
                        <AccFeatures>
                            <AccHold>
                                <span>Womens</span>
                                <span>Clothing</span>
                                <span>Accessories</span>
                                <span>Featured</span>
                            </AccHold>
                        </AccFeatures>
                    </Right1>
               </Leftwrap>
          </LeftHold>
          <RightHold>
             <Rightwrap>
                 <Left>
                     <Choose>WHY WE CHOOSE</Choose>
                     <Choosefeature>
                        <span>Shipping & Return</span>
                        <span>Secure Shopping</span>
                        <span>Gallary</span>
                        <span>Affiliates</span>
                        <span>Contacts</span>
                     </Choosefeature>
                 </Left>
                 <Right>
                        <Info>
                            <Store>STORE INFORMATION</Store>
                            <Details>
                                <Location>
                                    <GoLocation/>
                                    <Hold>Multikart Demo Store, Demo Store India 345-659</Hold>
                                </Location>
                                <Phone>
                                    <BsTelephoneFill/>
                                    <Hold> Call Us: 07045031780</Hold>
                                </Phone>
                                <Email>
                                    <AiOutlineMail/>
                                   <Hold> Email Us: rachealojo306@gmail.com;</Hold>
                                </Email>
                                <Fax>
                                    <FaFax/>
                                    <Hold>Fax: 123456</Hold>
                                </Fax>
                            </Details>
                        </Info>
                        <Logohold>
                            <Logos>
                             <Visahold src={visa}></Visahold>
                             <Mastercardhold src={mastercard}></Mastercardhold>
                             <Paypalhold src={paypal}></Paypalhold>
                             <Americahold src={america}></Americahold>
                             <Discoverhold src={discover}></Discoverhold>
                            </Logos>
                        </Logohold>

                 </Right>
             </Rightwrap>
          </RightHold>
        </Container>
    )
}
export default Footer;

const Container = styled.div`
   height: 60vh;
   width: 100%;
   background-color: gainsboro;
   display: flex;
`;

const LeftHold = styled.div`
   height: 100%;
   width: 55%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Leftwrap = styled.div`
   height: 90%;
   width:95%;
//    background-color: blue;
   display: flex;
   justify-content: space-between;

`;

const Left1 = styled.div`
   height: 100%;
   width: 60%;
   padding-left: 30px;
`;

const Up = styled.div`
   height: 40%;
   width: 85%;
   margin-top: 30px;

   @media screen and (max-width: 768px){
        height: 20%;
    }
`;

const Logo = styled.img`
   height: 30px;
   width: 150px;

   @media screen and (max-width: 768px){
        height: 20px;
        width: 100px;
    }
`;

const Lorem = styled.p`
   height: 60px;
   font-size: 10px;
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   color: grey;

   @media screen and (max-width: 768px){
        display: none; 
    }
`;

const Down = styled.div`
   height: 50%;
   width: 70%;
//    background-color: green;
   display: flex;
   justify-content: space-between;
   flex-direction: column;

   @media screen and (max-width: 768px){
    height: 70%;
    width: 100%;
}
`;

const Socialmed = styled.div`
   height: 30px;
   width: 100%;
//    background-color: red;
   margin-top: 20px;
   font-size: 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media screen and (max-width: 768px){
        height: 80%;
        flex-direction: column;
    }
`;

const Copyright = styled.div`
   height: 40px;
   width: 100%;
   background-color: white;
   color: grey;
   font-size: 10px;
   display: flex;
   align-items: center;

   @media screen and (max-width: 768px){
      width: 100%;
      font-size: 6px;
   }
`;

const Right1 = styled.div`
   height: 100%;
   width: 30%;
`;

const Acc = styled.div`
   height: 20%;
   width: 100%;
   font-size: 23px;
   font-weight: bold;
   display: flex;
   align-items: center;

   @media screen and (max-width: 768px){
      width: 100%;
      font-size: 12px;
   }
`;

const AccFeatures = styled.div`
   height: 40%;
   width: 100%;
`;

const AccHold = styled.div`
   height: 100%;
   width: 100%;
   // background-color: darkred;
   color: grey;
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   font-size: 10px;
   text-decoration: underline;
   cursor: pointer;

   @media screen and (max-width: 768px){
     display: none;
   }
`;

const RightHold = styled.div`
   height: 100%;
   width: 50%;
   background-color: transparent;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Rightwrap = styled.div`
   height: 90%;
   width: 95%;
   display: flex;
`;

const Left = styled.div`
   height: 100%;
   width: 45%;
`;

const Choose = styled.div`
height: 20%;
width: 100%;
font-size: 23px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
// background-color: darkred;

@media screen and (max-width: 768px){
   width: 100%;
   font-size: 12px;
}
`;

const Choosefeature = styled.div`
   height: 50%;
   width: 100%;
   padding-left: 33px;
   color: grey;
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   font-size: 10px;
   text-decoration: underline;
   cursor: pointer;

   @media screen and (max-width: 768px){
      display: none;
   }
`;

const Right = styled.div`
   height: 100%;
   width: 50%;
`;

const Info = styled.div`
   height: 80%;
   width: 100%;
`;


const Store = styled.div`
height: 25%;
width: 100%;
font-size: 23px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 768px){
   width: 100%;
   font-size: 12px;
}
`;

const Details = styled.div`
height: 60%;
width: 100%;
display: flex;
justify-content: space-between;
flex-direction: column;

@media screen and (max-width: 768px){
   display: none;
}
`;

const Hold = styled.div`
height: auto;
width: 100%;
margin-left: 10px;
`;

const Location = styled.div`
height: 40px;
width: 100%;
font-size: 10px;
display: flex;
align-items: center;
`;

const Phone = styled.div`
height: 20px;
width: 100%;
font-size: 10px;
display: flex;
align-items: center;
`;

const Email = styled.div`
height: 20px;
width: 100%;
font-size: 10px;
display: flex;
align-items: center;
`;

const Fax = styled.div`
height: 20px;
width: 100%;
font-size: 10px;
display: flex;
align-items: center;
`;

const Logohold= styled.div`
   height: 20%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Logos= styled.div`
   height: 40px;
   width: 80%;
   background-color: white;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Visahold= styled.img`
   height: 30px;
   width: 30px;
`;

const Mastercardhold= styled.img`
   height: 30px;
   width: 30px;
`;

const Paypalhold= styled.img`
   height: 30px;
   width: 30px;
`;

const Americahold= styled.img`
   height: 30px;
   width: 30px;
`;

const Discoverhold= styled.img`
   height: 30px;
   width: 30px;
`;