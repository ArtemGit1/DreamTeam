import styled from 'styled-components';

export const ProductWrapp = styled.li`
  width: 335px;
  height: 141px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 16px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`;

export const TopLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const TopLineRightWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const DietMark = styled.div`
  width: 41px;
  height: 24px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
  background-color: var(--light-grey-color);
`;

export const RecomendedLight = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${(props) => {
    if (props.$status) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const ProductName = styled.h3`
  font-size: 20px;
  margin-left: 16px;
  margin-bottom: 8px;
  color: var(--white-color);
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
`;

export const List = styled.dl`
  display: flex;
  font-size: 12px;
`;

export const Term = styled.dt`
  color: rgba(239, 237, 232, 0.4);
  margin-right: 4px;
`;

export const AddBtn = styled.button`
  margin-left: 16px;
  color: var(--orange-color);
  background-color: none;
`;
