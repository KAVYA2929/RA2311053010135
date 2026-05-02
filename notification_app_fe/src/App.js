import { useEffect, useState } from "react";
import Log from "./utils/log";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYTQyNjBAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNjA0NCwiaWF0IjoxNzc3NzA1MTQ0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMTE2NjhiMmYtODQwYS00ZjZmLWFlZjMtMjIzY2JiNWQ5MzAyIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia2F2eWEgYWdyYXdhbCIsInN1YiI6IjA5ZjE4ZmExLTZkMWUtNDE2Mi04YjY5LWQwNTM0NTQyMjU1NCJ9LCJlbWFpbCI6ImthNDI2MEBzcm1pc3QuZWR1LmluIiwibmFtZSI6ImthdnlhIGFncmF3YWwiLCJyb2xsTm8iOiJyYTIzMTEwNTMwMTAxMzUiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiIwOWYxOGZhMS02ZDFlLTQxNjItOGI2OS1kMDUzNDU0MjI1NTQiLCJjbGllbnRTZWNyZXQiOiJGam1SYnZwdkRLSGZja3N3In0.XQbCcEPlqPVlsAIxj_qGDtBaJa2s_rdE-O8cq2tB3q8";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");

  const weightMap = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await fetch(
        "http://20.207.122.201/evaluation-service/notifications",
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      const data = await res.json();

      Log("frontend", "info", "api", "Fetched notifications");

      const notifications = data.notifications || data;

      const scored = notifications.map((n) => ({
        ...n,
        score:
          weightMap[n.Type] * 1000000000 +
          new Date(n.Timestamp).getTime(),
      }));

      scored.sort((a, b) => b.score - a.score);

      setNotifications(scored);
    } catch (err) {
      Log("frontend", "error", "api", "Error fetching notifications");
    }
  };

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.Type === filter);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Notifications</h2>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Placement</option>
        <option>Result</option>
        <option>Event</option>
      </select>

      <h3>Top Notifications</h3>

      {filtered.slice(0, 10).map((n) => (
        <div
          key={n.ID}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
            background:
              n.Type === "Placement"
                ? "#d4edda"
                : n.Type === "Result"
                ? "#fff3cd"
                : "#f8d7da",
          }}
        >
          <h4>{n.Type}</h4>
          <p>{n.Message}</p>
          <small>{n.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default App;