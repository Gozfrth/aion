import { useState } from 'react';
import Modal from '../components/Modal';
import { GiHamburgerMenu } from "react-icons/gi";
// <GiHamburgerMenu  />

function SideBarPage() {
    const [showModal, setShowModal] = useState();

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        console.log("HELLO")
        setShowModal(false);
    };

    const actionBar = (<div><button onClick={handleClose}> Buttoning </button></div>);

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            This is some important modal text that you need to see.
        </p>
    </Modal>;

    return (
        <div>
            <div onClick={handleClick} className='transition-colors bg-zinc-800 p-2'>
                <GiHamburgerMenu size={30} color='white'/>
            </div>
                {showModal && modal}
        </div>
    );
}

export default SideBarPage;