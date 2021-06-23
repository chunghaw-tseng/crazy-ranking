import styled from 'styled-components'
import {StyledIconBase} from '@styled-icons/styled-icon'


export const Card = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    padding : 10px;
    /* transition: all 0.9s ease-out; */
    -moz-border-radius:10px;  /* for Firefox */
    -webkit-border-radius:10px; /* for Webkit-Browsers */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

`
export const NameTag = styled.div`
    flex: 3;
`
export const TotalPoints = styled.div`
    flex:1;
    padding-left: 20px;
`
export const Avatar = styled.div`
    flex:1;
    padding-right: 30px;
`