import styled from 'styled-components'
import { DisplayFlexCCC, DisplayRCC } from '../../styles/commonStyle'

export const LoginStyle = styled(DisplayRCC)`
  margin-top: 10%;

  .loader {
    width: 40%;
  }

  @media only screen and (min-width: 320px) and (max-width: 763px) {
    .loader {
      width: 80%;
    }
  }
`

export const LoginFormStyle = styled(DisplayFlexCCC)`
  border: 1px solid ${props => props.theme.borderGrey};
  background-color: ${props => props.theme.white};
  padding: 30px;
  position: relative;

  .login-input {
    width: 30%;
  }

  @media only screen and (min-width: 320px) and (max-width: 763px) {
    .login-input {
      width: 80%;
    }
  }
`
