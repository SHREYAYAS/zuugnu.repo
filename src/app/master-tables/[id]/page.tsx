import Link from 'next/link';
import { MASTER_TABLES_LIST } from '@/types/master';
import MasterTableDetailContent from './client';

export function generateStaticParams() {
  return MASTER_TABLES_LIST.map((table) => ({
    id: table.id,
  }));
}

export const dynamicParams = false;

export default async function MasterTableDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const table = MASTER_TABLES_LIST.find((t) => t.id === id);

  if (!table) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Table not found</h1>
          <Link href="/master-tables" className="text-indigo-600 hover:text-indigo-700">
            ← Back to Master Tables
          </Link>
        </div>
      </div>
    );
  }

  return <MasterTableDetailContent table={table} />;
}
