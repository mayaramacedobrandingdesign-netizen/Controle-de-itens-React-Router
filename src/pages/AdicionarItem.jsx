import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdicionarItem({ adicionarItem }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const navigate = useNavigate();

  function aumentarQuantidade() {
    setQuantidade(quantidade + 1);
  }

  function diminuirQuantidade() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (nome.trim() === "") {
      alert("Digite o nome do item.");
      return;
    }

    adicionarItem(nome, quantidade);
    setNome("");
    setQuantidade(1);
    navigate("/itens");
  }

  return (
    <div className="card-form">
      <h1 className="titulo-pagina">Adicionar Item</h1>

      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          placeholder="Digite o nome do item"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <div className="quantidade-box">
          <p>Quantidade:</p>

          <div className="controle-quantidade">
            <button
              type="button"
              className="btn quantidade-btn"
              onClick={diminuirQuantidade}
            >
              -
            </button>

            <span>{quantidade}</span>

            <button
              type="button"
              className="btn quantidade-btn"
              onClick={aumentarQuantidade}
            >
              +
            </button>
          </div>
        </div>

        <button type="submit" className="btn salvar">
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default AdicionarItem;