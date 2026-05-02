# Stage 1

## Approach

First I fetched the notifications from the API using axios

Then I gave priority to each notification

Placement has highest priority  
Result has medium priority  
Event has lowest priority  

After that I also considered time  
New notifications should come first  

So I combined both and created a score  

Then I sorted all notifications based on this score  

Finally I selected top 10 notifications  



## Efficiency

If notifications keep coming continuously we can use a min heap  

It will always keep only top 10 notifications  

It is faster and efficient  

---

## Output

Top 10 notifications are printed in terminal