import { useState, } from 'react'
import { Box, Button } from '@mui/material';
import * as styles from '../styles/Sidebar'
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

function Sidebar() {
  const [count, setCount] = useState(0)

  return (
    // Container for the app
    <Box sx={styles.container}> 
      
      <Box sx={styles.titleBar}>
        <Box component="img"
          src={logo}
          alt='Hoop'
          sx={{height: '3rem', width: '3rem'}}/>
        Hooper's Holdings
      </Box>
      {/* Now we need components for each of the views */}
      <Box sx={styles.buttonBox}>
          <Button startIcon={<HouseOutlinedIcon/>} sx={styles.pageButtons} component={NavLink} to="/">
              Overview
          </Button>

          <Button startIcon={<ReceiptLongRoundedIcon/>} sx={styles.pageButtons} component={NavLink} to="/transactions">
              Transactions
          </Button>

          <Button startIcon={<ContentPasteRoundedIcon/>} sx={styles.pageButtons} component={NavLink} to="/budget">
              Budget
          </Button>

          <Button startIcon={<TrendingUpOutlinedIcon/>} sx={styles.pageButtons} component={NavLink} to="/goals">
              Goals
          </Button>

          <Button startIcon={<SummarizeOutlinedIcon/>} sx={styles.pageButtons} component={NavLink} to="/reports">
              Reports
          </Button>

          <Button startIcon={<SentimentDissatisfiedOutlinedIcon/>} sx={styles.pageButtons} component={NavLink} to="/debts">
              Debts
          </Button>
      </Box>
    </Box>
  )
}

export default Sidebar