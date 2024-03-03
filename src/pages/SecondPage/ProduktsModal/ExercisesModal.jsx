import { useEffect, useState } from 'react';
import {
  BurnedCalories,
  DataContainerDiv,
  DataDiv,
  ExercisesBlock,
  ExercisesBlockButton,
  ExercisesBlockResalts,
  ExercisesBlockText,
  ExercisesModalBackground,
  ExercisesModalContainer,
  ExercisesModalGif,
  ExercisesModalImg,
  PlayPause,
  TimeSpan,
  TimerDiv,
  TimerText,
} from './ExercisesModal.styles';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const ExercisesModal = ({ onClose }) => {
  const [start, setStart] = useState(true);
  const [time, setTime] = useState('');
  console.log('jjjjjjjjjj');
  useEffect(() => {
    console.log(start);
  }, [start, time]);

  const toStartTimer = () => {
    setStart((prevStart) => !prevStart);
  };
  const toCloseWindiw = () => {
    onClose();
  };

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const res = `${minutes}:${seconds}`;
    setTime(res);

    return res;
  };

  return (
    <ExercisesModalBackground>
      <ExercisesModalContainer>
        <TimerDiv>
          <ExercisesModalImg></ExercisesModalImg>
          <TimerText>Time</TimerText>
          <ExercisesModalGif>
            <CountdownCircleTimer
              isPlaying={start}
              duration={5}
              colors="#e6533c"
              size={124}
              strokeWidth={4}
              trailStrokeWidth={6}
              trailColor="rgba(239, 237, 232, 0.05)"
              onComplete={() => {
                console.log('hhhhhhh');
                if (start) {
                  return [true];
                }

                return [false];
              }}
            >
              {renderTime}
              {/* {({ remainingTime }) => remainingTime} */}
            </CountdownCircleTimer>
          </ExercisesModalGif>
          <PlayPause onClick={toStartTimer}>
            <svg width="32" height="32"></svg>
            <svg width="32" height="32"></svg>
          </PlayPause>
          <BurnedCalories>
            Burned calories: <TimeSpan>66</TimeSpan>
          </BurnedCalories>
        </TimerDiv>
        <DataContainerDiv>
          <DataDiv>
            <ExercisesBlock>
              <ExercisesBlockText>Name</ExercisesBlockText>
              <ExercisesBlockResalts>Air bike</ExercisesBlockResalts>
            </ExercisesBlock>
            <ExercisesBlock>
              <ExercisesBlockText>Target</ExercisesBlockText>
              <ExercisesBlockResalts>Abs</ExercisesBlockResalts>
            </ExercisesBlock>
            <ExercisesBlock>
              <ExercisesBlockText>Body Part</ExercisesBlockText>
              <ExercisesBlockResalts>Waist</ExercisesBlockResalts>
            </ExercisesBlock>
            <ExercisesBlock>
              <ExercisesBlockText>Equipment</ExercisesBlockText>
              <ExercisesBlockResalts>Body weight</ExercisesBlockResalts>
            </ExercisesBlock>
          </DataDiv>
          <ExercisesBlockButton onClick={toCloseWindiw}>
            Add to diary
          </ExercisesBlockButton>
        </DataContainerDiv>
      </ExercisesModalContainer>
    </ExercisesModalBackground>
  );
};
export default ExercisesModal;
