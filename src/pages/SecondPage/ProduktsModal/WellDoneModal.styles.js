import styled from 'styled-components';

export const WellDoneBackground = styled.div`
  /* display: none; */
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: 0 0 5px rgba(0, 0, 0, 0.5);
`;
export const WellDoneContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  width: 335px;
  height: 362px;
  background: #10100f;
  margin: 15% auto;
`;
export const InnerWellDoneContainer = styled.div`
  padding: 48px 89px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;
export const WellDoneImg = styled.div`
  width: 123px;
  height: 84px;
  background-color: white;
`;
export const Text = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #efede8;
`;
export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
`;
export const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #e6533c;
`;
export const NextProduct = styled.button`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 12px 32px;
  width: 157px;
  height: 42px;
  background: #e6533c;
  font-weight: 500;
  font-size: 16px;
  color: #efede8;
`;
export const DiaryButton = styled.button`
  font-weight: 400;
  font-size: 14px;
  padding: 0;
  color: rgba(239, 237, 232, 0.3);
  width: 97px;
  height: 18px;
  background-color: transparent;
  border: none;
`;
export const CloseWellDoneContainer = styled.button`
  stroke-width: 2px;
  stroke: #efede8;
  color: white;
  fill: white;
  position: absolute;
  margin-left: 297px;
  margin-top: 14px;
  padding: 0;
  width: 22px;
  height: 22px;
`;
