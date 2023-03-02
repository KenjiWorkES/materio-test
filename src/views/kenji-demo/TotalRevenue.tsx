// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const getYLabels = (value: number) => {
  if (value % 500 === 0) {
    return `${value}`
  }
}

const TotalRevenue = () => {
  // ** Hook
  const theme = useTheme()

  const series = [
    { data: [2200, 1600, 1700, 1800, 1500, 2300, 3000, 2500, 2800, 3700, 2900, 3400] },
    { data: [1000, 700, 600, 800, 950, 1250, 1500, 1300, 1500, 2200, 1500, 1800] }
  ]

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '40%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 3,
      colors: [theme.palette.primary.main, theme.palette.secondary.main],
      curve: 'smooth',
      dashArray: [0, 4]
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0.3,
        stops: [0, 90, 100]
      },
      colors: [theme.palette.primary.light, theme.palette.secondary.light]
    },
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
    series: [
      {
        data: [],
        type: 'line'
      }
    ],
    colors: [
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.primary.main,
      theme.palette.background.default,
      theme.palette.background.default
    ],
    markers: {
      size: 5,
      colors: [theme.palette.primary.light, theme.palette.secondary.light],
      hover: {
        size: 9
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      tickPlacement: 'on',
      labels: { show: true },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      show: true,
      tickAmount: 7,
      min: 500,
      max: 4000,
      labels: {
        offsetX: -17
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Total revenue'
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
        <ReactApexcharts type='area' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default TotalRevenue
