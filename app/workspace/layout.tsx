import WorkspaceHeader from '../components/WorkspaceHeader';

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <WorkspaceHeader />
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}

