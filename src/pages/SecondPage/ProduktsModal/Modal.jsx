import ExercisesModal from './ExercisesModal';
import FormModal from './FormModal';

const Modal = ({ onClose }) => {
  //   const [showWellDoneModal, setShowWellDoneModal] = useState(false);
  //   const [getCalories, setCalories] = useState('');
  //   console.log('moooodallllllll');
  return (
    <div>
      <ExercisesModal onClose={onClose} />
      {/* <FormModal onClose={onClose} /> */}
      {/* {showWellDoneModal && <WellDoneModal Calories={getCalories} />} */}
    </div>
  );
};
export default Modal;
