import Grid from '@mui/material/Grid'
import SimpleCard from 'src/views/kenji-demo/SimpleCard'

const KenjiDemo = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={3}>
        <SimpleCard title='Sales Today' chip='Today' trendValue='+26%' number={2.532} />
      </Grid>
      <Grid item xs={12} md={3}>
        <SimpleCard title='Visitors' chip='Annual' trend='negative' trendValue='-14%' number={170.212} />
      </Grid>
      <Grid item xs={12} md={3}>
        <SimpleCard title='Total Earnings' chip='Monthly' trendValue='+18%' number='$ 24.300' />
      </Grid>
      <Grid item xs={12} md={3}>
        <SimpleCard title='Pending Orders' trendValue='-9%' number={45} trend='negative' />
      </Grid>
    </Grid>
  )
}

export default KenjiDemo
