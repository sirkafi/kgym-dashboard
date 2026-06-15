import { 
  Users, 
  UserPlus, 
  CreditCard, 
  QrCode, 
  CalendarCheck, 
  Clock, 
  MapPin, 
  Wallet,
  AlertCircle,
  Filter,
  Eye
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
  { name: 'Jul', revenue: 7000 },
];

const transactions = [
  { id: 'TRX-1092', date: '2025-06-15 10:20', type: 'Membership Renew', branch: 'KGym Pusat', amount: 'Rp 450.000', status: 'Success', fraud: false },
  { id: 'TRX-1093', date: '2025-06-15 11:05', type: 'PT Package 10x', branch: 'KGym Selatan', amount: 'Rp 2.500.000', status: 'Success', fraud: false },
  { id: 'TRX-1094', date: '2025-06-15 12:30', type: 'Refund Request', branch: 'KGym Timur', amount: '-Rp 450.000', status: 'Pending', fraud: true },
  { id: 'TRX-1095', date: '2025-06-15 13:10', type: 'New Membership', branch: 'KGym Pusat', amount: 'Rp 650.000', status: 'Success', fraud: false },
  { id: 'TRX-1096', date: '2025-06-15 14:00', type: 'PT Single Session', branch: 'KGym Selatan', amount: 'Rp 250.000', status: 'Success', fraud: false },
];

export default function DashboardOverview() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Dashboard Overview</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Welcome back, Admin. Here is what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="form-input" style={{ width: '150px', padding: '0.5rem 1rem', marginRight: 'var(--spacing-3)' }} defaultValue="June 2026">
            <option>All Months</option>
            <option>March 2026</option>
            <option>April 2026</option>
            <option>May 2026</option>
            <option>June 2026</option>
          </select>
          <button className="btn btn-primary">Download Report</button>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--spacing-5)', marginBottom: 'var(--spacing-6)' }}>
        
        <div className="card stat-card">
          <div className="stat-header">
            Total Member Aktif
            <Users size={20} className="stat-icon blue" />
          </div>
          <div className="stat-value">2,450</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 500 }}>+12% from last month</div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            Member Baru
            <UserPlus size={20} className="stat-icon green" />
          </div>
          <div className="stat-value">124</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>This month</div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            Revenue Bulan Ini
            <CreditCard size={20} className="stat-icon red" />
          </div>
          <div className="stat-value">Rp 125.4M</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 500 }}>+8% from last month</div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            Check-in Hari Ini
            <QrCode size={20} className="stat-icon orange" />
          </div>
          <div className="stat-value">342</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Across 5 branches</div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            Booking PT Hari Ini
            <CalendarCheck size={20} className="stat-icon blue" />
          </div>
          <div className="stat-value">48</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sessions scheduled</div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            Membership Berakhir
            <Clock size={20} className="stat-icon orange" />
          </div>
          <div className="stat-value">86</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--danger)', fontWeight: 500 }}>Needs follow up</div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            Total Cabang Aktif
            <MapPin size={20} className="stat-icon green" />
          </div>
          <div className="stat-value">5</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 500 }}>All operational</div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            Pending PT Withdrawal
            <Wallet size={20} className="stat-icon red" />
          </div>
          <div className="stat-value">12</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--danger)', fontWeight: 500 }}>Action required</div>
        </div>

      </div>

      <div className="card" style={{ height: '400px', marginBottom: 'var(--spacing-6)' }}>
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Revenue Overview</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary-red)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--primary-red)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `Rp${value}k`} />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-grey)" />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke="var(--primary-red)" fillOpacity={1} fill="url(#colorRevenue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <div className="flex items-center justify-between" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3>Recent Transactions</h3>
          <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>View All Transactions</button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>TRX ID</th>
                <th>Date</th>
                <th>Type</th>
                <th>Branch</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trx) => (
                <tr key={trx.id}>
                  <td style={{ fontWeight: 500, color: 'var(--primary-red)' }}>{trx.id}</td>
                  <td>{trx.date}</td>
                  <td>{trx.type}</td>
                  <td>{trx.branch}</td>
                  <td style={{ fontWeight: 600 }}>{trx.amount}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className={`badge ${trx.status === 'Success' ? 'badge-success' : 'badge-warning'}`}>
                        {trx.status}
                      </span>
                      {trx.fraud && (
                        <span title="Potential Fraud Detected" style={{ color: 'var(--warning)', cursor: 'help' }}>
                          <AlertCircle size={16} />
                        </span>
                      )}
                    </div>
                  </td>
                  <td>
                    <a href={`/finance/${trx.id}`} className="icon-button" title="View Details" style={{ display: 'inline-flex' }}>
                      <Eye size={16} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
