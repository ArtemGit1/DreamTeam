import { Formik } from 'formik';
import {
  FormModalContainer,
  FormModalBackground,
  FormaInput,
  Inputs,
  Paragraph,
  Span,
  CloseModal,
  InnerContainer,
  Buttons,
  Button,
  FormaInputGramm,
  Label,
} from './FormModal.styles';
import * as Yup from 'yup';

import { useState } from 'react';
import WellDoneModal from './WellDoneModal';
// import axios from 'axios';

const FormModal = ({ onClose }) => {
  const [product, setProduct] = useState({});
  const [showWellDoneModal, setShowWellDoneModal] = useState(false);
  const [getFormModal, setFormModal] = useState(true);
  const [getCalories, setCalories] = useState('');

  // useEffect(() => {
  //   console.log('Calories changed:', getCalories);
  // }, [getCalories]);

  const ValidationSchema = Yup.object().shape({
    product: Yup.string().required('Product name is required'),
    amount: Yup.number()
      .min(1, 'Amount must be at least 1')
      .required('Amount is required'),
  });

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget || event.key === 'Escape') {
      setShowWellDoneModal(false);
      setFormModal(false);
      onClose();
    }
  };

  const handleAmountChange = (event) => {
    console.log(event);
    const amount = parseFloat(event);
    // const calories = (amount * parseFloat(product.calories)) / 100;
    // setCalories(calories.toFixed(2));
    setCalories(amount);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await ValidationSchema.validate(values, { abortEarly: false });

      const calories = (values.amount * 100) / 100;
      const newObjekt = { ...values, calories };
      // const response = await axios.post('/api/addProduct', {
      //   product: values.produkt,
      //   amount: values.amount,
      //   calories: calories,
      // });
      console.log(newObjekt);
      setCalories(calories);
      setProduct(newObjekt);
      setShowWellDoneModal(true);
      setFormModal(false);
      resetForm();
      setCalories('');
    } catch (error) {
      console.error('Message:', error.errors[0]);
    }
  };
  const toFormModal = () => {
    setShowWellDoneModal(false);
    setFormModal(true);
  };

  return (
    <>
      <Formik
        initialValues={{
          product: '',
          amount: '',
        }}
        onSubmit={handleSubmit}
      >
        <>
          {getFormModal && (
            <FormModalBackground onClick={handleBackgroundClick}>
              <FormModalContainer>
                <CloseModal onClick={onClose}>
                  <svg width="22" height="22"></svg>
                </CloseModal>

                <InnerContainer>
                  <Inputs>
                    <FormaInput
                      id="product"
                      name="product"
                      placeholder="Banan"
                      type="text"
                    />
                    <Label>grams</Label>
                    <FormaInputGramm
                      id="amount"
                      name="amount"
                      onChange={(event) =>
                        handleAmountChange(event.target.value)
                      }
                    />
                  </Inputs>

                  <Paragraph>
                    Calories:{' '}
                    <Span>
                      {getCalories}
                      {/* {getCalories != null ? getCalories.toString() : ''} */}
                    </Span>
                  </Paragraph>
                  <Buttons>
                    <Button type="submit">Add to diary</Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </Buttons>
                </InnerContainer>
              </FormModalContainer>
            </FormModalBackground>
          )}
          {showWellDoneModal && (
            <WellDoneModal
              Calories={getCalories}
              onClose={onClose}
              toFormModal={toFormModal}
              Background={handleBackgroundClick}
            />
          )}
        </>
      </Formik>
    </>
  );
};

export default FormModal;
