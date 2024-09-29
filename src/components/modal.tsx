// components/Modal.tsx
import React from 'react';

// Definindo a interface para as props do Modal
interface ModalProps {
    x: number;
    y: number;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ x, y, onClose }) => {
    return (
        <div
            className="modal"
            style={{
                position: 'absolute',
                top: y,
                left: x,
                padding: '20px',
                backgroundColor: 'white',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
            }}
        >
            <h3>Modal</h3>
            <p>Este modal abriu onde o mouse foi clicado!</p>
            <button onClick={onClose}>Fechar</button>
        </div>
    );
};

export default Modal;
