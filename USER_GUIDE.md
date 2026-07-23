# NocticAI: The Definitive Master Guide (Windows & Linux)

Welcome to the definitive master guide for NocticAI. This document is designed to be the ultimate reference for everything related to NocticAI, from the fundamental philosophies driving its development to granular, step-by-step instructions for power users on both Windows and Linux environments. 

By the end of this guide, you will master every stealth feature, fully understand the cryptographic security securing your data, and be able to deploy NocticAI seamlessly across multiple workflows.

---

## 1. Introduction & Philosophy

NocticAI was built on three core pillars:
1. **Absolute Privacy:** Your data must remain yours. No central servers parsing your prompts, no telemetry, and local-first encryption.
2. **Undetectable Presence:** In an era of invasive monitoring, an AI assistant should be a silent, invisible partner. NocticAI leaves no trace on your screen sharing or in your taskbar.
3. **Unrestricted Intelligence:** By supporting various models (OpenAI, Groq, Ollama), we ensure you are never locked into a single ecosystem.

This guide is separated into comprehensive operating system branches (Windows and Linux) followed by an exhaustive breakdown of every feature.

---

## 2. System Requirements

Before proceeding with the installation, ensure your system meets the following requirements:

### Minimum Requirements:
- **Processor:** 64-bit multi-core CPU (Intel/AMD)
- **RAM:** 4GB
- **Storage:** 500MB of free disk space
- **Network:** Broadband internet connection (for cloud APIs)

### Recommended Requirements (For Local Models & Whisper):
- **Processor:** 8-core CPU or higher
- **RAM:** 16GB or higher
- **GPU:** Dedicated GPU with at least 6GB VRAM (NVIDIA CUDA or AMD ROCm supported)
- **Storage:** NVMe SSD for fast local model loading

---

## 3. Windows Master Guide

The Windows environment provides deep integration capabilities for NocticAI's stealth and content protection features. This section covers everything from installation to managing Windows Defender.

### 3.1 Downloading NocticAI for Windows
1. Navigate to the official NocticAI website.
2. Go to the **Downloads** section.
3. Select the **Windows (64-bit)** option. This will download a `.exe` installer (e.g., `NocticAI-Setup-v1.x.x.exe`).
4. (Optional) Verify the SHA-256 checksum provided on the download page to ensure file integrity.

### 3.2 Step-by-Step Installation
1. Locate `NocticAI-Setup-v1.x.x.exe` in your Downloads folder.
2. Double-click the installer.
3. **User Account Control (UAC):** Windows will prompt you with a UAC window asking if you want to allow this app to make changes to your device. Click **Yes**.
4. **License Agreement:** Read the End User License Agreement (EULA) and accept it.
5. **Installation Path:** By default, it installs to `C:\Users\YourName\AppData\Local\Programs\NocticAI`. We recommend keeping this default path as it prevents system-wide permission issues.
6. **Start Menu & Desktop Shortcuts:** Choose whether to create shortcuts. (Note: For maximum stealth, you may choose to uncheck these and launch via the command line or a hidden shortcut).
7. Click **Install**. The process will take a few moments.
8. Once finished, check **Launch NocticAI** and click **Finish**.

### 3.3 Managing Antivirus/Windows Defender False Positives
Because NocticAI uses advanced OS-level hooks for stealth (like hiding from the Task Manager and intercepting keyboard shortcuts globally), Windows Defender or third-party antiviruses might flag it as a "Potentially Unwanted Program" (PUP) or a keylogger.

**To whitelist NocticAI in Windows Defender:**
1. Open the **Windows Security** app.
2. Navigate to **Virus & threat protection**.
3. Under **Virus & threat protection settings**, click **Manage settings**.
4. Scroll down to **Exclusions** and click **Add or remove exclusions**.
5. Click **Add an exclusion** and select **Folder**.
6. Navigate to `C:\Users\YourName\AppData\Local\Programs\NocticAI` and select the folder.
7. (Optional) Also exclude the app data folder located at `C:\Users\YourName\AppData\Roaming\NocticAI`.

### 3.4 Initial Setup & Permissions (Microphone, Screen)
Upon first launch on Windows, NocticAI requires certain permissions:
1. **Screen Capture API:** Windows might prompt you to allow NocticAI to capture the screen (used for the transparent OCR overlay). Accept this.
2. **Microphone Access:** If you plan to use Real-Time Voice Transcription, go to **Windows Settings > Privacy & security > Microphone** and ensure "Let desktop apps access your microphone" is turned ON for NocticAI.
3. **System Audio:** No extra setup is usually required for "Yours Mode" (capturing system audio), as it uses the Windows WASAPI loopback interface.

