import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

export type AuthContentProps = BoxProps;

export function AuthContent({ sx, children, className, ...other }: AuthContentProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          py: 5,
          px: 3,
          width: 1, 
          zIndex: 2,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 'var(--layout-auth-content-width)',
          bgcolor: theme.vars.palette.background.neutral,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {children}
    </Box>
  );
}
