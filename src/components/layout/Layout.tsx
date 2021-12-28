import { Navigation } from "./Navigation";
import styled from "@emotion/styled";
import { MobileNav } from ".";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <MobileNav />
      <Navigation />
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.body`
  background-color: #05aff2;
  /* overflow-x: hidden; */
`;
const Main = styled.main`
  /* display: flex; */
`;