### 3.5 Advanced Windows Configuration
- **Run as Administrator:** For NocticAI to successfully hide from the Task Manager running as SYSTEM, you must run NocticAI as an Administrator. Right-click the shortcut -> Properties -> Compatibility -> Check "Run this program as an administrator".
- **Launch on Startup (Stealth):** To have NocticAI launch silently on boot, use the Windows Task Scheduler.
  1. Open **Task Scheduler**.
  2. Click **Create Task...**
  3. Name it "NocticAI_Silent".
  4. Check **Run with highest privileges**.
  5. Go to the **Triggers** tab, click **New**, and select **At log on**.
  6. Go to the **Actions** tab, click **New**, select **Start a program**, and point to the NocticAI executable, adding `--silent` in the arguments box.

---

## 4. Linux Master Guide

Linux gives power users complete control over how NocticAI operates. Because Linux environments vary wildly (Wayland vs X11, PulseAudio vs PipeWire), this section is highly detailed.

### 4.1 Downloading NocticAI for Linux
NocticAI offers several distribution formats:
- `.deb` (Debian, Ubuntu, Mint, Pop!_OS)
- `.rpm` (Fedora, RHEL, openSUSE)
- `.AppImage` (Universal portable executable)
- `AUR` package (Arch Linux, Manjaro)

### 4.2 Installation on Debian/Ubuntu-based Distributions
1. Download the `NocticAI-v1.x.x-amd64.deb` file.
2. Open your terminal and navigate to your download directory:
   ```bash
   cd ~/Downloads
   ```
3. Install the package using `dpkg` or `apt`:
   ```bash
   sudo apt install ./NocticAI-v1.x.x-amd64.deb
   ```
   *Using `apt` instead of `dpkg` automatically resolves any missing dependencies.*

### 4.3 Installation on Red Hat/Fedora-based Distributions
1. Download the `NocticAI-v1.x.x-x86_64.rpm` file.
2. In the terminal:
   ```bash
   cd ~/Downloads
   sudo dnf install ./NocticAI-v1.x.x-x86_64.rpm
   ```

### 4.4 Installation on Arch Linux (AUR)
If you are using Arch Linux or an Arch derivative (like Manjaro or EndeavourOS), NocticAI is available in the Arch User Repository (AUR).
Use your preferred AUR helper (e.g., `yay` or `paru`):
```bash
yay -S nocticai-bin
```

### 4.5 AppImage Usage (Universal)
If you prefer not to install it system-wide or use a different distro:
1. Download the `.AppImage` file.
2. Make it executable:
   ```bash
   chmod +x NocticAI-v1.x.x-x86_64.AppImage
   ```
3. Run it:
   ```bash
   ./NocticAI-v1.x.x-x86_64.AppImage
   ```

### 4.6 Wayland vs. X11 (Crucial for OCR and Ghost Typer)
Linux display servers handle security differently, which directly impacts NocticAI's features:

**X11 Users:**
- **Global Shortcuts:** Work natively out of the box.
- **Ghost Typer:** Uses `xdotool` or XTest extension seamlessly.
- **OCR Overlay:** Screen capture works universally across all windows.

**Wayland Users:**
- Wayland's strict security isolates windows. By default, apps cannot read global keystrokes or capture the screen without explicit permission via XDG Desktop Portals.
- **To enable Global Shortcuts (Ctrl+Alt+H, Ctrl+Alt+O):** NocticAI utilizes the generic `dbus` interface or the KDE/GNOME specific global shortcut portals. You may be prompted to allow the shortcut binding upon first run.
- **To enable Ghost Typer:** Wayland blocks simulated keyboard events. NocticAI implements a virtual `/dev/uinput` device. You must add your user to the `input` group:
  ```bash
  sudo usermod -aG input $USER
  ```
  *Reboot or log out/in for changes to take effect.*
- **To enable OCR:** Wayland requires PipeWire for screen capture. When you hit `Ctrl+Alt+O`, your desktop environment (GNOME/Plasma) will show a dialog asking to share your screen. To avoid being prompted every time, check "Remember this decision" if your portal supports it.

