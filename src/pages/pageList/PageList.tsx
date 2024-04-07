import { ListPlanets } from '../../components/listPlanets/ListPlanets.tsx';
import { useMemo, useState } from 'react';
import { Body, BodyResponse } from '../../utils/types.ts';
import { PlanetInfo } from '../../components/planetInfo/PlanetInfo.tsx';
import useSWR from 'swr';

const PageList = () => {
  const { data } = useSWR<BodyResponse>('/bodies');
  const [selectedBody, setSelectedBody] = useState<Body | undefined>(data?.bodies[0]);
  const [favoriteBody, setFavoriteBody] = useState<Body | undefined>(data?.bodies[0]);
  const list = useMemo(() => {
    return (
      <ListPlanets
        bodies={data?.bodies}
        favoriteBody={favoriteBody}
        onBodyChange={(b) => setSelectedBody(b)}
      />
    );
  }, [data, favoriteBody]);

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
