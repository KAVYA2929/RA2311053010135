const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYTQyNjBAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDE5OCwiaWF0IjoxNzc3NzAzMjk4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYmIyYzk5YzQtODc4ZS00YWQ4LTg3NzAtZDU2NmFiNGZjMzJiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia2F2eWEgYWdyYXdhbCIsInN1YiI6IjA5ZjE4ZmExLTZkMWUtNDE2Mi04YjY5LWQwNTM0NTQyMjU1NCJ9LCJlbWFpbCI6ImthNDI2MEBzcm1pc3QuZWR1LmluIiwibmFtZSI6ImthdnlhIGFncmF3YWwiLCJyb2xsTm8iOiJyYTIzMTEwNTMwMTAxMzUiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiIwOWYxOGZhMS02ZDFlLTQxNjItOGI2OS1kMDUzNDU0MjI1NTQiLCJjbGllbnRTZWNyZXQiOiJGam1SYnZwdkRLSGZja3N3In0.uAbElokkXGSa7WV4177tfr-JEVjRjXMkPYfYRv3K3a0";

const weightMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function getTopNotifications() {
  try {
    console.log("Fetching notifications...");

    const res = await axios.get(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const notifications = res.data.notifications;

    const scored = notifications.map((n) => ({
      ...n,
      score:
        weightMap[n.Type] * 1000000000 +
        new Date(n.Timestamp).getTime(),
    }));

    scored.sort((a, b) => b.score - a.score);

    const top10 = scored.slice(0, 10);

    console.log("\n===== TOP 10 NOTIFICATIONS =====\n");
    console.log(top10);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

getTopNotifications();