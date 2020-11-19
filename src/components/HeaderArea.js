import React from 'react'
import {FaYoutube} from 'react-icons/fa'
import './HeaderArea.css'
import styled from 'styled-components' 
import{MdSearch, MdVideoCall, MdViewComfy} from 'react-icons/md' 
import {AiTwotoneBell} from 'react-icons/ai'


const HeaderArea = () => {
    return(
        <BodyContainer>
        <HeaderContainer>
         <HeadContainer>
             <HeadeContainer>
                <ButtonContainer>
                    <button>&#9776;</button>
                </ButtonContainer>
                <FaYoutube color="red" fontSize="3rem"/>
             </HeadeContainer>
            <RechercheContainer>
                <input type="search"placeholder="Recherche"/>
                <SearchContainer>
                    <MdSearch fontSize="3rem"/>
                </SearchContainer>
            </RechercheContainer>
            <IconContainer>
                <div className="icon"><MdVideoCall fontSize="3rem"/></div>
                <div className="icon"><MdViewComfy fontSize="3rem"/></div>
                <div className="icon"><AiTwotoneBell fontSize="3rem"/></div>
                <div className="icon">
                    <img src="../../public/img.png"alt="img"></img>
                </div>
            </IconContainer>
         </HeadContainer>
    </HeaderContainer>
    </BodyContainer>
    )
}





const BodyContainer = styled.div`
    font: 1.7rem helvetica;
    height: 100vh;
    margin: 0;
    background-color: #f9f9f9;

`
const HeaderContainer = styled.div`
    height: 3rem;
    width: 100%;

`

const HeadContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 6rem;
width: 100%;
background-color: #f9f9f9;
position: fixed;
    
`
const HeadeContainer = styled.div`
display: flex;
align-items: center;
font-size: 2rem;

`
const RechercheContainer = styled.div`
display: flex;
    align-items: center;
    width: 40%;
    border: 1 px solid lightgray;
`

const SearchContainer = styled.div`
width: 30px!important;
background-color: #fafafa;
border-left: 1px solid lightgray;
border-right: 1px solid lightgray;
color: gray;
padding: 0 10px;

`
const ButtonContainer = styled.div`
border: none;
font-size: 2.5rem;
background: none;
margin: 0 12px;
`
const IconContainer = styled.div`
display: flex;
    align-items: center;
    margin: 12px;
`

export default HeaderArea