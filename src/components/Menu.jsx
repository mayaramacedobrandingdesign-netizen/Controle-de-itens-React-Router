import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <h2>Controle de Itens</h2>

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/adicionar">Adicionar Item</NavLink>
        <NavLink to="/itens">Listar Itens</NavLink>
      </div>
    </nav>
  );
}

export default Menu;