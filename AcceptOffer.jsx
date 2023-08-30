import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ReusableConfirmationDialog from './ReusableConfirmationDialog1';

const AcceptOffer = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Accept
      </Button>
      <ReusableConfirmationDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title="Congratulation!"
        content="Your card has been sent for printing."
      />
    </div>
  );
};

export default AcceptOffer;

