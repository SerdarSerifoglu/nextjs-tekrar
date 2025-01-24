import React from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-4 text-center bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Template</h1>
      </div>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
