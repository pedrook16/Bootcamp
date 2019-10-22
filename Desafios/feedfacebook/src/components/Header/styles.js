import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #4a90e2;
  height: 60px;
  color: #fff;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 980px;
    align-items: center;

    img {
      height: 24px;
    }

    span {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

      svg {
        margin-left: 8px;
      }
    }
  }
`;
