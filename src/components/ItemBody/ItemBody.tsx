import { Body } from '../../utils/types.ts';

export const ItemBody = ({ body, isFavorite }: { body: Body; isFavorite: boolean }) => {
  return (
    <>
      <div>
        <a>{body.name}</a>
        {isFavorite && <i>&#9734;</i>}
      </div>
    </>
  );
};
