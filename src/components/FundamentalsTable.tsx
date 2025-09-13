import React from 'react';
import { CheckCircle, XCircle, TrendingUp } from 'lucide-react';

interface FundamentalData {
  ticker: string;
  roa: number;
  roe: number;
  roic: number;
  debtToEquity: number;
  currentRatio: number;
  quickRatio: number;
  status: 'PASS' | 'FAIL';
  details: {
    roaStatus: 'PASS' | 'FAIL';
    roeStatus: 'PASS' | 'FAIL';
    roicStatus: 'PASS' | 'FAIL';
  };
}

interface Props {
  data: FundamentalData[];
}

const FundamentalsTable: React.FC<Props> = ({ data }) => {
  const getStatusIcon = (status: 'PASS' | 'FAIL') => {
    return status === 'PASS' ? (
      <CheckCircle className="h-4 w-4 text-green-400" />
    ) : (
      <XCircle className="h-4 w-4 text-red-400" />
    );
  };

  const getStatusColor = (status: 'PASS' | 'FAIL') => {
    return status === 'PASS' ? 'text-green-400' : 'text-red-400';
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <div className="px-4 lg:px-6 py-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Fundamentals Analysis</h3>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-gray-900/50">
            <tr>
              <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stock</th>
              <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ROA %</th>
              <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ROE %</th>
              <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ROIC %</th>
              <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">D/E Ratio</th>
              <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Current Ratio</th>
              <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {data.map((stock) => (
              <tr key={stock.ticker} className="hover:bg-gray-700/30 transition-colors duration-150">
                <td className="px-3 lg:px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">{stock.ticker}</div>
                </td>
                <td className="px-3 lg:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${getStatusColor(stock.details.roaStatus)}`}>
                      {stock.roa.toFixed(1)}%
                    </span>
                    {getStatusIcon(stock.details.roaStatus)}
                  </div>
                </td>
                <td className="px-3 lg:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${getStatusColor(stock.details.roeStatus)}`}>
                      {stock.roe.toFixed(1)}%
                    </span>
                    {getStatusIcon(stock.details.roeStatus)}
                  </div>
                </td>
                <td className="px-3 lg:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${getStatusColor(stock.details.roicStatus)}`}>
                      {stock.roic.toFixed(1)}%
                    </span>
                    {getStatusIcon(stock.details.roicStatus)}
                  </div>
                </td>
                <td className="px-3 lg:px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-300">{stock.debtToEquity.toFixed(2)}</span>
                </td>
                <td className="px-3 lg:px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-300">{stock.currentRatio.toFixed(2)}</span>
                </td>
                <td className="px-3 lg:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(stock.status)}
                    <span className={`text-sm font-medium ${getStatusColor(stock.status)}`}>
                      {stock.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FundamentalsTable;