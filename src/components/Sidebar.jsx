import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  QrCode, 
  CalendarCheck, 
  Wallet, 
  MapPin, 
  FileText, 
  Bell, 
  ShieldCheck
} from 'lucide-react';
import logo from '../assets/images/kgym-logo.png';

const navItems = [
  { path: '/', icon: <LayoutDashboard />, label: 'Dashboard' },
  { path: '/membership', icon: <CreditCard />, label: 'Membership' },
  { path: '/members', icon: <Users />, label: 'Member Management' },
  { path: '/qr-activity', icon: <QrCode />, label: 'QR Activity / Check-in' },
  { path: '/booking-pt', icon: <CalendarCheck />, label: 'Booking PT' },
  { path: '/finance', icon: <Wallet />, label: 'Finance & Transactions' },
  { path: '/branches', icon: <MapPin />, label: 'Branch Management' },
  { path: '/reports', icon: <FileText />, label: 'Reports' },
  { path: '/notifications', icon: <Bell />, label: 'Notifications' },
  { path: '/roles', icon: <ShieldCheck />, label: 'Role & Permission' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        {/* Fallback to text if logo fails to load */}
        <img 
          src={logo} 
          alt="KGym Logo" 
          className="sidebar-logo" 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <span style={{ display: 'none', fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--primary-red)' }}>KGym</span>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
