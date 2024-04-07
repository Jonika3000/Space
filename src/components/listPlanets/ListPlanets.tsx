import { Body } from '../../utils/types.ts';
import { ItemBody } from '../ItemBody/ItemBody.tsx';

export const ListPlanets = ({
  bodies,
  favoriteBody,
  onBodyChange
}: {
  bodies: Body[] | undefined;
  favoriteBody: Body | undefined;
  onBodyChange: (body: Body) => void;
}) => {
  console.log('ListPlanets re-render');

  return (
    <>
      {bodies?.map((body: Body) => {
        return (
          <button key={body.id} onClick={() => onBodyChange(body)}>
            <ItemBody body={body} isFavorite={favoriteBody?.id === body.id} />
          </button>
        );
      })}
    </>
  );
};
