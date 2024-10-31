import { Modal, Box, Typography } from '@mui/material';
import { BasicModalProps } from '../data';

const BasicModal: React.FC<BasicModalProps> = ({ isVisible, onClose, title, children }) => {
  return (
      <Modal
        open={isVisible}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ color: '#ff0000', backgroundColor:'#f4e6e6', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: 24, p: 4 }}>
          <Typography id="modal-title" variant="h6" component="h2">
            {title}
          </Typography>
        {children}
        </Box>
      </Modal>
  );
}

export default BasicModal;
