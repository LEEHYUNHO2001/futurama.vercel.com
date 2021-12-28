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

  const { images, name } = data;

  return (
    <Section>
      <H2>Character Detail</H2>
      <img src={images.main} alt="캐릭터" />
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

export default CharacterDetail;
