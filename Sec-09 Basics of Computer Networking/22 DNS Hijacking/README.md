# **DNS Hijacking: Definition and Overview**

**DNS hijacking** is a type of cyberattack where an attacker redirects DNS (Domain Name System) queries to a malicious server instead of the legitimate DNS server. This allows the attacker to control the DNS resolution process and redirect users to fake or malicious websites, even if they enter the correct domain name.

---

## **How DNS Hijacking Works**

1. **Intercepting DNS Queries**:

   - The attacker intercepts DNS queries sent by a user's device to the DNS server.
   - This can be done through malware, compromised routers, or man-in-the-middle (MITM) attacks.

2. **Redirecting to a Malicious Server**:

   - Instead of forwarding the query to the legitimate DNS server, the attacker redirects it to a malicious DNS server under their control.

3. **Spoofing DNS Responses**:

   - The malicious DNS server responds with a fake IP address, pointing the user to a phishing site or a site hosting malware.

4. **User Access**:
   - The user is redirected to the attacker's site, which may look identical to the legitimate site, allowing the attacker to steal sensitive information (e.g., login credentials, credit card details).

---

## **Types of DNS Hijacking**

1. **Local DNS Hijacking**:

   - Malware on the user's device modifies the DNS settings to point to a malicious DNS server.
   - Example: A Trojan horse changes the DNS settings on a Windows PC.

2. **Router DNS Hijacking**:

   - The attacker compromises the router and changes its DNS settings.
   - Example: A hacker exploits a vulnerability in the router's firmware to redirect DNS queries.

3. **Man-in-the-Middle (MITM) Attack**:

   - The attacker intercepts DNS queries between the user and the DNS server.
   - Example: A hacker uses ARP spoofing to redirect traffic through their device.

4. **Compromised DNS Server**:
   - The attacker gains control of a legitimate DNS server and modifies its records.
   - Example: A hacker breaches a DNS provider's infrastructure and changes DNS records.

---

## **How to Perform DNS Hijacking (For Educational Purposes Only)**

Performing DNS hijacking for educational purposes can help you understand how it works and how to protect against it. However, it’s important to note that performing DNS hijacking on systems or networks without explicit permission is **illegal and unethical**. This guide is strictly for educational purposes and should only be used in a controlled environment (e.g., your own local network or virtual machines).

## 1: Local DNS Spoofing

Let’s simulate a **Local DNS Spoofing** attack with a small **hosts file manipulation** (for learning purposes only).

🔧 **Step 1: Modify the Hosts File (on your machine)**  
On Windows:

1. Open Notepad as **Administrator**.
2. Open the **hosts file**:

```
C:\Windows\System32\drivers\etc\hosts
```

3. Add a fake entry:

```
127.0.0.1 www.facebook.com
```

4. Save the file.

🔧 **Step 2: Test the Hijack**

1. Open a browser.
2. Type **`www.facebook.com`**.
3. It will redirect to **localhost (127.0.0.1)** instead of the real site.

---

## 2: Real-World DNS Hijacking Attack (with Tools)

### 2 Set Up a Controlled Environment

- Use a virtual machine (VM) or a separate physical machine to avoid affecting your main system.
- Tools like **VirtualBox** or **VMware** can be used to create a virtual lab environment.

---

#### **2. Install Required Tools**

You’ll need tools to simulate DNS hijacking. Some commonly used tools include:

- **Ettercap**: A network interception tool for MITM (Man-in-the-Middle) attacks.
- **dnschef**: A DNS proxy tool for spoofing DNS responses.
- **Wireshark**: A network analysis tool to monitor DNS traffic.

Install these tools on your system:

- **On Linux**:
  ```bash
  sudo apt update
  sudo apt install ettercap dnschef wireshark
  ```
- **On Windows**:
  - Download and install Wireshark from https://www.wireshark.org/.
  - Use a Linux VM or Windows Subsystem for Linux (WSL) for tools like Ettercap and dnschef.

---

#### **3. Simulate DNS Hijacking Using dnschef**

**dnschef** is a DNS proxy that allows you to spoof DNS responses. Here’s how to use it:

