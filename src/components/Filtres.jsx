function Filtres ({filtre, onFiltre}) {

    return (
    <div>
      <button className =  {`btn btn-outline-primary ${filtre === "toutes" ? "actif" : "normalButton"} `}
        onClick={() => onFiltre("toutes")}>Toutes</button>

      <button className = {`btn btn-outline-primary ${filtre === "en-cours" ? "actif" : "normalButton"} `}
        onClick={() => onFiltre("en-cours")}>En cours</button>

      <button className = {`btn btn-outline-primary ${filtre === "terminees" ? "actif" : "normalButton"} `}
        onClick={() => onFiltre("terminees")}>Terminées</button>

    </div>
    );
}

export default Filtres;