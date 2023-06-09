"use client"
import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSerchIcon } from "./PrimaryInput"

const SairaStencil = Saira_Stencil_One({ 
  weight : ['400'],
  subsets: ['latin'] })




interface HeaderProps {

}

const TagHeader = styled.header`
display : flex;
align-items: center;
justify-content: space-between;
padding: 30px 160px;

`

const Logo = styled.a`
color: var(--logo-color);
font-weight: 400;
font-size: 100px;
line-height: 150%;
`

export function Header(props: HeaderProps) {
  return(  
  <TagHeader>
    <Logo className={SairaStencil.className}>Capputeeno</Logo>
    <div><PrimaryInputWSerchIcon placeholder="Procurando Por Algo Especifico"/></div>
  </TagHeader>)

}