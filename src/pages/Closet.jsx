import React, { useState } from "react";
import "../style/Closet.css";
import MoletomAirJordan from "../assets/img_test/moletom-air-jordan.jpg";
import MoletomBege from "../assets/img_test/moletom-bege.jpg";

const categorias = ["Blusa", "Calça", "Cor", "Estação", "Tamanho", "Marca"];

const pecas = [
  { id: 1, nome: "Moletom Air Jordan", status: "Usada", img: MoletomAirJordan , cor: "#000"},
  { id: 2, nome: "Moletom Bege", status: "Usada", img: MoletomBege , cor: "#d9c4a6" },
  { id: 3, nome: "Calça jeans clara", status: "Nova", img: "/assets/calca-jeans.jpg" },
  { id: 4, nome: "Moletom Simpsons", status: "Usada", img: "/assets/moletom-simpsons.jpg" },
  { id: 5, nome: "Jaqueta Inverno", status: "Nova", img: "/assets/jaqueta-inverno.jpg" },
  { id: 6, nome: "Moletom bege floral", status: "Usada", img: "/assets/moletom-bege-floral.jpg" },
  { id: 7, nome: "Camisa social azul", status: "Nova", img: "/assets/camisa-social.jpg" },
  { id: 8, nome: "Vestido preto", status: "Usada", img: "/assets/vestido-preto.jpg" },
  { id: 9, nome: "Camiseta branca", status: "Nova", img: "/assets/camiseta-branca.jpg" }
];

export default function MeuArmario() {
  const [filtroAtivo, setFiltroAtivo] = useState(null);

  return (
    <div className="meu-armario">
      {/* Resumo */}
      <div className="resumo">
        <div className="resumo-card"><span>24</span> Peças totais</div>
        <div className="resumo-card selecionado"><span>8</span> Looks Criados</div>
        <div className="resumo-card"><span>5</span> Categorias</div>
        <div className="resumo-card"><span>12</span> Favoritas</div>
      </div>

      <div className="new-item-button-div">
        <button 
        className="new-item-button"
        onClick={() => window.location.href = '/adicionar-item'}
        >Nova Peça</button>
      </div>

      {/* Filtros */}
      <div className="filtros">
        <span>Filtrar por:</span>
        <div className="filtro-botoes">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={filtroAtivo === cat ? "filtro ativo" : "filtro"}
              onClick={() => setFiltroAtivo(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de peças */}
      <div className="grid-pecas">
        {pecas.map((peca) => (
          <div key={peca.id} className="peca-card">
            <img src={peca.img} alt={peca.nome} />
            <div className="peca-info">
              <h4>{peca.nome}</h4>
              <span
                className="cor-indicador"
                style={{ backgroundColor: peca.cor }}
              ></span>
              <span className={peca.status === "Nova" ? "nova" : "usada"}>
                {peca.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
