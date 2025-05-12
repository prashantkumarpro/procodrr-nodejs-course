### SFTP (SSH File Transfer Protocol)

**SFTP (SSH File Transfer Protocol)** is a secure file transfer protocol that provides file access, transfer, and management over a reliable data stream, typically over **SSH (Secure Shell)**. Unlike **FTP (File Transfer Protocol)**, which transmits data in plaintext, SFTP encrypts both the data and the commands, ensuring secure communication.

---

### Key Features of SFTP

1. **Security**: Encrypts all data and commands using SSH.
2. **File Management**: Supports operations like uploading, downloading, renaming, and deleting files.
3. **Platform Independence**: Works on Linux, macOS, and Windows (with tools like WinSCP or PuTTY’s `psftp`).
4. **Resume Support**: Allows interrupted transfers to be resumed.
5. **Directory Navigation**: Enables browsing and navigating remote directories.

---

### How SFTP Works

1. **Connection Establishment**:

   - The client connects to the SFTP server on port 22 (default SSH port).
   - The server and client negotiate encryption algorithms and exchange keys.

2. **Authentication**:

   - The client authenticates using a username and password or SSH keys.

3. **File Transfer and Management**:

   - The client can upload, download, rename, delete, and manage files on the remote server.

4. **Session Termination**:
   - The session ends when the client disconnects or the connection is closed.

---

### SFTP Command Syntax

The basic syntax for the `sftp` command is:

```bash
sftp [options] user@host
```

- **user@host**: The username and hostname (or IP address) of the remote server.
- **options**: Additional flags to customize the behavior of the `sftp` command.

---

### Common SFTP Commands

| Command          | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `ls`             | Lists files and directories in the remote directory.          |
| `cd`             | Changes the remote directory.                                 |
| `pwd`            | Prints the current remote directory.                          |
| `get`            | Downloads a file from the remote server to the local machine. |
| `put`            | Uploads a file from the local machine to the remote server.   |
| `rm`             | Deletes a file on the remote server.                          |
| `mkdir`          | Creates a directory on the remote server.                     |
| `rmdir`          | Deletes a directory on the remote server.                     |
| `rename`         | Renames a file or directory on the remote server.             |
| `exit` or `quit` | Closes the SFTP session.                                      |

---

### Examples of SFTP Usage

#### **1. Connect to a Remote Server**

- Connect to a remote server using SFTP:
  ```bash
  sftp user@192.168.1.100
  ```
  - Enter your password when prompted.

#### **2. List Files on the Remote Server**

- List files in the remote directory:
  ```bash
  sftp> ls
  ```

#### **3. Download a File from the Remote Server**

- Download a file from the remote server to the local machine:
  ```bash
  sftp> get remote_file.txt
  ```
  - The file will be downloaded to the current local directory.

#### **4. Upload a File to the Remote Server**

- Upload a file from the local machine to the remote server:
  ```bash
  sftp> put local_file.txt
  ```
  - The file will be uploaded to the current remote directory.

#### **5. Change the Remote Directory**

- Change the remote directory to `/home/user/documents`:
  ```bash
  sftp> cd /home/user/documents
  ```

#### **6. Create a Directory on the Remote Server**

- Create a new directory on the remote server:
  ```bash
  sftp> mkdir new_folder
  ```

#### **7. Delete a File on the Remote Server**

- Delete a file on the remote server:
  ```bash
  sftp> rm old_file.txt
  ```

#### **8. Rename a File on the Remote Server**

- Rename a file on the remote server:
  ```bash
  sftp> rename old_name.txt new_name.txt
  ```

#### **9. Exit the SFTP Session**

- Close the SFTP session:
  ```bash
  sftp> exit
  ```

---

### Using SFTP on Windows

Windows does not have a built-in SFTP client, but you can use tools like **WinSCP** or **PuTTY’s `psftp`**.

#### **Using WinSCP**

1. Download and install WinSCP from [https://winscp.net](https://winscp.net).
2. Open WinSCP and enter the remote server’s details (hostname, username, password).
3. Use the graphical interface to transfer and manage files.

#### **Using PuTTY’s `psftp`**

1. Download PuTTY from [https://www.putty.org](https://www.putty.org).
2. Use the `psftp` command in the Command Prompt or PowerShell:
   ```bash
   psftp user@192.168.1.100
   ```
3. Use the same commands as the `sftp` client (e.g., `get`, `put`, `ls`).

---

### Example: Transferring Files Using SFTP

#### **Step 1: Connect to the Remote Server**

- Connect to the remote server using SFTP:
  ```bash
  sftp user@192.168.1.100
  ```

#### **Step 2: Navigate the Remote Directory**

- List files in the remote directory:
  ```bash
  sftp> ls
  ```
- Change to the `documents` directory:
  ```bash
  sftp> cd documents
  ```

#### **Step 3: Download a File**

- Download a file named `report.pdf`:
  ```bash
  sftp> get report.pdf
  ```

#### **Step 4: Upload a File**

- Upload a file named `notes.txt`:
  ```bash
  sftp> put notes.txt
  ```

#### **Step 5: Exit the Session**

- Close the SFTP session:
  ```bash
  sftp> exit
  ```

---

### Best Practices for Using SFTP

1. **Use SSH Keys for Authentication**:

   - Avoid using passwords and instead use SSH keys for secure and passwordless authentication.

2. **Enable Compression**:

   - Use the `-C` option to compress data during transfer:
     ```bash
     sftp -C user@192.168.1.100
     ```

3. **Resume Interrupted Transfers**:

   - Use the `-r` option to resume interrupted transfers:
     ```bash
     sftp -r user@192.168.1.100
     ```

4. **Verify Transfers**:
   - After transferring files, verify their integrity using checksums (e.g., `md5sum` or `sha256sum`).

---

### Summary

- **SFTP** is a secure and versatile protocol for file transfer and management over SSH.
- It supports operations like uploading, downloading, renaming, and deleting files.
- Common commands include `get`, `put`, `ls`, `cd`, and `rm`.
- On Windows, you can use tools like **WinSCP** or **PuTTY’s `psftp`** for SFTP.

SFTP is a reliable and secure choice for transferring and managing files on remote servers.
