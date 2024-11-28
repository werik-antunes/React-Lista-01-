import React from "react";

function Botao() {
  return (
    <button
      onClick={() => alert("Você clicou no botão!")}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Clique Aqui
    </button>
  );
}

export default Botao;