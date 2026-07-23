import { Download as DownloadIcon, CheckCircle2, Github, FileBox } from "lucide-react";
import styles from './Download.module.css';

async function getReleases() {
    try {
        const res = await fetch('https://api.github.com/repos/IsmailofficialGithub/interview-cracker/releases', {
            next: { revalidate: 3600 }
        });
        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        console.error('Error fetching releases:', error);
        return [];
    }
}

async function getVersionInfo() {
    try {
        const res = await fetch('https://raw.githubusercontent.com/IsmailofficialGithub/interview-cracker/main/version.json', {
            next: { revalidate: 60 }
        });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error('Error fetching version info:', error);
        return null;
    }
}

export default async function Download() {
    const [releases, versionInfo] = await Promise.all([
        getReleases(),
        getVersionInfo()
    ]);

    return (
        <section id="download" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Download Releases
                </h2>
                <p className={styles.subtitle}>
                    Get the latest application releases and start using our tool today.
                </p>

                {versionInfo && (
                    <div className={styles.versionBanner}>
                        <div className={styles.versionHeader}>
                            <span className={styles.latestVersionBadge}>Latest: v{versionInfo.latest_version}</span>
                            <span className={styles.minVersion}>Min Supported: v{versionInfo.min_supported_version}</span>
                        </div>
                        <p className={styles.versionNotes}>{versionInfo.release_notes}</p>
                    </div>
                )}

                <div className={styles.releasesContainer}>
                    {releases.length === 0 ? (
                        <p className={styles.noReleases}>No releases found.</p>
                    ) : (
                        releases.map((release: any) => (
                            <div key={release.id} className={styles.releaseCard}>
                                <div className={styles.releaseHeader}>
                                    <h3 className={styles.releaseName}>
                                        {release.name || release.tag_name}
                                        {release.prerelease && (
                                            <span className={styles.prereleaseBadge}>Pre-release</span>
                                        )}
                                    </h3>
                                    <span className={styles.releaseDate}>
                                        {new Date(release.published_at).toLocaleDateString()}
                                    </span>
                                </div>
                                
                                {release.body && (
                                    <div className={styles.releaseNotes}>
                                        {release.body}
                                    </div>
                                )}
                                
                                <div className={styles.assetsList}>
                                    {release.assets?.length > 0 ? (
                                        release.assets.map((asset: any) => {
                                            let osLabel = asset.name;
                                            if (asset.name.endsWith('.exe')) osLabel = "Windows (.exe)";
                                            else if (asset.name.endsWith('.deb')) osLabel = "Linux (.deb)";
                                            else if (asset.name.endsWith('.rpm')) osLabel = "Linux (.rpm)";
                                            else if (asset.name.endsWith('.AppImage')) osLabel = "Linux (AppImage)";
                                            else if (asset.name.endsWith('.dmg')) osLabel = "macOS (.dmg)";
                                            
                                            return (
                                                <a
                                                    key={asset.id}
                                                    href={asset.browser_download_url}
                                                    download
                                                    className={styles.downloadAssetButton}
                                                >
                                                    <DownloadIcon className="w-5 h-5" />
                                                    Download {osLabel}
                                                </a>
                                            );
                                        })
                                    ) : (
                                        <>
                                            <a
                                                href={release.zipball_url}
                                                className={styles.downloadAssetButton}
                                            >
                                                <FileBox className="w-5 h-5" />
                                                Source Code (zip)
                                            </a>
                                        </>
                                    )}
                                    
                                    <a 
                                        href={release.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.githubButton}
                                    >
                                        <Github className="w-5 h-5" />
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className={styles.requirementsBox}>
                    <h3 className={styles.reqTitle}>
                        System Requirements
                    </h3>
                    <ul className={styles.reqList}>
                        <li className={styles.reqItem}>
                            <CheckCircle2 className={styles.icon} />
                            <div>
                                <strong className={styles.strongText}>Operating System:</strong> Windows 10/11, Ubuntu 22.04+, Fedora, or Arch Linux
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
                                <strong className={styles.strongText}>Disk Space:</strong> 150MB+ free space
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={styles.noteBox}>
                    <p className={styles.noteText}>
                        <strong className={styles.strongText}>Important:</strong> This is a cross-platform desktop application, not a web app.
                        After downloading, install it on your machine and run it natively. 
                        All your data is stored locally on your computer and is never sent to any central server, ensuring absolute privacy.
                    </p>
                </div>
            </div>
        </section>
    );
}
