export const stockScreenerData = [
  {
    ticker: 'AAPL',
    companyName: 'Apple Inc.',
    price: 189.25,
    change: 2.45,
    changePercent: 1.31,
    volume: 45234567,
    marketCap: '2.95T',
    status: 'PASS',
    criteria: {
      priceRange: 'PASS',
      volume: 'PASS',
      marketCap: 'PASS',
      volatility: 'PASS'
    }
  },
  {
    ticker: 'MSFT',
    companyName: 'Microsoft Corporation',
    price: 378.91,
    change: -1.23,
    changePercent: -0.32,
    volume: 23456789,
    marketCap: '2.81T',
    status: 'PASS',
    criteria: {
      priceRange: 'PASS',
      volume: 'PASS',
      marketCap: 'PASS',
      volatility: 'PASS'
    }
  },
  {
    ticker: 'GOOGL',
    companyName: 'Alphabet Inc.',
    price: 142.87,
    change: 0.95,
    changePercent: 0.67,
    volume: 12345678,
    marketCap: '1.78T',
    status: 'FAIL',
    criteria: {
      priceRange: 'PASS',
      volume: 'FAIL',
      marketCap: 'PASS',
      volatility: 'PASS'
    }
  },
  {
    ticker: 'TSLA',
    companyName: 'Tesla, Inc.',
    price: 248.50,
    change: 5.67,
    changePercent: 2.33,
    volume: 78901234,
    marketCap: '789B',
    status: 'PASS',
    criteria: {
      priceRange: 'PASS',
      volume: 'PASS',
      marketCap: 'PASS',
      volatility: 'PASS'
    }
  }
];

export const fundamentalsData = [
  {
    ticker: 'AAPL',
    roa: 28.5,
    roe: 147.4,
    roic: 45.2,
    debtToEquity: 1.73,
    currentRatio: 0.94,
    quickRatio: 0.83,
    status: 'PASS',
    details: {
      roaStatus: 'PASS',
      roeStatus: 'PASS',
      roicStatus: 'PASS'
    }
  },
  {
    ticker: 'MSFT',
    roa: 17.9,
    roe: 36.7,
    roic: 25.1,
    debtToEquity: 0.35,
    currentRatio: 1.77,
    quickRatio: 1.65,
    status: 'PASS',
    details: {
      roaStatus: 'PASS',
      roeStatus: 'PASS',
      roicStatus: 'PASS'
    }
  },
  {
    ticker: 'GOOGL',
    roa: 12.3,
    roe: 25.8,
    roic: 18.9,
    debtToEquity: 0.12,
    currentRatio: 2.89,
    quickRatio: 2.75,
    status: 'FAIL',
    details: {
      roaStatus: 'FAIL',
      roeStatus: 'PASS',
      roicStatus: 'PASS'
    }
  },
  {
    ticker: 'TSLA',
    roa: 7.8,
    roe: 19.3,
    roic: 12.4,
    debtToEquity: 0.17,
    currentRatio: 1.29,
    quickRatio: 0.92,
    status: 'PASS',
    details: {
      roaStatus: 'PASS',
      roeStatus: 'PASS',
      roicStatus: 'PASS'
    }
  }
];

export const technicalLevelsData = [
  {
    ticker: 'AAPL',
    currentPrice: 189.25,
    pivotPoint: 187.50,
    resistance: {
      r1: 192.75,
      r2: 198.00,
      r3: 203.25
    },
    support: {
      s1: 182.25,
      s2: 177.00,
      s3: 171.75
    },
    priceBands: {
      band10: 208.18,
      band15: 217.64,
      band20: 227.10
    },
    trend: 'BULLISH'
  },
  {
    ticker: 'MSFT',
    currentPrice: 378.91,
    pivotPoint: 375.00,
    resistance: {
      r1: 385.50,
      r2: 392.00,
      r3: 398.50
    },
    support: {
      s1: 368.50,
      s2: 362.00,
      s3: 355.50
    },
    priceBands: {
      band10: 416.80,
      band15: 435.75,
      band20: 454.69
    },
    trend: 'BULLISH'
  }
];

