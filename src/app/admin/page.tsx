"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  FaTrash,
  FaSearch,
  FaFilter,
  FaSignOutAlt,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaInfoCircle,
  FaAddressBook,
  FaSyncAlt,
} from "react-icons/fa";
import { formatKenyanDate } from "@/lib/utils";

type Contact = {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
  created_at: string;
  read_status: number | boolean;
};

const EMPTY_PAGINATION = {
  page: 1,
  limit: 10,
  total: 0,
  totalPages: 0,
  hasNext: false,
  hasPrev: false,
};

const EMPTY_STATS = { total: 0, read: 0, unread: 0 };

export default function AdminDashboard() {
  const router = useRouter();

  // `null` = not yet read from localStorage, "" = definitely logged out.
  const [token, setToken] = useState<string | null>(null);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [records, setRecords] = useState<Contact[]>([]);
  const [pagination, setPagination] = useState(EMPTY_PAGINATION);
  const [stats, setStats] = useState(EMPTY_STATS);
  const [search, setSearch] = useState("");
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [error, setError] = useState("");

  // Only the newest request is allowed to write to state, so a slow/failed
  // response can never overwrite fresher data with zeros.
  const requestId = useRef(0);

  useEffect(() => {
    setToken(localStorage.getItem("adminToken") || "");
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("adminToken");
    requestId.current += 1;
    setToken("");
    setRecords([]);
    setPagination(EMPTY_PAGINATION);
    setStats(EMPTY_STATS);
  }, []);

  const fetchData = useCallback(
    async (page = 1) => {
      if (!token) return;

      const id = ++requestId.current;
      setLoading(true);
      setError("");

      try {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: EMPTY_PAGINATION.limit.toString(),
          ...(search && { search }),
          ...(unreadOnly && { unread: "true" }),
        });

        const res = await fetch(`/api/admin/contacts?${params}`, {
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store",
        });

        const data = await res.json().catch(() => ({}));
        if (id !== requestId.current) return; // a newer request already won

        if (res.status === 401) {
          logout();
          setError("Your session expired. Please log in again.");
          return;
        }
        if (!res.ok) throw new Error(data.error || "Failed to fetch data");

        setRecords(Array.isArray(data.contacts) ? data.contacts : []);
        setPagination({ ...EMPTY_PAGINATION, ...(data.pagination || {}), limit: EMPTY_PAGINATION.limit });
        setStats({ ...EMPTY_STATS, ...(data.stats || {}) });
      } catch (err) {
        if (id !== requestId.current) return;
        // Keep whatever is already on screen; surface the failure instead of
        // silently rendering an empty table.
        setError(
          err instanceof Error ? err.message : "Failed to load contacts"
        );
      } finally {
        if (id === requestId.current) setLoading(false);
      }
    },
    [token, search, unreadOnly, logout]
  );

  useEffect(() => {
    if (token) fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, unreadOnly]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      localStorage.setItem("adminToken", data.token);
      // Setting the token triggers the effect above, which fetches with the
      // real token instead of the stale `null` captured before login.
      setToken(data.token);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(1);
  };

  const deleteRecord = async (id: number) => {
    if (!confirm("Are you sure you want to delete this record?")) return;
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete record");
      fetchData(pagination.page);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete");
    }
  };

  if (token === null) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!token)
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">
            Admin Dashboard
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <p className="bg-red-50 text-red-600 border border-red-200 p-2 rounded">
                {error}
              </p>
            )}
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-[#D4AF34] hover:bg-[#c9a52f] py-2 rounded-lg font-medium disabled:opacity-60"
            >
              {loginLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FaAddressBook /> Contacts
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => fetchData(pagination.page)}
              disabled={loading}
              className="flex items-center text-gray-600 hover:text-black disabled:opacity-50"
              title="Refresh"
            >
              <FaSyncAlt className={`mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={logout}
              className="flex items-center text-gray-600 hover:text-black"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {error && (
          <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg p-4 mb-6 flex items-center justify-between gap-4">
            <span>{error}</span>
            <button
              onClick={() => fetchData(pagination.page)}
              className="shrink-0 underline font-medium"
            >
              Retry
            </button>
          </div>
        )}

        {/* Search / Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF34]"
              />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={unreadOnly}
                onChange={(e) => setUnreadOnly(e.target.checked)}
              />
              <FaFilter /> Unread only
            </label>
            <button
              type="submit"
              className="bg-[#D4AF34] hover:bg-[#c9a52f] text-black px-6 py-2 rounded-lg font-medium"
            >
              Search
            </button>
          </form>
        </div>

        {/* Stats — totals across the whole table, not just this page */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-3 text-center">
            <div>
              <div className="text-2xl font-bold text-[#D4AF34]">
                {stats.total}
              </div>
              <p className="text-gray-600 text-sm">Total</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {stats.read}
              </div>
              <p className="text-gray-600 text-sm">Read</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">
                {stats.unread}
              </div>
              <p className="text-gray-600 text-sm">Unread</p>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          {loading && records.length === 0 ? (
            <p className="text-center py-8 text-gray-500">Loading...</p>
          ) : records.length === 0 ? (
            <p className="text-center py-8 text-gray-500">
              {error ? "Could not load contacts." : "No data found"}
            </p>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {records.map((r) => (
                  <tr
                    key={r.id}
                    className={`hover:bg-gray-50 ${
                      r.read_status ? "" : "bg-yellow-50/40"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{r.name}</div>
                      {r.email && (
                        <div className="text-sm text-gray-500 flex items-center">
                          <FaEnvelope className="mr-1" /> {r.email}
                        </div>
                      )}
                      {r.phone && (
                        <div className="text-sm text-gray-500 flex items-center">
                          <FaPhone className="mr-1" /> {r.phone}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {r.subject}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <FaCalendar className="inline mr-1" />
                      {formatKenyanDate(r.created_at)}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-3">
                        <button
                          onClick={() => router.push(`/admin/contacts/${r.id}`)}
                          className="text-[#D4AF34] hover:text-[#c9a52f]"
                        >
                          <FaInfoCircle />
                        </button>
                        <button
                          onClick={() => deleteRecord(r.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center bg-gray-50 mt-4 px-6 py-3 border-t">
          <p className="text-sm text-gray-700">
            {pagination.total === 0
              ? "Showing 0 of 0"
              : `Showing ${(pagination.page - 1) * pagination.limit + 1}–${Math.min(
                  pagination.page * pagination.limit,
                  pagination.total
                )} of ${pagination.total}`}
          </p>
          <div className="flex gap-2">
            <button
              disabled={!pagination.hasPrev || loading}
              onClick={() => fetchData(pagination.page - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <button
              disabled={!pagination.hasNext || loading}
              onClick={() => fetchData(pagination.page + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
