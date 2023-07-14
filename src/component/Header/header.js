import React, {useState} from "react";
import styled from "styled-components";
import {AiFillHeart, AiOutlineSearch, AiOutlineSetting} from "react-icons/ai"
// import {FcFilmReel} from "react-icons/fc"
import {BsTelephoneFill, BsFillPersonFill} from "react-icons/bs";
import logo from "../Assets/18.png"
import {FaBars, FaTimes} from "react-icons/fa"


const Header = () => {

    const [toggle, setToggle] = useState(false)

     const handleToggle = () =>{
        setToggle(!toggle)
     }


     return(
        <Hold>
            <Container1>
               <Wrap>
                  <Left>
                   <Greet>Welcome to Our store Multikart</Greet>
                      <Number>
                         <BsTelephoneFill/>
                         <H3>Call Us: 07045031780</H3>
                      </Number>
                     </Left>
                    <Right>
                     <Wishlist>
                         <AiFillHeart/>
                         <H2>Wishlist</H2>
                     </Wishlist>
                     <Account>
                        <BsFillPersonFill/>
                        <H3>My Account</H3>
                     </Account>
                    </Right>
               </Wrap>
            </Container1>
            <Container2>
              <Wrapper>
                 <Left1>
                    <FaBars/>
                    <Logo src={logo} alt="logo"/>
                 </Left1>
                 <NavWrap toggle={toggle}>
                     <NavHold>
                            <Select>
                             <option>HOME</option>
                             <option>Shop</option>
                             <option>Product</option>
                             <option>Features</option>
                             <option>Pages</option>
                             <option>Blogs</option>
                            </Select>
                            <Select>
                             <option>SHOP</option>
                             <option>Home</option>
                             <option>Product</option>
                             <option>Features</option>
                             <option>Pages</option>
                             <option>Blogs</option>

                            </Select>
                            <Select>
                             <option>PRODUCTS</option>
                             <option>Home</option>
                             <option>Shop</option>
                             <option>Features</option>
                             <option>Pages</option>
                             <option>Blogs</option>
                            </Select>
                            <Select>
                             <option>FEATURES</option>
                             <option>Home</option>
                             <option>Shop</option>
                             <option>Product</option>
                             <option>Pages</option>
                             <option>Blogs</option>
                            </Select>
                            <Select>
                             <option>PAGES</option>
                             <option>Home</option>
                             <option>Shop</option>
                             <option>Product</option>
                             <option>Features</option>
                             <option>Blogs</option>
                            </Select>
                            <Select>
                             <option>BLOGS</option>
                             <option>Home</option>
                             <option>Shop</option>
                             <option>Product</option>
                             <option>Features</option>
                             <option>Pages</option>
                            </Select>
                      </NavHold>
                      <Icons>
                         <AiOutlineSearch style={{height:25, width:25}}/>
                         <AiOutlineSetting style={{height:25, width:25}}/>
                         <img src="/Multikart/cart.png" alt="cart"style={{height:25, width:25}}/>
                      </Icons>
                     
                  </NavWrap>
                  <BurgerHold onClick={handleToggle}>
                   { toggle ? <FaTimes/> : <FaBars/>}
                  </BurgerHold>
              </Wrapper>
          </Container2>
        </Hold>
       
    )

    }
  
export default Header;

const Hold = styled.div`
height: 15vh;
width: 100%;
background-color: hotpink;
display: flex;
flex-direction: column;
`;

const Container1 = styled.div`
   height: 5vh;
   width: 100%;
   background-color: navy;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 500;
`;

const Wrap = styled.div`
   height: 100%;
   width: 90%;
   display:flex;
   justify-content: space-between;
   align-items: center
`;

const Right = styled.div`
   height: 100%;
   width: 200px;
//    background-color: gold;
   color: white;
   display:flex;
   justify-content: space-between;
`;

const Wishlist = styled.div`
    width: 30%;
//    background-color: peru;
   display:flex;
   justify-content: space-between;
   align-items: center
`;

const Account = styled.div`
    width: 45%;
//    background-color: pink;
   display: flex;
   justify-content: space-between;
   align-items: center
`;

const H2 = styled.div`
    font-size: 12px;
    color: white;
    text-decoration: underline;
`;

const Left = styled.div`
   height: 100%;
   width: 30%;
//    background-color: red;
   display:flex;
   justify-content: space-between;
   align-items: center
`;

const Greet = styled.div`
    font-size: 12px;
    color: white;
`;

const Number = styled.div`
width: 40%;
font-size: 12px;
color: white;
display:flex;
align-items: center;
justify-content: space-between;
margin-left: 13px;
// background-color: green;
`;

const H3 = styled.div`
font-size: 12px;
color: white;
`;

const Container2 = styled.div`
   height: 10vh;
   width: 100%;
   background-color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 500;
`;

const Wrapper = styled.div`
   height: 100%;
   width: 90%;
   /* background-color: bisque; */
   display:flex;
   justify-content: space-between;
   align-items: center
`;

const Left1 = styled.div`
   height: 100%;
   width: 20%;
//    background-color: powderblue; 
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Logo = styled.img`
//    height: 70%;
   width: 70%;
`;
const NavWrap = styled.div`
   height: 100%;
   width:60%;
   /* background-color: goldenrod; */
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
const NavHold = styled.div`
   height: 100%;
   width: 80%;
   display: flex;
   justify-content: space-between; 
   align-items: center;
   // background-color: red; 

  @media screen and (max-width: 768px){
      flex-direction: column;
      width: 40%;
      position: absolute;
      background-color: blue;
      height: 50vh;
      transition:all ease 1s;
      justify-content: space-evenly;
      left: ${({toggle}) => (toggle? 0 : "-100%")};
      margin-top: 350px;
      z-index: 500;
      transform: scale(1.02);
   }
`;

const Select = styled.select`
border: none;
display: flex;
`;

const Icons = styled.div`
 color: black;
 height: 100%;
 width: 18%;
//  background-color: blue;
 cursor: pointer;
 display: flex;
 justify-content: space-between;
 align-items: center;

 @media screen and (max-width: 1036px){
      display: none;
   }

`;

const BurgerHold = styled.div` 
   /* height: 100%;
   width: 5%; */
   background-color: white;
   display: none;
   z-index: 1;

   @media screen and (max-width: 768px){
      display: flex;
      /* color:white; */
   }
`;

