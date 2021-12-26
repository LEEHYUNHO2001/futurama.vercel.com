import { NextPage } from "next";
import { InventoryCard } from "../../components/InventoryCard";

const InventoryIndexPage: NextPage = () => {
  return (
    <div>
      <h1>Inventory</h1>
      <InventoryCard />
    </div>
  );
};

export default InventoryIndexPage;
