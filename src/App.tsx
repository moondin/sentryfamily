import { IconAlertCircle, IconCamera, IconDoorEnter, IconHome, IconLock, IconSettings } from '@tabler/icons-react';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <IconHome className="h-8 w-8 text-primary" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">SentryFamily</h1>
            </div>
            <nav className="flex space-x-4">
              <button
                onClick={() => setSelectedTab('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  selectedTab === 'dashboard'
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setSelectedTab('cameras')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  selectedTab === 'cameras'
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Cameras
              </button>
              <button
                onClick={() => setSelectedTab('settings')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  selectedTab === 'settings'
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Settings
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* System Status */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <IconLock className="h-8 w-8 text-success" />
              <h2 className="ml-2 text-xl font-semibold text-gray-900">System Status</h2>
            </div>
            <p className="mt-2 text-sm text-gray-600">All systems operational</p>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <IconDoorEnter className="h-8 w-8 text-primary" />
              <h2 className="ml-2 text-xl font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-gray-600">Front door opened - 2 min ago</li>
              <li className="text-sm text-gray-600">Motion detected - 15 min ago</li>
            </ul>
          </div>

          {/* Active Alerts */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <IconAlertCircle className="h-8 w-8 text-warning" />
              <h2 className="ml-2 text-xl font-semibold text-gray-900">Active Alerts</h2>
            </div>
            <p className="mt-2 text-sm text-gray-600">No active alerts</p>
          </div>

          {/* Camera Feed */}
          <div className="bg-white p-6 rounded-lg shadow md:col-span-2 lg:col-span-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <IconCamera className="h-8 w-8 text-primary" />
                <h2 className="ml-2 text-xl font-semibold text-gray-900">Camera Feeds</h2>
              </div>
              <button className="text-sm text-primary hover:text-primary-dark">
                View All
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Camera Placeholder */}
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Front Door Camera</span>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Backyard Camera</span>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Garage Camera</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
