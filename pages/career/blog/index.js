import PropTypes from 'prop-types'
// @mui
import { styled } from '@mui/material/styles'
import { Grid, Container } from '@mui/material'
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config'
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/career/posts'
// _data
import _mock from '../../../_data/mock'
// layouts
import Layout from '../../../src/layouts'
// components
import { Page } from '../../../src/components'
// sections
import { NewsletterCareer } from '../../../src/sections/newsletter'
import { BlogCareerPostList, BlogSidebar } from '../../../src/sections/blog'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}))

// ----------------------------------------------------------------------

CareerBlogPage.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default function CareerBlogPage({ posts }) {
  return (
    <Page title='Blog - Career'>
      <RootStyle>
        <Container
          sx={{
            mt: { xs: 4, md: 10 },
          }}
        >
          <Grid container spacing={{ md: 8 }}>
            <Grid item xs={12} md={8}>
              <BlogCareerPostList posts={posts} />
            </Grid>

            <Grid item xs={12} md={4}>
              <BlogSidebar
                recentPosts={{
                  list: posts.slice(-4),
                  path: '/career/blog',
                }}
                advertisement={{
                  title: 'Advertisement',
                  description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                  imageUrl: _mock.image.career(10),
                  path: '#',
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <NewsletterCareer />
      </RootStyle>
    </Page>
  )
}

// ----------------------------------------------------------------------

CareerBlogPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  }
}
