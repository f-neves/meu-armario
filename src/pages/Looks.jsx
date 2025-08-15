import React, { useState } from "react";
import "../style/Looks.css"; // CSS separado para estilização

const guardaRoupa = [
  { id: 1, tipo: "blusa", nome: "Blusa azul", imagem: "/images/blusa-azul.png" },
  { id: 2, tipo: "short", nome: "Short jeans", imagem: "/images/short-jeans.png" },
  { id: 3, tipo: "tenis", nome: "Tênis branco", imagem: "/images/tenis-branco.png" },
  { id: 4, tipo: "casaco", nome: "Casaco rosa", imagem: "/images/casaco-rosa.png" },
  { id: 5, tipo: "chapeu", nome: "Chapéu preto", imagem: "/images/chapeu-preto.png" },
  // Adicione mais peças conforme necessário
];

const LookPage = () => {
  const [look, setLook] = useState({
    blusa: null,
    short: null,
    tenis: null,
    chapéu: null,
    casaco: null,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [slotSelecionado, setSlotSelecionado] = useState(null);

  const abrirModal = (slot) => {
    setSlotSelecionado(slot);
    setModalOpen(true);
  };

  const selecionarPeca = (peca) => {
    setLook((prev) => ({ ...prev, [slotSelecionado]: peca }));
    setModalOpen(false);
    setSlotSelecionado(null);
  };

  return (
    <div className="look-page">
      <h1>Criar um Look</h1>

      {/* <div className="look-slots">
        {Object.keys(look).map((slot) => (
          <div key={slot} className="look-slot" onClick={() => abrirModal(slot)}>
            {look[slot] ? (
              <img src={look[slot].imagem} alt={look[slot].nome} />
            ) : (
              <div className="placeholder">Selecionar {slot}</div>
            )}
          </div>
        ))}
      </div> */}

      {/* {modalOpen && ( */}
        <div className="modal">
          <div className="modal-content modal-flex">
            <div className="modal-slots-col">
              {["chapeu", "casaco", "blusa", "short", "tenis"].map((slot) => (
                <div
                  key={slot}
                  className={`modal-slot ${slotSelecionado === slot ? "selected" : ""}`}
                  onClick={() => setSlotSelecionado(slot)}
                >
                  <span className="slot-emoji">
                    {slot === "chapeu" && "🎩"}
                    {slot === "casaco" && "🧥"}
                    {slot === "blusa" && "👕"}
                    {slot === "short" && "🩳"}
                    {slot === "tenis" && "👟"}
                  </span>
                  <span className="slot-label">
                    {slot === "chapeu" && "Chapéu"}
                    {slot === "casaco" && "Casaco"}
                    {slot === "blusa" && "Blusa"}
                    {slot === "short" && "Short/Saia"}
                    {slot === "tenis" && "Calçado"}
                  </span>
                </div>
              ))}
              {/* <div className="modal-actions">
                <button onClick={() => setModalOpen(false)}>Fechar</button>
              </div> */}
            </div>
            <div className="modal-items-col">
              <h3>Peças disponíveis</h3>
              <div className="guarda-roupa">
                {guardaRoupa
                  .filter((p) => p.tipo === slotSelecionado)
                  .map((peca) => (
                    <div key={peca.id} className="peca-item" onClick={() => selecionarPeca(peca)}>
                      <img src={peca.imagem} alt={peca.nome} />
                      <p>{peca.nome}</p>
                    </div>
                  ))}
              </div>
              {look[slotSelecionado] && (
                <div className="peca-escolhida">
                  <h4>Escolhido:</h4>
                  <img src={look[slotSelecionado].imagem} alt={look[slotSelecionado].nome} />
                  <p>{look[slotSelecionado].nome}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      {/* )} */}

      <div className="look-form">
        <input type="text" placeholder="Nome do look" />
        <textarea placeholder="Observações"></textarea>
        <button>Salvar Look</button>
      </div>
    </div>
  );
};

export default LookPage;
