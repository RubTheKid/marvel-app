import styled from 'styled-components';

const StyledVoteButton = styled.button`
    border-radius: 5px;
    background: #fff;
    padding: 15px 12px 15px;
    font-family: Roboto;
    text-transform: uppercase;
    color:#881d12;
    transition: all .3s ease-out; 
    cursor:pointer;
    width:200px;
    border: none;

    &:hover {
      background-color: #881d12;
      color: #fff;
    }
`;

export default StyledVoteButton;
