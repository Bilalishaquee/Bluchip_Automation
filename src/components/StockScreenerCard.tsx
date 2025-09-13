import React from 'react';
import { TrendingUp, TrendingDown, CheckCircle, XCircle } from 'lucide-react';

interface StockData {
  ticker: string;
  companyName: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: string;
  status: 'PASS' | 'FAIL';
  criteria: {
    priceRange: 'PASS' | 'FAIL';
    volume: 'PASS' | 'FAIL';
    marketCap: 'PASS' | 'FAIL';
    volatility: 'PASS' | 'FAIL';
  };
}

interface Props {
  stock: StockData;
}

const StockScreenerCard: React.FC<Props> = ({ stock }) => {
  const isPositive = stock.change >= 0;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-blue-500/30 transition-all duration-200 group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-white">{stock.ticker}</span>
            {stock.status === 'PASS' ? (
              <CheckCircle className="h-5 w-5 text-green-400" />
            ) : (
              <XCircle className="h-5 w-5 text-red-400" />
            )}
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            stock.status === 'PASS' 
              ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
              : 'bg-red-500/10 text-red-400 border border-red-500/20'
          }`}>
            {stock.status}
          </span>
        </div>
        
        <div className="flex items-center space-x-1">
          {isPositive ? (
            <TrendingUp className="h-4 w-4 text-green-400" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-400" />
          )}
          <span className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {stock.changePercent.toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm text-gray-300 truncate">{stock.companyName}</h3>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">${stock.price.toFixed(2)}</span>
          <span className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}{stock.change.toFixed(2)}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
          <div>Vol: {(stock.volume / 1000000).toFixed(1)}M</div>
          <div>MCap: {stock.marketCap}</div>
        </div>

        <div className="pt-2 border-t border-gray-700">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {Object.entries(stock.criteria).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  value === 'PASS' ? 'bg-green-400' : 'bg-red-400'
                }`}></div>
                <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockScreenerCard;