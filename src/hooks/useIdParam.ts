import { useParams } from 'react-router-dom';

export const useIdParam = () => {
  const { id: idStr } = useParams();
  if (idStr === undefined) {
    throw new Error('Отсутствует обязательный параметр "id"');
  }

  return idStr;
};
