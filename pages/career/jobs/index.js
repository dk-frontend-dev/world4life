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
import { NewsletterCareer } from '../../../src/sections/newsletter'
import { CareerJobList, CareerJobBarFilters } from '../../../src/sections/@career'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}))

// ----------------------------------------------------------------------

export default function CareerJobsPage() {
  const { data: jobs = [], error } = useRequest({
    url: `/api/career/jobs`,
  })

  if (error) {
    return 'error'
  }

  return (
    <Page title='Jobs - Career'>
      <RootStyle>
        <Container>
          <CareerJobBarFilters />
          <CareerJobList jobs={jobs} loading={!jobs.length && !error} />
        </Container>
        <NewsletterCareer />
      </RootStyle>
    </Page>
  )
}

// ----------------------------------------------------------------------

CareerJobsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
