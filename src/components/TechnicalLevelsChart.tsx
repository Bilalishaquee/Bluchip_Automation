import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Activity } from 'lucide-react';

interface TechnicalData {
  ticker: string;
  currentPrice: number;
  pivotPoint: number;
  resistance: {
    r1: number;
    r2: number;
    r3: number;
  };
  support: {
    s1: number;
    s2: number;
    s3: number;
  };
  priceBands: {
    band10: number;
    band15: number;
    band20: number;
  };
  trend: string;
}

interface Props {
  data: TechnicalData;
}

const TechnicalLevelsChart: React.FC<Props> = ({ data }) => {
  const chartData = [
    { name: 'S3', value: data.support.s3, type: 'support' },
    { name: 'S2', value: data.support.s2, type: 'support' },
    { name: 'S1', value: data.support.s1, type: 'support' },
    { name: 'PP', value: data.pivotPoint, type: 'pivot' },
    { name: 'R1', value: data.resistance.r1, type: 'resistance' },
    { name: 'R2', value: data.resistance.r2, type: 'resistance' },
    { name: 'R3', value: data.resistance.r3, type: 'resistance' },
  ];

  const getBarColor = (type: string) => {
    switch (type) {
      case 'support': return '#10b981';
      case 'resistance': return '#f59e0b';
      case 'pivot': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Technical Levels - {data.ticker}</h3>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-400">
            Current: <span className="text-white font-medium">${data.currentPrice}</span>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            data.trend === 'BULLISH' 
              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
              : 'bg-red-500/10 text-red-400 border border-red-500/20'
          }`}>
            {data.trend}
          </div>
        </div>
      </div>

      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '6px',
                color: '#ffffff'
              }} 
            />
            <ReferenceLine y={data.currentPrice} stroke="#ef4444" strokeDasharray="5 5" />
            <Bar 
              dataKey="value" 
              fill={(entry) => getBarColor(entry?.payload?.type)}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
          <h4 className="text-sm font-medium text-green-400 mb-2">Price Bands</h4>
          <div className="space-y-1 text-xs text-gray-300">
            <div>+10%: ${data.priceBands.band10.toFixed(2)}</div>
            <div>+15%: ${data.priceBands.band15.toFixed(2)}</div>
            <div>+20%: ${data.priceBands.band20.toFixed(2)}</div>
          </div>
        </div>
        
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
          <h4 className="text-sm font-medium text-yellow-400 mb-2">Resistance</h4>
          <div className="space-y-1 text-xs text-gray-300">
            <div>R1: ${data.resistance.r1.toFixed(2)}</div>
            <div>R2: ${data.resistance.r2.toFixed(2)}</div>
            <div>R3: ${data.resistance.r3.toFixed(2)}</div>
          </div>
        </div>
        
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <h4 className="text-sm font-medium text-blue-400 mb-2">Support</h4>
          <div className="space-y-1 text-xs text-gray-300">
            <div>S1: ${data.support.s1.toFixed(2)}</div>
            <div>S2: ${data.support.s2.toFixed(2)}</div>
            <div>S3: ${data.support.s3.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalLevelsChart;