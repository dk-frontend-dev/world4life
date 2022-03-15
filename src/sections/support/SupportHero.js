// @mui
import { styled } from '@mui/material/styles'
import { Box, Typography, Stack } from '@mui/material'
// utils
import cssStyles from '../../utils/cssStyles'
// components

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(15, 2.5),
  alignItems: 'center',
  ...cssStyles(theme).bgImage(),
}))

// ----------------------------------------------------------------------

export default function SupportHero() {
  return (
    <RootStyle>
      <Typography variant='h2' sx={{ textAlign: 'center', color: 'common.white', mb: 5 }}>
        Welcome to <br />
        <Box component='span' sx={{ color: 'primary.main' }}>
          {''} ZONE {''}
        </Box>
        Support
      </Typography>
    </RootStyle>
  )
}
