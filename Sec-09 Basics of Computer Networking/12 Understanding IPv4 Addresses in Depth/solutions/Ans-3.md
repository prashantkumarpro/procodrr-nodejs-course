### **Port Forwarding: Service Port vs. Internal Port**

When setting up **port forwarding** on a router, you typically see two types of ports:

1. **Service Port (External Port)**
2. **Internal Port (Local Port)**

Both play a role in directing incoming internet traffic to the correct device inside your local network.

---

## **🔹 1. Service Port (External Port)**

- Also called the **public port or WAN port**.
- This is the port that **external devices on the internet** will use to reach your server or application.
- The router listens for traffic on this port and forwards it to the correct device inside your network.
- Example: If you run a web server, you might set **Service Port = 8080**, so users can access your site using `http://your-public-ip:8080`.

---

## **🔹 2. Internal Port (Local Port)**

- Also called the **private port or LAN port**.
- This is the port on the **local device inside your network** where traffic will be sent.
- The router maps the service port to this internal port of the device.
- Example: Your web server might be running on port **80** inside your network, so you set **Internal Port = 80**.

---

## **🔹 Example of Port Forwarding**

Imagine you are hosting a **web server** on your computer inside your home network (`192.168.1.100`). Your router is assigned a **public IP (e.g., `203.0.113.50`)** by your ISP.

🔸 **You configure port forwarding like this in your router:**

| Service Port (External) | Internal Port | Internal IP   | Protocol |
| ----------------------- | ------------- | ------------- | -------- |
| 8080                    | 80            | 192.168.1.100 | TCP      |

### **How This Works:**

1. Someone on the internet visits `http://203.0.113.50:8080`.
2. The request reaches your router on **port 8080**.
3. The router **forwards the request** to your local computer (`192.168.1.100`) on **port 80**.
4. Your web server running on port **80** processes the request and sends a response back.

---

## **🔹 Why Use Different Ports?**

✅ **Security:** If a service runs on a common port (e.g., 80 for HTTP, 22 for SSH), you can use a different external port (e.g., 5000 → 22) to reduce automated attacks.  
✅ **Multiple Services:** If you host multiple servers on the same device, you can differentiate them. Example:

- `8080 → 192.168.1.100:80` (Website)
- `2222 → 192.168.1.100:22` (SSH)

---

### **🔹 Final Summary**

| Term                             | Meaning                                                    |
| -------------------------------- | ---------------------------------------------------------- |
| **Service Port (External Port)** | Port that the router listens to from the internet          |
| **Internal Port (Local Port)**   | Port that the router forwards traffic to on a local device |
