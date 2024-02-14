import Modal from 'react-modal';
import StartIcon from '../icons/StartIcon';
import Button from '../tags/Button';

Modal.setAppElement('#root'); // Add this line

function VictoryDialog({ isOpen, onRequestClose }:{ isOpen:boolean, onRequestClose:any }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'gold',
                    border: '3px solid goldenrod',
                    borderRadius: '15px',
                    padding: '20px',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                },
            }}
        >
            <h2>
                <StartIcon/>
                Congratulations!
                <StartIcon/>
            </h2>
            <p>You won the game!</p>
            <Button color='goldenrod' onClick={onRequestClose}>
                Next level
            </Button>
        </Modal>
    );
}

export default VictoryDialog;