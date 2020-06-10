import styled from 'styled-components';

export const FilterModalStyle = styled.div`
  position: absolute;
  background: #00000091;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-container {
    background-color: ${props => props.theme.white};
    width: 250px;
    height: auto;
    max-height: 350px;
  }

  .filter-header {
    font-weight: 800;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.primary};
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal-heading {
    text-align: center;
    font-size: 16px;
    flex: 1;
  }

  .close-modal {
    text-align: center;
    font-size: 18px;
  }

  .filter-body {
    padding: 20px;
  }

  .filter-title-input {
    font-size: 12px;
    margin-bottom: 4px;
    color: ${props => props.theme.darkerGrey};
  }

  .input-class {
    flex: 1;
  }

  .apply-btn {
    width: 55%;
  }
`
