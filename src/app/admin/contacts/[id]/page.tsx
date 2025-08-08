// src/app/admin/contacts/[id]/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ContactSubmission } from '@/types/contact';
import { formatKenyanDate } from '@/lib/utils';
import { FaArrowLeft, FaEye, FaEyeSlash, FaTrash, FaEnvelope, FaPhone, FaCalendar, FaTag } from 'react-icons/fa';

interface ContactDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ContactDetailPage({ params }: ContactDetailPageProps) {
  const [contact, setContact] = useState<ContactSubmission | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState(false);
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
  const router = useRouter();

  // Resolve params Promise
  useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  useEffect(() => {
    if (resolvedParams) {
      fetchContact();
    }
  }, [resolvedParams]);

  const fetchContact = async () => {
    if (!resolvedParams) return;
    
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        router.push('/admin');
        return;
      }

      const response = await fetch(`/api/admin/contacts/${resolvedParams.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          router.push('/admin');
          return;
        }
        if (response.status === 404) {
          setError('Contact not found');
          return;
        }
        throw new Error(data.error || 'Failed to fetch contact');
      }

      setContact(data.contact);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch contact');
    } finally {
      setLoading(false);
    }
  };

  const updateReadStatus = async (read_status: boolean) => {
    if (!contact || !resolvedParams) return;
    
    setActionLoading(true);
    try {
      const response = await fetch(`/api/admin/contacts/${resolvedParams.id}`, {
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

      setContact(prev => prev ? { ...prev, read_status } : null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update contact');
    } finally {
      setActionLoading(false);
    }
  };

  const deleteContact = async () => {
    if (!contact || !resolvedParams) return;
    
    if (!confirm('Are you sure you want to delete this contact?')) return;

    setActionLoading(true);
    try {
      const response = await fetch(`/api/admin/contacts/${resolvedParams.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }

      router.push('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete contact');
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF34]"></div>
          <p className="mt-4 text-gray-600">Loading contact...</p>
        </div>
      </div>
    );
  }

  if (error || !contact) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">{error || 'Contact not found'}</div>
          <button
            onClick={() => router.push('/admin')}
            className="bg-[#D4AF34] hover:bg-[#c9a52f] text-black px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/admin')}
                className="flex items-center text-[#D4AF34] hover:text-[#c9a52f] transition-colors"
              >
                <FaArrowLeft className="mr-2" />
                Back to Dashboard
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Contact Details</h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                contact.read_status 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-orange-100 text-orange-800'
              }`}>
                {contact.read_status ? 'Read' : 'Unread'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">
            {error}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Contact Info Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{contact.name}</h2>
                <p className="text-gray-600 text-sm mt-1">
                  <FaCalendar className="inline mr-2" />
                  {formatKenyanDate(contact.created_at)}
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => updateReadStatus(!contact.read_status)}
                  disabled={actionLoading}
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
                >
                  {contact.read_status ? <FaEyeSlash className="mr-2" /> : <FaEye className="mr-2" />}
                  Mark as {contact.read_status ? 'Unread' : 'Read'}
                </button>
                <button
                  onClick={deleteContact}
                  disabled={actionLoading}
                  className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50"
                >
                  <FaTrash className="mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Email */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center mb-2">
                  <FaEnvelope className="text-[#D4AF34] mr-2" />
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                </div>
                <p className="text-gray-900 text-lg">{contact.email}</p>
              </div>

              {/* Phone */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center mb-2">
                  <FaPhone className="text-[#D4AF34] mr-2" />
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                </div>
                <p className="text-gray-900 text-lg">{contact.phone || 'Not provided'}</p>
              </div>

              {/* Subject */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 md:col-span-2">
                <div className="flex items-center mb-2">
                  <FaTag className="text-[#D4AF34] mr-2" />
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                </div>
                <p className="text-gray-900 text-lg">{contact.subject}</p>
              </div>
            </div>

            {/* Message */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-[#D4AF34] rounded-full mr-3"></div>
                <label className="text-lg font-medium text-gray-700">Message</label>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-300">
                <p className="text-gray-900 whitespace-pre-wrap leading-relaxed">{contact.message}</p>
              </div>
            </div>

            {/* Metadata */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Contact ID:</span>
                  <span className="text-gray-900 ml-2 font-medium">#{contact.id}</span>
                </div>
                <div>
                  <span className="text-gray-500">Status:</span>
                  <span className={`ml-2 font-medium ${contact.read_status ? 'text-green-600' : 'text-orange-600'}`}>
                    {contact.read_status ? 'Read' : 'Unread'}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Received:</span>
                  <span className="text-gray-900 ml-2 font-medium">{formatKenyanDate(contact.created_at)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}