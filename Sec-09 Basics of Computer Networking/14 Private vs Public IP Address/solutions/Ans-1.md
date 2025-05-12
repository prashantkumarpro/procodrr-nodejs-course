### **Is `206.84.236.32` a Public or Private IP?**

✅ **`206.84.236.32` is a Public IP** because it does not fall within any private IP address ranges.

---

## **🔹 How to Identify Public vs. Private IPs?**

### **1️⃣ Private IPs (Used Inside Local Networks)**

Private IPs are reserved for internal use within **home, office, or enterprise networks**. They are **not routable** on the public internet and must go through **NAT (Network Address Translation)** to access external networks.

🔸 **Private IP Address Ranges (Defined by RFC 1918 & RFC 6598):**  
| IP Range | Subnet Mask | Used in |
|----------|------------|---------|
| `10.0.0.0` – `10.255.255.255` | `255.0.0.0` ( /8 ) | Large enterprises, ISPs |
| `172.16.0.0` – `172.31.255.255` | `255.240.0.0` ( /12 ) | Medium-sized networks |
| `192.168.0.0` – `192.168.255.255` | `255.255.0.0` ( /16 ) | Home & small office networks |
| `100.64.0.0` – `100.127.255.255` | `255.192.0.0` ( /10 ) | CGNAT (Used by ISPs to share IPs) |

**🔹 Example Private IPs:**

- Home Wi-Fi: `192.168.1.1` (Router) and `192.168.1.100` (Phone)
- Office network: `10.0.0.10`, `10.0.0.20`
- ISP CGNAT: `100.70.50.25`

🛑 **Devices with private IPs cannot be directly accessed from the internet.**

---

### **2️⃣ Public IPs (Used on the Internet)**

Public IPs are **globally routable** and assigned by ISPs (Internet Service Providers) to **routers, servers, or cloud resources**. They can be accessed from anywhere on the internet.

✅ **Any IP address NOT in the private ranges above is a public IP.**

**🔹 Example Public IPs:**

- Google DNS: `8.8.8.8`
- Cloudflare DNS: `1.1.1.1`
- Example of ISP-assigned public IP: `206.84.236.32` (this is a public IP)

📌 **How to Check Your Public IP?**

1. **Google it:** Search **"What is my IP?"**
2. **Check your router’s WAN IP** in the admin panel.

---

## **🔹 Key Differences Between Public & Private IPs**

| Feature         | Private IP                                | Public IP                     |
| --------------- | ----------------------------------------- | ----------------------------- |
| **Scope**       | Used inside local networks                | Used on the internet          |
| **Access**      | Not directly accessible from the internet | Can be accessed from anywhere |
| **Security**    | More secure (behind NAT)                  | Exposed to internet threats   |
| **Assigned By** | Router (DHCP)                             | ISP                           |
| **Example**     | `192.168.1.10`, `10.0.0.5`                | `206.84.236.32`, `8.8.8.8`    |

---

### **🔹 Conclusion**

- **`206.84.236.32` is a Public IP** because it does not belong to any private range.
- **Private IPs are used inside networks**, while **public IPs are used on the internet**.
- To **host a server that is accessible on the internet**, you need a **public IP** or set up **port forwarding with NAT**.
