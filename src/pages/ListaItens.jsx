import { Link } from "react-router-dom";

function ListaItens({ itens, removerItem }) {
  return (
    <div>
      <h1 className="titulo-pagina">Lista de Itens</h1>

      {itens.length === 0 ? (
        <p className="mensagem-vazia">Nenhum item cadastrado.</p>
      ) : (
        <div className="cards-container">
          {itens.map((item) => (
            <div key={item.id} className="card-item">
              <h2>{item.nome}</h2>

              <div className="quantidade-texto">
                <span className="quantidade-badge">
                  Quantidade: {item.quantidade}
                </span>
              </div>

              <div className="acoes-card">
                <Link to={`/editar/${item.id}`} className="btn editar">
                  Editar
                </Link>

                <button
                  className="btn excluir"
                  onClick={() => removerItem(item.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaItens;