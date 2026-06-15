import { Wallet, CheckCircle, Clock, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const sessions = [
  { id: 1, pt: 'Coach Dedy', member: 'Budi Santoso', date: 'Today, 15:00', duration: '60 min', payment: 'Paid', status: 'Upcoming' },
  { id: 2, pt: 'Coach Sarah', member: 'Rina Melati', date: 'Today, 16:30', duration: '90 min', payment: 'Pending', status: 'Waiting Payment' },
  { id: 3, pt: 'Coach Dedy', member: 'Andi Wijaya', date: 'Yesterday', duration: '60 min', payment: 'Paid', status: 'Completed' },
];

export default function BookingPT() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Booking Personal Trainer</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Manage PT sessions, schedules, and payouts.</p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/booking-pt/add')}>
          <Plus size={16} /> Assign Session
        </button>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-5)', marginBottom: 'var(--spacing-6)' }}>
        <div className="card stat-card" style={{ backgroundColor: 'var(--primary-black)', color: 'var(--white)' }}>
          <div className="stat-header" style={{ color: '#A1A1AA' }}>
            Total PT Balance Pool
            <Wallet size={20} color="var(--white)" />
          </div>
          <div className="stat-value" style={{ color: 'var(--white)', marginTop: 'var(--spacing-2)' }}>Rp 45.250.000</div>
          <div className="flex justify-between items-center" style={{ marginTop: 'var(--spacing-5)', paddingTop: 'var(--spacing-4)', borderTop: '1px solid #3F3F46' }}>
            <span style={{ fontSize: '0.875rem', color: '#A1A1AA' }}>12 PTs have pending withdrawals</span>
            <button className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary-black)', fontWeight: 600, border: 'none' }} onClick={() => navigate('/booking-pt/withdrawals')}>
              Process Withdrawals
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Session Schedules</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Trainer</th>
                <th>Member</th>
                <th>Schedule</th>
                <th>Duration</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s) => (
                <tr key={s.id}>
                  <td style={{ fontWeight: 500 }}>{s.pt}</td>
                  <td>{s.member}</td>
                  <td>{s.date}</td>
                  <td>{s.duration}</td>
                  <td>
                    <span className={`badge ${s.payment === 'Paid' ? 'badge-success' : 'badge-warning'}`}>
                      {s.payment}
                    </span>
                  </td>
                  <td>
                    {s.status === 'Completed' && <span className="badge badge-success"><CheckCircle size={12} style={{marginRight: 4}}/> {s.status}</span>}
                    {s.status === 'Upcoming' && <span className="badge badge-neutral"><Clock size={12} style={{marginRight: 4}}/> {s.status}</span>}
                    {s.status === 'Waiting Payment' && <span className="badge badge-warning">{s.status}</span>}
                  </td>
                  <td>
                    <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }} onClick={() => navigate(`/booking-pt/${s.id}`)}>View</button>
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
