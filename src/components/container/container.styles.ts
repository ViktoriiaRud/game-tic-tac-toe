import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 16px;
  max-width: ${({ theme }) => theme.wrapperXxl};
}
`;

export { Wrapper };