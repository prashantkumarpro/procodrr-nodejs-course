### **Querying DNS Records Using `nslookup` and `dig`**

`nslookup` and `dig` are command-line tools used to query DNS records. They are available on most operating systems, including Windows, Linux, and macOS. Below is a detailed explanation of how to use these tools to query various DNS record types.

---

### **1. Using `nslookup`**

`nslookup` is a simple and widely used tool for querying DNS records. It is available on Windows, Linux, and macOS.

#### **Basic Syntax**:

```bash
nslookup <domain> [DNS server]
```

#### **Querying Different DNS Record Types**:

1. **A Record (IPv4 Address)**:

   - Query the A record for a domain:
     ```bash
     nslookup example.com
     ```
   - → Returns the IPv4 address of `example.com`.

   - Example Output:
     ```
     Name:    example.com
     Address: 93.184.216.34
     ```

2. **AAAA Record (IPv6 Address)**:

   - Query the AAAA record for a domain:
     ```bash
     nslookup -query=AAAA example.com
     ```
   - Example Output:
     ```
     Name:    example.com
     Address: 2606:2800:220:1:248:1893:25c8:1946
     ```

3. **MX Record (Mail Exchange)**:

   - Query the MX record for a domain:
     ```bash
     nslookup -query=MX example.com
     ```
   - Lists the mail servers for `example.com`.

   - Example Output:
     ```
     example.com    mail exchanger = 10 mail.example.com.
     ```

4. **CNAME Record (Canonical Name)**:

   - Query the CNAME record for a domain:
     ```bash
     nslookup -query=CNAME www.example.com
     ```
   - Example Output:
     ```
     www.example.com    canonical name = example.com.
     ```

5. **TXT Record (Text Record)**:

   - Query the TXT record for a domain:

     ```bash
     nslookup -query=TXT example.com
     ```

   - → Shows text records like SPF, DKIM, or site verifications.

   - Example Output:
     ```
     example.com    text = "v=spf1 mx -all"
     ```

6. **NS Record (Name Server)**:

   - Query the NS record for a domain:
     ```bash
     nslookup -query=NS example.com
     ```
   - Example Output:
     ```
     example.com    nameserver = ns1.example.com.
     example.com    nameserver = ns2.example.com.
     ```

7. **PTR Record (Reverse DNS Lookup)**:

   - Query the PTR record for an IP address:
     ```bash
     nslookup 93.184.216.34
     ```
   - Example Output:
     ```
     34.216.184.93.in-addr.arpa    name = example.com.
     ```

8. **Specific DNS Server Lookup**:

```bash
nslookup example.com 8.8.8.8
```

→ Queries Google’s DNS server (`8.8.8.8`).

---

### **2. Using `dig`**

`dig` (Domain Information Groper) is a more powerful and flexible tool for querying DNS records. It is commonly used on Linux and macOS but can also be installed on Windows.

#### **Basic Syntax**:

```bash
dig <domain> [record type] [@DNS server]
```

#### **Querying Different DNS Record Types**:

1. **A Record (IPv4 Address)**:

   - Query the A record for a domain:

     ```bash
     dig example.com A
     ```

   - → Returns the IPv4 address (in the **ANSWER SECTION**).

   - Example Output:
     ```
     ;; ANSWER SECTION:
     example.com.    3600    IN    A    93.184.216.34
     ```

2. **AAAA Record (IPv6 Address)**:

   - Query the AAAA record for a domain:
     ```bash
     dig example.com AAAA
     ```
   - Example Output:
     ```
     ;; ANSWER SECTION:
     example.com.    3600    IN    AAAA    2606:2800:220:1:248:1893:25c8:1946
     ```

3. **MX Record (Mail Exchange)**:

   - Query the MX record for a domain:

     ```bash
     dig example.com MX
     ```

   - → Lists mail servers with their priorities.

   - Example Output:
     ```
     ;; ANSWER SECTION:
     example.com.    3600    IN    MX    10 mail.example.com.
     ```

4. **CNAME Record (Canonical Name)**:

   - Query the CNAME record for a domain:

     ```bash
     dig www.example.com CNAME
     ```

   - → Shows if `www.example.com` is an alias.

   - Example Output:
     ```
     ;; ANSWER SECTION:
     www.example.com.    3600    IN    CNAME    example.com.
     ```

