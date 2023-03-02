import Grid from '@mui/material/Grid'
import SimpleCard from 'src/views/kenji-demo/SimpleCard'
import TotalRevenue from 'src/views/kenji-demo/TotalRevenue'
import ResponsiveChart from 'src/views/kenji-demo/ResponsiveChart'
import LatestProjects from 'src/views/kenji-demo/LatestProjects'
import WeeklySales from 'src/views/kenji-demo/WeeklySales'

import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

// **Icons
import Refresh from 'mdi-material-ui/Refresh'
import FilterVariant from 'mdi-material-ui/FilterVariant'

const KenjiDemo = () => {
  return (
    <ApexChartWrapper>
      <Box sx={{ marginBottom: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant='h4' sx={{ marginBottom: 2 }}>
              Default Dashboard
            </Typography>
            <Typography variant='body1' sx={{ marginBottom: 2 }}>
              Welcome back, Lucy! We've missed you. 👋
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              columnGap: 2,
              flexDirection: { xs: 'column-reverse', md: 'row' },
              alignItems: 'center'
            }}
          >
            <Box>
              <IconButton size='small' aria-label='refresh' sx={{ color: 'primary.dark' }}>
                <FilterVariant />
              </IconButton>
              <IconButton size='small' aria-label='filter' sx={{ color: 'primary.dark' }}>
                <Refresh />
              </IconButton>
            </Box>

            <Button variant='contained'>Today: April 29</Button>
          </Box>
        </Box>

        <Divider variant='middle' />
      </Box>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={3}>
          <SimpleCard title='Sales Today' chip='Today' trendValue='+26%' number={2.532} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <SimpleCard title='Visitors' chip='Annual' trend='negative' trendValue='-14%' number={170.212} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <SimpleCard title='Total Earnings' chip='Monthly' trendValue='+18%' number='$ 24.300' />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <SimpleCard title='Pending Orders' trendValue='-9%' number={45} trend='negative' />
        </Grid>
        <Grid item xs={12} lg={8} alignItems='stretch'>
          <TotalRevenue />
        </Grid>
        <Grid item xs={12} lg={4}>
          <WeeklySales />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ResponsiveChart />
        </Grid>
        <Grid item xs={12} lg={8}>
          <LatestProjects />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default KenjiDemo
