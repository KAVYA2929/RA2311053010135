#stage 1

First I fetched the notifications from the API using axios.

Then I assigned priority to each notification based on its type.

Placement has highest priority
Result has medium priority
Event has lowest priority

I also considered the timestamp so that newer notifications appear first.

Then I combined both priority and timestamp to calculate a score.

After that, I sorted all notifications based on this score in descending order.

Finally, I selected the top 10 notifications.

## Efficiency

If notifications keep coming continuously, we can use a min heap.

It will always maintain only the top 10 notifications efficiently.

This approach reduces time complexity and improves performance.

## Output

Top 10 notifications are displayed in the terminal.

---

# stage 2

In this stage, I developed a React application to display notifications.

I fetched notifications from the API using the access token.

Then I applied the same priority logic used in Stage 1.

The notifications are sorted based on priority and recency.

I displayed the top 10 notifications in the UI.

I also added a filter option to view notifications based on type:
Placement, Result, and Event.

Each notification is displayed with different colors for better user experience.

## Logging Middleware

I created a reusable logging function.

This function sends logs to the server whenever important actions happen.

Logging is used during:

* API call start
* Successful data fetch
* Error handling
* State updates

This helps in tracking application behavior and debugging.

## Output

The application displays notifications in a clean UI with filtering options.

Screenshots of the UI and logging output are included in the repository.
