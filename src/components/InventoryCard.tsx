import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { InventoryData } from "../types/inventory";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../constants";

export const InventoryCard = () => {
  const { data, error } = useData("inventory", "");
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Section>
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
              <P>{description}</P>
              {slogan && (
                <P>
                  <strong>slogan</strong> : {slogan}
                </P>
              )}
              <P>
                <strong>stock</strong> : {stock}
              </P>
              <P>
                <strong>price</strong> : {price}
              </P>
            </Item>
          );
        })}
      </ItemContainer>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const H2 = styled.h2`
  margin: 20vh 0 5vh 0;
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
  gap: 5vh 5vw;
  grid-template-columns: repeat(3, 1fr);
  margin: 0px 10vw;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    font-size: 12px;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2vh 2vw;
    margin: 0px 3vw;
  }
`;
const Item = styled.li`
  background-color: #908df2;
  border-radius: 20px;
  padding: 0 50px;
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    padding: 0 20px;
  }
`;
const P = styled.p`
  text-align: start;
  background-color: #a0dbf2;
  border-radius: 5px;
  padding: 5px 10px;
`;
const H3 = styled.h3`
  background-color: #d9d059;
  border-radius: 8px;
`;
