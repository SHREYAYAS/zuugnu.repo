import Dashboard from '@/components/Dashboard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - Manage Your Gigs & Leads',
  description: 'Access your Zuugnu dashboard to manage gigs, track leads, monitor campaigns, and grow your freelance business.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardPage() {
  return <Dashboard />;
}