1. **Start dnschef**:

   - Open a terminal and run the following command:
     ```bash
     sudo dnschef --fakeip 192.168.1.100 --interface 127.0.0.1
     ```
     - `--fakeip 192.168.1.100`: The IP address to which all DNS queries will be redirected.
     - `--interface 127.0.0.1`: The interface to listen on (use your system's IP address if testing on another device).

2. **Change DNS Settings**:

   - On the target machine (your VM or another device), change the DNS server to your local system's IP address.
     - **Windows**:
       1. Go to **Control Panel** > **Network and Sharing Center** > **Change adapter settings**.
       2. Right-click your network adapter and select **Properties**.
       3. Select **Internet Protocol Version 4 (TCP/IPv4)** and click **Properties**.
       4. Set the DNS server to your local system's IP address.
     - **Linux**:
       1. Edit the `/etc/resolv.conf` file:
          ```bash
          nameserver <your-local-ip>
          ```

3. **Test DNS Hijacking**:
   - On the target machine, try to visit a website (e.g., `example.com`).
   - Instead of the real IP address, the browser will be redirected to `192.168.1.100` (or the fake IP you specified).

---

#### **4. Simulate DNS Hijacking Using Ettercap**

**Ettercap** is a more advanced tool for performing MITM attacks, including DNS hijacking.

1. **Start Ettercap**:

   - Open a terminal and run:
     ```bash
     sudo ettercap -G
     ```

   ```
   - This opens the graphical interface.

   ```

2. **Scan for Targets**:

   - Go to **Hosts** > **Scan for hosts**.
   - Once the scan is complete, go to **Hosts** > **Host list** to see the available devices.

3. **Select Targets**:

   - Choose the target device (e.g., your VM) and add it to **Target 1**.
   - Choose the gateway (router) and add it to **Target 2**.

4. **Start MITM Attack**:

   - Go to **Mitm** > **ARP poisoning**.
   - Enable **Sniff remote connections**.

5. **Spoof DNS Responses**:

   - Go to **Plugins** > **Manage plugins**.
   - Enable the **dns_spoof** plugin.
   - Edit the DNS spoofing configuration file (`/etc/ettercap/etter.dns` on Linux) to map domain names to your fake IP address:
     ```
     example.com A 192.168.1.100
     * A 192.168.1.100
     ```

6. **Test DNS Hijacking**:
   - On the target machine, try to visit `example.com`.
   - You will be redirected to `192.168.1.100`.

---

#### **5. Monitor DNS Traffic with Wireshark**

- Use **Wireshark** to monitor DNS traffic and verify that DNS queries are being redirected.
  1. Open Wireshark and start capturing traffic on your network interface.
  2. Filter for DNS traffic by entering `dns` in the filter bar.
  3. Observe the DNS queries and responses to confirm the hijacking.

---

### **6. Clean Up**

After testing, revert all changes to avoid unintended consequences:

- Restore the DNS settings on the target machine.
- Stop any running tools (e.g., dnschef, Ettercap).
- Restart the network services or devices if necessary.

---

### **Example Scenario**

1. You set up a virtual machine (VM) as the target.
2. On your host machine, you start **dnschef** with the command:
   ```bash
   sudo dnschef --fakeip 192.168.1.100 --interface 192.168.1.1
   ```
3. On the VM, you change the DNS server to `192.168.1.1` (your host machine's IP).
4. When you try to visit `example.com` on the VM, you are redirected to `192.168.1.100`.

---

## 🛡️ **How to Protect Against DNS Hijacking:**

1. **Use a Secure DNS Provider:** Like **Cloudflare (1.1.1.1)** or **Google DNS (8.8.8.8)**.
2. **Encrypt DNS Queries:** Use **DNS over HTTPS (DoH)** or **DNS over TLS (DoT)**.
3. **Secure Your Router:** Change the default admin password and keep firmware updated.
4. **Use a VPN:** Encrypts your entire connection, including DNS requests.
5. **Scan for Malware:** Some malware changes local DNS settings.

Would you like me to guide you through using **Bettercap** in a virtual lab? Or help you set up a **DNS-over-HTTPS** configuration? Let me know! 🚀

## **Important Notes**

- **Legal and Ethical Use**: Only perform DNS hijacking in a controlled environment with explicit permission.
- **Educational Purpose**: This guide is for learning how DNS hijacking works and how to protect against it.
- **Security Implications**: DNS hijacking can be used maliciously, so always use this knowledge responsibly.

By following these steps, you can simulate DNS hijacking in a controlled environment and better understand how to detect and prevent it.
