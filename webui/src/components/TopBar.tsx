const colorStyle = {
    backgroundColor: '#ED829B'
  };

function TopBar() {
    return (
        <div style={colorStyle} className="d-flex justify-content-between sticky-top p-2 border border-3 border-black rounded mt-1 mx-1">
            <h1 className="ms-2">ViccportálSZFM</h1>
            <button style={colorStyle} className="btn me-1">Bejelentkezés</button>
        </div>
    );
};

export default TopBar;