import PropTypes from 'prop-types'
// @mui
import { Box, Pagination } from '@mui/material'
//

// ----------------------------------------------------------------------

ReviewElearningCourseList.propTypes = {
  reviews: PropTypes.array.isRequired,
}

export default function ReviewElearningCourseList({ reviews }) {
  return (
    <>
      <Pagination
        count={10}
        color='primary'
        size='large'
        sx={{
          pt: 5,
          pb: { xs: 10, md: 15 },
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  )
}
