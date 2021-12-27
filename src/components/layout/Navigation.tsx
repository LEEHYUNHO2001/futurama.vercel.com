import Link from "next/link";
import { ROUTES } from "../../constants";
import { ROUTESDATA } from "../../types/routes";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../../constants";

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
  position: fixed;
  display: flex;
  background-color: #f2e205;
  width: 100vw;
  height: 15vh;
  text-align: center;
  align-items: center;
`;
const H1 = styled.h1`
  width: 100%;
  margin-left: 5vw;
  background-color: #732c02;
  color: #f2c53d;
  border: 6px solid #f28627;
  text-shadow: -1px 0 #f28627, 0 1px #f28627, 1px 0 #f28627, 0 -1px #f28627;
  border-radius: 15px;
  padding-bottom: 6px;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    font-size: 25px;
    border-radius: 12px;
  }
`;
const ItemContainer = styled.ul`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Item = styled.li`
  list-style: none;
  font-size: 26px;
  margin-bottom: 5px;
  font-weight: bold;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  & :hover {
    color: #f20530;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    font-size: 18px;
  }
`;
