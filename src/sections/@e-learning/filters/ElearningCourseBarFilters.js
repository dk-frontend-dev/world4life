import PropTypes from 'prop-types'
import { useState } from 'react'
// @mui
import { Stack, Drawer, Box, Typography } from '@mui/material'
// config
import { DRAWER_WIDTH, HEADER_DESKTOP_HEIGHT } from '../../../config'
//

// ----------------------------------------------------------------------

const defaultValues = {
  filterDuration: [],
  filterCategories: [],
  filterRating: null,
  filterFee: [],
  filterLevel: [],
  filterLanguage: [],
}

ElearningCourseBarFilters.propTypes = {
  mobileOpen: PropTypes.bool,
  onMobileClose: PropTypes.func,
}

export default function ElearningCourseBarFilters({ mobileOpen, onMobileClose }) {
  const [filters, setFilters] = useState(defaultValues)

  const renderFilters = (
    <Stack spacing={2.5}>
      <section>
        <Typography variant='overline' sx={{ mb: 2, color: 'text.secondary', display: 'block' }}>
          Ratings
        </Typography>
      </section>

      <section>
        <Typography variant='overline' sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Duration
        </Typography>
      </section>

      <section>
        <Typography variant='overline' sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Category
        </Typography>
      </section>

      <section>
        <Typography variant='overline' sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Level
        </Typography>
      </section>

      <section>
        <Typography variant='overline' sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Fee
        </Typography>
      </section>

      <section>
        <Typography variant='overline' sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Language
        </Typography>
      </section>
    </Stack>
  )

  return (
    <>
      {/* -- Desktop -- */}
      <Box
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          display: {
            xs: 'none',
            md: 'block',
          },
          top: { md: HEADER_DESKTOP_HEIGHT },
          position: { md: 'sticky' },
        }}
      >
        {renderFilters}
      </Box>

      {/* -- Mobile -- */}
      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            pt: 5,
            px: 3,
            width: DRAWER_WIDTH,
          },
        }}
      >
        {renderFilters}
      </Drawer>
    </>
  )
}
