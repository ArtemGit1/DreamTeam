import ExercisesModal from './ExercisesModal';
import ExercisesWellDoneModal from './ExercisesWellDoneModal';
import FormModal from './FormModal';

const Modal = ({ onClose }) => {
  //   const [showWellDoneModal, setShowWellDoneModal] = useState(false);
  //   const [getCalories, setCalories] = useState('');
  //   console.log('moooodallllllll');
  return (
    <div>
      <ExercisesModal onClose={onClose} durationValue={6} />
      {/* <ExercisesWellDoneModal onClose={onClose} /> */}
      {/* <FormModal onClose={onClose} /> */}
      {/* {showWellDoneModal && <WellDoneModal Calories={getCalories} />} */}
    </div>
  );
};
export default Modal;
