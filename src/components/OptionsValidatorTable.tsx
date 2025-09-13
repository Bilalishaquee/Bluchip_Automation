import React from 'react';
import { Target, CheckCircle, Clock, DollarSign } from 'lucide-react';

interface OptionData {
  ticker: string;
  expiry: string;
  strike: number;
  type: 'CALL' | 'PUT';
  premium: number;
  delta: number;
  gamma: number;
  theta: number;
  vega: number;
  impliedVolatility: number;
  openInterest: number;
  volume: number;
  bidAskSpread: number;
  status: 'VALID' | 'INVALID';
}

interface Props {
  data: OptionData[];
}

const OptionsValidatorTable: React.FC<Props> = ({ data }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getStatusBadge = (status: 'VALID' | 'INVALID') => {
    return status === 'VALID' ? (
      <div className="flex items-center space-x-1">
        <CheckCircle className="h-4 w-4 text-green-400" />
        <span className="text-xs font-medium text-green-400">VALID</span>
      </div>
    ) : (
      <div className="flex items-center space-x-1">
        <Clock className="h-4 w-4 text-red-400" />
        <span className="text-xs font-medium text-red-400">INVALID</span>
      </div>
    );
  };

  const getTypeColor = (type: 'CALL' | 'PUT') => {
    return type === 'CALL' ? 'text-green-400' : 'text-red-400';
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <div className="px-4 lg:px-6 py-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Target className="h-5 w-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Options Validator</h3>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gray-900/50">
            <tr>
              <th className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Stock</th>
              <th className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Type</th>
              <th className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Strike</th>
              <th className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Expiry</th>
              <th className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Premium</th>
              <th className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Delta</th>
              <th className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">IV</th>
              <th className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">OI</th>
              <th className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Volume</th>
              <th className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {data.map((option, index) => (
              <tr key={index} className="hover:bg-gray-700/30 transition-colors duration-150">
                <td className="px-3 lg:px-4 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-white">{option.ticker}</span>
                </td>
                <td className="px-3 lg:px-4 py-4 whitespace-nowrap">
                  <span className={`text-sm font-medium ${getTypeColor(option.type)}`}>
                    {option.type}
                  </span>
                </td>
                <td className="px-3 lg:px-4 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-300">${option.strike}</span>
                </td>
                <td className="px-3 lg:px-4 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-300">{formatDate(option.expiry)}</span>
                </td>
                <td className="px-3 lg:px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-3 w-3 text-green-400" />
                    <span className="text-sm text-white">{option.premium.toFixed(2)}</span>
                  </div>
                </td>
                <td className="px-3 lg:px-4 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-300">{option.delta.toFixed(3)}</span>
                </td>
                <td className="px-3 lg:px-4 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-300">{option.impliedVolatility.toFixed(1)}%</span>
                </td>
                <td className="px-3 lg:px-4 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-300">{option.openInterest.toLocaleString()}</span>
                </td>
                <td className="px-3 lg:px-4 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-300">{option.volume.toLocaleString()}</span>
                </td>
                <td className="px-3 lg:px-4 py-4 whitespace-nowrap">
                  {getStatusBadge(option.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OptionsValidatorTable;