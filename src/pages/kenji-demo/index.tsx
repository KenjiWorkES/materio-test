import Grid from '@mui/material/Grid'
import SimpleCard from 'src/views/kenji-demo/SimpleCard'
import TotalRevenue from 'src/views/kenji-demo/TotalRevenue'
import ResponsiveChart from 'src/views/kenji-demo/ResponsiveChart'

import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const KenjiDemo = () => {
  return (
    <ApexChartWrapper>
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
        <Grid item xs={12} lg={8}>
          <TotalRevenue />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ResponsiveChart />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default KenjiDemo
