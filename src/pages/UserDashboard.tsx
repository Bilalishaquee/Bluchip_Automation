import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { Menu } from 'lucide-react';
import StockScreenerCard from '../components/StockScreenerCard';
import FundamentalsTable from '../components/FundamentalsTable';
import TechnicalLevelsChart from '../components/TechnicalLevelsChart';
import OptionsValidatorTable from '../components/OptionsValidatorTable';
import {
  stockScreenerData,
  fundamentalsData,
  technicalLevelsData,
  optionsData,
  recommendationsData
} from '../data/dummyData';
import {
  TrendingUp,
  Activity,
  Target,
  DollarSign,
  BarChart3,
  Search,
  Zap,
  Star,
  Eye,
  Plus,
  X
} from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const UserDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [watchlist, setWatchlist] = useState(['AAPL', 'MSFT', 'TSLA']);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('sectionChange', handleSectionChange as EventListener);
    return () => window.removeEventListener('sectionChange', handleSectionChange as EventListener);
  }, []);

  // Dummy user performance data
  const userPerformance = [
    { date: '2025-01-01', portfolio: 50000, trades: 5 },
    { date: '2025-01-02', portfolio: 52000, trades: 8 },
    { date: '2025-01-03', portfolio: 51500, trades: 12 },
    { date: '2025-01-04', portfolio: 54000, trades: 15 },
    { date: '2025-01-05', portfolio: 53500, trades: 18 },
    { date: '2025-01-06', portfolio: 56000, trades: 22 },
    { date: '2025-01-07', portfolio: 58500, trades: 25 }
  ];

  const userStats = {
    totalTrades: 45,
    successRate: 78,
    portfolioValue: 58500,
    todaysPnL: 1250
  };

  const removeFromWatchlist = (ticker: string) => {
    setWatchlist(prev => prev.filter(t => t !== ticker));
  };

  const renderOverview = () => (
    <div className="space-y-6 lg:space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Portfolio Value</p>
              <p className="text-2xl lg:text-3xl font-bold text-white">${userStats.portfolioValue.toLocaleString()}</p>
            </div>
            <DollarSign className="h-6 w-6 lg:h-8 lg:w-8 text-green-400" />
          </div>
          <p className="text-sm text-green-400 mt-2">+2.18% today</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Total Trades</p>
              <p className="text-2xl lg:text-3xl font-bold text-white">{userStats.totalTrades}</p>
            </div>
            <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-blue-400" />
          </div>
          <p className="text-sm text-green-400 mt-2">+3 this week</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Success Rate</p>
              <p className="text-2xl lg:text-3xl font-bold text-white">{userStats.successRate}%</p>
            </div>
            <Target className="h-6 w-6 lg:h-8 lg:w-8 text-purple-400" />
          </div>
          <p className="text-sm text-green-400 mt-2">+5% vs last month</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Today's P&L</p>
              <p className="text-2xl lg:text-3xl font-bold text-green-400">+${userStats.todaysPnL}</p>
            </div>
            <Activity className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-400" />
          </div>
          <p className="text-sm text-green-400 mt-2">Above average</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Portfolio Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={userPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9ca3af" tickFormatter={(value) => new Date(value).getMonth() + 1 + '/' + new Date(value).getDate()} />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '6px',
                    color: '#ffffff'
                  }} 
                  labelFormatter={(value) => new Date(value).toLocaleDateString()}
                />
                <Area 
                  type="monotone" 
                  dataKey="portfolio" 
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.2}
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Recent Recommendations</h3>
          <div className="space-y-4">
            {recommendationsData.slice(0, 3).map((rec, index) => (
              <div key={index} className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-white">{rec.ticker}</span>
                    <span className="text-sm text-blue-400">{rec.recommendedAction}</span>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    rec.confidence === 'HIGH' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                  }`}>
                    {rec.confidence}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Strike: ${rec.strike}</span>
                  <span>Breakeven: ${rec.breakeven}</span>
                  <span>{rec.probability}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderWatchlist = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
          <Star className="h-6 w-6 text-yellow-400" />
          <span>My Watchlist</span>
        </h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add Stock</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stockScreenerData.filter(stock => watchlist.includes(stock.ticker)).map((stock, index) => (
          <motion.div
            key={index}
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <StockScreenerCard stock={stock as any} />
            <button
              onClick={() => removeFromWatchlist(stock.ticker)}
              className="absolute top-2 right-2 p-1 bg-red-500/10 border border-red-500/20 text-red-400 rounded hover:bg-red-500/20 transition-colors opacity-0 group-hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </div>

      {watchlist.length === 0 && (
        <div className="text-center py-16">
          <Star className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">Your watchlist is empty</h3>
          <p className="text-gray-500">Add stocks to track their performance and get personalized recommendations</p>
        </div>
      )}
    </div>
  );

  const renderStockScreener = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
          <Search className="h-6 w-6 text-blue-400" />
          <span>Stock Screener Results</span>
        </h2>
        <div className="text-sm text-gray-400">
          {stockScreenerData.filter(s => s.status === 'PASS').length} stocks passed screening
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stockScreenerData.map((stock, index) => (
          <motion.div
            key={index}
            className={`relative ${expandedCard === stock.ticker ? 'lg:col-span-2' : ''}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <StockScreenerCard stock={stock as any} />
            <button
              onClick={() => setExpandedCard(expandedCard === stock.ticker ? null : stock.ticker)}
              className="absolute bottom-2 right-2 p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded hover:bg-blue-500/20 transition-colors"
            >
              <Eye className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderFundamentals = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
          <BarChart3 className="h-6 w-6 text-green-400" />
          <span>Fundamentals Analysis</span>
        </h2>
      </div>
      
      <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 mb-6">
        <p className="text-gray-300 text-sm">
          <strong className="text-white">Note:</strong> This analysis shows only stocks from your watchlist and screening results. 
          Upgrade to Premium for full market analysis.
        </p>
      </div>
      
      <FundamentalsTable data={fundamentalsData.filter(f => watchlist.includes(f.ticker)) as any} />
    </div>
  );

  const renderTechnicalLevels = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
          <Activity className="h-6 w-6 text-yellow-400" />
          <span>Technical Analysis</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {technicalLevelsData.filter(t => watchlist.includes(t.ticker)).map((data, index) => (
          <TechnicalLevelsChart key={index} data={data} />
        ))}
      </div>
    </div>
  );

  const renderOptions = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
          <Target className="h-6 w-6 text-purple-400" />
          <span>Options Analysis</span>
        </h2>
      </div>
      
      <OptionsValidatorTable data={optionsData.filter(o => watchlist.includes(o.ticker)) as any} />
    </div>
  );

  const renderRecommendations = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
          <Zap className="h-6 w-6 text-red-400" />
          <span>Your Recommendations</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {recommendationsData.filter(r => watchlist.includes(r.ticker)).map((rec, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500/30 transition-colors"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{rec.ticker}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                rec.confidence === 'HIGH' 
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
              }`}>
                {rec.confidence} CONFIDENCE
              </span>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <div className="text-sm text-gray-400">Action</div>
                <div className="text-lg font-semibold text-blue-400">{rec.recommendedAction}</div>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <div className="text-sm text-gray-400">Strike</div>
                <div className="text-lg font-semibold text-green-400">${rec.strike}</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                <div className="text-sm text-gray-400">Breakeven</div>
                <div className="text-lg font-semibold text-purple-400">${rec.breakeven}</div>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                <div className="text-sm text-gray-400">Probability</div>
                <div className="text-lg font-semibold text-orange-400">{rec.probability}%</div>
              </div>
            </div>
            
            <div className="text-sm text-gray-300 border-t border-gray-700 pt-4">
              <strong>Analysis:</strong> {rec.reasoning}
            </div>

            <div className="mt-4 flex space-x-3">
              <button className="px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded hover:bg-green-500/20 transition-colors">
                Execute Trade
              </button>
              <button className="px-4 py-2 bg-gray-500/10 border border-gray-500/20 text-gray-400 rounded hover:bg-gray-500/20 transition-colors">
                Add to Watchlist
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return renderOverview();
      case 'watchlist': return renderWatchlist();
      case 'screener': return renderStockScreener();
      case 'fundamentals': return renderFundamentals();
      case 'technical': return renderTechnicalLevels();
      case 'options': return renderOptions();
      case 'recommendations': return renderRecommendations();
      default: return renderOverview();
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar userType="user" isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="flex-1 overflow-auto">
        {/* Mobile Header */}
        <div className="lg:hidden bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold text-white">User Dashboard</h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        
        <div className="p-4 lg:p-8">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;