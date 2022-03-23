import '../Components/ItemList/ItemList'
import ItemList from '../Components/ItemList/ItemList';

const ItemListContainer = () => {
  return (
    <section className="item-list-container">
      <br />
      <h2 className="item-list-container__title">Productos seleccionados</h2>

      <ItemList />
    </section>
  );
};

export default ItemListContainer;