// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { FC } from 'react'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

interface SimpleCardProps {
  trend?: 'positive' | 'negative'
  trendValue: string
  number: number | string
  title: string
  chip?: string
}

const SimpleCard: FC<SimpleCardProps> = ({ trend = 'positive', trendValue, number, title, chip }) => {
  // ** Hook
  const theme = useTheme()

  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant='h6'>{title}</Typography>
          {chip && <Chip color='primary' label={chip} />}
        </Box>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          {number}
        </Typography>
        <Box sx={{ display: 'flex', columnGap: 3 }}>
          <Typography sx={{ color: trend === 'positive' ? 'success.main' : 'error.main' }}>{trendValue}</Typography>
          <Typography>Since last month</Typography>
        </Box>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
      </CardContent>
    </Card>
  )
}

export default SimpleCard
