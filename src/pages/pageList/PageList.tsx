import { ListPlanets } from '../../components/listPlanets/ListPlanets.tsx';
import { useMemo, useState } from 'react';
import { Body } from '../../utils/types.ts';
import { PlanetInfo } from '../../components/planetInfo/PlanetInfo.tsx';
import { InitialArray } from "../../utils/raw-data.ts";

const ListPage = () => {
  const bodies = InitialArray;
  const [selectedBody, setSelectedBody] = useState<Body>(bodies[0]);
  const [favoriteBody, setFavoriteBody] = useState<Body>(bodies[0]);

  return (
    <>
      <ListPlanets
        bodies={bodies}
        favoriteBody={favoriteBody}
        onBodyChange={(b) => setSelectedBody(b)}
      />
      <PlanetInfo body={selectedBody} onBodyFavorite={() => setFavoriteBody(selectedBody)} />
    </>
  );
};

export default ListPage;
