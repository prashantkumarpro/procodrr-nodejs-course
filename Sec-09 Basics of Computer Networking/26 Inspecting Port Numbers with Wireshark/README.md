# **How to Inspect Port Numbers with Wireshark (Step-by-Step Guide)**

Wireshark is a powerful **network protocol analyzer** that captures and inspects network traffic, including **port numbers** (used in TCP/UDP communications). Below is a detailed guide on how to analyze port numbers in Wireshark.

---

## **Step 1: Install & Open Wireshark**

- Download from [wireshark.org](https://www.wireshark.org/).
- Install and **run as Administrator** (for full packet capture access).

---

## **Step 2: Select a Network Interface**

1. Open Wireshark.
2. Choose an **active network interface** (Wi-Fi, Ethernet, or loopback).
   - Example:
     - **Wi-Fi:** `Wi-Fi: Intel(R) Wireless-AC 9560`
     - **Ethernet:** `Ethernet: Realtek PCIe GbE Family Controller`
3. Click **Start** (🔄 icon) to begin capturing packets.

---

## **Step 3: Capture Network Traffic**

- Let Wireshark run while performing network activities (e.g., browsing, gaming, or pinging a server).
- To **stop capturing**, click the **Stop** (🛑) button.

---

## **Step 4: Filter Packets by Port Number**

### **A. Basic Port Filters**

| **Filter**        | **Description**                         |
| ----------------- | --------------------------------------- |
| `tcp.port == 80`  | Shows **TCP traffic on port 80 (HTTP)** |
| `udp.port == 53`  | Shows **UDP traffic on port 53 (DNS)**  |
| `tcp.port == 443` | Shows **HTTPS (SSL/TLS) traffic**       |
| `tcp.port == 22`  | Shows **SSH traffic**                   |

**Example:**

- To see all **HTTP traffic**, type `tcp.port == 80` in the filter bar and press **Enter**.

### **B. Advanced Filters**

| **Filter**                  | **Description**                             |
| --------------------------- | ------------------------------------------- |
| `tcp.srcport == 80`         | Shows traffic **from source port 80**       |
| `tcp.dstport == 3389`       | Shows traffic **going to port 3389 (RDP)**  |
| `tcp.port in {80 443 8080}` | Shows traffic on **ports 80, 443, or 8080** |

---

## **Step 5: Analyze Port-Based Traffic**

### **A. Understanding Columns**

- **Source Port (`srcport`)** – Port used by the sender.
- **Destination Port (`dstport`)** – Port used by the receiver.
- **Protocol** – TCP/UDP.
- **Info** – Summary of the packet (e.g., `HTTP GET /`).

### **B. Example: Analyzing an HTTP Request**

1. Apply filter: `tcp.port == 80`
2. Look for packets with:
   - **Source Port:** Random high number (e.g., `54321`)
   - **Destination Port:** `80` (HTTP)
   - **Info:** `GET /index.html HTTP/1.1`

### **C. Example: Analyzing DNS (UDP Port 53)**

1. Apply filter: `udp.port == 53`
2. Check packets with:
   - **Source Port:** `53` (DNS server response)
   - **Destination Port:** `54321` (your device’s query)
   - **Info:** `Standard query A google.com`

---

## **Step 6: Save & Export Data**

1. **Save Capture File:**
   - **File → Save As** (`.pcapng` format).
2. **Export Specific Packets:**
   - Right-click → **Export Packet Dissections → As CSV**.

---

## **Common Use Cases**

| **Scenario**                | **Wireshark Filter**                        |
| --------------------------- | ------------------------------------------- |
| **Check if a port is open** | `tcp.port == <PORT>`                        |
| **Detect port scanning**    | `tcp.flags.syn == 1 and tcp.flags.ack == 0` |
| **Find malware C2 traffic** | `tcp.port == 4444` (Common Metasploit port) |
| **Monitor SSH connections** | `tcp.port == 22`                            |

---

## **Troubleshooting Tips**

- **No packets visible?**
  - Check if **promiscuous mode** is enabled (Capture → Options → ✔ Enable promiscuous mode).
- **Too much noise?**
  - Use stricter filters (e.g., `ip.addr == 192.168.1.1 && tcp.port == 80`).
- **Port not showing up?**
  - Verify the service is running (e.g., `netstat -ano | findstr :80` on Windows).

---

## **Conclusion**

- Wireshark helps **identify active ports**, **troubleshoot connectivity issues**, and **detect malicious traffic**.
- Key filters: `tcp.port`, `udp.port`, `tcp.srcport`, `tcp.dstport`.
- Always **save captures** for later analysis.
