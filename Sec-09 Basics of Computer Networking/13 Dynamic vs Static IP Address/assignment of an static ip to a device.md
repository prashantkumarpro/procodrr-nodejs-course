Let’s break down **static IP address assignment** step by step!

### **What is a Static IP?**

A **static IP** is a **fixed IP address** manually assigned to a device, instead of being automatically assigned by DHCP. It **never changes** unless you change it manually.

---

### **Example Scenario:**

Imagine you want to assign a static IP to a server in your home network.

- **Network:** `192.168.1.0/24`
- **Router IP:** `192.168.1.1`
- **DHCP Range:** `192.168.1.100 - 192.168.1.200`
- **Server IP:** `192.168.1.50` (static)

---

### **Step-by-Step Process:**

1. **Choose an IP Address:**  
   Pick an IP **outside the DHCP range** to avoid conflicts.  
   Example: Choose **`192.168.1.50`** (if DHCP assigns `192.168.1.100-200`).

2. **Access Device Settings:**  
   Go to the server or PC you want to assign the static IP.

3. **Configure IP Settings (Windows Example):**

- Open **Control Panel** → **Network & Internet** → **Network and Sharing Center**.
- Click **Change adapter settings**.
- Right-click your **network adapter** → **Properties**.
- Select **Internet Protocol Version 4 (TCP/IPv4)** → **Properties**.
- Choose **"Use the following IP address"** and fill in:
  - **IP Address:** `192.168.1.50`
  - **Subnet Mask:** `255.255.255.0`
  - **Default Gateway:** `192.168.1.1` (router’s IP)
  - **DNS Servers:** (e.g., `8.8.8.8`, `8.8.4.4` for Google DNS)

4. **Save & Apply Settings:**  
   Click **OK** → Close the settings.

5. **Verify the Connection:**

- Open **Command Prompt** → Type `ipconfig`.
- Check if the IP address is **correctly set**.
- Ping the router with `ping 192.168.1.1` to test connectivity.

---

### **Result:**

The device now **always uses `192.168.1.50`** and **won’t change**, even after reboots or reconnecting to the network!
