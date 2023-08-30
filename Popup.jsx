import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ReusableConfirmationDialog from './ReusableConfirmationDialog';

const Popup = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [serverErrorOpen, setServerErrorOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleShowServerError = () => {
    setServerErrorOpen(true);
  };

  const handleCloseServerError = () => {
    setServerErrorOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained" color="primary" onClick={handleOpenDialog} style={{ marginBottom: '10px' }}>
        Open Confirmation Dialog
      </Button>
      <Button variant="contained" color="secondary" onClick={handleShowServerError}>
        Show Server Error
      </Button>
      <ReusableConfirmationDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title="Decline!"
        content="Are you sure you want to decline the offer."
        additionalButton={
          <Button onClick={handleCloseServerError} color="primary">
            Confirm
          </Button>
        }
      />
      <ReusableConfirmationDialog
        open={serverErrorOpen}
        onClose={handleCloseServerError}
        title="Bureau Error!"
        content="An error occurred while bureau check. Please retry."
        additionalButton={
          <Button onClick={handleCloseServerError} color="primary">
            Retry
          </Button>
        }
      />
    </div>
  );
};

export default Popup;

