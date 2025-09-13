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
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-green-900/20"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(17, 24, 39, 1) 50%, rgba(34, 197, 94, 0.2) 100%)",
              "linear-gradient(135deg, rgba(30, 58, 138, 0.3) 0%, rgba(17, 24, 39, 1) 50%, rgba(34, 197, 94, 0.3) 100%)",
              "linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(17, 24, 39, 1) 50%, rgba(34, 197, 94, 0.2) 100%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Floating particles animation */}
          <motion.div
            className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full opacity-40"
            animate={{
              y: [0, -30, 0],
              x: [0, -15, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-50"
            animate={{
              y: [0, -25, 0],
              x: [0, 20, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-60 right-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-30"
            animate={{
              y: [0, -35, 0],
              x: [0, -10, 0],
              scale: [1, 0.7, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          
          {/* Animated grid pattern overlay */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Logo/Brand */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full border border-blue-500/20 mb-6">
                  <TrendingUp className="h-16 w-16 text-blue-400 mx-auto" />
                </div>
              </motion.div>
            </motion.div>

            {/* Animated Title with Glow Effect */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 opacity-20 blur-xl"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                BluChip
              </motion.span>
              <br />
              <motion.span 
                className="text-white relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.span
                  className="absolute inset-0 text-white opacity-20 blur-sm"
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                Options Automation
              </motion.span>
            </motion.h1>
            
            {/* Animated Subtitle with typing effect */}
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Advanced algorithmic platform for stock screening, fundamental analysis, 
                technical levels, and intelligent options recommendations
              </motion.span>
            </motion.p>

            {/* Animated Call-to-Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/admin/login"
                  className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm lg:text-base shadow-lg hover:shadow-xl"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.4 }}
                  >
                    Admin Dashboard
                  </motion.span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <Link
                  to="/user/login"
                  className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 text-sm lg:text-base shadow-lg hover:shadow-xl"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.6 }}
                  >
                    User Access
                  </motion.span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-lg border transition-all duration-500 ${
                      currentStat === index 
                        ? 'bg-blue-500/10 border-blue-500/30 scale-105 shadow-lg shadow-blue-500/20' 
                        : 'bg-gray-800/50 border-gray-700'
                    }`}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                      scale: currentStat === index ? 1.05 : 1,
                      borderColor: currentStat === index ? '#3b82f6' : '#374151'
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 2.0 + (index * 0.1),
                      scale: { duration: 0.3 }
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: currentStat === index ? [0, -10, 10, 0] : 0,
                        scale: currentStat === index ? [1, 1.1, 1] : 1
                      }}
                      transition={{ 
                        duration: 0.6,
                        repeat: currentStat === index ? Infinity : 0,
                        repeatDelay: 2
                      }}
                    >
                      <Icon className={`h-8 w-8 mx-auto mb-4 ${
                        currentStat === index ? 'text-blue-400' : 'text-gray-400'
                      }`} />
                    </motion.div>
                    <motion.div 
                      className="text-3xl font-bold text-white mb-2"
                      animate={{ 
                        scale: currentStat === index ? [1, 1.05, 1] : 1
                      }}
                      transition={{ 
                        duration: 0.3,
                        repeat: currentStat === index ? Infinity : 0,
                        repeatDelay: 1
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <motion.div 
                      className="text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.2 + (index * 0.1) }}
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
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
                <StockScreenerCard key={index} stock={stock as any} />
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
            <FundamentalsTable data={fundamentalsData as any} />
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
            <OptionsValidatorTable data={optionsData as any} />
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