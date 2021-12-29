import { NextPage } from "next";
import { useRouter } from "next/router";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { useData } from "../../hooks/useData";
import styled from "@emotion/styled";

const CharacterDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useData("characters", id);
  if (error) return <Error />;
  if (!data) return <Loading />;
  console.log(data);

  const { images, name, age, gender, homePlanet, species, sayings } = data;

  const randomSaying = (say: []) => {
    const random = Math.floor(Math.random() * say.length);
    return say[random];
  };

  return (
    <Section>
      <H2>Character Detail</H2>
      <img src={images.main} alt="캐릭터" />
      <TextContainer>
        <p>
          <strong>Name :</strong> {name.first} {name.middle} {name.last}
        </p>
        <p>
          <strong>age :</strong> {age}
        </p>
        <p>
          <strong>gender :</strong> {gender}
        </p>
        <p>
          <strong>homePlanet :</strong> {homePlanet}
        </p>
        <p>
          <strong>species :</strong> {species}
        </p>
        <p>
          <strong>sayings :</strong> {randomSaying(sayings)}
        </p>
      </TextContainer>
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
  color: #bf754b;
  &::before {
    content: "🥜 ";
  }
`;
const TextContainer = styled.article`
  width: 80%;
  padding: 20px;
  margin-top: 20px;
  background-color: #000;
  color: #fff;
`;
export default CharacterDetail;
