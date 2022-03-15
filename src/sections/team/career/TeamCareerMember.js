import PropTypes from 'prop-types'
// @mui
import { alpha, useTheme } from '@mui/material/styles'
import { Typography, Stack, Box } from '@mui/material'
// components
import { Image } from '../../../components'

// ----------------------------------------------------------------------

TeamCareerMember.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    role: PropTypes.string,
    socialLinks: PropTypes.object,
  }),
}

export default function TeamCareerMember({ member }) {
  const theme = useTheme()
  const { name, role, photo, socialLinks } = member

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Image src={photo} alt={name} ratio='4/3' />
      </Box>
    </>
  )
}
