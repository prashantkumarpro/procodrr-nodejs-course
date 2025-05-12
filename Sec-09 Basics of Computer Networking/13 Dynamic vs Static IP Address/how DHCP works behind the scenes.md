When a new device connects to a network, it typically uses the **Dynamic Host Configuration Protocol (DHCP)** to automatically obtain an IP address from a DHCP server (often a router). This process involves a series of messages exchanged between the device (DHCP client) and the DHCP server. Below is a detailed, step-by-step explanation of how a DHCP IP is assigned:

---

### **Step 1: DHCP Discover**

- **What happens**: The new device (client) sends a **DHCP Discover** message to find a DHCP server.
- **How it works**:
  - The client does not yet have an IP address, so it uses a source IP of `0.0.0.0`.
  - The message is broadcast to the entire network (destination IP: `255.255.255.255`) because the client does not know the DHCP server's address.
  - The message includes the client's MAC address and may include a request for specific network parameters (e.g., subnet mask, default gateway, DNS server).
- **Example**:
  - A laptop connects to a Wi-Fi network and sends a DHCP Discover message to find the router (DHCP server).

---

### **Step 2: DHCP Offer**

- **What happens**: The DHCP server responds with a **DHCP Offer** message, proposing an IP address to the client.
- **How it works**:
  - The DHCP server selects an available IP address from its pool and reserves it for the client.
  - The server sends the offer as a broadcast (since the client doesn't yet have an IP) or unicast (if the server supports it).
  - The message includes:
    - The proposed IP address.
    - Subnet mask.
    - Lease duration (how long the client can use the IP).
    - Default gateway.
    - DNS server addresses.
- **Example**:
  - The router (DHCP server) responds to the laptop with an offer of `192.168.1.100` as the IP address.

---

### **Step 3: DHCP Request**

- **What happens**: The client sends a **DHCP Request** message to accept the offered IP address.
- **How it works**:
  - The client broadcasts the request to inform the DHCP server that it accepts the offer.
  - This broadcast also informs other DHCP servers (if any) that their offers are declined.
  - The message includes:
    - The requested IP address.
    - The DHCP server's identifier (to specify which server's offer is being accepted).
- **Example**:
  - The laptop sends a DHCP Request to accept the IP `192.168.1.100` from the router.

---

### **Step 4: DHCP Acknowledgment (ACK)**

- **What happens**: The DHCP server confirms the assignment with a **DHCP Acknowledgment (ACK)** message.
- **How it works**:
  - The server sends the ACK message to finalize the IP address assignment.
  - The message includes:
    - The assigned IP address.
    - Subnet mask.
    - Lease duration.
    - Default gateway.
    - DNS server addresses.
  - The client now configures its network interface with the provided information.
- **Example**:
  - The router sends a DHCP ACK to the laptop, confirming the assignment of `192.168.1.100`.

---

### **Step 5: IP Address Configuration**

- **What happens**: The client configures its network interface with the assigned IP address and other parameters.
- **How it works**:
  - The client applies the IP address, subnet mask, default gateway, and DNS server information to its network settings.
  - The client can now communicate on the network.
- **Example**:
  - The laptop configures its Wi-Fi adapter with:
    - IP: `192.168.1.100`
    - Subnet mask: `255.255.255.0`
    - Default gateway: `192.168.1.1`
    - DNS server: `8.8.8.8`

---

### **Optional: DHCP Renewal**

- **What happens**: Before the lease expires, the client attempts to renew its IP address.
- **How it works**:
  - The client sends a **DHCP Request** directly to the DHCP server (unicast) to renew the lease.
  - If the server approves, it sends a **DHCP ACK** with the updated lease duration.
  - If the server does not respond, the client may continue using the IP until the lease expires, after which it must start the process again.
- **Example**:
  - After 50% of the lease time (e.g., 4 hours into an 8-hour lease), the laptop sends a DHCP Request to renew its IP.

---

### **Optional: DHCP Release**

- **What happens**: The client releases its IP address when it no longer needs it.
- **How it works**:
  - The client sends a **DHCP Release** message to the server, freeing the IP address for reuse.
- **Example**:
  - The laptop sends a DHCP Release when it disconnects from the network.

---

### **Summary of DHCP Messages**

| **Step**          | **Message**   | **Sender**  | **Receiver** | **Purpose**                    |
| ----------------- | ------------- | ----------- | ------------ | ------------------------------ |
| 1. Discover       | DHCP Discover | Client      | Broadcast    | Find a DHCP server.            |
| 2. Offer          | DHCP Offer    | DHCP Server | Client       | Propose an IP address.         |
| 3. Request        | DHCP Request  | Client      | Broadcast    | Accept the offered IP address. |
| 4. Acknowledgment | DHCP ACK      | DHCP Server | Client       | Confirm the IP assignment.     |
| Optional: Renewal | DHCP Request  | Client      | DHCP Server  | Renew the IP lease.            |
| Optional: Release | DHCP Release  | Client      | DHCP Server  | Release the IP address.        |

---

### **Example Scenario**

1. A smartphone connects to a Wi-Fi network.
2. The smartphone sends a **DHCP Discover** message.
3. The router (DHCP server) responds with a **DHCP Offer** for the IP `192.168.1.150`.
4. The smartphone sends a **DHCP Request** to accept the offer.
5. The router sends a **DHCP ACK** to confirm the assignment.
6. The smartphone configures its network settings with:
   - IP: `192.168.1.150`
   - Subnet mask: `255.255.255.0`
   - Default gateway: `192.168.1.1`
   - DNS server: `8.8.8.8`
7. The smartphone can now access the internet.

---

This process ensures that devices can automatically and efficiently obtain IP addresses without manual configuration, making it ideal for dynamic networks.
