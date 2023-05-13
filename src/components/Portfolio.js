import React, { useEffect, useState } from 'react'
import { Table, TextField, Button, View } from '@aws-amplify/ui-react'
import { Stock, Portfolio, balancePortfolios } from '../utils/PortfolioUtils'

const StockTable = ({ portfolio, setPortfolio }) => {
  console.log('Stock table')
  // console.log(portfolio)
  const [stockTotal, setStockTotal] = useState(0)
  const [stocks, setStocks] = useState(portfolio?.stockList)
  useEffect(() => {
    //refresh page is stocks are updated
    console.log('Stocks value changed')
    // console.log(stocks)
    let allocationSum = 0

    stocks?.forEach((stock) => {
      allocationSum += Number(stock.currentPosition)
    })
    console.log('stock total')
    console.log(allocationSum)
    setStockTotal(allocationSum.toFixed(2))
  })

  const handleChange = (event, index, field) => {
    const value = event.target.value
    console.log(`handling stock change`)
    setStocks((prevStocks) => {
      const newStocks = [...prevStocks]
      newStocks[index][field] = value
      return newStocks
    })
    setPortfolio(
      new Portfolio(
        stocks,
        portfolio.portfolioName,
        portfolio.ratio,
        portfolio.stockActions
      )
    )
  }

  return (
    <table className="stock-table">
      <thead>
        <tr>
          <th>Stock Symbol</th>
          <th>Allocation</th>
          <th>Current Position</th>
          <th>Percent of Portfolio</th>
          <th>Investment Allocation</th>
        </tr>
      </thead>
      <tbody>
        {portfolio.stockList?.map((stock, index) => (
          <tr key={index}>
            <td>
              <input
                className="stock-symbol-input"
                type="text"
                value={stock.ticker || ''}
                onChange={(event) => handleChange(event, index, 'symbol')}
              />
            </td>
            <td>
              <input
                className="stock-allocation-input"
                type="number"
                value={stock.allocation}
                onChange={(event) => handleChange(event, index, 'allocation')}
              />
            </td>
            <td>
              <input
                className="stock-currentPosition-input"
                type="number"
                value={
                  stock.currentPosition ? Number(stock?.currentPosition) : 0
                }
                onChange={(event) =>
                  handleChange(event, index, 'currentPosition')
                }
              />
            </td>

            <td>
              <input
                type="text"
                readOnly="readonly"
                value={
                  stockTotal > 0
                    ? (
                        (Number(stock.currentPosition) / stockTotal) *
                        100
                      ).toFixed(2) + '%'
                    : stockTotal
                }
              />
            </td>
            <td>
              <input
                className="stock-investment-input"
                type="number"
                readOnly="readonly"
                value={
                  stock.investmentAllocation
                    ? Number(stock.investmentAllocation).toFixed(2)
                    : 0
                }
                onChange={(event) =>
                  handleChange(event, index, 'investmentAllocation')
                }
              />
            </td>
          </tr>
        ))}
        <tr key={'totals'}>
          <td>
            <input
              className="stock-symbol-input"
              type="text"
              readOnly="readonly"
              value="Totals"
            />
          </td>
          <td>
            <input
              className="stock-allocation-input"
              type="number"
              readOnly="readonly"
              value={stocks?.reduce((acc, stock) => acc + stock.allocation, 0)}
            />
          </td>
          <td>
            <input
              className="stock-currentPosition-input"
              type="number"
              readOnly="readonly"
              value={
                stocks
                  ?.reduce(
                    (acc, stock) => acc + Number(stock?.currentPosition),
                    0
                  )
                  ?.toFixed(2) || ''
              }
            />
          </td>

          <td>
            <input
              type="text"
              readOnly="readonly"
              value={
                (
                  stocks?.reduce(
                    (acc, stock) => acc + Number(stock.currentPosition),
                    0
                  ) / stockTotal
                )?.toFixed(2) *
                  100 +
                '%'
              }
            />
          </td>
          <td>
            <input
              className="stock-investment-input"
              type="number"
              readOnly="readonly"
              value={stocks?.reduce(
                (acc, stock) => acc + Number(stock?.investmentAllocation),
                0
              )}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const PortfolioForm = ({
  portfolioA,
  setPortfolioA,
  portfolioB,
  setPortfolioB,
}) => {
  const [investmentAmount, setInvestmentAmount] = useState(0)
  const investmentRatioCore = 0.9
  const handleSubmit = (event) => {
    console.log(`Handle investment`)
    event.preventDefault()
    // const portfolio = new Portfolio(portfolio.stockList);
    portfolioA.getStockAllocations(investmentAmount * investmentRatioCore)
    setPortfolioA(
      new Portfolio(
        portfolioA.stockList,
        portfolioA.portfolioName,
        portfolioA.ratio,
        portfolioA.stockActions
      )
    )
    portfolioB.getStockAllocations(investmentAmount * (1 - investmentRatioCore))
    setPortfolioB(
      new Portfolio(
        portfolioB.stockList,
        portfolioB.portfolioName,
        portfolioB.ratio,
        portfolioB.stockActions
      )
    )
    //setStocks(portfolio? portfolio.stockList : stocks);
  }

  const addInvestmentsToCurrentPosition = (event) => {
    event.preventDefault()
    console.log('commiting')
    // console.log(portfolioA?.stockList)
    portfolioA.stockList.forEach((stock, index) => {
      portfolioA.stockList[index].currentPosition =
        Number(stock.currentPosition) + Number(stock.investmentAllocation)
      portfolioA.stockList[index].investmentAllocation = 0
    })
    console.log(`portfolio stocklist`)
    // console.log(portfolioA.stockList)
    setPortfolioA(
      new Portfolio(
        portfolioA.stockList,
        portfolioA.portfolioName,
        portfolioA.ratio,
        portfolioA.stockActions
      )
    )

    portfolioB.stockList.forEach((stock, index) => {
      portfolioB.stockList[index].currentPosition =
        Number(stock.currentPosition) + Number(stock.investmentAllocation)
      portfolioB.stockList[index].investmentAllocation = 0
    })
    setPortfolioB(
      new Portfolio(
        portfolioB.stockList,
        portfolioB.portfolioName,
        portfolioB.ratio,
        portfolioB.stockActions
      )
    )
  }

  const rebalancePortfolios = (event) => {
    const [portfolio, portfolio2] = balancePortfolios([portfolioA, portfolioB])
    console.log('balanced portfolios')
    // console.log(portfolio)
    // console.log(portfolio2)
    setPortfolioA(
      new Portfolio(
        portfolio.stockList,
        portfolio.portfolioName,
        portfolio.ratio,
        portfolio.stockActions
      )
    )
    setPortfolioB(
      new Portfolio(
        portfolio2.stockList,
        portfolio2.portfolioName,
        portfolio2.ratio,
        portfolio2.stockActions
      )
    )

    // setPortfolioA(portfolio)
    // setPortfolioB(portfolio2)
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 10px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}
        >
          <TextField
            type="number"
            label="Investment Amount"
            value={investmentAmount}
            onChange={(event) => setInvestmentAmount(event.target.value)}
            style={{ marginRight: '1rem' }}
          />
          <Button type="submit">Invest</Button>
          <Button onClick={addInvestmentsToCurrentPosition}>
            Commit Investment
          </Button>
          <Button onClick={rebalancePortfolios}>Rebalance Portfolios</Button>
        </div>
      </form>
    </div>
  )
}

export const PortfolioDisplay = ({ portfolio, setPortfolio }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 10px',
      }}
    >
      <div style={{ maxWidth: '75%' }}>
        <h2>{portfolio?.portfolioName}</h2>
        <StockTable portfolio={portfolio} setStocks={setPortfolio} />
      </div>
      <div style={{ maxWidth: '25%' }}>
        <PortfolioActions portfolio={portfolio} setPortfolio={setPortfolio} />
      </div>
    </div>
  )
}

