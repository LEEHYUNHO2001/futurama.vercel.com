import { Navigation } from "./Navigation";
import styled from "@emotion/styled";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.body`
  background-color: #05aff2;
`;
const Main = styled.main`
  /* display: flex; */
`;
