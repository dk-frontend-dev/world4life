// @mui
import { styled } from '@mui/material/styles'
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config'
// layouts
import Layout from '../../src/layouts'
// components
import { Page } from '../../src/components'
// sections
import { TravelContactInfo, TravelContactForm } from '../../src/sections/@travel'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}))

// ----------------------------------------------------------------------

export default function TravelContactUsPage() {
  return (
    <Page title='Contact Us - Travel'>
      <RootStyle>
        <TravelContactInfo />

        <TravelContactForm />
      </RootStyle>
    </Page>
  )
}

// ----------------------------------------------------------------------

TravelContactUsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