const PortfolioActions = ({ portfolio, setPortfolio }) => {
  useEffect(() => {
    console.log('updating portfolio actions')
    // console.log(portfolio)
  })
  const [showTable, setShowTable] = useState(true)
  const [rebalanceResults, setRebalanceResults] = useState(
    portfolio?.stockActions || []
  )
  const rebalancePortfolio = (e) => {
    //
    let stockPlans = portfolio.rebalance_stocks(portfolio?.getTotal())
    setRebalanceResults(stockPlans)
    portfolio.stockActions = stockPlans
    setPortfolio(portfolio)
    setShowTable(true)
  }
  const handleShowTable = () => {
    setShowTable(!showTable)
  }
  return (
    <View>
      <label>
        Current Portfolio Value: $
        <input
          type="number"
          value={portfolio?.getTotal().toFixed(2)}
          readOnly="readonly"
        />
      </label>
      <br />
      <br />
      <button onClick={rebalancePortfolio}>Rebalance Portfolio</button>
      <button onClick={handleShowTable}>
        {showTable ? 'Hide Table' : 'Show Table'}
      </button>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Action</th>
              <th>Amount to Buy/Sell</th>
              <th>Final Amount</th>
              <th>Percent Allocation</th>
            </tr>
          </thead>
          <tbody>
            {portfolio?.stockActions?.map((result) => (
              <tr key={result.ticker}>
                <td>{result.ticker}</td>
                <td>{result.action}</td>
                <td>{result.amount.toFixed(2)}</td>
                <td>{result.finalAmount?.toFixed(2)}</td>
                <td>
                  {(
                    result.finalAmount / portfolio?.getStockActionTotal()
                  ).toFixed(4)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </View>
  )
}

export const PortfoliosContainer = ({
  corePortfolioStockList,
  aggressivePortfolioStockList,
}) => {
  const investmentRatioCore = 0.9

  const [corePortfolio, setCorePortfolio] = useState(
    new Portfolio(corePortfolioStockList, 'Core Portfolio', investmentRatioCore)
  )

  const [aggressivePortfolio, setAggressivePortfolio] = useState(
    new Portfolio(
      aggressivePortfolioStockList,
      'Aggressive Portfolio',
      1 - investmentRatioCore
    )
  )

  return (
    <View>
      <PortfolioDisplay
        portfolio={corePortfolio}
        setPortfolio={setCorePortfolio}
      />
      <PortfolioDisplay
        portfolio={aggressivePortfolio}
        setPortfolio={setAggressivePortfolio}
      />
      <PortfolioForm
        portfolioA={corePortfolio}
        portfolioB={aggressivePortfolio}
        setPortfolioA={setCorePortfolio}
        setPortfolioB={setAggressivePortfolio}
      />
    </View>
  )
}
