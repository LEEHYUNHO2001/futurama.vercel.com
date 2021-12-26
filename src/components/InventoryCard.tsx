import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { InventoryData } from "../types/inventory";

export const InventoryCard = () => {
  const { data, error } = useData("inventory");
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      {data.map((inventoryData: InventoryData) => {
        const { title, category, description, slogan, price, stock, id } =
          inventoryData;
        return (
          <div key={`futurama-inventory-${id}`}>
            <h1>{title}</h1>
          </div>
        );
      })}
    </div>
  );
};
