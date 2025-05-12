Changing DNS servers locally can improve your internet speed, security, and privacy. You can configure your device to use a specific DNS server (e.g., Google DNS, Cloudflare DNS) instead of the default DNS server provided by your ISP. Below are step-by-step instructions for changing DNS servers on various operating systems and devices.

---

### **1. Changing DNS Servers on Windows**

#### **Windows 10/11**:

1. Open **Control Panel**:

   - Press `Win + R`, type `control`, and press Enter.

2. Go to **Network and Sharing Center**:

   - Click on **Network and Internet** > **Network and Sharing Center**.

3. Change Adapter Settings:

   - Click on **Change adapter settings** in the left-hand menu.

4. Open Network Adapter Properties:

   - Right-click your active network connection (e.g., Ethernet or Wi-Fi) and select **Properties**.

5. Select Internet Protocol Version 4 (TCP/IPv4):

   - In the list, select **Internet Protocol Version 4 (TCP/IPv4)** and click **Properties**.

6. Manually Set DNS Servers:

   - Select **Use the following DNS server addresses**.
   - Enter the preferred and alternate DNS server addresses:
     - **Google DNS**: `8.8.8.8` and `8.8.4.4`
     - **Cloudflare DNS**: `1.1.1.1` and `1.0.0.1`
   - Click **OK** to save the changes.

7. Repeat for IPv6 (Optional):

   - Select **Internet Protocol Version 6 (TCP/IPv6)** and repeat the process for IPv6 DNS servers:
     - **Google DNS**: `2001:4860:4860::8888` and `2001:4860:4860::8844`
     - **Cloudflare DNS**: `2606:4700:4700::1111` and `2606:4700:4700::1001`

8. Restart Your Connection:
   - Restart your network adapter or reboot your computer for the changes to take effect.

---

### **2. Changing DNS Servers on macOS**

#### **macOS Ventura and Later**:

1. Open **System Settings**:

   - Click the Apple menu and select **System Settings**.

2. Go to **Network**:

   - Select **Network** from the sidebar.

3. Select Your Network Connection:

   - Click on your active network connection (e.g., Wi-Fi or Ethernet).

4. Open DNS Settings:

   - Click **Details** next to your network connection.
   - Go to the **DNS** tab.

5. Add DNS Servers:

   - Click the **+** button to add DNS servers:
     - **Google DNS**: `8.8.8.8` and `8.8.4.4`
     - **Cloudflare DNS**: `1.1.1.1` and `1.0.0.1`
   - Remove any existing DNS servers if necessary.

6. Apply Changes:

   - Click **OK** and then **Apply**.

7. Restart Your Connection:
   - Disconnect and reconnect to your network for the changes to take effect.

---

### **3. Changing DNS Servers on Linux**

#### **Ubuntu/Debian (Using Network Manager)**:

1. Open **Settings**:

   - Click on the network icon in the top-right corner and select **Settings**.

2. Select Your Network Connection:

   - Click on the gear icon next to your active network connection.

3. Open IPv4 Settings:

   - Go to the **IPv4** tab.

4. Set DNS Servers:

   - Change the **DNS** field to **Automatic (Off)**.
   - Enter the DNS server addresses separated by commas:
     - **Google DNS**: `8.8.8.8, 8.8.4.4`
     - **Cloudflare DNS**: `1.1.1.1, 1.0.0.1`

5. Apply Changes:
   - Click **Apply** and restart your network connection.

#### **Command Line (Using `resolv.conf`)**:

1. Edit the `resolv.conf` file:

   - Open a terminal and run:
     ```bash
     sudo nano /etc/resolv.conf
     ```

2. Add DNS Servers:

   - Add the following lines:
     ```
     nameserver 8.8.8.8
     nameserver 8.8.4.4
     ```
   - For Cloudflare DNS:
     ```
     nameserver 1.1.1.1
     nameserver 1.0.0.1
     ```

3. Save and Exit:

   - Press `Ctrl + X`, then `Y`, and `Enter` to save and exit.

4. Restart Networking:
   - Restart your network service:
     ```bash
     sudo systemctl restart networking
     ```

---

### **4. Changing DNS Servers on Android**

#### **Android 9 and Later**:

1. Open **Settings**:

   - Go to **Settings** > **Network & Internet**.

2. Select Wi-Fi:

   - Tap on **Wi-Fi** and long-press your connected network.

3. Modify Network:

   - Tap **Modify Network** or the gear icon.

4. Advanced Options:

   - Tap **Advanced Options** and change **IP settings** to **Static**.

5. Set DNS Servers:

   - Enter the DNS server addresses:
     - **Google DNS**: `8.8.8.8` and `8.8.4.4`
     - **Cloudflare DNS**: `1.1.1.1` and `1.0.0.1`

6. Save Changes:
   - Tap **Save** to apply the changes.

---

### **5. Changing DNS Servers on iOS**

#### **iOS 14 and Later**:

1. Open **Settings**:

   - Go to **Settings** > **Wi-Fi**.

2. Select Your Network:

   - Tap the **i** icon next to your connected Wi-Fi network.

3. Configure DNS:

   - Scroll down and tap **Configure DNS**.
   - Change **Automatic** to **Manual**.

4. Add DNS Servers:

   - Tap **Add Server** and enter the DNS server addresses:
     - **Google DNS**: `8.8.8.8` and `8.8.4.4`
     - **Cloudflare DNS**: `1.1.1.1` and `1.0.0.1`

5. Save Changes:
   - Tap **Save** to apply the changes.

---

### **6. Changing DNS Servers on a Router**

Changing DNS servers on your router will apply the changes to all devices connected to the network.

1. Access Your Router:

   - Open a browser and enter your router's IP address (e.g., `192.168.1.1` or `192.168.0.1`).

2. Log In:

   - Enter your router's username and password (check the router's manual if you don't know these).

3. Find DNS Settings:

   - Look for **DNS settings** under **WAN**, **Internet**, or **Network** settings.

4. Set DNS Servers:

   - Enter the DNS server addresses:
     - **Google DNS**: `8.8.8.8` and `8.8.4.4`
     - **Cloudflare DNS**: `1.1.1.1` and `1.0.0.1`

5. Save and Reboot:
   - Save the changes and reboot your router.

---

### **7. Popular Public DNS Servers**

| **Provider**   | **IPv4 DNS**                       | **IPv6 DNS**                                   |
| -------------- | ---------------------------------- | ---------------------------------------------- |
| **Google DNS** | `8.8.8.8`, `8.8.4.4`               | `2001:4860:4860::8888`, `2001:4860:4860::8844` |
| **Cloudflare** | `1.1.1.1`, `1.0.0.1`               | `2606:4700:4700::1111`, `2606:4700:4700::1001` |
| **OpenDNS**    | `208.67.222.222`, `208.67.220.220` | N/A                                            |

---

### **Conclusion**

Changing DNS servers locally can improve your internet experience by enhancing speed, security, and privacy. Whether you're using Windows, macOS, Linux, Android, iOS, or a router, the process is straightforward and can be done in a few simple steps. By using trusted DNS providers like Google DNS or Cloudflare DNS, you can ensure a more reliable and secure browsing experience.
