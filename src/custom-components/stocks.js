import React, { useEffect, useState } from 'react';
import { Table, TextField, Button, View } from '@aws-amplify/ui-react';
import {Stock, Portfolio} from '../utils/Portfolio';

const StockTable = ({ portfolio, setPortfolio }) => {
    console.log("Stock table")
    console.log(portfolio)
    const [stockTotal, setStockTotal] = useState(0)
    const [stocks, setStocks] = useState(portfolio?.stockList)
    useEffect(() => {
        //refresh page is stocks are updated
        console.log("Stocks value changed")
        console.log(stocks)
        let allocationSum = 0;

        stocks?.forEach((stock) => {
            allocationSum += Number(stock.currentPosition);
            });
        console.log("stock total")
        console.log(allocationSum)
        setStockTotal(allocationSum.toFixed(2))
    });
    
  const handleChange = (event, index, field) => {
    const value = event.target.value;
    console.log(`handling stock change`)
    setStocks(prevStocks => {
      const newStocks = [...prevStocks];
      newStocks[index][field] = value;
      return newStocks;
    });
    setPortfolio(new Portfolio(stocks, portfolio.portfolioName))
  };

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
                value={stock.ticker || ""}
                onChange={event => handleChange(event, index, 'symbol')}
              />
            </td>
            <td>
              <input
                className="stock-allocation-input"
                type="number"
                value={stock.allocation}
                onChange={event => handleChange(event, index, 'allocation')}
              />
            </td>
            <td>
              <input
                className="stock-currentPosition-input"
                type="number"
                value={stock.currentPosition? Number(stock?.currentPosition) : ""}
                onChange={event => handleChange(event, index, 'currentPosition')}
              />
            </td>
            
            <td>
              <input
                type="text"
                readOnly="readonly"
                value={ stockTotal > 0 ? ((Number(stock.currentPosition)/ stockTotal) * 100).toFixed(2)  + "%": stockTotal}
              />
            </td>
            <td>
              <input
                className="stock-investment-input"
                type="number"
                readOnly="readonly"
                value={stock.investmentAllocation ? Number(stock.investmentAllocation) : "" }
                onChange={event => handleChange(event, index, 'investmentAllocation')}
              />
            </td>
          </tr>
        ))}
      <tr key={"totals"}>
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
                value= {(stocks?.reduce((acc, stock) => acc + Number(stock?.currentPosition), 0)) || ""}
              />
            </td>
            
            <td>
              <input
                type="text"
                readOnly="readonly"
                value={ (stocks?.reduce((acc, stock) => acc + Number(stock.currentPosition), 0)/stockTotal)?.toFixed(2)*100 + "%"}
              />
            </td>
            <td>
              <input
                className="stock-investment-input"
                type="number"
                readOnly="readonly"
                value={(stocks?.reduce((acc, stock) => acc + Number(stock?.investmentAllocation),0))}
              />
            </td>
          
      </tr>
      </tbody>
    </table>
  );
};

const PortfolioForm = ({ portfolio, setPortfolio }) => {
  const [investmentAmount, setInvestmentAmount] = useState(0);

  const handleSubmit = event => {
    console.log(`Handle investment`)
    event.preventDefault();
    // const portfolio = new Portfolio(portfolio.stockList);
    portfolio.getStockAllocations(investmentAmount);
    setPortfolio(new Portfolio(portfolio.stockList, portfolio.portfolioName));
    //setStocks(portfolio? portfolio.stockList : stocks);
  };

  const addInvestmentsToCurrentPosition = event => {
    event.preventDefault();
    console.log("commiting")
    console.log(portfolio?.stockList)
    portfolio.stockList.forEach((stock, index) => {
        portfolio.stockList[index].currentPosition = Number(stock.currentPosition) + Number(stock.investmentAllocation)
        portfolio.stockList[index].investmentAllocation = 0
    })
    console.log(`portfolio stocklist`)
    console.log(portfolio.stockList)
    setPortfolio(new Portfolio(portfolio.stockList, portfolio.portfolioName));

  }
  return (
    <div style={{ maxWidth: '50%', width: '100%' }}>
      <form onSubmit={handleSubmit}>
        <StockTable portfolio={portfolio} setStocks={setPortfolio} />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
          <TextField
            type="number"
            label="Investment Amount"
            value={investmentAmount}
            onChange={event => setInvestmentAmount(event.target.value)}
            style={{ marginRight: '1rem' }}
          />
          <Button type="submit">Invest</Button>
          <Button onClick={addInvestmentsToCurrentPosition}>Commit Investment</Button>
        </div>
        
      </form>
    </div>
  );
};

export const PortfolioDisplay = ({portfolio, setPortfolio}) => {
  // const [stocks, setStocks] = useState(portfolio.stockList?.map(stock => new Stock(stock.symbol, stock.allocation, stock.currentPosition || 0)));

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log('Core Portfolio Stocks:', stocks);
  // };

  return (
    <div style={{ maxWidth: '50%', width: '100%' }}>
      <h2>{portfolio?.portfolioName}</h2>
      <PortfolioForm portfolio={portfolio} setPortfolio={setPortfolio} />
      <PortfolioActions portfolio={portfolio} />
    </div>
  );
};

const PortfolioActions = ({portfolio, setPortfolio}) =>{
   const [showTable, setShowTable] = useState(false);
   const [rebalanceResults, setRebalanceResults] = useState([]);
  const rebalancePortfolio = (e) => {
      //
    let stockPlans = portfolio.rebalance_stocks(portfolio?.getTotal())
    setRebalanceResults(stockPlans);
    setShowTable(true);
  };
  const handleShowTable = () => {
    setShowTable(!showTable);
  };
  return (
      <View>
        <label>
          Current Portfolio Value: $
          <input type="number" value={portfolio?.getTotal()} />
        </label>
        <br />
        <br />
        <button onClick={rebalancePortfolio}>Rebalance Portfolio</button>
        <button onClick={handleShowTable}>
          {showTable ? "Hide Table" : "Show Table"}
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
              {rebalanceResults.map((result) => (
                <tr key={result.ticker}>
                  <td>{result.ticker}</td>
                  <td>{result.action}</td>
                  <td>{result.amount.toFixed(2)}</td>
                  <td>{result.finalAmount?.toFixed(2)}</td>
                  <td>{(result.finalAmount/portfolio?.getTotal()).toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </View>
  )
}

export const PortfoliosContainer = ({corePortfolioStockList, aggressivePortfolioStockList}) => {

  const [corePortfolio, setCorePortfolio] = useState(new Portfolio(corePortfolioStockList, "Core Portfolio"))

  const [aggressivePortfolio, setAggressivePortfolio] = useState(new Portfolio(aggressivePortfolioStockList, "Aggressive Portfolio"))

  return (
    <View>
      <PortfolioDisplay portfolio={corePortfolio} setPortfolio={setCorePortfolio} />
      <PortfolioDisplay portfolio={aggressivePortfolio} setPortfolio={setAggressivePortfolio}/>
    </View>
  )
}