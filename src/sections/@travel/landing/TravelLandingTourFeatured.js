import PropTypes from 'prop-types'
// next
import NextLink from 'next/link'
// @mui
import { styled } from '@mui/material/styles'
import { Container, Stack, Button, Typography, Box } from '@mui/material'
// routes
import Routes from '../../../routes'
//

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}))

// ----------------------------------------------------------------------

TravelLandingTourFeatured.propTypes = {
  tours: PropTypes.array.isRequired,
}

export default function TravelLandingTourFeatured({ tours }) {
  return (
    <RootStyle>
      <Container>
        <Stack spacing={3} sx={{ textAlign: 'center' }}>
          <Typography variant='h3'>Featured Tours</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {`Our Featured Tours can help you find the trip that's perfect for you!`}
          </Typography>
        </Stack>

        <Box sx={{ textAlign: 'center' }}>
          <NextLink href={Routes.travel.tours} passHref>
            <Button size='large' variant='contained'>
              View All Tours
            </Button>
          </NextLink>
        </Box>
      </Container>
    </RootStyle>
  )
}
