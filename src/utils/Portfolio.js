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
  constructor(stockList) {
    this._checkAllocationSum(stockList)
    this.stockList = stockList;
    this.total = this._calculatePorfolioTotal(stockList)
    this.totalInvestment = 0
  }

  _checkAllocationSum(stockList) {
    let allocationSum = this._calculatePorfolioTotalAllocations(stockList);
    
    if (Math.abs(allocationSum - 1.0) > 0.001) {
      throw new Error(`Stock allocations must add up to 100% ${allocationSum}`);
    }
  }

  _calculatePorfolioTotalAllocations(stockList) {
    let allocationSum = 0;

    stockList.forEach((stock) => {
        allocationSum += Number(stock.allocation);
        });
    return allocationSum
  }
  _calculatePorfolioTotal(stockList) {
    let allocationSum = 0;

    stockList.forEach((stock) => {
        allocationSum += Number(stock.currentPosition);
        });
    return allocationSum
  }

  getTotal() {
    return this._calculatePorfolioTotal(this.stockList)
  }

  updateStockList(stockList){
    this._checkAllocationSum(stockList)
    this.stockList = stockList;
    this.total = this._calculatePorfolioTotal(stockList)
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
      if (diff > 0) {
        action = 'buy';
      } else if (diff < 0) {
        action = 'sell';
        
      } else {
        action = 'hold';
      }
      return new StockAction(stockPlan.ticker, action, amount, stockPlan.targetValue)
    });
  }
}

export function balancePortfolios(portfolios, stockValues) {
  const totalPortfolioValue = portfolios.reduce((total, portfolio) => total + portfolio.currentValue, 0);
  const totalValue = stockValues.reduce((total, stockValue) => total + stockValue.currentPosition, 0);
  const totalInvestment = totalPortfolioValue + totalValue;

  // Calculate target allocations for each portfolio
  const portfolioAllocations = [];
  portfolios.forEach((portfolio) => {
    const targetAllocations = portfolio.getStockAllocations(totalInvestment);
    portfolioAllocations.push({ portfolio, targetAllocations });
  });

  // Calculate target values for each stock
  const targetStockValues = [];
  stockValues.forEach((stockValue) => {
    const targetValue = totalInvestment * stockValue.allocation;
    targetStockValues.push({ ...stockValue, targetValue });
  });

  // Rebalance portfolios
  const rebalancePlans = [];
  portfolioAllocations.forEach(({ portfolio, targetAllocations }) => {
    const currentStockValues = portfolio.stockList.map((stock) => ({
      ticker: stock.ticker,
      currentPosition: stock.currentPosition,
      allocation: stock.allocation,
    }));
    const portfolioStockValues = currentStockValues.concat(targetStockValues);
    const stockPlans = portfolio.rebalance_stocks(portfolioStockValues, totalInvestment);
    rebalancePlans.push({ portfolio, stockPlans });
  });

  // Execute rebalance plans
  const transactions = [];
  rebalancePlans.forEach(({ portfolio, stockPlans }) => {
    stockPlans.forEach((stockPlan) => {
      if (stockPlan.action === 'buy') {
        const amount = parseFloat(stockPlan.amount);
        const transaction = { type: 'buy', ticker: stockPlan.ticker, amount };
        transactions.push({ portfolio, transaction });
      } else if (stockPlan.action === 'sell') {
        const amount = parseFloat(stockPlan.amount);
        const transaction = { type: 'sell', ticker: stockPlan.ticker, amount };
        transactions.push({ portfolio, transaction });
      }
    });
  });

  return transactions;
}

