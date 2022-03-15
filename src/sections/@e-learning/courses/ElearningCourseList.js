import PropTypes from 'prop-types'
// @mui
import { Pagination, Stack } from '@mui/material'
// components
//

// ----------------------------------------------------------------------

ElearningCourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  loading: PropTypes.bool,
}

export default function ElearningCourseList({ courses, loading }) {
  return (
    <>
      <Pagination
        count={10}
        color='primary'
        size='large'
        sx={{
          pt: 10,
          pb: { xs: 10, md: 15 },
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  )
}
