import React, { useContext } from 'react';
import './BabyWorldApp.css';
import BWContact from './contactPage/BWContact';
import BWCover from './coverPage/BWCover';
import BWFooter from './footerPage/BWFooter';
import BWInfo from './infoPage/BWInfo';
import BWNavBar from './navBar/BWNavBar';
import modalContext from '../context/modalContext/modalContext';
import Modal from './modal/Modal';
import ModalScreen from './modal/ModalScreen';


const BabyWorldApp = () => {
    //Context de las funciones de la ventana Modal
    const {isOpen, setIsOpen} = useContext(modalContext);   

    return (
        <>
            <div className="body-content">
                <div style={BUTTON_WRAPPER_STYLES} >
                    <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                            <ModalScreen />
                    </Modal>
                </div>
                <BWNavBar />  
                <BWCover />
                <BWInfo />
                <BWContact />
                <BWFooter />
            </div>
        </>
    )
}

export default BabyWorldApp

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}
