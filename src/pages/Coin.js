import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './../components/Common/Header/index'
import Loader from '../components/Common/Loader'

import { coinObject } from '../functions/convertObject'
import List from './../components/Dashboard/List/index'
import Coininfo from '../components/Coin/CoinInfo'

import { getCoinData } from '../functions/getCoinData'
import { getCoinPrices } from '../functions/getCoinPrices'
import LineChart from './../components/Coin/LineChart/index'

import SelectDays from '../components/Coin/SelectDays'
import { settingChartData } from '../functions/settingChartData'
import TogglePriceType from '../components/Coin/PriceType'

const CoinPage = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [coinData, setCoinData] = useState()
  const [days, setDays] = useState(60)
  const [chartData, setChartData] = useState({})
  const [priceType, setPriceType] = useState('prices')

  useEffect(() => {
    if (id) {
      getData()
    }
  }, [id])

  async function getData() {
    const data = await getCoinData(id)
    if (data) {
      coinObject(setCoinData, data)
      const prices = await getCoinPrices(id, days, priceType)
      if (prices.length > 0) {
        settingChartData(setChartData, prices)
        setIsLoading(false)
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true)
    setDays(event.target.value)
    const prices = await getCoinPrices(id, event.target.value, priceType)
    if (prices.length > 0) {
      settingChartData(setChartData, prices)
      setIsLoading(false)
    }
  }

  const handlePriceTypeChange = async (event, newType) => {
    try {
      setIsLoading(true)
      console.log('1st > ', newType)
      setPriceType(newType)
      const prices = await getCoinPrices(id, days, newType)
      if (prices.length > 0) {
        settingChartData(setChartData, prices)
        setIsLoading(false)
      }
    } catch (error) {
      console.log('error is > ', error)
      setIsLoading(false)
    }
  }

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper" style={{ padding: '0rem 1rem' }}>
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <Coininfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  )
}

export default CoinPage
