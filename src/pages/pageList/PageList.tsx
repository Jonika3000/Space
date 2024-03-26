import { ListPlanets } from '../../components/listPlanets/ListPlanets.tsx';
import { useState } from 'react';
import { Body } from '../../utils/types.ts';
import { PlanetInfo } from '../../components/planetInfo/PlanetInfo.tsx';

const ListPage = ({ bodies }: { bodies: Body[] }) => {
  const [selectedBody, setSelectedBody] = useState<Body>(bodies[0]);
  const [favoriteBody, setFavoriteBody] = useState<Body>(bodies[0]);

  return (
    <>
      <ListPlanets
        bodies={[]}
        favoriteBody={favoriteBody}
        onBodyChange={(b) => setSelectedBody(b)}
      />
      <PlanetInfo body={selectedBody} onBodyFavorite={() => setFavoriteBody(selectedBody)} />
    </>
  );
};

export default ListPage;
