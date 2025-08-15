import React, { useState } from "react";
import "../style/AddItem.css";


function AddItem() {
  const [formData, setFormData] = useState({
    nome: "",
    categoria: "",
    marca: "",
    cor: "",
    material: "",
    tamanho: "",
    estacao: "",
    observacoes: "",
    imagem: null,
  });

  const [preview, setPreview] = useState(null); // Nova state para imagem

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, imagem: file });
      setPreview(URL.createObjectURL(file)); // cria preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aqui você pode enviar os dados para o backend
  };

  return (
    <main className="add-item-container">
      <h1>Adicionar Nova Peça</h1>
      <form className="add-item-form" onSubmit={handleSubmit}>
        {/* Upload de Imagem */}
        <div className="upload-area">
          <label htmlFor="file-upload" className="upload-label">
            {preview ? (
              <img src={preview} alt="Pré-visualização" className="preview-img" />
            ) : (
              <>
                <span role="img" aria-label="camera">📷</span>
                <p>Adicionar Foto</p>
                <small>Clique para selecionar ou arraste aqui</small>
              </>
            )}
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            hidden
          />
        </div>

        {/* Campos do Formulário */}
        <div className="form-fields">
          <label>
            Nome*
            <input
              type="text"
              name="nome"
              placeholder="Ex: Camisa social azul"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Categoria*
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma categoria</option>
              <option value="camisa">Camisa</option>
              <option value="calca">Calça</option>
              <option value="sapato">Sapato</option>
            </select>
          </label>

          <label>
            Marca
            <input
              type="text"
              name="marca"
              placeholder="Ex: Renner"
              value={formData.marca}
              onChange={handleChange}
            />
          </label>

          <label>
            Cor Principal*
            <div className="color-options">
              {["#FF0000", "#00FF00", "#90be6d", "#0000FF", "#457b9d", "#8d5bc3", "#ff6b6b", "#F4A460", "#FFD700", "#7b4f3f", "#FFC0CB", "#FFFFFF", "#C0C0C0", "#808080", "#000000"].map((color) => (
                <span
                  key={color}
                  className={`color-circle ${formData.cor === color ? "selected" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setFormData({ ...formData, cor: color })}
                ></span>
              ))}
            </div>
          </label>

          <label>
            Material
            <select
              name="material"
              value={formData.material}
              onChange={handleChange}
            >
              <option value="">Selecione o material</option>
              <option value="algodao">Algodão</option>
              <option value="poliester">Poliéster</option>
              <option value="jeans">Jeans</option>
            </select>
          </label>

          <label>
            Tamanho*
            <select
              name="tamanho"
              value={formData.tamanho}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o tamanho</option>
              <option value="pp">PP</option>
              <option value="p">P</option>
              <option value="m">M</option>
              <option value="g">G</option>
              <option value="gg">GG</option>
            </select>
          </label>

          <label>
            Estação
            <select
              name="estacao"
              value={formData.estacao}
              onChange={handleChange}
            >
              <option value="">Selecione a estação</option>
              <option value="verao">Verão</option>
              <option value="inverno">Inverno</option>
              <option value="meia-estacao">Meia Estação</option>
            </select>
          </label>

          <label>
            Observações
            <textarea
              name="observacoes"
              placeholder="Observações adicionais sobre a peça..."
              value={formData.observacoes}
              onChange={handleChange}
            />
          </label>
        </div>

      </form>
      <div className="form-add-item-submit-button">
        {/* Botão de envio */}
        <button type="submit" className="submit-btn">
          Salvar Peça
        </button>
      </div>
    </main>
  );
}

export default AddItem;
