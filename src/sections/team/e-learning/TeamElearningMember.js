import PropTypes from 'prop-types'
// @mui
import { Typography, Card, Box, Stack } from '@mui/material'
// components
import { Image } from '../../../components'

// ----------------------------------------------------------------------

TeamElearningMember.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    role: PropTypes.string,
    socialLinks: PropTypes.object,
  }),
}

export default function TeamElearningMember({ member }) {
  const { name, role, photo } = member

  return (
    <Card>
      <Stack spacing={0.5} sx={{ textAlign: 'center', pt: 3, pb: 1.5 }}>
        <Typography variant='h6'>{name}</Typography>
        <Typography variant='body3' sx={{ color: 'text.disabled' }}>
          {role}
        </Typography>
      </Stack>

      <Box sx={{ position: 'relative' }}>
        <Shape />

        <Image src={photo} alt={name} ratio='1/1' />
      </Box>
    </Card>
  )
}

// ----------------------------------------------------------------------

function Shape() {
  return (
    <Box
      sx={{
        top: 0,
        width: 1,
        height: 8,
        zIndex: 9,
        position: 'absolute',
        color: 'background.paper',
      }}
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='1080' height='32' viewBox='0 0 1080 32'>
        <path fill='currentColor' d='M1080 32L0 0h1080v32z' />
      </svg>
    </Box>
  )
}
