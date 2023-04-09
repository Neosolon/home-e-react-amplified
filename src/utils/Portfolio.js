export class Stock {
  constructor(ticker, allocation, currentPosition) {
    this.ticker = ticker;
    this.allocation = allocation;
    this.currentPosition = currentPosition || 0;
    this.investmentAllocation = 0;
  }
}

export class StockAction {
    constructor(ticker, action, amount, finalAmount) {
        this.action = action; // buy, sell, hold
        this.amount = amount;
        this.ticker = ticker;
        this.finalAmount = finalAmount
  }
}

export class Portfolio {
  constructor(stockList, name, portfolioRatio, stockActions) {
    console.log(`${name} received stockLIst`)
    console.log(stockList)
    this._checkAllocationSum(stockList)
    this.stockList = stockList;
    this.total = this._calculatePorfolioTotal(stockList)
    this.totalInvestment = 0
    this.portfolioName = name;
    this.stockActions = stockActions || []
    this.ratio = portfolioRatio
  }

  _checkAllocationSum(stockList) {
    let allocationSum = this._calculatePorfolioTotalAllocations(stockList);
    
    if (Math.abs(allocationSum - 1.0) > 0.001) {
        console.log(stockList)
      throw new Error(`Stock allocations must add up to 100% ${allocationSum}`);
    }
  }

  _calculatePorfolioTotalAllocations(stockList) {
    let allocationSum = 0;

    stockList?.forEach((stock) => {
        allocationSum += Number(stock.allocation);
        });
    return allocationSum
  }
  _calculatePorfolioTotal(stockList) {
    let allocationSum = 0;

    stockList?.forEach((stock) => {
        allocationSum += Number(stock.currentPosition);
        });
    return allocationSum
  }

  getTotal() {
    return this._calculatePorfolioTotal(this.stockList)
  }

  getStockActionTotal(){
    return this.stockActions.reduce( (acc, stockAction) => acc += stockAction.finalAmount, 0)
  }

  updateStockList(stockList){
    this._checkAllocationSum(stockList)
    this.stockList = stockList;
    this.total = this._calculatePorfolioTotal(stockList)
  }
  updateStockActions(stockPlans) {
    this.stockActions = stockPlans
  }

  getStockAllocations(investment) {
    const targetAllocations = {};
    let totalAllocation = 0;
    this.stockList.forEach((stock, index) => {
      const targetAllocation = investment * stock.allocation;
      totalAllocation += targetAllocation;
      this.stockList[index].investmentAllocation = targetAllocation.toFixed(2);
      targetAllocations[stock.ticker] = targetAllocation.toFixed(2);
    });
    if (Math.abs(totalAllocation - investment) > 0.001) {
      throw new Error(`Error calculating target allocations ${totalAllocation} ${investment}`);
    }
    return targetAllocations;
  }

  rebalance_stocks(totalPortfolioValue) {

    let stockPlans = this.stockList.map( (stock) =>{
        const stockPlan  = {ticker: stock.ticker}
        stockPlan.targetValue = totalPortfolioValue * stock.allocation;
        stockPlan.currentAllocation = stock.currentPosition/totalPortfolioValue;
        stockPlan.currentPosition = stock.currentPosition;
        stockPlan.targetAllocation = stock.allocation * totalPortfolioValue;
        return stockPlan
    })

    // Rebalance stocks
    return stockPlans.map((stockPlan) => {
      const diff = stockPlan.targetValue - stockPlan.currentPosition;
      const amount = Math.abs(diff);
      let action = ""
      if (amount < .01){
        action = "hold"
      }
      else if (diff > 0) {
        action = 'buy';
      } else if (diff < 0) {
        action = 'sell';
        
      } else{
        action = "hold"
      }
      return new StockAction(stockPlan.ticker, action, amount, stockPlan.targetValue)
    });
  }
}

export function balancePortfolios(portfolios) {
    console.log(portfolios)
  const stockValues = [...portfolios[0].stockList, ...portfolios[1].stockList]
  const totalPortfolioValue = portfolios.reduce((total, portfolio) => total + portfolio.total, 0);
  const totalValue = stockValues.reduce((total, stockValue) => total + Number(stockValue.currentPosition), 0);
  const totalInvestment = totalValue;

  // Calculate target allocations for each portfolio
  const rebalancePlans= [];
  portfolios.forEach((portfolio, index) => {
    const stock_plan = portfolio.rebalance_stocks(totalInvestment*portfolio.ratio);
    portfolios[index].updateStockActions(stock_plan)
    rebalancePlans.push({ portfolio, stock_plan});
  });
 console.log(rebalancePlans)
  let transactions = []
  rebalancePlans.forEach( ({portfolio, stock_plan}) => {
    console.log(stock_plan)
    transactions = transactions.concat(stock_plan)
  })
  console.log(transactions)
  return portfolios
}

