import Link from "next/link";
import { ROUTES } from "../../constants";
import { ROUTESDATA } from "../../types/routes";

export const Navigation = () => {
  return (
    <header>
      <h1>Futurama</h1>
      <nav>
        <ul>
          {ROUTES.map((routeObject: ROUTESDATA) => {
            return (
              <li key={routeObject.ID}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
