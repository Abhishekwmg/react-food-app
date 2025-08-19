export default function OfflinePage({ onRetry }) {
    return (
        <div className="offline-root" role="alert" aria-live="polite">
            <div className="offline-card">
                <div className="offline-illustration" aria-hidden>
                    <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="5" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M9 16l6-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <h1 className="offline-title">You are offline</h1>
                <p className="offline-text">Check your internet connection and try again. Some features may be unavailable while you're offline.</p>

                <div className="offline-actions">
                    <button
                        className="btn-primary"
                        onClick={() => {
                            if (typeof onRetry === 'function') onRetry();
                            else window.location.reload();
                        }}
                    >
                        Retry
                    </button>
                </div>
            </div>
        </div>
    );
}
