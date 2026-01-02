import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../Styles/Request_detail.css";

function Request_detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const req = location.state?.request;

  // Initialize hooks safely even if req is undefined
  const [status, setStatus] = useState(req?.status || "pending");
  const [note, setNote] = useState(req?.note || "");

  if (!req) {
    return <div>No request data available.</div>;
  }

  const typeMap = {
    "Birthday": "Birthday",
    "Carpool": "Carpool",
    "Small Business": "SmallBusiness"
  };

  const data = {
    Birthday: {
      serviceTitle: "Birthday Party Planner",
      price: "5000",
      description: "Organize a fun birthday party with balloons and cake."
    },
    Carpool: {
      location: "Downtown",
      vehicleType: "Mini Van",
      pricePerSeat: "500",
      seatsAvailable: "4",
      description: "Daily commute carpool service"
    },
    SmallBusiness: {
      businessName: "ABC Store",
      businessDescription: "Local grocery shop",
      businessType: "Retail",
      additionalComments: "Open on weekends"
    }
  };

  const typeData = data[typeMap[req.type]];

  const handleSubmit = () => {
    alert(`Request ${req.id} has been ${status}.\nNote: ${note}`);
  };

  return (
    <div className="request_detail_main">

      {/* Back Button */}
      <div className="arrow_detail" onClick={() => navigate(-1)}>
        <FaArrowLeft />       </div>

      <h2>Request Detail - {req.id}</h2>

      <div className="request_detail_card">
        <div className="request_field"><strong>Name:</strong> {req.name}</div>
        <div className="request_field"><strong>Type:</strong> {req.type}</div>
        <div className="request_field"><strong>Status:</strong> {status}</div>

        {typeData && Object.entries(typeData).map(([key, value]) => (
          <div className="request_field" key={key}>
            <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
          </div>
        ))}

        <div className="admin_action">
          <label>Update Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        
<div className="submit_btn">
    <button className="primary-btn" onClick={handleSubmit}>Save</button>

</div>
        
      </div>
    </div>
  );
}

export default Request_detail;
