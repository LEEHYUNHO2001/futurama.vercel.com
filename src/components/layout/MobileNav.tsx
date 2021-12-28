import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../../constants";
import Link from "next/link";
import { useState } from "react";

export const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuMobile = () => {
    setOpenMenu(!openMenu);
  };
  return (
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
  width: 90vw;
  display: flex;
  background-color: #fff;
  z-index: 100;
  flex-direction: column;
  justify-content: center;
  font-size: 4.5em;
  font-weight: bold;
  text-align: center;
  & > a {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
