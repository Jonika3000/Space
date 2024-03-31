import { ListPlanets } from '../../components/listPlanets/ListPlanets.tsx';
import { useMemo, useState } from 'react';
import { Body } from '../../utils/types.ts';
import { PlanetInfo } from '../../components/planetInfo/PlanetInfo.tsx';

const PageList = ({ bodies }: { bodies: Body[] }) => {
  const [selectedBody, setSelectedBody] = useState<Body>(bodies[0]);
  const [favoriteBody, setFavoriteBody] = useState<Body>(bodies[0]);
  const list = useMemo(() => {
    return (
      <ListPlanets
        bodies={bodies}
        favoriteBody={favoriteBody}
        onBodyChange={(b) => setSelectedBody(b)}
      />
    );
  }, [bodies, favoriteBody]);

  const info = useMemo(() => {
    return <PlanetInfo body={selectedBody} onBodyFavorite={() => setFavoriteBody(selectedBody)} />;
  }, [selectedBody]);

  return (
    <>
      {list}
      {info}
    </>
  );
};

export default PageList;
