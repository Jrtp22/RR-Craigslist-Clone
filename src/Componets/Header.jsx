export default function Header() {
    return (
        
            
            <div >
                <input type="text" placeholder="Search furniture"/>
                <div>
                    <select >
                        <option value="Gallery">Gallery</option>
                        <option value="list">list</option>
                    </select>
                    <span>
                        <button>&alt;&alt;</button>
                        <button>&alt;previous</button>
                        <span>1-100</span>
                        <button>next&gt;</button>
                    </span>
                </div>
            </div>
        
    );
}