5. **TXT Record (Text Record)**:

   - Query the TXT record for a domain:
     ```bash
     dig example.com TXT
     ```
   - → Useful for finding verification or policy records.

   - Example Output:
     ```
     ;; ANSWER SECTION:
     example.com.    3600    IN    TXT    "v=spf1 mx -all"
     ```

6. **NS Record (Name Server)**:

   - Query the NS record for a domain:
     ```bash
     dig example.com NS
     ```
   - Example Output:
     ```
     ;; ANSWER SECTION:
     example.com.    3600    IN    NS    ns1.example.com.
     example.com.    3600    IN    NS    ns2.example.com.
     ```

7. **PTR Record (Reverse DNS Lookup)**:

   - Query the PTR record for an IP address:

     ```bash
     dig -x 93.184.216.34
     ```

   - → Finds the domain name linked to an IP.

   - Example Output:
     ```
     ;; ANSWER SECTION:
     34.216.184.93.in-addr.arpa.    3600    IN    PTR    example.com.
     ```

8. **SOA Record (Start of Authority)**:

   - Query the SOA record for a domain:
     ```bash
     dig example.com SOA
     ```
   - Example Output:
     ```
     ;; ANSWER SECTION:
     example.com.    3600    IN    SOA    ns1.example.com. admin.example.com. 2023101001 3600 1800 1209600 86400
     ```

9. **ANY Record (All Records)**:
   - Query all DNS records for a domain:
     ```bash
     dig example.com ANY
     ```
   - Example Output:
     ```
     ;; ANSWER SECTION:
     example.com.    3600    IN    A    93.184.216.34
     example.com.    3600    IN    MX    10 mail.example.com.
     example.com.    3600    IN    NS    ns1.example.com.
     example.com.    3600    IN    NS    ns2.example.com.
     ```

---

### **3. Using a Specific DNS Server**

Both `nslookup` and `dig` allow you to specify a DNS server to query.

#### **Using `nslookup`**:

```bash
nslookup example.com 8.8.8.8
```

- This queries the A record for `example.com` using Google's public DNS server (`8.8.8.8`).

#### **Using `dig`**:

```bash
dig example.com @8.8.8.8
```

- This queries the A record for `example.com` using Google's public DNS server (`8.8.8.8`).

---

### **4. Short and Clean Output with `dig`**

To get a short and clean output with `dig`, use the `+short` option:

```bash
dig example.com A +short
```

- Example Output:
  ```
  93.184.216.34
  ```

---

### **Summary**

| **Task**                       | **`nslookup` Command**                  | **`dig` Command**           |
| ------------------------------ | --------------------------------------- | --------------------------- |
| Query A Record                 | `nslookup example.com`                  | `dig example.com A`         |
| Query AAAA Record              | `nslookup -query=AAAA example.com`      | `dig example.com AAAA`      |
| Query MX Record                | `nslookup -query=MX example.com`        | `dig example.com MX`        |
| Query CNAME Record             | `nslookup -query=CNAME www.example.com` | `dig www.example.com CNAME` |
| Query TXT Record               | `nslookup -query=TXT example.com`       | `dig example.com TXT`       |
| Query NS Record                | `nslookup -query=NS example.com`        | `dig example.com NS`        |
| Query PTR Record (Reverse DNS) | `nslookup 93.184.216.34`                | `dig -x 93.184.216.34`      |
| Query SOA Record               | `nslookup -query=SOA example.com`       | `dig example.com SOA`       |
| Query ANY Record               | `nslookup -query=ANY example.com`       | `dig example.com ANY`       |
| Use a Specific DNS Server      | `nslookup example.com 8.8.8.8`          | `dig example.com @8.8.8.8`  |

---

### **Conclusion**

Both `nslookup` and `dig` are powerful tools for querying DNS records. `nslookup` is simpler and more user-friendly, while `dig` provides more detailed and flexible output. By mastering these tools, you can troubleshoot DNS issues, verify DNS configurations, and gain a deeper understanding of how DNS works.
