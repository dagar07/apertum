import styled from 'styled-components';

export const UsersStyle = styled.div`
  margin-top: 20px;

  .user-data {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .filter-btn-box {
    padding: 0 4%;
  }

  .no-user-found {
    font-size: 18px;
    color: ${props => props.theme.error};
    font-weight: 800;
  }

  .filter-btn {
    margin-bottom: 10px;
    width: 12%;
  }

  .loader {
    height: calc(100vh - 60px);
  }

  @media only screen and (min-width: 320px) and (max-width: 763px) {
    .filter-btn {
      width: 30%;
    }
  }
`
