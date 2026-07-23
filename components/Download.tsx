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

export default async function Download() {
    const releases = await getReleases();

    return (
        <section id="download" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Download Releases
                </h2>
                <p className={styles.subtitle}>
                    Get the latest application releases and start using our tool today.
                </p>

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
                                        release.assets.map((asset: any) => (
                                            <a
                                                key={asset.id}
                                                href={asset.browser_download_url}
                                                download
                                                className={styles.downloadAssetButton}
                                            >
                                                <DownloadIcon className="w-5 h-5" />
                                                Download {asset.name}
                                            </a>
                                        ))
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
