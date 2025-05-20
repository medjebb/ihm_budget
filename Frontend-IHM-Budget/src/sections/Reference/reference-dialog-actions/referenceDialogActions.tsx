import { Box, Button, DialogActions, Step, StepLabel, Stepper, useMediaQuery } from '@mui/material';
import { Iconify } from 'src/components/iconify';
import { useTheme } from '@mui/material/styles';

type ReferenceDialogActionsProps = {
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
  onCreate: () => void;
  handleCloseDialog: () => void;
  numberPages: number;
  handleReset: () => void;
};

export function ReferenceDialogActions(props: ReferenceDialogActionsProps) {
  const {
    activeStep,
    handleBack,
    handleNext,
    onCreate,
    numberPages,
    handleCloseDialog,
    handleReset,
  } = props;
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isLastStep = activeStep === numberPages - 1;

  return (
    <DialogActions>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 3 } }}>
        {!isLastStep && (
          <Box
            sx={{
              width: '100%',
              display: { xs: 'block', sm: 'none' },
              mb: 1,
            }}
          >
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{
                '& .MuiStepLabel-iconContainer': {
                  '& .MuiStepIcon-root': {
                    fontSize: '1.25rem',
                  },
                },
              }}
            >
              {Array.from({ length: numberPages }, (_, index) => (
                <Step key={index} completed={activeStep > index}>
                  <StepLabel />
                </Step>
              ))}
            </Stepper>
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', sm: 'center' },
            gap: { xs: 2, sm: 3 },
            width: '100%',
          }}
        >
          <Box sx={{ order: { xs: 2, sm: 1 }, width: { xs: '100%', sm: 'auto' } }}>
            <Button
              fullWidth={!isSm}
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              color="primary"
              startIcon={<Iconify icon="eva:arrow-back-outline" />}
              size={isMd ? 'medium' : 'small'}
            >
              Back
            </Button>
          </Box>

          {!isLastStep && (
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                justifyContent: 'center',
                flex: 1,
                order: { sm: 2 },
              }}
            >
              <Stepper
                activeStep={activeStep}
                alternativeLabel
                sx={{
                  maxWidth: { sm: '80%', md: '60%' },
                }}
              >
                {Array.from({ length: numberPages }, (_, index) => (
                  <Step key={index} completed={activeStep > index}>
                    <StepLabel />
                  </Step>
                ))}
              </Stepper>
            </Box>
          )}

          <Box
            sx={{
              order: { xs: 1, sm: 3 },
              width: { xs: '100%', sm: 'auto' },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 1.5, sm: 2 },
            }}
          >
            {isLastStep ? (
              <>
                <Button
                  fullWidth={!isSm}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    onCreate();
                    handleCloseDialog();
                    handleReset();
                  }}
                  startIcon={<Iconify icon="eva:checkmark-circle-2-outline" />}
                  size={isMd ? 'medium' : 'small'}
                >
                  Create
                </Button>
                <Button
                  fullWidth={!isSm}
                  variant="contained"
                  color="success"
                  onClick={() => {
                    onCreate();
                    handleReset();
                  }}
                  startIcon={<Iconify icon="eva:plus-circle-outline" />}
                  size={isMd ? 'medium' : 'small'}
                >
                  {isSm ? 'Create and Continue' : 'Create & Continue'}
                </Button>
              </>
            ) : (
              <Button
                fullWidth={!isSm}
                variant="contained"
                color="primary"
                onClick={handleNext}
                endIcon={<Iconify icon="eva:arrow-forward-outline" />}
                size={isMd ? 'medium' : 'small'}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </DialogActions>
  );
}
