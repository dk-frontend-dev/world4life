import PropTypes from 'prop-types'
// @mui
import { styled } from '@mui/material/styles'
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config'
// utils
import { getAllPosts } from '../../src/utils/get-mardown/e-learning/posts'
// _data
import { _testimonials, _members, _brandsColor } from '../../_data/mock'
// layouts
import Layout from '../../src/layouts'
// components
import { Page } from '../../src/components'
// sections
import { BlogElearningLatestPosts } from '../../src/sections/blog'
import { TestimonialsElearning } from '../../src/sections/testimonials'
import { TeamElearningAbout } from '../../src/sections/team'
import { OurClientsElearning } from '../../src/sections/our-clients'
import { ElearningAboutHero, ElearningAbout, ElearningAboutCoreValues } from '../../src/sections/@e-learning'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}))

// ----------------------------------------------------------------------

ElearningAboutUsPage.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default function ElearningAboutUsPage({ posts }) {
  return (
    <Page title='About Us - E-Learning'>
      <RootStyle>
        <ElearningAboutHero />

        <ElearningAbout />

        <ElearningAboutCoreValues />

        <TeamElearningAbout members={_members} />

        <OurClientsElearning brands={_brandsColor} />

        <TestimonialsElearning testimonials={_testimonials} />

        <BlogElearningLatestPosts posts={posts.slice(0, 4)} />
      </RootStyle>
    </Page>
  )
}

// ----------------------------------------------------------------------

ElearningAboutUsPage.getLayout = function getLayout(page) {
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
