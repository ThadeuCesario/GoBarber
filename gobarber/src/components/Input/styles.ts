import styled, {css} from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
      background: #232129;
      border-radius: 10px;
      padding: 16px;
      width: 100%;
      display: flex;
      align-items: center;

      color: #666360;
      border: solid 2px #232129;

       & + div{
          margin-top: 8px;
       }

       ${props => props.isFocused && css`
         color: #ff9000;
         border-color: #ff9000;
`      }

      input{
        flex: 1;
        border: 0;
        background: transparent;
        color: #f4ede8;
        &::placeholder{
          color: #666360;
        }
      }

      svg {
        margin-right: 16px;
      }
`;
