import {
  CloseWellDoneContainer,
  ExercisesDiaryButton,
  ExercisesNextProduct,
  ExercisesParagraph,
  ExercisesSpan,
  ExercisesText,
  ExercisesWellDoneBackground,
  ExercisesWellDoneContainer,
  ExercisesWellDoneImg,
  InnerExercisesWellDoneContainer,
} from './ExercisesWellDoneModal.styles';

const ExercisesWellDoneModal = ({ onClose, time, calori, background }) => {
  return (
    <ExercisesWellDoneBackground onClick={background}>
      <ExercisesWellDoneContainer>
        <CloseWellDoneContainer onClick={onClose}>
          <svg width="22" height="22"></svg>
        </CloseWellDoneContainer>
        <InnerExercisesWellDoneContainer>
          <ExercisesWellDoneImg src="" alt="" />
          <ExercisesText>Well done</ExercisesText>
          <ExercisesParagraph>
            Your time:
            <ExercisesSpan>{time}</ExercisesSpan>
          </ExercisesParagraph>
          <ExercisesParagraph>
            Burned calories:
            <ExercisesSpan>{calori}</ExercisesSpan>
          </ExercisesParagraph>
          <ExercisesNextProduct>Next product</ExercisesNextProduct>
          <ExercisesDiaryButton>
            To the diary
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path />
              </svg>
            </span>
          </ExercisesDiaryButton>
        </InnerExercisesWellDoneContainer>
      </ExercisesWellDoneContainer>
    </ExercisesWellDoneBackground>
  );
};
export default ExercisesWellDoneModal;
