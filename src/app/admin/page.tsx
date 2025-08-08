// src/app/admin/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ContactSubmission } from '@/types/contact';
import { formatKenyanDate } from '@/lib/utils';
import { FaEye, FaEyeSlash, FaTrash, FaSearch, FaFilter, FaSignOutAlt, FaEnvelope, FaPhone, FaCalendar, FaInfoCircle } from 'react-icons/fa';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false
  });
  const [search, setSearch] = useState('');
  const [unreadOnly, setUnreadOnly] = useState(false);
  const router = useRouter();

  const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
      fetchContacts();
    }
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      localStorage.setItem('adminToken', data.token);
      setIsAuthenticated(true);
      setLoginData({ email: '', password: '' });
      fetchContacts();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setContacts([]);
    setPagination({
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 0,
      hasNext: false,
      hasPrev: false
    });
  };

  const fetchContacts = async (page = 1) => {
    setLoading(true);
    setError('');

    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
        ...(search && { search }),
        ...(unreadOnly && { unread: 'true' })
      });

      const response = await fetch(`/api/admin/contacts?${params}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          handleLogout();
          return;
        }
        throw new Error(data.error || 'Failed to fetch contacts');
      }

      setContacts(data.contacts);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  const updateReadStatus = async (id: number, read_status: boolean) => {
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: JSON.stringify({ read_status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update contact');
      }

      // Update local state
      setContacts(prev => 
        prev.map(contact => 
          contact.id === id ? { ...contact, read_status } : contact
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update contact');
    }
  };

  const deleteContact = async (id: number) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }

      // Remove from local state
      setContacts(prev => prev.filter(contact => contact.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete contact');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchContacts(1);
  };

  const viewContactDetails = (id: number) => {
    router.push(`/admin/contacts/${id}`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Access the contact management dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={loginData.email}
                onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF34] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF34] focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D4AF34] hover:bg-[#c9a52f] text-black font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 space-y-4 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Contact Management</h1>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center sm:justify-start px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF34] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={unreadOnly}
                  onChange={(e) => setUnreadOnly(e.target.checked)}
                  className="mr-2"
                />
                <FaFilter className="mr-1" />
                <span className="text-sm sm:text-base">Unread only</span>
              </label>
              <button
                type="submit"
                className="bg-[#D4AF34] hover:bg-[#c9a52f] text-black px-4 py-2 rounded-lg font-medium transition-colors w-full sm:w-auto"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-4 sm:mb-6 text-sm sm:text-base">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-6">
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-[#D4AF34]">{pagination.total}</div>
              <div className="text-gray-600 text-xs sm:text-base">Total Contacts</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-green-600">
                {contacts.filter(c => c.read_status).length}
              </div>
              <div className="text-gray-600 text-xs sm:text-base">Read</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-orange-600">
                {contacts.filter(c => !c.read_status).length}
              </div>
              <div className="text-gray-600 text-xs sm:text-base">Unread</div>
            </div>
          </div>
        </div>

        {/* Contacts List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#D4AF34]"></div>
              <p className="mt-2 text-gray-600">Loading contacts...</p>
            </div>
          ) : contacts.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No contacts found.
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {contacts.map((contact) => (
                      <tr 
                        key={contact.id}
                        className={`hover:bg-gray-50 ${!contact.read_status ? 'bg-blue-50' : ''}`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="font-medium text-gray-900">{contact.name}</div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <FaEnvelope className="mr-1" />
                              {contact.email}
                            </div>
                            {contact.phone && (
                              <div className="text-sm text-gray-500 flex items-center">
                                <FaPhone className="mr-1" />
                                {contact.phone}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">{contact.subject}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <FaCalendar className="mr-1" />
                            {formatKenyanDate(contact.created_at)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            contact.read_status 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {contact.read_status ? 'Read' : 'Unread'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => viewContactDetails(contact.id)}
                              className="text-[#D4AF34] hover:text-[#c9a52f]"
                              title="View details"
                            >
                              <FaInfoCircle />
                            </button>
                            <button
                              onClick={() => updateReadStatus(contact.id, !contact.read_status)}
                              className="text-blue-600 hover:text-blue-900"
                              title={contact.read_status ? 'Mark as unread' : 'Mark as read'}
                            >
                              {contact.read_status ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <button
                              onClick={() => deleteContact(contact.id)}
                              className="text-red-600 hover:text-red-900"
                              title="Delete contact"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden">
                {contacts.map((contact) => (
                  <div 
                    key={contact.id}
                    className={`p-4 border-b border-gray-200 ${!contact.read_status ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{contact.name}</h3>
                        <p className="text-sm text-gray-500 flex items-center mt-1">
                          <FaEnvelope className="mr-1" />
                          {contact.email}
                        </p>
                        {contact.phone && (
                          <p className="text-sm text-gray-500 flex items-center mt-1">
                            <FaPhone className="mr-1" />
                            {contact.phone}
                          </p>
                        )}
                      </div>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        contact.read_status 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {contact.read_status ? 'Read' : 'Unread'}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm text-gray-900 font-medium">Subject: {contact.subject}</p>
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <FaCalendar className="mr-1" />
                        {formatKenyanDate(contact.created_at)}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => viewContactDetails(contact.id)}
                        className="bg-[#D4AF34] hover:bg-[#c9a52f] text-black px-3 py-1 rounded text-xs font-medium transition-colors flex items-center"
                      >
                        <FaInfoCircle className="mr-1" />
                        View
                      </button>
                      <button
                        onClick={() => updateReadStatus(contact.id, !contact.read_status)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex items-center"
                      >
                        {contact.read_status ? <FaEyeSlash className="mr-1" /> : <FaEye className="mr-1" />}
                        {contact.read_status ? 'Unread' : 'Read'}
                      </button>
                      <button
                        onClick={() => deleteContact(contact.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex items-center"
                      >
                        <FaTrash className="mr-1" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="px-4 sm:px-6 py-3 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div className="text-sm text-gray-700 text-center sm:text-left">
                  Showing {((pagination.page - 1) * pagination.limit) + 1} to{' '}
                  {Math.min(pagination.page * pagination.limit, pagination.total)} of{' '}
                  {pagination.total} results
                </div>
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => fetchContacts(pagination.page - 1)}
                    disabled={!pagination.hasPrev}
                    className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => fetchContacts(pagination.page + 1)}
                    disabled={!pagination.hasNext}
                    className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}