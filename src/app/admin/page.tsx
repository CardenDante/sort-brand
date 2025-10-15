"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaEye,
  FaEyeSlash,
  FaTrash,
  FaSearch,
  FaFilter,
  FaSignOutAlt,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaInfoCircle,
  FaUserFriends,
  FaDonate,
  FaAddressBook,
} from "react-icons/fa";
import { formatKenyanDate } from "@/lib/utils";

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"contacts" | "join" | "donations">(
    "contacts"
  );
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [records, setRecords] = useState<any[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false,
  });
  const [search, setSearch] = useState("");
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
      fetchData();
    }
  }, [token, activeTab]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
      setIsAuthenticated(true);
      fetchData();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
  };

  const fetchData = async (page = 1) => {
    setLoading(true);
    setError("");

    let endpoint = "/api/admin/contacts";
    if (activeTab === "join") endpoint = "/api/admin/join";
    if (activeTab === "donations") endpoint = "/api/admin/donations";

    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
        ...(search && { search }),
        ...(unreadOnly && { unread: "true" }),
      });
      const res = await fetch(`${endpoint}?${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch data");
      setRecords(
        data.contacts || data.joinRequests || data.donations || data.records || []
      );
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(1);
  };

  const deleteRecord = async (id: number) => {
    if (!confirm("Are you sure you want to delete this record?")) return;
    try {
      const res = await fetch(`/api/admin/${activeTab}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete record");
      setRecords((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete");
    }
  };

  if (!isAuthenticated)
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
              className="w-full bg-[#D4AF34] hover:bg-[#c9a52f] py-2 rounded-lg font-medium"
            >
              {loading ? "Logging in..." : "Login"}
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
            {activeTab === "contacts" && (
              <>
                <FaAddressBook /> Contacts
              </>
            )}
            {activeTab === "join" && (
              <>
                <FaUserFriends /> Join Requests
              </>
            )}
            {activeTab === "donations" && (
              <>
                <FaDonate /> Donations
              </>
            )}
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-600 hover:text-black"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="border-t bg-gray-50">
          <div className="max-w-7xl mx-auto flex">
            {["contacts", "join", "donations"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 py-3 text-center font-semibold border-b-2 ${
                  activeTab === tab
                    ? "border-[#D4AF34] text-[#D4AF34]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab === "contacts"
                  ? "Contacts"
                  : tab === "join"
                  ? "Join Requests"
                  : "Donations"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search / Filter */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
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

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-3 text-center">
            <div>
              <div className="text-2xl font-bold text-[#D4AF34]">
                {pagination.total}
              </div>
              <p className="text-gray-600 text-sm">Total</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {records.filter((r) => r.read_status).length}
              </div>
              <p className="text-gray-600 text-sm">Read</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">
                {records.filter((r) => !r.read_status).length}
              </div>
              <p className="text-gray-600 text-sm">Unread</p>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          {loading ? (
            <p className="text-center py-8 text-gray-500">Loading...</p>
          ) : records.length === 0 ? (
            <p className="text-center py-8 text-gray-500">No data found</p>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {activeTab === "donations" ? "Donor" : "Name"}
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {activeTab === "donations"
                      ? "Amount"
                      : activeTab === "join"
                      ? "Type"
                      : "Subject"}
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
                  <tr key={r.id} className="hover:bg-gray-50">
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
                      {activeTab === "donations"
                        ? `KSh ${r.amount}`
                        : activeTab === "join"
                        ? r.role || r.type
                        : r.subject}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <FaCalendar className="inline mr-1" />
                      {formatKenyanDate(r.created_at)}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-3">
                        <button
                          onClick={() =>
                            router.push(`/admin/${activeTab}/${r.id}`)
                          }
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
            Showing {(pagination.page - 1) * pagination.limit + 1}–
            {Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
            {pagination.total}
          </p>
          <div className="flex gap-2">
            <button
              disabled={!pagination.hasPrev}
              onClick={() => fetchData(pagination.page - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <button
              disabled={!pagination.hasNext}
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
