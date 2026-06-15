import { Download, Upload, Filter, AlertCircle, Eye } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const data = [
  { name: 'Week 1', revenue: 20000, tax: 2000 },
  { name: 'Week 2', revenue: 35000, tax: 3500 },
  { name: 'Week 3', revenue: 25000, tax: 2500 },
  { name: 'Week 4', revenue: 40000, tax: 4000 },
];

const transactions = [
  { id: 'TRX-1092', date: '2025-06-15 10:20', type: 'Membership Renew', branch: 'KGym Pusat', amount: 'Rp 450.000', status: 'Success', fraud: false },
  { id: 'TRX-1093', date: '2025-06-15 11:05', type: 'PT Package 10x', branch: 'KGym Selatan', amount: 'Rp 2.500.000', status: 'Success', fraud: false },
  { id: 'TRX-1094', date: '2025-06-15 12:30', type: 'Refund Request', branch: 'KGym Timur', amount: '-Rp 450.000', status: 'Pending', fraud: true },
];

export default function Finance() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Finance & Transactions</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Track revenue, taxes, and monitor potential frauds.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline"><Upload size={16} /> Import</button>
          <button className="btn btn-primary"><Download size={16} /> Export Report</button>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 'var(--spacing-6)', height: '350px' }}>
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Revenue vs Tax</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-grey)" />
            <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip cursor={{ fill: 'var(--background-grey)' }} />
            <Bar dataKey="revenue" fill="var(--primary-red)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="tax" fill="var(--secondary-black)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <div className="flex items-center justify-between" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3>Transaction History</h3>
          <div className="flex gap-2">
            <button className="btn btn-outline"><Filter size={16} /> Branch Filter</button>
            <button className="btn btn-outline"><Filter size={16} /> Date Filter</button>
          </div>
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
                    <button className="icon-button" title="View Details" onClick={() => navigate(`/finance/${trx.id}`)}>
                      <Eye size={16} />
                    </button>
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
