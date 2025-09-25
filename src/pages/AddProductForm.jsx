import { AppBar, Box, Breadcrumbs, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const AddProductForm = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        padding={2}
        borderBottom="1px solid #eee"
        bgcolor="#fafafa"
      >
        <IconButton size="small" sx={{ mr: 2 }}>
          {/* <ArrowBackIosNewIcon fontSize="small" /> */}
        </IconButton>

        <Box>
          <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: 14, color: '#6c63ff' }}>
            <Link underline="hover" color="inherit" href="/products">
              My Products
            </Link>
          </Breadcrumbs>

          <Typography variant="h6" fontWeight="bold">
            Add Products
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default AddProductForm