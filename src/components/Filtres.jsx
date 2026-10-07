function Filtres ({filtre, setFiltre}) {

    return (
    <div>
      <button className =  {`btn btn-outline-primary ${filtre === "toutes" ? "actif" : "normalButton"} `}
        onClick={() => setFiltre("toutes")}>Toutes</button>

      <button className = {`btn btn-outline-primary ${filtre === "en-cours" ? "actif" : "normalButton"} `}
        onClick={() => setFiltre("en-cours")}>En cours</button>

      <button className = {`btn btn-outline-primary ${filtre === "terminees" ? "actif" : "normalButton"} `}
        onClick={() => setFiltre("terminees")}>Terminées</button>

    </div>
    );
}

export default Filtres;