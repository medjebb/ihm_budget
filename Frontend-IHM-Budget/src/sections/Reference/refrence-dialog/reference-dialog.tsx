import { Button } from '@mui/material';
import { useState } from 'react';
import { _dialogFormReferenceFieldsMockData } from 'src/_mock';
import { Iconify } from 'src/components/iconify';
import { DialogFormReference } from '../reference-dialog-form/dialogFormReference';

export const DialogReference = ({ addData }: { addData: (newData: any) => void }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);
  return (
    <>
      <Button
        onClick={() => handleOpenDialog()}
        variant="contained"
        color="inherit"
        startIcon={<Iconify icon="mingcute:add-line" />}
      >
        New reference
      </Button>
      <DialogFormReference
        title="New reference"
        handleCloseDialog={handleCloseDialog}
        openDialog={openDialog}
        handleSubmit={(newData) => {
          addData(newData);
          console.log('newData submitted', newData);
        }}
        dialogFormReferenceFields={_dialogFormReferenceFieldsMockData}
      />
    </>
  );
};
