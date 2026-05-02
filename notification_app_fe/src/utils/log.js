const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYTQyNjBAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNjA0NCwiaWF0IjoxNzc3NzA1MTQ0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMTE2NjhiMmYtODQwYS00ZjZmLWFlZjMtMjIzY2JiNWQ5MzAyIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia2F2eWEgYWdyYXdhbCIsInN1YiI6IjA5ZjE4ZmExLTZkMWUtNDE2Mi04YjY5LWQwNTM0NTQyMjU1NCJ9LCJlbWFpbCI6ImthNDI2MEBzcm1pc3QuZWR1LmluIiwibmFtZSI6ImthdnlhIGFncmF3YWwiLCJyb2xsTm8iOiJyYTIzMTEwNTMwMTAxMzUiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiIwOWYxOGZhMS02ZDFlLTQxNjItOGI2OS1kMDUzNDU0MjI1NTQiLCJjbGllbnRTZWNyZXQiOiJGam1SYnZwdkRLSGZja3N3In0.XQbCcEPlqPVlsAIxj_qGDtBaJa2s_rdE-O8cq2tB3q8";

const Log = async (stack, level, pkg, message) => {
  try {
    await fetch("http://20.207.122.201/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });
  } catch (err) {
    console.log("Log failed");
  }
};

export default Log;