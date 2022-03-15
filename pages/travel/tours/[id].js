import { useState } from 'react'
// next
import { useRouter } from 'next/router'
// @mui
import { styled } from '@mui/material/styles'
import { Grid, Stack, Divider, Collapse, Container, Typography } from '@mui/material'
// routes
import Routes from '../../../src/routes'
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config'
// hooks
import { useRequest } from '../../../src/hooks'
// _data
import { _reviews } from '../../../_data/mock'
// layouts
import Layout from '../../../src/layouts'
// components
import { Page, LoadingScreen, Breadcrumbs } from '../../../src/components'
// sections
import { ReviewForm, ReviewTravelToolbar } from '../../../src/sections/reviews'
import { TravelTourGallery } from '../../../src/sections/@travel'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}))

// ----------------------------------------------------------------------

export default function TravelTourPage() {
  const router = useRouter()

  const [sort, setSort] = useState('latest')
  const [openReview, setOpenReview] = useState(false)

  const handleChangeSort = (event) => {
    setSort(event.target.value)
  }

  const { id } = router.query

  const { data: tours = [] } = useRequest({
    url: `/api/travel/tours`,
  })

  const { data: tour, error: tourError } = useRequest({
    url: id ? `/api/travel/tours/${id}` : '',
  })

  if (tourError) {
    return 'error'
  }

  if (!tour) {
    return <LoadingScreen />
  }

  return (
    <Page title={`${tour.slug} - Travel`}>
      <RootStyle>
        <Container>
          <Breadcrumbs
            sx={{ mt: 5 }}
            links={[{ name: 'Home', href: '/' }, { name: 'Tours', href: Routes.travel.tours }, { name: tour.slug }]}
          />

          <TravelTourGallery gallery={tour.gallery} />

          <Grid container spacing={8} direction='row-reverse'>
            <Grid item xs={12} md={7} lg={8}>
              <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

              <Stack spacing={2} direction='row' sx={{ mt: 5 }}>
                <Typography variant='subtitle2' sx={{ mt: 0.5 }}>
                  Share:
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>

        <Divider sx={{ my: { xs: 10, md: 15 } }} />

        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} md={7} lg={8}>
              <ReviewTravelToolbar
                totalReview={_reviews.length}
                onOpenReview={() => setOpenReview(!openReview)}
                sort={sort}
                onChangeSort={handleChangeSort}
              />
              <Collapse in={openReview}>
                <ReviewForm onClose={() => setOpenReview(false)} />
              </Collapse>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  )
}

// ----------------------------------------------------------------------

TravelTourPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
