import { useAuthenticator, Button } from '@aws-amplify/ui-react'
import { useRouter } from 'next/router'
import { Amplify } from 'aws-amplify'
import { useEffect } from 'react'
import { Stock } from '@/utils/Portfolio'
import { PortfoliosContainer } from '@/components/Portfolio'

// import {Auth} from 'aws-amplify'
function FinancialHomePage() {
  const router = useRouter()
  const { user, signOut } = useAuthenticator()

  useEffect(() => {
    console.log('logged in?')
    console.log(user)
    if (!user) {
      console.log('FinancialHomePageuser dne redirecting to main page')
      router.push('/')
    }
    console.log('user allowed')
  }, [user])

  const signOutUser = () => {
    signOut()
    router.push('/')
  }

  const aggresivePortfolio = [
    { symbol: 'GBTC', allocation: 0.258 },
    { symbol: 'TSLA', allocation: 0.4474 },
    { symbol: 'CELH', allocation: 0.1214 },
    { symbol: 'FNGU', allocation: 0.1732 },
  ].map(
    (stock) => new Stock(stock.symbol, stock.allocation, Math.random() * 100)
  )

  const corePortfolio = [
    { symbol: 'MSFT', allocation: 0.0301 },
    { symbol: 'PGR', allocation: 0.1937 },
    { symbol: 'TMF', allocation: 0.0483 },
    { symbol: 'TSLA', allocation: 0.0545 },
    { symbol: 'UNH', allocation: 0.1474 },
    { symbol: 'WTM', allocation: 0.0649 },
    { symbol: 'UVXY', allocation: 0.0198 },
    { symbol: 'EUO', allocation: 0.4031 },
    { symbol: 'SHOP', allocation: 0.0382 },
  ].map(
    (stock) => new Stock(stock.symbol, stock.allocation, Math.random() * 1000)
  )

  return (
    <div>
      <div>
        <PortfoliosContainer
          corePortfolioStockList={corePortfolio}
          aggressivePortfolioStockList={aggresivePortfolio}
        />
      </div>

      <Button onClick={() => signOutUser()} />
    </div>
  )
}

export default FinancialHomePage