### 4.7 Permissions & Audio (PipeWire/PulseAudio)
For Real-Time Voice Transcription:
- NocticAI uses standard ALSA/PulseAudio APIs.
- **Yours Mode (System Audio Capture):** On PipeWire, NocticAI will create a monitor node. You can route any specific application's audio to NocticAI using graphical tools like `qpwgraph` or `Helvum`, giving you precise control over what the AI "hears" rather than capturing the whole system.

---

## 5. The Feature Arsenal (In-Depth Configuration & Use)

Now that NocticAI is installed, it is time to master its capabilities. This section explains not just what the features do, but exactly how to leverage them for maximum effectiveness.

### 5.1 Privacy & Stealth
NocticAI is the ultimate covert assistant.
- **The Global Stealth Shortcut (`Ctrl+Alt+H`)**: This is your panic button. Pressing this combination instantly unmaps the window from the display server. It does not just minimize; it vanishes.
- **Process Hiding (Windows):** When enabled in settings, NocticAI uses specialized APIs to obfuscate its process name in the standard Windows Task Manager, blending in as a generic background service (e.g., `svchost.exe`).
- **Tray Icon Ghosting:** You can disable the system tray icon entirely in the preferences. When doing this, the application is strictly managed via keyboard shortcuts.

### 5.2 Ghost Typer (Humanizer) - Deep Dive
Copying and pasting large blocks of text into monitored environments (like online code editors, exam proctoring software, or strict corporate forms) is a massive red flag. Ghost Typer solves this.
- **How to Use:**
  1. Generate an answer in the NocticAI chat.
  2. Click the **"Ghost Type"** icon next to the message, or press `Ctrl+Shift+T` to type the last generated message.
  3. Click onto your target text field. The typing will begin after a 2-second delay.
- **Configuration Parameters:**
  - **Base WPM (Words Per Minute):** Set this to match your real typing speed (e.g., 60-80 WPM).
  - **Variance:** Introduces micro-delays between keystrokes. Set to 15-20% for natural human cadence.
  - **Fat Finger Rate:** Determines how often the bot will intentionally press an adjacent key on the QWERTY keyboard and then immediately backspace to correct it. (Recommended: 2-5%).
  - **Pause Intervals:** Simulates human thinking. The bot will randomly pause for 1-3 seconds every few sentences.

### 5.3 Real-Time Voice Transcription - Deep Dive
Leveraging local or cloud Whisper models, NocticAI turns audio into actionable AI context.
- **Mine Mode (Microphone):**
  - Best for: Dictating emails, brainstorming aloud, or logging your own thoughts while your hands are busy.
  - Under the hood, it buffers your voice, performing Voice Activity Detection (VAD) to only process when you are speaking, saving API costs and CPU cycles.
- **Yours Mode (System Audio):**
  - Best for: Remote meetings, video lectures, online interviews.
  - The application listens to the speakers. As the other person talks, the transcription feeds into the AI's context. 
  - **Pro-Tip:** Combine "Yours Mode" with a custom prompt like: *"You are an expert technical interviewer. I am in an interview. Listen to the transcription and suggest concise bullet points for me to say."* NocticAI will continuously generate hints based on the live conversation.

### 5.4 Transparent OCR Overlay - Deep Dive
Often, information is trapped inside images, DRM-protected PDFs, Zoom screen shares, or remote desktop (RDP) windows where copy-paste is disabled.
- **Activation:** Press `Ctrl+Alt+O`. Your screen will slightly dim, and NocticAI will enter selection mode.
- **Action:** Click and drag a bounding box over any text on your screen.
- **Processing:** The moment you release the mouse, the selected region is sent through the OCR engine.
- **Result:** The extracted text is instantly dumped into your NocticAI chat input box, ready to be sent or modified.
- **Accuracy Tuning:** In settings, you can choose between a fast local OCR engine (Tesseract) or routing the image through a Vision API (like GPT-4o) for complex formatting (tables, handwriting, diagrams).

### 5.5 Multi-Model Support - Deep Dive
No single AI model is perfect for every task. NocticAI acts as a unified hub.
- **OpenAI (GPT-4o, GPT-3.5):** Best for general reasoning, complex coding, and structured data generation. Requires an OpenAI API key.
- **Groq (Llama 3, Mixtral):** Groq's LPUs provide blistering fast generation speeds (up to 800 tokens per second). Best for real-time live assistance during meetings where speed is critical.
- **Local LLMs via Ollama:** For ultimate privacy, run models completely offline on your own hardware. 
  - **Setup:** Install Ollama on your machine.
  - Go to NocticAI Settings > API Keys > Custom Endpoints.
  - Set the base URL to `http://localhost:11434/v1`.
  - Select your local model (e.g., `llama3:8b`). Your prompts never leave your PC.

