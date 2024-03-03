import styled from 'styled-components';

export const ExercisesModalBackground = styled.div`
  /* display: none; */
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ExercisesModalContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  width: 335px;
  height: 788px;
  background: #10100f;
  margin: 15% auto;
  padding: 48px 16px;
`;
export const TimerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
`;

export const ExercisesModalImg = styled.img`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 45px 105px;
  width: 270px;
  height: 226px;
  background-color: white;
  margin-bottom: 14px;
`;

export const TimerText = styled.p`
  font-weight: 400;
  font-size: 10px;
  color: rgba(239, 237, 232, 0.4);
  margin-bottom: 4px;
`;
export const ExercisesModalGif = styled.div`
  width: 125px;
  height: 124px;
  margin-bottom: 14px;
  color: #efede8;
`;

export const PlayPause = styled.button`
  width: 32px;
  height: 32px;
  background-color: orange;
  margin-bottom: 8px;
`;
export const BurnedCalories = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 40px;
`;
export const TimeSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #e6533c;
`;
export const DataContainerDiv = styled.div`
  width: 302px;
  display: flex;
  flex-direction: column;
`;

export const DataDiv = styled.div`
  width: 302px;
  height: 132px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #10100f;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ExercisesBlock = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 12px 18px;
  width: 147px;
  height: 62px;
  background: rgba(239, 237, 232, 0.05);
`;

export const ExercisesBlockText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(239, 237, 232, 0.4);
`;

export const ExercisesBlockResalts = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: #efede8;
`;
export const ExercisesBlockButton = styled.button`
  border-radius: 12px;
  padding: 12px 32px;
  width: 151px;
  height: 42px;
  background-color: #e6533c;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-weight: 500;
  font-size: 16px;
  color: #efede8;
`;
