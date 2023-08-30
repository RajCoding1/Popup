import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ReusableConfirmationDialog = ({ open, onClose, title, content }) => {
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    if (open) {
      setShowCheck(true);
    }
  }, [open]);

  const handleClose = () => {
    setShowCheck(false);
    onClose();
  };

  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {showCheck ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircleIcon style={{ fontSize: 48, color: 'green', marginRight: 16 }} />
            <Typography variant="h6" color="textPrimary">
              {content}
            </Typography>
          </div>
        ) : (
          <Typography>{content}</Typography>
        )}
      </DialogContent>
      <Button onClick={handleClose} color="primary">
        OK
      </Button>
    </Dialog>
  );
};

export default ReusableConfirmationDialog;
