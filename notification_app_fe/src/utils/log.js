const Log = async (stack, level, pkg, message) => {
  try {
    const response = await fetch("http://20.207.122.201/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_ACCESS_TOKEN"
      },
      body: JSON.stringify({
        stack: stack,
        level: level,
        package: pkg,
        message: message
      })
    });

    const data = await response.json();
    console.log("Log sent:", data);

  } catch (error) {
    console.error("Logging error:", error);
  }
};

export default Log;