### 5.6 Zero-Knowledge Encryption - Architecture
Security is not an afterthought; it is baked into the foundation.
- **Local Key Generation:** When you first start NocticAI, it generates a unique cryptographically secure master key stored in your OS's secure credential manager (Windows Credential Guard or Linux Secret Service/KWallet).
- **AES-256-GCM:** All API keys, chat logs, and custom prompts are encrypted on disk using AES-256 in Galois/Counter Mode. This provides both confidentiality and data authenticity.
- **Zero Telemetry:** The application makes zero network requests other than the direct API calls to your chosen LLM provider. There are no analytics, no crash reporters, and no phoning home.

### 5.7 Content Protection - How it works
If you are working on sensitive proprietary code or are in an environment where your screen might be audited, Content Protection ensures NocticAI remains invisible.
- **Windows (SetWindowDisplayAffinity):** NocticAI uses the `WDA_EXCLUDEFROMCAPTURE` API. If you try to screenshot NocticAI using Snipping Tool, OBS, or Zoom screen share, the NocticAI window simply appears as a black box or is completely omitted from the capture buffer.
- **Auto-Hide (Linux/Windows):** The app continuously monitors active process lists for known screen sharing executables (Zoom, Teams, Slack, Discord). If a screen-sharing session is initiated, NocticAI forcibly triggers the `Ctrl+Alt+H` stealth state automatically.

### 5.8 Advanced Window Management
Maximize your screen real estate without disrupting your flow.
- **Always-On-Top Toggle:** Click the pin icon to keep the chat window hovering above your IDE, browser, or game.
- **Opacity Slider:** In the settings, you can lower the opacity of the NocticAI window. When you aren't interacting with it, it can fade to 20% opacity, allowing you to see your code underneath, and snap back to 100% when you hover over it.
- **Borderless Mode:** Remove the title bar and window decorations for a sleek, minimal floating aesthetic. 

### 5.9 Multiple Chat Contexts
Managing state is crucial for getting good AI responses.
- **The Problem:** If you ask the AI to write a Python script, and then 10 minutes later ask it to draft an email to your boss, the AI might hallucinate Python syntax into your email because it's in the same context window.
- **The Solution:** Use NocticAI's Session Manager (left sidebar). 
- **Workspaces:**
  - Create a "Frontend Web Dev" session. Inject a system prompt: *"You are an expert Next.js and Tailwind developer. Only respond in code blocks."*
  - Create an "Interview Assistant" session. Inject a system prompt: *"You are a concise technical assistant. Provide answers in less than 20 words."*
- Switch seamlessly between them. The contexts are isolated, meaning the token window stays clean, relevant, and cost-effective.

---

## 6. Best Practices for Stealth & Security

To get the most out of NocticAI while maintaining a zero-footprint presence, follow these guidelines:

1. **Never use your main work email for API Keys:** If you are using NocticAI in a corporate environment, use personal API keys billed to a personal card to ensure absolute separation of data.
2. **Master the Ghost Typer:** Never use `Ctrl+C` and `Ctrl+V` into monitored web portals (like Canvas, HackerRank, or corporate SAP systems). Always use Ghost Typer, and ensure "Fat Finger" is enabled so it doesn't look robotic.
3. **Disable Notifications:** Ensure NocticAI's in-app notification sounds and toast notifications are turned off in settings so it doesn't accidentally pop up during a screen share.
4. **Use Local Models for PII:** If you are feeding the OCR tool documents that contain Personally Identifiable Information (Social Security Numbers, medical records), switch your Multi-Model setting to a local Ollama model to ensure that data never traverses the internet.

---

## 7. Customization & Theming

NocticAI isn't just powerful; it's highly customizable to fit your aesthetic.
- **Themes:** Supports Light Mode, Dark Mode, and "Terminal Mode" (High contrast green-on-black for hackers).
- **Custom CSS:** Power users can navigate to `~/.config/NocticAI/custom.css` (Linux) or `%APPDATA%\NocticAI\custom.css` (Windows) to write their own styling rules to change fonts, padding, and colors.
- **Font Selection:** We recommend switching the application font to a monospace font like *Fira Code* or *JetBrains Mono* in the settings if you primarily use NocticAI for coding assistance.

