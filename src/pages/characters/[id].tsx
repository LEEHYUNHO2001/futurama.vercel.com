import { NextPage } from "next";
import { useRouter } from "next/router";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { useData } from "../../hooks/useData";

const CharacterDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useData("characters", id);
  if (error) return <Error />;
  if (!data) return <Loading />;
  console.log(data);

  const { images, name } = data;

  return (
    <div>
      <h3>Character</h3>
      <img src={images.main} alt="캐릭터" />
    </div>
  );
};

export default CharacterDetail;
