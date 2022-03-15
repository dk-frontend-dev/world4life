import PropTypes from 'prop-types'
// utils
import { getAllPosts } from '../../src/utils/get-mardown/career/posts'
// hooks
import { useRequest } from '../../src/hooks'
// _data
import { _brandsColor, _testimonials } from '../../_data/mock'
// layouts
import Layout from '../../src/layouts'
// components
import { Page } from '../../src/components'
// sections
import { NewsletterCareer } from '../../src/sections/newsletter'
import { DownloadAppCareer } from '../../src/sections/download-app'
import { BlogCareerLatestPosts } from '../../src/sections/blog'
import { TestimonialsCareer } from '../../src/sections/testimonials'
import { OurClientsCareer } from '../../src/sections/our-clients'
import { CareerLandingHero } from '../../src/sections/@career'

// ----------------------------------------------------------------------

CareerLandingPage.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default function CareerLandingPage({ posts }) {
  const { error } = useRequest({
    url: `/api/career/jobs`,
  })

  if (error) {
    return 'error'
  }

  return (
    <Page title='Landing - Career'>
      <CareerLandingHero />

      <TestimonialsCareer testimonials={_testimonials} />

      <OurClientsCareer brands={_brandsColor} />

      <BlogCareerLatestPosts posts={posts.slice(0, 5)} />

      <DownloadAppCareer />

      <NewsletterCareer />
    </Page>
  )
}

// ----------------------------------------------------------------------

CareerLandingPage.getLayout = function getLayout(page) {
  return <Layout transparentHeader>{page}</Layout>
}

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  }
}
