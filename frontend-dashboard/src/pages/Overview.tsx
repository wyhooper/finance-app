import { useState, } from 'react'
import { Box, Button, Typography } from '@mui/material';
import * as styles from '../styles/pages/Overview'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function Overview() {
  const [count, setCount] = useState(0)

  return (
    // Container for the app
    <Box sx={styles.pageContainer}>
        <Box sx={styles.pageTitle}>
            Dashboard

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date Range"
              slotProps={{
                textField: {
                  size: 'small',
                  sx: { height: '40px' }, 
                },
              }}
            />
          </LocalizationProvider>

        </Box>

        <Box sx={styles.overviewCardBox}>
          {/* Income */}
          <Box sx={styles.overviewCards}>
            Income
          </Box>

          {/* Spent */}
          <Box sx={styles.overviewCards}>
            Spent
          </Box>

          {/* Left to Budget */}
          <Box sx={styles.overviewCards}>
            Left to Budget
          </Box>

          {/* Savings Rate */}
          <Box sx={styles.overviewCards}>
            Savings Rate
          </Box>
        </Box>

        <Box sx={styles.chartsCardBox}>
          <Box sx={styles.spendingOverviewBox}>
            <Box>
              Spending Overview
            </Box> 
          </Box>

          <Box sx={styles.cashFlowBox}>
            <Box>
              Cash Flow
            </Box>
          </Box>
        </Box>

        <Box sx={styles.chartsCardBox}>
          <Box sx={styles.recentTransactionsBox}>
            Recent Transactions
          </Box>
          <Box sx={styles.recentTransactionsBox}>
            Budget Progress
          </Box>
        </Box>
    </Box>
  )
}

export default Overview
