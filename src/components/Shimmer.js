// components/Shimmer.js
const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(10).fill("").map((_, i) => (
                <div className="shimmer-card" key={i}>
                    <div className="shimmer-img" />
                    <div className="shimmer-title shimmer-line" />
                    <div className="shimmer-cuisine shimmer-line" />
                    <div className="shimmer-meta">
                        <div className="shimmer-line small" />
                        <div className="shimmer-line small" />
                        <div className="shimmer-line small" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;