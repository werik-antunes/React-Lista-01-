import React from "react";

function Saudacao({ isDia }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px", fontSize: "1.5em" }}>
      {isDia ? <p>Bom dia!</p> : <p>Boa noite!</p>}
    </div>
  );
}

export default Saudacao;