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
import ExercisesWellDoneModal from './ExercisesWellDoneModal';

const ExercisesModal = ({ onClose }) => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState('');
  const [restart, setReStart] = useState(false);
  const [closeModal, setcloseModal] = useState(false);

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'Escape') {
      onClose();
    }
  });

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

  // const toCloseWindiw = () => {
  //   onClose();
  // };

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
  const handleBackgroundClick = (event) => {
    console.log(event);

    if (event.target === event.currentTarget || event.key === 'Escape') {
      // onClose();
    }
  };

  const click = () => {
    setcloseModal(true);
  };

  return (
    <>
      {!closeModal && (
        <ExercisesModalBackground onClick={handleBackgroundClick}>
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
                Burned calories: <TimeSpan>{time}</TimeSpan>
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
              <ExercisesBlockButton onClick={click}>
                Add to diary
              </ExercisesBlockButton>
            </DataContainerDiv>
          </ExercisesModalContainer>
        </ExercisesModalBackground>
      )}
      {closeModal && (
        <ExercisesWellDoneModal
          onClose={onClose}
          time={0}
          calori={0}
          background={handleBackgroundClick}
        />
      )}
    </>
  );
};
export default ExercisesModal;

// import { useEffect, useRef, useState } from 'react';
// import {
//   BurnedCalories,
//   DataContainerDiv,
//   DataDiv,
//   ExercisesBlock,
//   ExercisesBlockButton,
//   ExercisesBlockResalts,
//   ExercisesBlockText,
//   ExercisesModalBackground,
//   ExercisesModalContainer,
//   ExercisesModalGif,
//   ExercisesModalImg,
//   PlayPause,
//   TimeSpan,
//   TimerDiv,
//   TimerText,
// } from './ExercisesModal.styles';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';

// const ExercisesModal = ({ onClose }) => {
//   const [start, setStart] = useState(false);
//   const [time, setTime] = useState('');
//   const countRef = useRef(0);

//   useEffect(() => {
//     console.log(start);
//     console.log(countRef.current);
//     console.log('00000000000');
//   }, [time, start]);

//   const toCloseWindow = () => {
//     onClose();
//   };

//   const renderTime = ({ remainingTime }) => {
//     const oneRef = useRef(remainingTime);

//     countRef.current = oneRef.current; // Оновлюємо значення рефа
//     if (remainingTime !== 0) {
//       const minutes = Math.floor(remainingTime / 60);
//       const seconds = remainingTime % 60;
//       const res = `${minutes}:${seconds}`;
//       if (res !== '0:0') {
//         console.log('7777777');
//         console.log(res);
//         setTime(res);
//         return time;
//       }
//     }
//     console.log(remainingTime);
//     if (remainingTime === 0 && start === true) {
//       console.log('ddddddddd');
//       const minutes = Math.floor(countRef.current / 60);
//       const seconds = countRef.current % 60;
//       const res = `${minutes}:${seconds}`;

//       console.log('7777777');
//       console.log(res);
//       setTime(res);
//       return time;
//     }

//     console.log('888888');

//     return time;
//   };

//   const handleBackgroundClick = (event) => {
//     if (event.target === event.currentTarget || event.key === 'Escape') {
//       onClose();
//     }
//   };

//   return (
//     <ExercisesModalBackground onClick={handleBackgroundClick}>
//       <ExercisesModalContainer>
//         <TimerDiv>
//           <ExercisesModalImg></ExercisesModalImg>
//           <TimerText>Time</TimerText>
//           <ExercisesModalGif>
//             <CountdownCircleTimer
//               isPlaying={start}
//               duration={5}
//               colors="#e6533c"
//               size={124}
//               strokeWidth={4}
//               shouldRepeat={true}
//               rotation="anticlockwise"
//               strokeLinecap="round"
//               trailStrokeWidth={6}
//               trailColor="rgba(239, 237, 232, 0.05)"
//               onComplete={() => {
//                 setStart(false);
//                 setTime('0:0');
//                 console.log('Timer complete');
//                 return { shouldRepeat: true, delay: 0 };
//               }}
//             >
//               {renderTime}
//             </CountdownCircleTimer>
//           </ExercisesModalGif>
//           <PlayPause onClick={() => setStart((prevStart) => !prevStart)}>
//             <svg width="32" height="32"></svg>
//             <svg width="32" height="32"></svg>
//           </PlayPause>
//           <BurnedCalories>
//             Burned calories: <TimeSpan>{time}</TimeSpan>
//           </BurnedCalories>
//         </TimerDiv>
//         <DataContainerDiv>
//           <DataDiv>
//             <ExercisesBlock>
//               <ExercisesBlockText>Name</ExercisesBlockText>
//               <ExercisesBlockResalts>Air bike</ExercisesBlockResalts>
//             </ExercisesBlock>
//             <ExercisesBlock>
//               <ExercisesBlockText>Target</ExercisesBlockText>
//               <ExercisesBlockResalts>Abs</ExercisesBlockResalts>
//             </ExercisesBlock>
//             <ExercisesBlock>
//               <ExercisesBlockText>Body Part</ExercisesBlockText>
//               <ExercisesBlockResalts>Waist</ExercisesBlockResalts>
//             </ExercisesBlock>
//             <ExercisesBlock>
//               <ExercisesBlockText>Equipment</ExercisesBlockText>
//               <ExercisesBlockResalts>Body weight</ExercisesBlockResalts>
//             </ExercisesBlock>
//           </DataDiv>
//           <ExercisesBlockButton onClick={toCloseWindow}>
//             Add to diary
//           </ExercisesBlockButton>
//         </DataContainerDiv>
//       </ExercisesModalContainer>
//     </ExercisesModalBackground>
//   );
// };

// export default ExercisesModal;
