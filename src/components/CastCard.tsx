import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { CastData } from "../types/cast";
import Link from "next/link";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../constants";

const People = [
  "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSjbQIfRvdAoahhMkj8VmccsZzQ2qvUI71Yv8fI1bKChf-jFxuQ0L_IvyCwwfUX",
  "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSSkKqGRbw2QW0Xub9GxIx7z5cbK5VQnGEzbxGP_jD_ZrbMcnj0sppYFwgRJVaq",
  "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ_rYSiOhf4hNxpHusmKxL5NZ6K_I4TgvkCP3UIpcKjs_GS26fb3UydDrAhrBpM",
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0p7wNFQMgG3g5zI8eADwkpcfO_8HXr9aaLrHevjJVGNudlf4J",
  "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSmK89PazE_b7ivApjhLBCsX8ZnMhQw6FsakHbCzqom7jVYu8aQcnfsRpLafVq0",
  "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRADyjgPiqB6czrdhGxdQD3aHb3piRFQFZVG6VGA-No6L3niFtexc6BI78ACWgI",
  "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ2LBM8ZtTGnTFT6gO74heKluKCWafX09xr4peIgNknHxRa2ndEblr3Tcea7wnB",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQt-qOjiRVEWztrrR5iN3Y76c-dj496owDMkribPe3-n5R7LJY1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWR-ZOzy5eo9JCGUoI6npwwFZeHv-Xo2dRnGBijnCy39KWyUoz",
  "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS2p45lDeM6O5vW1G1WRZJgvgsOpAsSgHn2u7DwJJOLAnc51Hc4sQV540RtuipZ",
  "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQZxYn15CSd8suyqPeH8COpASjnuipeB-XSU_ZzSrptfAwRu8l11NKIsO_r0C_4",
  "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRwlVdhsQpFhP40i5p05z4arqDqJx1KogUXUYlauour8YLR4hqIHkJUSG1D60fH",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQts0QRi0LTOgs7qyR15hd9rsbcN7s5NY_vCd9fWWyBNmS64bHpqfDy19Fq8GH4z-G4HJw&usqp=CAU",
  "https://upload.wikimedia.org/wikipedia/commons/3/32/George_Takei_Photo_Op_GalaxyCon_Minneapolis_2019.jpg",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJzMQ6KoUI_YXLTGuatkcT48yBjJEZocZaOzdGZeWTy8cc6dr0",
];

export const CastCard = () => {
  const { data, error } = useData("cast", "");
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Section>
      <H2>Cast</H2>
      <ItemContainer>
        {data.map((castData: CastData, index: number) => {
          const { name, born, died, bio, id } = castData;
          return (
            <Item key={`futurama-cast-${id}`}>
              <H3>✔ {name}</H3>
              <Img src={People[index]} alt="인물" />
              <p>{born}</p>
              <Link href={bio.url}>
                <A>More</A>
              </Link>
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
  color: #474073;
  &::before {
    content: "🍆 ";
  }
`;
const ItemContainer = styled.ul`
  width: 80vw;
  margin: 0 13vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5vw;
  list-style: none;
  margin-bottom: 5vh;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e5f2b6;
  padding: 0px 20px;
`;
const H3 = styled.h3`
  color: #f2622e;
`;
const Img = styled.img`
  width: 80%;
`;
const A = styled.a`
  background-color: #000;
  color: #fff;
  padding: 5px;
  border-radius: 10px;
  font-size: 12px;
`;
