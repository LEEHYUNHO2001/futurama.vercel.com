import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { CastData } from "../types/cast";
import Link from "next/link";
import styled from "@emotion/styled";

export const CastCard = () => {
  const { data, error } = useData("cast");
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <H2>Cast</H2>
      <ItemContainer>
        {data.map((castData: CastData, index: number) => {
          const { name, born, died, bio, id } = castData;
          return (
            <Item key={`futurama-cast-${id}`}>
              <H3>
                <Link href={bio.url}>
                  <a> ✔ {name}</a>
                </Link>
              </H3>
              <p>{born}</p>
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
  color: #474073;
  &::before {
    content: "🍆 ";
  }
`;
const ItemContainer = styled.ul`
  width: 80vw;
  margin: 0 13vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 5vh;
  list-style: none;
  background-color: #e5f2b6;
`;
const Item = styled.li``;
const H3 = styled.h3`
  color: #f2622e;
`;
