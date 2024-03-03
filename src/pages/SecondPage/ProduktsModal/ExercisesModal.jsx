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
  const [start, setStart] = useState(false);
  const [time, setTime] = useState('');
  const [restart, setReStart] = useState(false);

  useEffect(() => {
    console.log('11111111');
    if (time === '' && start === false) {
      console.log('222222222222');
      return;
    }

    if (time === '' && restart === true) {
      console.log('333333333');
      setStart(false);
      setReStart(false);
      return;
    }
    console.log('bbbbbbbbbb');
    return;
  }, [restart, start, time]);

  const toCloseWindiw = () => {
    onClose();
  };

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const res = `${minutes}:${seconds}`;

    if (time === '0:0') {
      console.log('5555555555');
      setTime('');
      setReStart(true);

      return;
    }
    // if (res === '0:0' && time === '') {
    //   console.log('88888888');

    //   setReStart(false);
    //   return;
    // }

    console.log('666666666');
    setTime(res);
    return res;
  };
  const toStartTimer = () => {
    console.log('44444444444');
    // setReStart(false);
    setStart((prevStart) => !prevStart);
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
              shouldRepeat={true}
              rotation="anticlockwise"
              strokeLinecap="round"
              trailStrokeWidth={6}
              trailColor="rgba(239, 237, 232, 0.05)"
              onComplete={() => {
                return { shouldRepeat: true, delay: 0 };
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
