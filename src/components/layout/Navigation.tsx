import Link from "next/link";
import { ROUTES } from "../../constants";
import { ROUTESDATA } from "../../types/routes";
import styled from "@emotion/styled";

export const Navigation = () => {
  return (
    <Container>
      <Link href="/">
        <a>
          <H1>Futurama</H1>
        </a>
      </Link>
      <nav>
        <ItemContainer>
          {ROUTES.map((routeObject: ROUTESDATA) => {
            return (
              <Item key={routeObject.ID}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </Item>
            );
          })}
        </ItemContainer>
      </nav>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  background-color: #f2e205;
  width: 100%;
  height: 10vh;
  text-align: center;
`;
const H1 = styled.h1`
  width: 15vw;
  margin-left: 5vw;
  background-color: #f28705;
  color: black;
  border-radius: 15px;
  padding-bottom: 6px;
`;
const ItemContainer = styled.ul`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Item = styled.li`
  list-style: none;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
  & :hover {
    color: #f20530;
  }
`;
