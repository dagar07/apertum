import styled from 'styled-components'
import { DisplayFlexCCC, DisplayRCC } from '../../styles/commonStyle'

export const LoginStyle = styled(DisplayRCC)`
  margin-top: 10%;

  .loader {
    width: 40%;
  }
`

export const LoginFormStyle = styled(DisplayFlexCCC)`
  border: 1px solid ${props => props.theme.borderGrey};
  background-color: ${props => props.theme.white};
  padding: 30px;
  position: relative;
`
