import PropTypes from 'prop-types'
import { m } from 'framer-motion'
// @mui
import { Typography, Box, Stack } from '@mui/material'
// components
import { Image } from '../../../components'
import { varHover, varTranHover } from '../../../components/animate'

// ----------------------------------------------------------------------

TeamTravelMember.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    role: PropTypes.string,
    socialLinks: PropTypes.objectOf(PropTypes.string),
  }),
}

export default function TeamTravelMember({ member }) {
  const { name, role, photo, socialLinks } = member

  return (
    <>
      <Box
        component={m.div}
        whileHover='hover'
        variants={varHover(1.05)}
        transition={varTranHover()}
        sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
      >
        <m.div variants={varHover()} transition={varTranHover()}>
          <Image src={photo} alt={name} ratio='3/4' />
        </m.div>
      </Box>
    </>
  )
}
