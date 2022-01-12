import React, { useState } from 'react';
import Modal from '../components/Modal';

const About: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <button onClick={() => setIsModalVisible(true)}>Open Modal</button>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <h2>Modal do App</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Modal>
      ) : null}
      {/* {isModalVisible && <h1>Modal teste</h1>} */}
      <h1>About</h1>
    </div>
  );
};

export default About;
