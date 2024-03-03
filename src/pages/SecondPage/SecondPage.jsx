import { useState } from 'react';

import { Container, Block, Title, StyledLink } from './SecondPage.styled';

import Modal from './ProduktsModal/Modal';

const SecondPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <Block>
        <Title>Second Page</Title>
        <p onClick={openModal}> Відкрити вікно</p>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
      {isModalOpen && <Modal onClose={closeModal} />}
    </Container>
  );
};

export default SecondPage;
