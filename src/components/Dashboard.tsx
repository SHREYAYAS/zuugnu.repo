'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sampleData = [
    {
      id: 1,
      source: 'Website',
      score: 85,
      task: 'Follow Up',
      lead: 'Hot',
      name: 'John Doe',
      phone: '+91 9876543210',
      email: 'john@example.com',
      type: 'Premium',
      country: 'India',
      state: 'Maharashtra',
      district: 'Mumbai - 400001',
      status: 'Active',
      followUp: 'Today',
      timeline: 15,
      late: 0
    },
    {
      id: 2,
      source: 'Referral',
      score: 72,
      task: 'Call Back',
      lead: 'Warm',
      name: 'Sarah Smith',
      phone: '+91 9988776655',
      email: 'sarah@example.com',
      type: 'Standard',
      country: 'India',
      state: 'Karnataka',
      district: 'Bangalore - 560001',
      status: 'Pending',
      followUp: 'Tomorrow',
      timeline: 8,
      late: 0
    },
    {
      id: 3,
      source: 'Campaign',
      score: 45,
      task: 'Meeting',
      lead: 'Cold',
      name: 'Mike Johnson',
      phone: '+91 8877665544',
      email: 'mike@example.com',
      type: 'Basic',
      country: 'India',
      state: 'Delhi',
      district: 'New Delhi - 110001',
      status: 'Late',
      followUp: '2 days ago',
      timeline: 22,
      late: 2
    }
  ];

  const toggleRowSelection = (id: number) => {
    setSelectedRows(prev => 
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === sampleData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(sampleData.map(row => row.id));
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/10 border border-white/20 rounded-lg text-white"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-64 fixed h-screen overflow-y-auto bg-white/5 border-r border-white/10 backdrop-blur-xl shadow-2xl transition-transform duration-300 z-40 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold tracking-tight">
            <span className="text-cyan-300">CRM</span> Dashboard
          </h2>
          <p className="text-sm text-slate-300/80 mt-1">Control center</p>
        </div>
        
        <nav className="mt-4 space-y-1">
          {[
            { icon: '📊', label: 'Overview', active: true },
            { icon: '💾', label: 'Data' },
            { icon: '✅', label: 'Tasks' },
            { icon: '👥', label: 'Leads' },
            { icon: '📢', label: 'Campaigns' },
            { icon: '📈', label: 'Reports' },
            { icon: '📅', label: 'Calendar' },
            { icon: '💰', label: 'Invoices' },
            { icon: '⚙️', label: 'Settings' }
          ].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className={`mx-3 flex items-center px-4 py-3 rounded-xl transition-all border border-transparent ${
                item.active
                  ? 'bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 text-white border-white/10 shadow-lg shadow-cyan-500/20'
                  : 'text-slate-200/80 hover:bg-white/5 hover:border-white/10 hover:text-white'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 flex-1 p-4 sm:p-6 lg:p-10 space-y-6 w-full">
        {/* Hero */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 lg:p-8 shadow-2xl shadow-cyan-500/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300/80">Command Center</p>
              <h1 className="text-3xl lg:text-4xl font-black tracking-tight">Performance Dashboard</h1>
              <p className="text-slate-300 mt-2">Monitor leads, tasks, and outreach from one clean view.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 font-semibold">+ Add Data</button>
              <button className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/15 font-semibold">Launch Campaign</button>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[
              { label: 'Active Leads', value: '248', delta: '+12%', tone: 'from-cyan-500/20 to-cyan-400/10' },
              { label: 'Tasks Today', value: '36', delta: '+8%', tone: 'from-violet-500/20 to-fuchsia-500/10' },
              { label: 'Conversion', value: '18.4%', delta: '+2.1%', tone: 'from-emerald-500/20 to-teal-500/10' },
              { label: 'Avg. Response', value: '12m', delta: '-1m', tone: 'from-amber-400/20 to-orange-500/10' }
            ].map(card => (
              <div key={card.label} className={`rounded-xl border border-white/10 bg-gradient-to-br ${card.tone} p-4 shadow-lg shadow-black/10`}> 
                <p className="text-sm text-slate-200/80">{card.label}</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-bold">{card.value}</span>
                  <span className="text-xs text-emerald-300">{card.delta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl shadow-fuchsia-500/10">
          <div className="flex items-center mb-6 gap-2">
            <span className="text-cyan-300">🔍</span>
            <h2 className="text-xl font-semibold">Filters</h2>
          </div>
          
          {/* Primary Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {['Data', 'Task', 'Lead', 'Status'].map(label => (
              <div key={label}>
                <label className="block text-sm font-semibold text-slate-200/80 mb-2">{label}</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent">
                  <option className="text-slate-800">Select {label}</option>
                </select>
              </div>
            ))}
          </div>

          {/* Date Range */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-200/80 mb-2">Date Range</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="date" className="px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white focus:ring-2 focus:ring-cyan-400" />
              <input type="date" className="px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white focus:ring-2 focus:ring-cyan-400" />
            </div>
          </div>

          {/* Location Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-slate-200/80 mb-2">Country</label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white focus:ring-2 focus:ring-cyan-400">
                <option className="text-slate-800">Select Country</option>
                <option className="text-slate-800">India</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200/80 mb-2">State</label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white focus:ring-2 focus:ring-cyan-400">
                <option className="text-slate-800">Select State</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200/80 mb-2">District</label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white focus:ring-2 focus:ring-cyan-400">
                <option className="text-slate-800">Select District</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200/80 mb-2">Pin Code</label>
              <input type="text" placeholder="Enter Pin Code" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400" />
            </div>
          </div>

          {/* Database Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div>
              <label className="block text-sm font-semibold text-slate-200/80 mb-2">Skills (Multiple)</label>
              <select multiple className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white h-24 focus:ring-2 focus:ring-cyan-400">
                <option className="text-slate-800">JavaScript</option>
                <option className="text-slate-800">Python</option>
                <option className="text-slate-800">Java</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200/80 mb-2">Functional Area</label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white focus:ring-2 focus:ring-cyan-400">
                <option className="text-slate-800">Select Area</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200/80 mb-2">Position</label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white focus:ring-2 focus:ring-cyan-400">
                <option className="text-slate-800">Select Position</option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:translate-y-[-1px] transition-all flex items-center gap-2">
            <span>➕</span> Add Data
          </button>
          <button className="px-6 py-3 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-all shadow-md flex items-center gap-2">
            <span>📢</span> Campaign
          </button>
        </div>

        {/* Communication Bar */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 flex gap-3 flex-wrap shadow-xl shadow-blue-500/5">
          {[
            { icon: '📞', label: 'Call', color: 'text-emerald-300' },
            { icon: '💬', label: 'WhatsApp', color: 'text-emerald-200' },
            { icon: '✉️', label: 'Email', color: 'text-rose-300' },
            { icon: '👔', label: 'RCM', color: 'text-fuchsia-300' },
            { icon: '🤝', label: 'Meet', color: 'text-amber-300' },
            { icon: '📍', label: 'Visit', color: 'text-orange-300' },
            { icon: '📄', label: 'Work Report', color: 'text-cyan-300' }
          ].map(btn => (
            <button
              key={btn.label}
              className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-white hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all flex items-center gap-2"
            >
              <span className={btn.color}>{btn.icon}</span>
              <span className="font-semibold">{btn.label}</span>
            </button>
          ))}
        </div>

        {/* Records Section */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl shadow-slate-900/40">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <div className="text-lg font-semibold text-white">
              💾 {sampleData.length} Records
            </div>
            <div className="flex gap-3 items-center flex-wrap">
              <label className="text-sm font-medium text-slate-200/80">Shortlist:</label>
              <select className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm">
                <option className="text-slate-800">Task*</option>
              </select>
              <select className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm">
                <option className="text-slate-800">Status*</option>
              </select>
              <select className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm">
                <option className="text-slate-800">Lead*</option>
              </select>
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                <span className="mr-2 text-cyan-300">🔍</span>
                <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm w-40 placeholder:text-slate-400" />
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[800px]">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === sampleData.length}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 cursor-pointer accent-cyan-400"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300">Action</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300">Data</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300">Details</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300">Location</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300">Logs</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map(row => (
                  <tr key={row.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => toggleRowSelection(row.id)}
                        className="w-4 h-4 cursor-pointer accent-cyan-400"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex gap-2">
                        <button className="px-3 py-1 rounded-lg text-xs border border-white/15 text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all">
                          View
                        </button>
                        <button className="px-3 py-1 rounded-lg text-xs border border-white/15 text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all">
                          Edit
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-100/90">
                      <div className="font-semibold text-white">{row.source}</div>
                      <div className="text-slate-300">Score: {row.score}</div>
                      <div className="text-slate-300">Task: {row.task}</div>
                      <div className="text-slate-300">Lead: {row.lead}</div>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-200">
                      <div className="font-semibold text-white">{row.name}</div>
                      <div>📱 {row.phone}</div>
                      <div>📧 {row.email}</div>
                      <div className="text-slate-300">Type: {row.type}</div>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-200">
                      <div>{row.country}</div>
                      <div>{row.state}</div>
                      <div>{row.district}</div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        row.status === 'Active' ? 'bg-emerald-500/20 text-emerald-200' :
                        row.status === 'Pending' ? 'bg-amber-500/20 text-amber-200' :
                        'bg-rose-500/20 text-rose-200'
                      }`}>
                        {row.status}
                      </span>
                      <div className="text-xs mt-1 text-slate-300">Follow up: {row.followUp}</div>
                    </td>
                    <td className="px-4 py-4 text-xs text-slate-200">
                      <div>Timeline: {row.timeline} days</div>
                      <div className={row.late > 0 ? 'text-rose-300 font-semibold' : 'text-emerald-300'}>
                        Late: {row.late} days
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <button className="text-xl hover:bg-white/10 px-2 py-1 rounded text-slate-200">⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/10 text-slate-200">
            <div className="text-sm text-slate-300">1 out of 200 data</div>
            <div className="flex gap-2">
              {['«', '1', '2', '3', '4', '5', '»'].map((page, idx) => (
                <button
                  key={idx}
                  className={`px-3 py-1 rounded-lg transition-all border ${
                    page === '1'
                      ? 'bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/30'
                      : 'border-white/15 bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-400/60 text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
