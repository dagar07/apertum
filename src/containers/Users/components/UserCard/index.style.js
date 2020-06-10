import styled from 'styled-components'

export const UserCardStyle = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  margin: 10px;
  box-shadow: 3px 2px 2px 0px ${props => props.theme.borderGrey};

  .user-title {
    font-weight: 600;
    margin-right: 10px;
  }

  @media only screen and (max-width: 763px) {
    width: 80%
  }
`
