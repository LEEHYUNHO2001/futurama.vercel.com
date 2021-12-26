import { Navigation } from "./Navigation";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};
