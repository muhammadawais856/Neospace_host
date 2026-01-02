import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Request.css";

function Request() {
  const requests = [
    { id: "REQ-001", name: "Awais", date: "2025-12-28", time: "11:30 AM", type: "Birthday", status: "approved" },
    { id: "REQ-002", name: "Ali", date: "2025-12-27", time: "02:00 PM", type: "Carpool", status: "not approved" },
    { id: "REQ-003", name: "Sara", date: "2025-12-26", time: "05:15 PM", type: "Small Business", status: "rejected" },
    { id: "REQ-004", name: "Usman", date: "2025-12-25", time: "09:45 AM", type: "Birthday", status: "approved" },
    { id: "REQ-005", name: "Hamza", date: "2025-12-24", time: "06:00 PM", type: "Carpool", status: "not approved" },
  ];

  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredRequests = requests.filter((req) => {
    if (statusFilter !== "all" && req.status !== statusFilter) return false;
    if (typeFilter !== "all" && req.type !== typeFilter) return false;
    return true;
  });

  return (
    <div className="order_main">
      <div className="order_filter_row">
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All Status</option>
          <option value="approved">Approved</option>
          <option value="not approved">Not Approved</option>
          <option value="rejected">Rejected</option>
        </select>

        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="all">All Types</option>
          <option value="Birthday">Birthday</option>
          <option value="Carpool">Carpool</option>
          <option value="Small Business">Small Business</option>
        </select>
      </div>

      <table className="order_table">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((req) => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.name}</td>
              <td>{req.type}</td>
              <td>{req.date}</td>
              <td>{req.time}</td>
              <td className={`status-badge ${req.status.replace(" ", "-")}`}>{req.status}</td>
              <td>
                <button
                  className="primary-btn"
                  onClick={() => navigate("/requestdetail", { state: { request: req } })}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Request;
