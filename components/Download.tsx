import { Download as DownloadIcon, CheckCircle2 } from "lucide-react";
import styles from './Download.module.css';

export default function Download() {
  // TODO: Update this URL when the installer is available
  // Options:
  // - GitHub Releases: https://github.com/yourusername/noctisai/releases/latest/download/Noctisai-Setup.exe
  // - CDN/File hosting: Your CDN URL here
  // - Custom download server: Your server URL here
  const downloadUrl = "/downloads/Noctisai-Setup.exe";

  return (
    <section id="download" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Download Noctisai
        </h2>
        <p className={styles.subtitle}>
          Get the Windows desktop application and start having secure, private AI conversations today.
        </p>

        <div className={styles.buttonContainer}>
          <a
            href={downloadUrl}
            download
            className={styles.downloadButton}
          >
            <DownloadIcon className="w-6 h-6" />
            Download for Windows
          </a>
        </div>

        <div className={styles.requirementsBox}>
          <h3 className={styles.reqTitle}>
            System Requirements
          </h3>
          <ul className={styles.reqList}>
            <li className={styles.reqItem}>
              <CheckCircle2 className={styles.icon} />
              <div>
                <strong className={styles.strongText}>Operating System:</strong> Windows 10 or Windows 11
              </div>
            </li>
            <li className={styles.reqItem}>
              <CheckCircle2 className={styles.icon} />
              <div>
                <strong className={styles.strongText}>Architecture:</strong> x64 (64-bit)
              </div>
            </li>
            <li className={styles.reqItem}>
              <CheckCircle2 className={styles.icon} />
              <div>
                <strong className={styles.strongText}>Disk Space:</strong> 100MB+ free space
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.noteBox}>
          <p className={styles.noteText}>
            <strong className={styles.strongText}>Important:</strong> This is a Windows desktop application, not a web app.
            After downloading, install it on your Windows computer and run it from your desktop or Start menu.
            All your data is stored locally on your computer and never sent to any server except your configured AI provider.
          </p>
        </div>
      </div>
    </section>
  );
}
