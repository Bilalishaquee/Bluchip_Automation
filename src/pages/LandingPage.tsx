import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Search, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle,
  Activity,
  DollarSign,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Navbar from '../components/Navbar';
import StockScreenerCard from '../components/StockScreenerCard';
import FundamentalsTable from '../components/FundamentalsTable';
import TechnicalLevelsChart from '../components/TechnicalLevelsChart';
import OptionsValidatorTable from '../components/OptionsValidatorTable';
import { 
  stockScreenerData, 
  fundamentalsData, 
  technicalLevelsData, 
  optionsData,
  recommendationsData,
  platformStats 
} from '../data/dummyData';

const LandingPage: React.FC = () => {
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Stocks Screened', value: platformStats.stocksScreened, icon: Search },
    { label: 'Pass/Fail Accuracy', value: `${platformStats.passFailAccuracy}%`, icon: CheckCircle },
    { label: 'Valid Options Recommended', value: platformStats.validOptionsRecommended, icon: Target }
  ];

  const additionalStats = [
    { label: 'Total Users', value: platformStats.totalUsers.toLocaleString(), icon: Users },
    { label: 'Successful Trades', value: platformStats.successfulTrades.toLocaleString(), icon: TrendingUp },
    { label: 'Portfolio Value', value: `$${platformStats.portfolioValue}`, icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-green-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                BluChip
              </span>
              <br />
              <span className="text-white">Options Automation</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-3xl mx-auto px-4">
              Advanced algorithmic platform for stock screening, fundamental analysis, 
              technical levels, and intelligent options recommendations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
              <Link
                to="/admin/login"
                className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <span>Admin Dashboard</span>
                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
              </Link>
              <Link
                to="/user/login"
                className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <span>User Access</span>
                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
              </Link>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-lg border transition-all duration-500 ${
                      currentStat === index 
                        ? 'bg-blue-500/10 border-blue-500/30 scale-105' 
                        : 'bg-gray-800/50 border-gray-700'
                    }`}
                    animate={{ 
                      scale: currentStat === index ? 1.05 : 1,
                      borderColor: currentStat === index ? '#3b82f6' : '#374151'
                    }}
                  >
                    <Icon className={`h-8 w-8 mx-auto mb-4 ${
                      currentStat === index ? 'text-blue-400' : 'text-gray-400'
                    }`} />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">About BluChip</h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              BluChip is an advanced algorithmic trading platform that automates the entire process 
              of stock screening, fundamental analysis, technical analysis, and options strategy 
              recommendations. Our AI-powered system processes hundreds of stocks daily to identify 
              the most profitable trading opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {additionalStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center hover:border-blue-500/30 transition-colors duration-200">
                  <Icon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Platform Modules</h2>
            <p className="text-xl text-gray-300">
              Comprehensive suite of tools for intelligent options trading
            </p>
          </div>

          {/* Stock Screener Module */}
          <div className="mb-20">
            <div className="flex items-center space-x-3 mb-8">
              <Search className="h-8 w-8 text-blue-400" />
              <h3 className="text-3xl font-bold text-white">Stock Screener</h3>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Advanced screening algorithm that filters stocks based on price, volume, market cap, 
              and volatility criteria to identify the best candidates for options trading.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stockScreenerData.map((stock, index) => (
                <StockScreenerCard key={index} stock={stock} />
              ))}
            </div>
          </div>

          {/* Fundamentals Analyzer Module */}
          <div className="mb-20">
            <div className="flex items-center space-x-3 mb-8">
              <BarChart3 className="h-8 w-8 text-green-400" />
              <h3 className="text-3xl font-bold text-white">Fundamentals Analyzer</h3>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Deep fundamental analysis using ROA, ROE, ROIC metrics along with debt ratios 
              to ensure only financially strong companies pass our screening process.
            </p>
            <FundamentalsTable data={fundamentalsData} />
          </div>

          {/* Technical Levels Module */}
          <div className="mb-20">
            <div className="flex items-center space-x-3 mb-8">
              <Activity className="h-8 w-8 text-yellow-400" />
              <h3 className="text-3xl font-bold text-white">Technical Levels</h3>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Advanced technical analysis providing pivot points, support & resistance levels, 
              and price target bands to optimize entry and exit points.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {technicalLevelsData.map((data, index) => (
                <TechnicalLevelsChart key={index} data={data} />
              ))}
            </div>
          </div>

          {/* Options Validator Module */}
          <div className="mb-20">
            <div className="flex items-center space-x-3 mb-8">
              <Target className="h-8 w-8 text-purple-400" />
              <h3 className="text-3xl font-bold text-white">Options Validator</h3>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Sophisticated options chain analysis validating contracts based on delta, open interest, 
              implied volatility, and bid-ask spreads to ensure liquid and profitable trades.
            </p>
            <OptionsValidatorTable data={optionsData} />
          </div>

          {/* Recommendation Engine */}
          <div className="mb-20">
            <div className="flex items-center space-x-3 mb-8">
              <Zap className="h-8 w-8 text-red-400" />
              <h3 className="text-3xl font-bold text-white">Recommendation Engine</h3>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              AI-powered recommendation system that selects the optimal strike prices, expiration dates, 
              and provides detailed risk/reward analysis for each trading opportunity.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {recommendationsData.map((rec, index) => (
                <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{rec.ticker}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      rec.confidence === 'HIGH' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    }`}>
                      {rec.confidence} CONFIDENCE
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
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
                </div>
              ))}
            </div>
          </div>

          {/* Audit Trail & Reports */}
          <div className="mb-20">
            <div className="flex items-center space-x-3 mb-8">
              <Shield className="h-8 w-8 text-cyan-400" />
              <h3 className="text-3xl font-bold text-white">Audit Trail & Reports</h3>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Complete transparency with detailed audit trails, JSON outputs, and comprehensive 
              reporting for all system decisions and trade recommendations.
            </p>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="bg-gray-900 border border-gray-600 rounded p-4 font-mono text-sm text-green-400">
                <div className="text-blue-400"># Latest System Report - {new Date().toLocaleDateString()}</div>
                <div className="mt-2">
                  {`{
  "screening_results": {
    "total_stocks": 125,
    "passed_screen": 28,
    "success_rate": "22.4%"
  },
  "fundamentals_analysis": {
    "stocks_analyzed": 28,
    "passed_fundamentals": 24,
    "top_performers": ["AAPL", "MSFT", "TSLA"]
  },
  "options_validation": {
    "contracts_analyzed": 156,
    "valid_contracts": 89,
    "recommended_trades": 12
  }
}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose BluChip */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose BluChip?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-blue-500/30 transition-colors duration-200">
              <Zap className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Automated Intelligence</h3>
              <p className="text-gray-300">
                Our AI-powered algorithms work 24/7 to identify the most profitable trading opportunities 
                without human bias or emotion.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-green-500/30 transition-colors duration-200">
              <Award className="h-12 w-12 text-green-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Proven Accuracy</h3>
              <p className="text-gray-300">
                95% accuracy rate in our screening process with comprehensive backtesting 
                and continuous performance monitoring.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-purple-500/30 transition-colors duration-200">
              <Shield className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Risk Management</h3>
              <p className="text-gray-300">
                Advanced risk assessment with detailed probability analysis and 
                comprehensive audit trails for complete transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  BluChip
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Advanced algorithmic platform for automated stock screening, fundamental analysis, 
                and intelligent options trading recommendations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>contact@bluchip-options.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>New York, NY 10001</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Stock Screener</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Fundamentals</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Technical Analysis</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Options Validator</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-12">
            <div className="text-center text-gray-400">
              <p>&copy; 2025 BluChip Options Automation Platform. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;