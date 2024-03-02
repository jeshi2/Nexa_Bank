import React from 'react'
import AccountInfo from '@/app/components/AccountInfo';
import AccountBalance from '@/app/components/AccountBalance';
import DepositForm from '@/app/components/DepositForm'
import VirtualCreditCard from '@/app/components/VirtualCreditCard'

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <AccountInfo />
        <AccountBalance />

      </div>
      <div>
        <DepositForm />
      </div>
      <div>
        <VirtualCreditCard />
      </div>
    </div>

  )
}

export default Home