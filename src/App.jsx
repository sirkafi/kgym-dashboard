import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem('kgym_auth') === 'true';
  return isAuth ? children : <Navigate to="/login" replace />;
};

// Pages
import Login from './pages/Login';
import DashboardOverview from './pages/DashboardOverview';
import Membership from './pages/Membership';
import AddMembership from './pages/AddMembership';
import RenewMembership from './pages/RenewMembership';
import MemberManagement from './pages/MemberManagement';
import MemberDetails from './pages/MemberDetails';
import AddMember from './pages/AddMember';
import EditMember from './pages/EditMember';
import QRActivity from './pages/QRActivity';
import QRActivityDetails from './pages/QRActivityDetails';
import BookingPT from './pages/BookingPT';
import ViewBookingPT from './pages/ViewBookingPT';
import AddBookingPT from './pages/AddBookingPT';
import ProcessWithdrawals from './pages/ProcessWithdrawals';
import Finance from './pages/Finance';
import TransactionDetails from './pages/TransactionDetails';
import Branches from './pages/Branches';
import AddBranch from './pages/AddBranch';
import EditBranch from './pages/EditBranch';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import CreateCampaign from './pages/CreateCampaign';
import EditCampaign from './pages/EditCampaign';
import RolePermission from './pages/RolePermission';
import AddCustomRole from './pages/AddCustomRole';
import Settings from './pages/Settings';
import EditProfileAdmin from './pages/EditProfileAdmin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<DashboardOverview />} />
          
          <Route path="membership" element={<Membership />} />
          <Route path="membership/add" element={<AddMembership />} />
          <Route path="membership/renew/:id" element={<RenewMembership />} />
          
          <Route path="members" element={<MemberManagement />} />
          <Route path="members/add" element={<AddMember />} />
          <Route path="members/edit/:id" element={<EditMember />} />
          <Route path="members/:id" element={<MemberDetails />} />
          
          <Route path="qr-activity" element={<QRActivity />} />
          <Route path="qr-activity/:id" element={<QRActivityDetails />} />
          
          <Route path="booking-pt" element={<BookingPT />} />
          <Route path="booking-pt/add" element={<AddBookingPT />} />
          <Route path="booking-pt/withdrawals" element={<ProcessWithdrawals />} />
          <Route path="booking-pt/:id" element={<ViewBookingPT />} />
          
          <Route path="finance" element={<Finance />} />
          <Route path="finance/:id" element={<TransactionDetails />} />
          
          <Route path="branches" element={<Branches />} />
          <Route path="branches/add" element={<AddBranch />} />
          <Route path="branches/edit/:id" element={<EditBranch />} />
          
          <Route path="reports" element={<Reports />} />
          
          <Route path="notifications" element={<Notifications />} />
          <Route path="notifications/create" element={<CreateCampaign />} />
          <Route path="notifications/edit/:id" element={<EditCampaign />} />
          
          <Route path="roles" element={<RolePermission />} />
          <Route path="roles/add" element={<AddCustomRole />} />
          
          <Route path="settings" element={<Settings />} />
          <Route path="profile/edit" element={<EditProfileAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
