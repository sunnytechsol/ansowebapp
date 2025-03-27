import { useState } from 'react'
import ComLogo from './assets/logo.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TopC from './Components/TopC'
import EnsoF from './Components/EnsoF'
import EnsoBenefits from './Components/EnsoBenefits'
import Staking from './Components/Staking'
import Tokenomics from './Components/Tokenomics'
import PresaleDetails from './Components/PersaleDetails'
import TeamPlayers from './Components/TeamPlayers'
import Faqs from './Components/Faqs'
import Footer from './Components/Footer'

function App() {

  return ( 
    <>
      
    <TopC />
    <EnsoF />
    <EnsoBenefits />
    <Staking />
    <Tokenomics />
    <PresaleDetails />
    <TeamPlayers />
    <Faqs />
    <Footer />

    </>
  )
}

export default App
