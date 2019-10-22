import styled from 'styled-components';

export const Container = styled.div`

  margin-top: 15px;
  background: #FFF;
  padding: 30px;
  border-radius: 4px;
  border: 1px solid #eee;

  header {
    display: flex;

    img {
      min-height: 32px;
      min-width: 32px;
      height: 32px;
      width: 32px;
      border-radius: 50%;
    }

    div {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      font-size: 11px;
      color: #9a9a9a;
      line-height: 14px;

      span:first-child {
        font-weight: bold;
        margin-bottom: 3px;
        font-size: 14px;
        color: #000;
      }
    }
  }

  section {
    margin-top: 15px;
    font-size: 14px;
  }

  footer {
    margin-top: 20px;

   div {
     display: flex;
     flex-direction: row;

    img {
      min-height: 32px;
      min-width: 32px;
      height: 32px;
      width: 32px;
      border-radius: 50%;
    }

    p {
      border-radius: 20px;
      background: #eeeeee;
      margin-left: 10px;
      margin-bottom: 10px;
      padding: 15px;
      font-size: 13px;

      span:first-child {
        font-weight: bold;
        margin-right: 6px;
      }
    }
   }
  }
`;
