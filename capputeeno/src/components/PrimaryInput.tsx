import { styled } from "styled-components"
import { SearchIcon } from "./Serach-icons"
import { InputHTMLAttributes } from "react"

export const PrimaryInput = styled.input`
 width: 352px;
 border-radius: 8px;
 background-color: var(--bg-secundery);
 padding: 10px 16px;
 font-family: inherit;
 font-weight: 400;
 font-size: 14px;
 line-height: 22px;
 color: var(--text-dark);
 border: none;
`

const InputContainer = styled.div `
position: relative;
width: 352px;
svg{
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

}
`
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export  function PrimaryInputWSerchIcon(props : InputProps){
  return(
    <InputContainer>
    <PrimaryInput {...props}/>
    <SearchIcon/>
    </InputContainer>
  )
}