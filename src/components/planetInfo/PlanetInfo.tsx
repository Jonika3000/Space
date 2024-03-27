import { Body } from '../../utils/types.ts';

export const PlanetInfo = ({
  body,
  onBodyFavorite
}: {
  body: Body;
  onBodyFavorite: () => void;
}) => {
  console.log('PlanetInfo re-render');
  return (
    <>
      <p>Body id: {body.id}</p>
      <p>Body name: {body.name}</p>
      <button onClick={onBodyFavorite}>Favorite</button>
    </>
  );
};
