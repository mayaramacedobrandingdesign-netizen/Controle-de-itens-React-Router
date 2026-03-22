import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import ListaItens from "./pages/ListaItens";
import AdicionarItem from "./pages/AdicionarItem";
import EditarItem from "./pages/EditarItem";
import "./App.css";

function App() {
  const [itens, setItens] = useState([
    { id: 1, nome: "Caderno", quantidade: 1 },
    { id: 2, nome: "Caneta", quantidade: 1 },
    { id: 3, nome: "Borracha", quantidade: 1 },
  ]);

  function adicionarItem(nome, quantidade) {
    const nomeFormatado = nome.trim().toLowerCase();

    const itemExistente = itens.find(
      (item) => item.nome.toLowerCase() === nomeFormatado
    );

    if (itemExistente) {
      const listaAtualizada = itens.map((item) =>
        item.nome.toLowerCase() === nomeFormatado
          ? { ...item, quantidade: item.quantidade + quantidade }
          : item
      );

      setItens(listaAtualizada);
    } else {
      const novoItem = {
        id: Date.now(),
        nome: nome.trim(),
        quantidade: quantidade,
      };

      setItens([...itens, novoItem]);
    }
  }

  function removerItem(id) {
    const novaLista = itens.filter((item) => item.id !== id);
    setItens(novaLista);
  }

  function atualizarItem(id, novoNome, novaQuantidade) {
    const listaAtualizada = itens.map((item) =>
      item.id === id
        ? { ...item, nome: novoNome, quantidade: novaQuantidade }
        : item
    );

    setItens(listaAtualizada);
  }

  return (
    <BrowserRouter>
      <Menu />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/itens"
            element={
              <ListaItens
                itens={itens}
                removerItem={removerItem}
              />
            }
          />

          <Route
            path="/adicionar"
            element={
              <AdicionarItem
                adicionarItem={adicionarItem}
              />
            }
          />

          <Route
            path="/editar/:id"
            element={
              <EditarItem
                itens={itens}
                atualizarItem={atualizarItem}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;