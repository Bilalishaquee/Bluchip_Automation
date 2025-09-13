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
  recommendationsData,
  auditTrailData,
  userData,
  platformStats
} from '../data/dummyData';
import {
  Users,
  Activity,
  TrendingUp,
  Target,
  DollarSign,
  BarChart3,
  Search,
  Zap,
  Shield,
  UserCheck,
  UserX
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('sectionChange', handleSectionChange as EventListener);
    return () => window.removeEventListener('sectionChange', handleSectionChange as EventListener);
  }, []);

  // Dummy chart data
  const performanceData = [
    { name: 'Jan', trades: 120, profit: 15400 },
    { name: 'Feb', trades: 145, profit: 18200 },
    { name: 'Mar', trades: 132, profit: 16800 },
    { name: 'Apr', trades: 168, profit: 22100 },
    { name: 'May', trades: 189, profit: 24500 },
    { name: 'Jun', trades: 201, profit: 26800 }
  ];

  const userDistribution = [
    { name: 'Premium', value: 45, color: '#3b82f6' },
    { name: 'Basic', value: 35, color: '#10b981' },
    { name: 'Trial', value: 20, color: '#f59e0b' }
  ];

  const renderOverview = () => (
    <div className="space-y-6 lg:space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Total Users</p>
              <p className="text-2xl lg:text-3xl font-bold text-white">{platformStats.totalUsers.toLocaleString()}</p>
            </div>
            <Users className="h-6 w-6 lg:h-8 lg:w-8 text-blue-400" />
          </div>
          <p className="text-sm text-green-400 mt-2">+12% from last month</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Successful Trades</p>
              <p className="text-2xl lg:text-3xl font-bold text-white">{platformStats.successfulTrades.toLocaleString()}</p>
            </div>
            <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-green-400" />
          </div>
          <p className="text-sm text-green-400 mt-2">+8% from last month</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Portfolio Value</p>
              <p className="text-2xl lg:text-3xl font-bold text-white">${platformStats.portfolioValue}</p>
            </div>
            <DollarSign className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-400" />
          </div>
          <p className="text-sm text-green-400 mt-2">+15% from last month</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Success Rate</p>
              <p className="text-2xl lg:text-3xl font-bold text-white">{platformStats.passFailAccuracy}%</p>
            </div>
            <Target className="h-6 w-6 lg:h-8 lg:w-8 text-purple-400" />
          </div>
          <p className="text-sm text-green-400 mt-2">+2% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:p-6">
          <h3 className="text-lg font-semibold text-white mb-4 lg:mb-6">Performance Overview</h3>
          <div className="h-48 lg:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
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
                <Line type="monotone" dataKey="profit" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:p-6">
          <h3 className="text-lg font-semibold text-white mb-4 lg:mb-6">User Distribution</h3>
          <div className="h-48 lg:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {userDistribution.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            {userDistribution.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-300">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUserManagement = () => (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl lg:text-2xl font-bold text-white">User Management</h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <div className="text-sm text-gray-400">
            Total: <span className="text-white font-medium">{userData.length}</span>
          </div>
          <div className="text-sm text-gray-400">
            Active: <span className="text-green-400 font-medium">{userData.filter(u => u.status === 'ACTIVE').length}</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">User</th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Role</th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Last Login</th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Trades</th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Success Rate</th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {userData.map((user) => (
                <tr key={user.id} className="hover:bg-gray-700/30">
                  <td className="px-3 lg:px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-white">{user.name}</div>
                      <div className="text-sm text-gray-400">{user.email}</div>
                    </div>
                  </td>
                  <td className="px-3 lg:px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      user.role === 'PREMIUM' 
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-3 lg:px-6 py-4 text-sm text-gray-300">
                    {new Date(user.lastLogin).toLocaleDateString()}
                  </td>
                  <td className="px-3 lg:px-6 py-4 text-sm text-gray-300">
                    {user.totalTrades}
                  </td>
                  <td className="px-3 lg:px-6 py-4">
                    <span className={`text-sm font-medium ${
                      user.successRate >= 75 ? 'text-green-400' : 
                      user.successRate >= 50 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {user.successRate}%
                    </span>
                  </td>
                  <td className="px-3 lg:px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {user.status === 'ACTIVE' ? (
                        <>
                          <UserCheck className="h-4 w-4 text-green-400" />
                          <span className="text-sm text-green-400">ACTIVE</span>
                        </>
                      ) : (
                        <>
                          <UserX className="h-4 w-4 text-red-400" />
                          <span className="text-sm text-red-400">INACTIVE</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-3 lg:px-6 py-4">
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                      <button className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                        Edit
                      </button>
                      <button className="px-2 py-1 text-xs bg-red-500/10 text-red-400 rounded border border-red-500/20 hover:bg-red-500/20 transition-colors">
                        Suspend
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderStockScreener = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
          <Search className="h-6 w-6 text-blue-400" />
          <span>Stock Screener</span>
        </h2>
        <div className="text-sm text-gray-400">
          Last Updated: <span className="text-white">{new Date().toLocaleString()}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stockScreenerData.map((stock, index) => (
          <StockScreenerCard key={index} stock={stock as any} />
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
      <FundamentalsTable data={fundamentalsData as any} />
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {technicalLevelsData.map((data, index) => (
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
          <span>Options Validator</span>
        </h2>
      </div>
      <OptionsValidatorTable data={optionsData as any} />
    </div>
  );

  const renderRecommendations = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
          <Zap className="h-6 w-6 text-red-400" />
          <span>Recommendation Engine</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {recommendationsData.map((rec, index) => (
          <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
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
  );

  const renderAuditTrail = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
          <Shield className="h-6 w-6 text-cyan-400" />
          <span>Audit Trail & Reports</span>
        </h2>
      </div>

      <div className="space-y-4">
        {auditTrailData.map((audit) => (
          <div key={audit.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <h3 className="text-lg font-semibold text-white">{audit.action.replace(/_/g, ' ')}</h3>
                <span className="px-2 py-1 text-xs bg-green-500/10 text-green-400 rounded border border-green-500/20">
                  {audit.status}
                </span>
              </div>
              <div className="text-sm text-gray-400">
                {new Date(audit.timestamp).toLocaleString()}
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-600 rounded p-4 font-mono text-sm">
              <div className="text-cyan-400 mb-2"># Execution Details</div>
              <div className="text-green-400">
                {JSON.stringify(audit.details, null, 2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return renderOverview();
      case 'users': return renderUserManagement();
      case 'screener': return renderStockScreener();
      case 'fundamentals': return renderFundamentals();
      case 'technical': return renderTechnicalLevels();
      case 'options': return renderOptions();
      case 'recommendations': return renderRecommendations();
      case 'audit': return renderAuditTrail();
      default: return renderOverview();
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar userType="admin" isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="flex-1 overflow-auto">
        {/* Mobile Header */}
        <div className="lg:hidden bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold text-white">Admin Dashboard</h1>
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

export default AdminDashboard;