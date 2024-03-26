import { Body } from '../../utils/types.ts';

export const PlanetInfo = ({
  body,
  onBodyFavorite
}: {
  body: Body;
  onBodyFavorite: () => void;
}) => {
  return (
    <>
      <a>Body id: {body.id}</a>
      <a>Body name: {body.name}</a>
      <button onClick={onBodyFavorite}>Favorite</button>
    </>
  );
};
