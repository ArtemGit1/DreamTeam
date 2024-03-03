import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormModalContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  width: 335px;
  height: 280px;
  background: #10100f;
  margin: 15% auto;
`;
export const InnerContainer = styled.div`
  padding: 48px 24px;
`;

export const FormModalBackground = styled(Form)`
  /* display: none; */
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: 0 0 5px rgba(0, 0, 0, 0.5);
`;
export const FormaInput = styled(Field)`
  border: 1px solid #e6533c;
  border-radius: 12px;
  padding: 8px 193px 8px 14px;
  width: 287px;
  height: 34px;
  background: #10100f;
  font-weight: 400;
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
`;

export const FormaInputGramm = styled(Field)`
  border: 1px solid #e6533c;
  border-radius: 12px;
  padding: 8px 14px 8px 14px;
  width: 287px;
  height: 34px;
  background: #10100f;
  font-weight: 400;
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
  /* &::placeholder {
    text-indent: -179px;
    text-align: right;
  } */
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(239, 237, 232, 0.4);
  margin-top: 16px;
  margin-bottom: 0;
`;
export const Span = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
`;
export const CloseModal = styled.button`
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
export const Buttons = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 24px;
`;

export const Button = styled.button`
  padding: 12px 32px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-weight: 500;
  font-size: 16px;
  color: #efede8;
  background: #10100f;
  &:hover {
    background: #e6533c;
  }
`;
export const Active = styled.button`
  background: #e6533c;
`;

export const PlaceholderText = styled.span`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: rgba(239, 237, 232, 0.3);
  transition: all 0.3s ease;
`;
export const Label = styled.label`
  position: absolute;
  font-weight: 400;
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
  margin-top: 58px;
  margin-left: 232px;
`;