---

## 8. Comprehensive Troubleshooting Guide (Windows)

**Issue: The Global Shortcut (Ctrl+Alt+H) stopped working.**
- **Cause:** Another application (like NVIDIA GeForce Experience or AMD Adrenalin) might have hijacked the shortcut.
- **Fix:** Open NocticAI settings and remap the Stealth Shortcut to something unique, like `Ctrl+Shift+F12`.

**Issue: Ghost Typer is outputting gibberish or skipping characters.**
- **Cause:** Your system is under heavy load, causing the simulated keystrokes to drop.
- **Fix:** In Ghost Typer settings, increase the "Variance" and lower the "Base WPM".

**Issue: The NocticAI window is black on my screen recordings.**
- **Cause:** This is a feature, not a bug. Content Protection is enabled.
- **Fix:** If you *want* to record NocticAI (e.g., for a YouTube tutorial), you must go to Settings > Security and uncheck "Enable OS-Level Content Protection", then restart the app.

**Issue: "Failed to bind to Local Port" Error.**
- **Cause:** The port NocticAI uses for its local encrypted IPC (Inter-Process Communication) is in use.
- **Fix:** Open Command Prompt, run `netstat -ano | findstr 14332`, find the PID of the conflicting process, and terminate it via Task Manager.

---

## 9. Comprehensive Troubleshooting Guide (Linux)

**Issue: Ghost Typer does nothing on Wayland.**
- **Cause:** Missing `uinput` permissions.
- **Fix:** 
  ```bash
  sudo sh -c 'echo "KERNEL==\"uinput\", MODE=\"0660\", GROUP=\"input\"" > /etc/udev/rules.d/99-uinput.rules'
  sudo udevadm control --reload-rules && sudo udevadm trigger
  sudo usermod -aG input $USER
  ```
  Then reboot your system.

**Issue: OCR Overlay captures a black screen on GNOME Wayland.**
- **Cause:** XDG Desktop Portal GNOME is failing to negotiate the PipeWire stream.
- **Fix:** Ensure you have `xdg-desktop-portal-gnome` installed. Alternatively, restart the portal service: `systemctl --user restart xdg-desktop-portal.service`.

**Issue: AppImage requires FUSE.**
- **Cause:** Ubuntu 22.04+ dropped FUSE2 by default.
- **Fix:** `sudo apt install libfuse2`

**Issue: Cannot capture "Yours Mode" audio on PipeWire.**
- **Cause:** The application cannot auto-detect the default sink monitor.
- **Fix:** Install `pavucontrol`. Open it, go to the "Recording" tab while NocticAI is attempting to listen. Change NocticAI's capture stream from your Microphone to "Monitor of [Your Audio Output Device]".

---

## 10. Frequently Asked Questions (FAQ)

**Q: Can my employer/school detect NocticAI?**
A: If installed correctly with Content Protection and Ghost Typer enabled, NocticAI is highly resistant to detection. It avoids traditional hooks, hides its window buffer, and simulates human input hardware. However, network traffic to OpenAI/Groq can still be seen by a corporate firewall. To be 100% undetectable, route your traffic through a VPN, or use a local Ollama model.

**Q: How do I backup my encrypted chats?**
A: Go to Settings > Data Management > Export Encrypted Backup. This will generate a `.noctic` file. Keep this safe. You will need your master password (or the local OS credential manager) to decrypt it upon restoring.

**Q: Does Real-Time Transcription support languages other than English?**
A: Yes. The Whisper model inherently supports over 90 languages. It will automatically detect the spoken language and translate it into English, or transcribe it in the native language depending on your settings.

**Q: Is there a mobile version?**
A: Currently, NocticAI is deeply integrated with desktop OS APIs (Windows/Linux) to provide stealth and hardware-level typing. A mobile version is not currently planned as iOS/Android do not permit the global system hooks required for our core features.

**Q: I lost my OS credentials, can I recover my chats?**
A: No. Due to the Zero-Knowledge Encryption architecture, if you format your drive or lose access to your OS credential manager without an exported backup, the AES key is permanently destroyed, and your data cannot be recovered.

---
*NocticAI - Silent. Secure. Unrestricted.*
*(End of Document - Revision 2.0)*
