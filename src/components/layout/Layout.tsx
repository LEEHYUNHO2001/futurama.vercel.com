import { Navigation } from "./Navigation";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../../constants";
import { useState } from "react";
import Link from "next/link";

export const Layout: React.FC = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuMobile = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Container>
      <Toggle onClick={openMenuMobile}>
        <H1>MENU</H1>
        {openMenu && (
          <Nav>
            <Link href="/">
              <a>HOME</a>
            </Link>
            <Link href="/info">
              <a>INFO</a>
            </Link>
            <Link href="/characters">
              <a>CHARACTERS</a>
            </Link>
            <Link href="/cast">
              <a>CAST</a>
            </Link>
            <Link href="/episodes">
              <a>EPISODES</a>
            </Link>
            <Link href="/questions">
              <a>QUESTIONS</a>
            </Link>
            <Link href="/inventory">
              <a>INVENTORY</a>
            </Link>
          </Nav>
        )}
      </Toggle>
      <Navigation />
      <Main>{children}</Main>
    </Container>
  );
};

const Toggle = styled.div`
  display: none;
  position: fixed;
  right: 0;
  margin: 20px 20px;
  cursor: pointer;
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    display: inline-block;
  }
`;
const H1 = styled.h1`
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  text-shadow: -1px 0 #fff, 0 1px #00fff0, 1px 0 #fff, 0 -1px #fff;
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: bold;
`;
const Container = styled.body`
  background-color: #05aff2;
  /* overflow-x: hidden; */
`;
const Main = styled.main`
  /* display: flex; */
`;
