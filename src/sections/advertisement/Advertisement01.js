import PropTypes from 'prop-types'
// @mui
import { Stack, Box, Typography, Button } from '@mui/material'
// components
import { Image } from '../../components'

// ----------------------------------------------------------------------

Advertisement01.propTypes = {
  advertisement: PropTypes.shape({
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default function Advertisement01({ advertisement }) {
  const { title, description, path, imageUrl } = advertisement

  return (
    <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}>
      <Stack
        alignItems='center'
        sx={{
          p: 5,
          width: 1,
          bottom: 0,
          zIndex: 9,
          textAlign: 'center',
          position: 'absolute',
        }}
      >
        <Typography variant='h4' sx={{ color: 'secondary.main' }}>
          {title}
        </Typography>
        <Typography variant='body2' sx={{ mt: 1, mb: 3, color: 'common.white' }}>
          {description}
        </Typography>
        <Button href={path} variant='contained'>
          Go Now
        </Button>
      </Stack>

      <Image alt='advertisement' src={imageUrl} ratio='1/1' />
    </Box>
  )
}
