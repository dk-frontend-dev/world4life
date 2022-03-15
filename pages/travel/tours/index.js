// @mui
import { styled } from '@mui/material/styles'
import { Container } from '@mui/material'
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config'
// hooks
import { useRequest } from '../../../src/hooks'
// layouts
import Layout from '../../../src/layouts'
// components
import { Page } from '../../../src/components'
// sections
import { TravelTourBarFilters } from '../../../src/sections/@travel'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}))

// ----------------------------------------------------------------------

export default function TravelToursPage() {
  const { data: tours = [], error } = useRequest({
    url: `/api/travel/tours`,
  })

  if (error) {
    return 'error'
  }

  return (
    <Page title='Tours - Travel'>
      <RootStyle>
        <Container>
          <TravelTourBarFilters />
        </Container>
      </RootStyle>
    </Page>
  )
}

// ----------------------------------------------------------------------

TravelToursPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
