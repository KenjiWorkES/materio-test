// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'

import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const ResponsiveChart = () => {
  // ** Hook
  const theme = useTheme()

  const rows = [
    { source: 'Social', revenue: 260, value: '+35%', trend: 'positive' },
    { source: 'Search Engines', revenue: 125, value: '-12%', trend: 'negative' },
    { source: 'Direct', revenue: 54, value: '+46%', trend: 'positive' },
    { source: 'Other', revenue: 146, value: '+24%', trend: 'positive' }
  ]

  const series = [260, 125, 54, 146]
  const options: ApexOptions = {
    chart: {
      type: 'donut',
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: '85%'
        }
      }
    },
    labels: ['Social', 'Search Engines', 'Direct', 'Other'],
    legend: { show: false },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5
      }
    },
    dataLabels: { enabled: false },
    colors: [
      theme.palette.info.main,
      theme.palette.error.main,
      theme.palette.warning.main,
      theme.palette.secondary.main
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Weekly Sales'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts type='donut' height={150} options={options} series={series} />
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Source</TableCell>
              <TableCell>Revenue</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.source}
                sx={{
                  '&:last-of-type td, &:last-of-type th': {
                    border: 0
                  }
                }}
              >
                <TableCell component='th' scope='row'>
                  {row.source}
                </TableCell>
                <TableCell>{row.revenue}</TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default ResponsiveChart