export const optionsData = [
  {
    ticker: 'AAPL',
    expiry: '2025-02-21',
    strike: 190,
    type: 'CALL',
    premium: 5.20,
    delta: 0.52,
    gamma: 0.025,
    theta: -0.18,
    vega: 0.35,
    impliedVolatility: 28.5,
    openInterest: 12450,
    volume: 2340,
    bidAskSpread: 0.08,
    status: 'VALID'
  },
  {
    ticker: 'AAPL',
    expiry: '2025-03-21',
    strike: 195,
    type: 'CALL',
    premium: 7.85,
    delta: 0.45,
    gamma: 0.022,
    theta: -0.15,
    vega: 0.42,
    impliedVolatility: 31.2,
    openInterest: 8930,
    volume: 1870,
    bidAskSpread: 0.12,
    status: 'VALID'
  },
  {
    ticker: 'MSFT',
    expiry: '2025-02-21',
    strike: 380,
    type: 'CALL',
    premium: 8.90,
    delta: 0.48,
    gamma: 0.018,
    theta: -0.22,
    vega: 0.38,
    impliedVolatility: 26.8,
    openInterest: 15670,
    volume: 3210,
    bidAskSpread: 0.15,
    status: 'VALID'
  }
];

export const recommendationsData = [
  {
    ticker: 'AAPL',
    recommendedAction: 'BUY CALL',
    strike: 190,
    expiry: '2025-02-21',
    premium: 5.20,
    breakeven: 195.20,
    maxProfit: 'UNLIMITED',
    maxLoss: 520,
    probability: 68,
    riskReward: '1:3.2',
    confidence: 'HIGH',
    reasoning: 'Strong fundamentals, bullish technical pattern, favorable risk/reward ratio'
  },
  {
    ticker: 'MSFT',
    recommendedAction: 'BUY CALL',
    strike: 380,
    expiry: '2025-02-21',
    premium: 8.90,
    breakeven: 388.90,
    maxProfit: 'UNLIMITED',
    maxLoss: 890,
    probability: 65,
    riskReward: '1:2.8',
    confidence: 'HIGH',
    reasoning: 'Solid earnings outlook, technical breakout pattern, high options volume'
  }
];

export const auditTrailData = [
  {
    id: 'AUDIT_001',
    timestamp: '2025-01-15T10:30:00Z',
    action: 'STOCK_SCREENING',
    user: 'system',
    details: {
      stocksProcessed: 125,
      passed: 28,
      failed: 97,
      executionTime: '2.34s'
    },
    status: 'COMPLETED'
  },
  {
    id: 'AUDIT_002',
    timestamp: '2025-01-15T10:32:15Z',
    action: 'FUNDAMENTALS_ANALYSIS',
    user: 'system',
    details: {
      stocksAnalyzed: 28,
      passed: 24,
      failed: 4,
      executionTime: '1.87s'
    },
    status: 'COMPLETED'
  },
  {
    id: 'AUDIT_003',
    timestamp: '2025-01-15T10:35:42Z',
    action: 'OPTIONS_VALIDATION',
    user: 'system',
    details: {
      contractsValidated: 156,
      validContracts: 89,
      invalidContracts: 67,
      executionTime: '3.21s'
    },
    status: 'COMPLETED'
  }
];

export const userData = [
  {
    id: 'USER_001',
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'PREMIUM',
    lastLogin: '2025-01-15T09:45:00Z',
    status: 'ACTIVE',
    watchlist: ['AAPL', 'MSFT', 'GOOGL'],
    totalTrades: 45,
    successRate: 78
  },
  {
    id: 'USER_002',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    role: 'BASIC',
    lastLogin: '2025-01-14T16:20:00Z',
    status: 'ACTIVE',
    watchlist: ['TSLA', 'NVDA'],
    totalTrades: 23,
    successRate: 65
  },
  {
    id: 'USER_003',
    name: 'Michael Brown',
    email: 'mike.brown@example.com',
    role: 'PREMIUM',
    lastLogin: '2025-01-13T11:30:00Z',
    status: 'INACTIVE',
    watchlist: ['AAPL', 'MSFT', 'TSLA', 'AMZN'],
    totalTrades: 67,
    successRate: 82
  }
];

export const platformStats = {
  stocksScreened: 500,
  passFailAccuracy: 95,
  validOptionsRecommended: 120,
  totalUsers: 2540,
  successfulTrades: 18430,
  portfolioValue: '125M'
};