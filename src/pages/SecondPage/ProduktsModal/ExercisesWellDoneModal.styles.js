import styled from 'styled-components';

export const ExercisesWellDoneBackground = styled.div`
  /* display: none; */
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: 0 0 5px rgba(0, 0, 0, 0.5);
  overflow: auto;
`;
export const ExercisesWellDoneContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  /* width: 335px;
  height: 384px; */
  background: #10100f;
  margin: 15% auto;
  @media screen and (min-width: 375px) {
    width: 335px;
    height: 384px;
  }
  @media screen and (min-width: 768px) {
    width: 694px;
    height: 550px;
  }
`;
export const InnerExercisesWellDoneContainer = styled.div`
  @media screen and (min-width: 375px) {
    padding: 48px 89px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    padding: 59px 199px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ExercisesWellDoneImg = styled.img`
  width: 117px;
  height: 73px;
  background-color: white;
  margin-bottom: 27px;
`;
export const ExercisesText = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #efede8;
`;
export const ExercisesParagraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 4px;
`;
export const ExercisesSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #e6533c;
  margin-left: 8px;
`;
export const ExercisesNextProduct = styled.button`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 12px 32px;
  width: 157px;
  height: 42px;
  background: #e6533c;
  font-weight: 500;
  font-size: 16px;
  color: #efede8;
  margin-top: 20px;
  margin-bottom: 16px;
`;
export const ExercisesDiaryButton = styled.button`
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
