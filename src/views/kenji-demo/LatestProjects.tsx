// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Chip from '@mui/material/Chip'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'

import DotsVertical from 'mdi-material-ui/DotsVertical'

import { ThemeColor } from 'src/@core/layouts/types'

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const rows = [
  {
    name: 'Project Aurora',
    start: '01/01/2023',
    end: '31/06/2023',
    state: 'done',
    assignee: 'James Dalton'
  },
  {
    name: 'Project Eagle',
    start: '01/01/2023',
    end: '31/06/2023',
    state: 'progress',
    assignee: 'Tracy Mack'
  },
  {
    name: 'Project Fireball',
    start: '01/01/2023',
    end: '31/06/2023',
    state: 'done',
    assignee: 'Sallie Love'
  },
  {
    name: 'Project Omega',
    start: '01/01/2023',
    end: '31/06/2023',
    state: 'done',
    assignee: 'Glenda Jang'
  },
  {
    name: 'Project Yoda',
    start: '01/01/2023',
    end: '31/06/2023',
    state: 'cancelled',
    assignee: 'Raymond Ennis'
  },
  {
    name: 'Project Zulu',
    start: '01/01/2023',
    end: '31/06/2023',
    state: 'done',
    assignee: 'Matthew Winters'
  }
]

const statusColorObj: StatusObj = {
  cancelled: { color: 'error' },
  progress: { color: 'warning' },
  done: { color: 'success' }
}

const LatestProjects = () => {
  return (
    <TableContainer component={Paper}>
      <CardHeader
        title='Latest Projects'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Assignee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>{row.start}</TableCell>
              <TableCell>{row.end}</TableCell>
              <TableCell>
                <Chip label={row.state} color={statusColorObj[row.state].color} />
              </TableCell>
              <TableCell>{row.assignee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LatestProjects
