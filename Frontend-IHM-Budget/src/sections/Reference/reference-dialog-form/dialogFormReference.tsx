import {
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Box,
  FormControlLabel,
  Checkbox,
  DialogContentText,
} from '@mui/material';

import { DialogFormReferenceFields } from 'src/sections/Reference/utils';

import { useState } from 'react';
import { ReferenceType } from 'src/model/reference';

import { _dialogFormReferenceFieldsMockData } from 'src/_mock';
import { ReferenceDialogActions } from '../reference-dialog-actions/referenceDialogActions';

type DialogFormReferenceProps = {
  title: string;
  openDialog: boolean;
  handleCloseDialog: () => void;
  handleSubmit: (newData: ReferenceType) => void;
  dialogFormReferenceFields: DialogFormReferenceFields;
};

export function DialogFormReference({
  title,
  openDialog,
  handleCloseDialog,
  handleSubmit,
  dialogFormReferenceFields,
}: DialogFormReferenceProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const numberOfPages = 3;

  const [formValues, setFormValues] = useState<ReferenceType>({
    year: 0,
    costCenter: '',
    department: '',
    activity: '',
    subActivity: '',
    catPlan: '',
    client: '',
    budgetType: '',
    businessLine: '',
    syntheticMapping: '',
    billingKey: '',
    businessResponsible: '',
    comexMember: '',
    active: false,
  });

  const handleReset = () => {
    setActiveStep(0);
    setErrorMessage('');
    setFormValues({
      year: 0,
      costCenter: '',
      department: '',
      activity: '',
      subActivity: '',
      catPlan: '',
      client: '',
      budgetType: '',
      businessLine: '',
      syntheticMapping: '',
      billingKey: '',
      businessResponsible: '',
      comexMember: '',
      active: false,
    });
  };

  const onCreate = () => {
    const currentPageFields = formPages[activeStep];
    const isPageValid = currentPageFields.every((fieldName) => {
      const value = formValues[fieldName as keyof ReferenceType];
      return value !== undefined && value !== null && value !== '';
    });

    if (isPageValid) {
      handleSubmit(formValues);
    } else {
      setErrorMessage('Please fill out all required fields before submitting.');
    }
  };

  const getFormPages = () => {
    const keys = Object.keys(dialogFormReferenceFields);
    const validKeys = Math.ceil(keys.length / numberOfPages);
    return [
      keys.slice(0, validKeys),
      keys.slice(validKeys, 2 * validKeys),
      keys.slice(2 * validKeys),
    ];
  };

  const formPages = getFormPages();

  const handleNext = () => {
    const currentPageFields = formPages[activeStep];
    const isPageValid = currentPageFields.every((fieldName) => {
      const value = formValues[fieldName as keyof ReferenceType];
      return value !== undefined && value !== null && value !== '';
    });

    if (isPageValid) {
      setErrorMessage('');
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      setErrorMessage('Please fill out all required fields on this page.');
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (fieldName: string, value: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const renderFormFields = () => {
    const currentPageFields = formPages[activeStep];

    return currentPageFields.map((fieldName) => {
      const value = dialogFormReferenceFields[fieldName as keyof DialogFormReferenceFields];
      if (fieldName === 'active')
        return (
          <FormControlLabel
            key={fieldName}
            control={<Checkbox checked={value as boolean} name={fieldName} />}
            label="Active"
            onChange={(event) =>
              handleChange(fieldName, (event.target as HTMLInputElement).checked)
            }
          />
        );
      if (Array.isArray(value)) {
        return (
          <FormControl fullWidth key={fieldName} margin="normal" size="medium">
            <InputLabel size="small" id={`${fieldName}-label`}>
              {fieldName}
            </InputLabel>
            <Select
              labelId={`${fieldName}-label`}
              id={fieldName}
              name={fieldName}
              value={formValues[fieldName as keyof ReferenceType] || ''}
              label={fieldName}
              size="small"
              onChange={(event) => handleChange(fieldName, event.target.value as String)}
            >
              {value.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      }
      return (
        <TextField
          autoFocus
          required
          margin="dense"
          id={fieldName}
          name={fieldName}
          label={fieldName}
          variant="outlined"
          value={formValues[fieldName as keyof ReferenceType] || ''}
          type={typeof value === 'number' ? 'number' : 'text'}
          fullWidth
          size="small"
          onChange={(event) => handleChange(fieldName, event.target.value)}
        />
      );
    });
  };

  return (
    <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="normal">
          <Box>{renderFormFields()}</Box>
        </FormControl>
      </DialogContent>
      <DialogContentText>
        {errorMessage && (
          <Box color="error.main" alignContent="center" width="100%" textAlign="center">
            {errorMessage}
          </Box>
        )}
      </DialogContentText>
      <ReferenceDialogActions
        activeStep={activeStep}
        numberPages={formPages.length}
        handleBack={handleBack}
        handleNext={handleNext}
        onCreate={onCreate}
        handleCloseDialog={handleCloseDialog}
        handleReset={handleReset}
      />
    </Dialog>
  );
}
