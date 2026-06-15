import { PieChart, Pie, Cell, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';
import { Download, Calendar, TrendingUp, Users, UserCheck, CreditCard, Filter } from 'lucide-react';
import { useState } from 'react';

const memberGrowthData = [
  { name: 'Jan', members: 1200 },
  { name: 'Feb', members: 1350 },
  { name: 'Mar', members: 1600 },
  { name: 'Apr', members: 1850 },
  { name: 'May', members: 2100 },
  { name: 'Jun', members: 2450 },
];

const demographicData = [
  { name: '18-24', value: 300 },
  { name: '25-34', value: 800 },
  { name: '35-44', value: 500 },
  { name: '45-54', value: 200 },
  { name: '55+', value: 100 },
];

const branchActivityData = [
  { name: 'Pusat', checkins: 4500 },
  { name: 'Selatan', checkins: 3200 },
  { name: 'Timur', checkins: 1800 },
];

const COLORS = ['#E63946', '#242426', '#10B981', '#F59E0B', '#3B82F6'];

export default function Reports() {
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <div>
      <div className="page-header" style={{ marginBottom: 'var(--spacing-4)' }}>
        <div>
          <h1>Reports & Analytics</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Detailed analytical reports and performance metrics across all branches.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline" onClick={() => setShowFilters(!showFilters)}>
            <Filter size={16} /> Branch Filter
          </button>
          <button className="btn btn-outline"><Calendar size={16} /> Last 6 Months</button>
          <button className="btn btn-primary"><Download size={16} /> Export PDF Report</button>
        </div>
      </div>

      {showFilters && (
        <div className="card" style={{ marginBottom: 'var(--spacing-6)', display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center' }}>
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Filter by Branch:</span>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
            <input type="checkbox" defaultChecked style={{ accentColor: 'var(--primary-red)' }} /> All Branches
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
            <input type="checkbox" defaultChecked style={{ accentColor: 'var(--primary-red)' }} /> KGym Pusat
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
            <input type="checkbox" defaultChecked style={{ accentColor: 'var(--primary-red)' }} /> KGym Selatan
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
            <input type="checkbox" defaultChecked style={{ accentColor: 'var(--primary-red)' }} /> KGym Timur
          </label>
        </div>
      )}

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-5)', marginBottom: 'var(--spacing-6)' }}>
        <div className="card stat-card">
          <div className="stat-header">
            Avg Retention Rate
            <UserCheck size={18} className="stat-icon green" />
          </div>
          <div className="stat-value">84.5%</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 500 }}>+2.1% vs last period</div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            Total Check-ins (YTD)
            <Users size={18} className="stat-icon blue" />
          </div>
          <div className="stat-value">48.2k</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Across selected branches</div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            Top Performing Branch
            <TrendingUp size={18} className="stat-icon orange" />
          </div>
          <div className="stat-value" style={{ fontSize: '1.25rem' }}>KGym Pusat</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Highest revenue & checkins</div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            Most Popular Plan
            <CreditCard size={18} className="stat-icon red" />
          </div>
          <div className="stat-value" style={{ fontSize: '1.25rem' }}>Member Hitam</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Accounts for 65% revenue</div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
        <div className="card" style={{ height: '350px' }}>
          <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Member Growth Trend</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={memberGrowthData} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-grey)" />
              <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
              <RechartsTooltip />
              <Line type="monotone" dataKey="members" stroke="var(--primary-red)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card" style={{ height: '350px' }}>
          <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Age Demographics</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={demographicData}
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {demographicData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <RechartsTooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card" style={{ height: '350px' }}>
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Total Check-ins by Branch</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={branchActivityData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--border-grey)" />
            <XAxis type="number" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis dataKey="name" type="category" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
            <RechartsTooltip cursor={{fill: 'var(--background-grey)'}} />
            <Bar dataKey="checkins" fill="var(--secondary-black)" radius={[0, 4, 4, 0]} barSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
