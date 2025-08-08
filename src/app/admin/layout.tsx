// src/app/admin/layout.tsx
export const metadata = {
  title: 'Admin Portal - Sortbrands',
  description: 'Contact management dashboard for Sortbrands.',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
}