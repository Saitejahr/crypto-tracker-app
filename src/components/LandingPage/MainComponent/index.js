import React from 'react'
import './styles.css'
import Button from './../../Common/Button/button'
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
import { RWebShare } from 'react-web-share'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Button text={'Dashboard'} onClick={() => navigate('/dashboard')} />
          <RWebShare
            data={{
              text: 'CryptoDashboard made by Sk Sohel Rahaman using React JS.',
              url: 'https://crypto-tracking-application.netlify.app',
              title: 'CryptoTracker.',
            }}
            onClick={() => toast.info('App Shared!')}
          >
            <Button text={'Share App'} outlined={true} />
          </RWebShare>
        </motion.div>
        <ToastContainer />
      </div>
      <div className="phone-container">
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -15 }}
          animate={{ y: 15 }}
          transition={{
            duration: 2,
            type: 'smooth',
            repeatType: 'mirror',
            repeat: Infinity,
          }}
        />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  )
}

export default MainComponent
