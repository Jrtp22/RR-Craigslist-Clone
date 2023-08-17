export default function Sidebar() {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                flexDirection: "column",
                justifyContent: "space-around",
            }}>
            <h2>furniture</h2>
            <div>
                <button>all</button>
                <button>owner</button>
                <button>dealer</button>
            </div>
            <div>
                <input type='checkbox' />
                <span>search titles only</span>
                <input type='checkbox' />
                <span>has images</span>
                <input type='checkbox' />
                <span>posted today</span>
                <input type='checkbox' />
                <span>bundles duplicate</span>
                <input type='checkbox' />
                <span>include nearby area</span>
            </div>
            <div>
                <h3>MILES FROM ZIP</h3>
                <input type='text' placeholder='miles' />
                <input type='text' placeholder='zip' />
            </div>
        </div>
    );
}
