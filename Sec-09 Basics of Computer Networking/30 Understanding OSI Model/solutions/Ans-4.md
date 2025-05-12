A **modern home Wi-Fi router** typically implements **up to Layer 3 (Network Layer)** of the OSI model, with some limited functionality at **Layer 4 (Transport Layer)** for advanced features like **Quality of Service (QoS)** or **firewall rules**. Let’s break down what happens in the router when your data reaches it, and which parts of the router handle each layer.

---

### OSI Layers Implemented by a Home Wi-Fi Router

| Layer                  | Router Capability                                                        | Component Responsible           |
| ---------------------- | ------------------------------------------------------------------------ | ------------------------------- |
| **Layer 1: Physical**  | Converts data into electrical signals (wired) or radio waves (wireless). | Ethernet ports, Wi-Fi antennas. |
| **Layer 2: Data Link** | Encapsulates data into frames and handles MAC addressing.                | Switch chip, Wi-Fi chip.        |
| **Layer 3: Network**   | Routes packets between networks using IP addresses.                      | Router CPU, routing table.      |
| **Layer 4: Transport** | Limited functionality (e.g., QoS, firewall rules based on ports).        | Router CPU, firewall software.  |

---

### What Happens in the Router When Your Data Reaches It?

Let’s revisit the previous example where you search for a website on your laptop connected to your home Wi-Fi router. Here’s what happens step-by-step in the router:

---

#### **Step 1: Data Arrives at the Router**

- Your laptop sends data (e.g., an HTTP request) to the router as **radio waves** (Wi-Fi) or **electrical signals** (Ethernet).
- The router’s **Wi-Fi antenna** or **Ethernet port** receives the data.

---

#### **Step 2: Layer 1 - Physical Layer**

- **What Happens**: The router converts the incoming radio waves (Wi-Fi) or electrical signals (Ethernet) into **digital data**.
- **Component**:
  - **Wi-Fi Antenna**: Receives radio waves and converts them into digital signals.
  - **Ethernet Port**: Receives electrical signals and converts them into digital data.
- **Example**: The router’s Wi-Fi chip demodulates the radio waves into a Wi-Fi frame.

---

#### **Step 3: Layer 2 - Data Link Layer**

- **What Happens**: The router processes the **Wi-Fi frame** or **Ethernet frame**.
  - It checks the **destination MAC address** to confirm the frame is intended for it.
  - It strips the frame to extract the **IP packet**.
- **Component**:
  - **Switch Chip**: Handles MAC addressing and frame forwarding for wired connections.
  - **Wi-Fi Chip**: Handles MAC addressing and frame forwarding for wireless connections.
- **Example**: The router extracts the IP packet from the Wi-Fi frame.

---

#### **Step 4: Layer 3 - Network Layer**

- **What Happens**: The router processes the **IP packet**.
  - It checks the **destination IP address** (e.g., `93.184.216.34` for `example.com`).
  - It consults its **routing table** to determine the next hop (e.g., your ISP’s gateway).
  - It forwards the packet to the next hop.
- **Component**:
  - **Router CPU**: Handles IP routing and maintains the routing table.
- **Example**: The router forwards the IP packet to your ISP’s gateway.

---

#### **Step 5: Layer 4 - Transport Layer (Limited Functionality)**

- **What Happens**: The router may inspect the **Transport Layer header** (TCP/UDP) for advanced features.
  - **Quality of Service (QoS)**: Prioritizes certain types of traffic (e.g., video streaming over file downloads).
  - **Firewall Rules**: Blocks or allows traffic based on port numbers (e.g., blocking port 22 for SSH).
- **Component**:
  - **Router CPU**: Executes firewall and QoS rules.
- **Example**: The router prioritizes your HTTP request over other traffic using QoS.

---

#### **Step 6: Data Leaves the Router**

- The router encapsulates the IP packet into a new frame (e.g., Ethernet frame for wired connections or another Wi-Fi frame for wireless connections).
- The frame is converted into **electrical signals** (for Ethernet) or **radio waves** (for Wi-Fi) and transmitted to the next node (e.g., your ISP’s gateway).

---

### Summary of Router’s Role

| Layer                  | Router’s Role                                                            | Component Responsible          |
| ---------------------- | ------------------------------------------------------------------------ | ------------------------------ |
| **Layer 1: Physical**  | Converts incoming signals (radio waves or electrical) into digital data. | Wi-Fi antenna, Ethernet port.  |
| **Layer 2: Data Link** | Processes frames, checks MAC addresses, and extracts IP packets.         | Switch chip, Wi-Fi chip.       |
| **Layer 3: Network**   | Routes IP packets to the next hop using the routing table.               | Router CPU, routing table.     |
| **Layer 4: Transport** | Applies QoS and firewall rules based on port numbers.                    | Router CPU, firewall software. |

---

### Key Points to Remember

1. **Router’s Primary Role**: A home Wi-Fi router primarily operates at **Layer 3 (Network Layer)** to route packets between networks. It also handles **Layer 2 (Data Link Layer)** for local network communication and **Layer 1 (Physical Layer)** for signal conversion.

2. **Limited Layer 4 Functionality**: While routers can inspect Transport Layer headers for QoS and firewall rules, they do not fully implement Layer 4 functionality like a dedicated firewall or load balancer.

3. **No Upper Layers (5-7)**: Routers do not handle **Session Layer (Layer 5)**, **Presentation Layer (Layer 6)**, or **Application Layer (Layer 7)**. These layers are handled by end devices (e.g., your laptop, the web server).

---

### Final Answer

A modern home Wi-Fi router implements **up to Layer 3 (Network Layer)** of the OSI model, with limited functionality at **Layer 4 (Transport Layer)** for QoS and firewall rules. Here’s what happens in the router when your data reaches it:

1. **Layer 1**: The router converts incoming radio waves (Wi-Fi) or electrical signals (Ethernet) into digital data.
2. **Layer 2**: The router processes the frame, checks the MAC address, and extracts the IP packet.
3. **Layer 3**: The router routes the IP packet to the next hop using its routing table.
4. **Layer 4**: The router may apply QoS or firewall rules based on port numbers.

The router’s **Wi-Fi antenna**, **Ethernet ports**, **switch chip**, **Wi-Fi chip**, and **router CPU** work together to handle these layers. However, the router does not handle **Layers 5-7**, which are managed by end devices like your laptop or the web server.
