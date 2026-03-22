import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditarItem({ itens, atualizarItem }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const itemEncontrado = itens.find((item) => item.id === Number(id));

  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    if (itemEncontrado) {
      setNome(itemEncontrado.nome);
      setQuantidade(itemEncontrado.quantidade);
    }
  }, [itemEncontrado]);

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
      alert("Digite um nome válido.");
      return;
    }

    atualizarItem(Number(id), nome, quantidade);
    navigate("/itens");
  }

  if (!itemEncontrado) {
    return <p>Item não encontrado.</p>;
  }

  return (
    <div className="card-form">
      <h1 className="titulo-pagina">Editar Item</h1>

      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
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
          Atualizar
        </button>
      </form>
    </div>
  );
}

export default EditarItem;