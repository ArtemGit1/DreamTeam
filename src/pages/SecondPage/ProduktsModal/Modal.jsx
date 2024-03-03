import FormModal from './FormModal';

const Modal = ({ onClose }) => {
  //   const [showWellDoneModal, setShowWellDoneModal] = useState(false);
  //   const [getCalories, setCalories] = useState('');
  //   console.log('moooodallllllll');
  return (
    <div>
      <FormModal onClose={onClose} />
      {/* {showWellDoneModal && <WellDoneModal Calories={getCalories} />} */}
    </div>
  );
};
export default Modal;
