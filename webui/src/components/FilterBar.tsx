const colorStyle = {
    backgroundColor: '#ED829B'
  };

function FilterBar() {
    return (
        <div style={colorStyle} className="d-flex justify-content-start p-2 border border-3 border-black rounded mt-1">
            <h3 className="mx-2">Szűrők</h3>
            <button style={colorStyle} className="btn mx-5 fw-medium">Feltöltési Sorrend szerint</button>
            <button style={colorStyle} className="btn mx-5 fw-medium">Értékelés szerint (Növekvő)</button>
            <button style={colorStyle} className="btn mx-5 fw-medium">Értékelés szerint (Csökkenő)</button>
        </div>
    );
}

export default FilterBar;