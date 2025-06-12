
# Developer Terminal Customization Guide

---

## 1. What is `PS1`?

- `PS1` is an environment variable in Linux/macOS/Git Bash that controls how your **terminal prompt looks**.
- It defines the text and colors shown before you type a command.
- You can customize it to show folder name, username, Git branch, colors, symbols, etc.

---

## 2. Where is `.bashrc` file?

- `.bashrc` is a **configuration file** that runs every time you open a new terminal session.
- It is usually located in your **home directory**:
  - On Linux/macOS: `~/.bashrc`
  - On Windows Git Bash: `~/.bashrc` (usually `C:\Users\<YourUser>\.bashrc`)
- The file is **hidden** because its name starts with a dot (`.`).

---

## 3. How to find and open `.bashrc`?

### Step-by-step:

1. **Open your terminal** (Git Bash, Terminal, etc.)

2. To check if `.bashrc` exists, type:
   ```bash
   ls -a ~
   ```
   Look for `.bashrc` in the list.

3. **If `.bashrc` is NOT found:**

   - You can **create it manually** by running:
     ```bash
     touch ~/.bashrc
     ```
   - Then open it to edit:
     ```bash
     nano ~/.bashrc
     ```
   - Add your customizations there.

4. Sometimes, Git Bash uses `.bash_profile` or `.profile` instead of `.bashrc`. Check them with:
   ```bash
   ls -a ~ | grep bash
   ```
   - If you find `.bash_profile`, you can either put your settings there, or create `.bashrc` and then add this line inside `.bash_profile` to load `.bashrc` automatically:
     ```bash
     if [ -f ~/.bashrc ]; then
       source ~/.bashrc
     fi
     ```

---

## 4. How to view your current prompt (`PS1`)?

In the terminal, type:
```bash
echo $PS1
```
This will print your current prompt setting.

---

## 5. How to change your prompt (`PS1`)?

### Example: Set a prompt showing current folder in dodger blue and Git branch in red with `=>` symbol

Add this line to your `.bashrc` file:
```bash
PS1='\[\033]0;\w\007\]\[\033[38;5;33m\]\W \[\033[31m\]`__git_ps1`\[\033[0m\] => '
```

### Explanation:
| Part                  | Meaning                                  |
|-----------------------|------------------------------------------|
| `\033]0;\w\007`       | Set terminal window title to current path |
| `\033[38;5;33m`       | Dodger blue text color (folder name)    |
| `\W`                  | Show current folder name only             |
| `\033[31m`            | Red text color (Git branch)              |
| `` `__git_ps1` ``     | Show current Git branch (like `(main)`) |
| `\033[0m`             | Reset colors to default                   |
| `=>`                  | Prompt symbol                            |

---

## 6. How to add aliases?

Aliases let you create shortcuts for commands.

Example: Add these lines at the bottom of your `.bashrc`
```bash
alias reload='source ~/.bashrc'        # Reload your bash config easily
alias c='clear'                        # Clear terminal screen fast
alias clr='clear && source ~/.bashrc' # Clear screen and reload config
```

---

## 7. How to save and apply changes?

### Steps:

1. After editing `.bashrc` in `nano`:
   - Press `Ctrl + O` to save
   - Press `Enter` to confirm
   - Press `Ctrl + X` to exit editor

2. To apply changes **without restarting the terminal**, run:
   ```bash
   source ~/.bashrc
   ```
   or use your new alias:
   ```bash
   reload
   ```

---

## 8. Full Example `.bashrc` snippet to copy-paste

```bash
# Custom prompt: folder in dodger blue, git branch in red, prompt symbol =>
PS1='\[\033]0;\w\007\]\[\033[38;5;33m\]\W \[\033[31m\]`__git_ps1`\[\033[0m\] => '

# Aliases for productivity
alias reload='source ~/.bashrc'
alias c='clear'
alias clr='clear && source ~/.bashrc'
```

---

## 9. Bonus: How to get Git branch prompt working?

- Make sure you have `git` installed.
- You need the `git-prompt.sh` script to show git branch info in prompt.
- Usually, it comes with Git for Linux/macOS/Git Bash.
- To enable it, add this to your `.bashrc` **above** your PS1 line:
  ```bash
  source /usr/share/git/completion/git-prompt.sh
  ```
- On Windows Git Bash, the path might be:
  ```bash
  source /usr/share/git/git-prompt.sh
  ```
- If unsure, search where `git-prompt.sh` is located or install Git completion scripts.

---

## 10. Quick commands summary

| Action                     | Command                  |
|----------------------------|--------------------------|
| Open `.bashrc` to edit     | `nano ~/.bashrc`         |
| Save and exit nano         | `Ctrl + O`, then `Ctrl + X` |
| Apply `.bashrc` changes    | `source ~/.bashrc`       |
| Show current prompt        | `echo $PS1`              |
| List all files incl. hidden| `ls -a ~`                |

---

# 🎉 You’re all set!

Feel free to ask if you want help with:

- More prompt customization  
- Custom aliases for Git, Node.js, npm, Docker, etc.  
- Tips on terminal productivity and shortcuts

Happy coding! 🚀
