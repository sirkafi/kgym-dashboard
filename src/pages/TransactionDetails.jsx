import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer, Download, CheckCircle, AlertCircle } from 'lucide-react';

export default function TransactionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy data representing the transaction
  const transactionId = id || 'TRX-1092';
  const isFraud = transactionId === 'TRX-1094'; // Simulated condition for a flagged transaction

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Transaction Details</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Receipt & payment information</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline"><Printer size={16} /> Print Receipt</button>
          <button className="btn btn-primary"><Download size={16} /> Download PDF</button>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-6)' }}>
        
        {/* Left Column: Receipt Details */}
        <div className="card" style={{ padding: 'var(--spacing-8)' }}>
          <div className="flex justify-between items-start" style={{ paddingBottom: 'var(--spacing-6)', borderBottom: '1px solid var(--border-grey)', marginBottom: 'var(--spacing-6)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ width: 24, height: 24, backgroundColor: 'var(--primary-red)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.85rem', fontStyle: 'italic' }}>
                  K
                </div>
                <h2 style={{ margin: 0, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>KGym</h2>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>KGym Pusat</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Jl. Jendral Sudirman No. 123</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>INVOICE</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>#{transactionId}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>15 Jun 2026, 10:20 AM</div>
            </div>
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Billed To</div>
              <div style={{ fontWeight: 600 }}>Budi Santoso</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>M-1001</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>budi@example.com</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Payment Info</div>
              <div style={{ fontWeight: 500, fontSize: '0.875rem' }}>Credit Card (Visa)</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>**** **** **** 4242</div>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-grey)' }}>
                  <th style={{ padding: '0.75rem 0', textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Description</th>
                  <th style={{ padding: '0.75rem 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Qty</th>
                  <th style={{ padding: '0.75rem 0', textAlign: 'right', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-grey)', fontWeight: 500 }}>Membership Renew (1 Month)</td>
                  <td style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-grey)', textAlign: 'center' }}>1</td>
                  <td style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-grey)', textAlign: 'right' }}>Rp 409.090</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end">
            <div style={{ width: '250px' }}>
              <div className="flex justify-between" style={{ paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Subtotal</span>
                <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>Rp 409.090</span>
              </div>
              <div className="flex justify-between" style={{ paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-grey)' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Tax (10%)</span>
                <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>Rp 40.910</span>
              </div>
              <div className="flex justify-between items-center" style={{ paddingTop: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Total</span>
                <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--primary-red)' }}>Rp 450.000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Status & Actions */}
        <div className="flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Transaction Status</h3>
            
            {isFraud ? (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem', backgroundColor: 'var(--warning-bg)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                <AlertCircle size={24} color="var(--warning)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--warning)', marginBottom: '0.25rem' }}>Review Required</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>This transaction was flagged by the system due to abnormal refund behavior.</div>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', backgroundColor: 'var(--success-bg)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                <CheckCircle size={24} color="var(--success)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--success)', marginBottom: '0.25rem' }}>Payment Successful</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Funds have been captured securely.</div>
                </div>
              </div>
            )}

            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Admin Actions</div>
              <button className="btn btn-outline" style={{ width: '100%', marginBottom: '0.5rem', justifyContent: 'center' }}>Send Receipt via Email</button>
              <button className="btn btn-outline" style={{ width: '100%', color: 'var(--danger)', borderColor: 'var(--danger)', justifyContent: 'center' }}>Initiate Refund</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
