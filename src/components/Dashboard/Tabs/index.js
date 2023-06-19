import React, { useState } from 'react'
// import ThemeProvider from '@mui/material/ThemeProvider';
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { ThemeProvider, createTheme } from '@mui/material'
import Grid from '../Grid'
import './styles.css'
import List from '../List'

export default function TabsComponent({ coins, setSearch }) {
  const [value, setValue] = useState('grid')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const style = {
    color: 'var(--white)',
    width: '50vw',
    fontSize: '1.2rem',
    fontWeight: 600,
    fontFamily: 'Inter',
    textTransform: 'capitalized',
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3a80e9',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.length === 0 && (
              <div className="notFound-div">
                <h1>No Items Found</h1>
                <button onClick={() => setSearch('')}>Clear Search</button>
              </div>
            )}
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} delay={(i % 4) * 0.2} />
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coins.length === 0 && (
              <div className="notFound-div">
                <h1>No Items Found</h1>
                <button onClick={() => setSearch('')}>Clear Search</button>
              </div>
            )}
            {coins.map((item, i) => {
              return <List coin={item} key={i} delay={(i % 8) * 0.2} />
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  )
}
