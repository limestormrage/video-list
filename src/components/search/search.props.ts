import { ISearchFilm } from '../../types/types';

export interface ISearchProps {
  SearchCallBack: ({ search, type }: ISearchFilm) => void;
}
