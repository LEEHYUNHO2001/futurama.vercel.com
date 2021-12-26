import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { InventoryData } from "../types/inventory";
import styled from "@emotion/styled";

export const InventoryCard = () => {
  const { data, error } = useData("inventory");
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <H2>Inventory</H2>
      <ItemContainer>
        {data.map((inventoryData: InventoryData) => {
          const { title, category, description, slogan, price, stock, id } =
            inventoryData;
          return (
            <Item key={`futurama-inventory-${id}`}>
              <H3>
                {title} - {category}
              </H3>
              <p>{description}</p>
              {slogan && (
                <p>
                  <strong>slogan</strong> : {slogan}
                </p>
              )}
              <p>
                <strong>stock</strong> : {stock}
              </p>
              <p>
                <strong>price</strong> : {price}
              </p>
            </Item>
          );
        })}
      </ItemContainer>
    </div>
  );
};

const H2 = styled.h2`
  margin: 8vh 0;
  text-align: center;
  color: #f2e205;
  &::before {
    content: "🍋 ";
  }
`;
const ItemContainer = styled.ul`
  list-style: none;
  display: grid;
  text-align: center;
  gap: 5vh 10vw;
  grid-template-columns: repeat(3, 1fr);
  margin: 0px 10vw;
`;
const Item = styled.li`
  background-color: #f2af88;
  border-radius: 20px;
  padding: 0 50px;
`;
const H3 = styled.h3`
  background-color: #d9d059;
  border-radius: 10px;
`;
