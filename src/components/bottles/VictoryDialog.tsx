import Modal from 'react-modal';

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
            <h2>🌟 Congratulations! 🌟</h2>
            <p>You won the game!</p>
            <button 
                onClick={onRequestClose} 
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: 'goldenrod',
                    background: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Close
            </button>
        </Modal>
    );
}

export default VictoryDialog