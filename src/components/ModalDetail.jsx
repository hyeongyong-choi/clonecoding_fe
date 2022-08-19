import React from 'react';
import styled from 'styled-components';


const Modal = () => {
    return (
        <ModalBg>
            <Modalcontain>
                <ModalImg></ModalImg>
                <ModalText></ModalText>
            </Modalcontain>
        </ModalBg>
    );
};

export default Modal;

const ModalBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 0;
`
const Modalcontain = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 80%;
    width: 1000px;
    height: 80%;
    padding: 16px;
    background: rgb(25, 31, 44);
    border-radius: 10px;
    text-align: center;
`
const ModalImg = styled.div`
    width:500px;
    height:100%;
    z-index: 1;
    background-color: red;
    border: 1px solid red;
`
const ModalText =styled.div`
    

`