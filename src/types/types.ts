import { Dispatch, SetStateAction } from 'react';

export interface IErrorApi {
  setErrorApi: (errorApi: boolean) => void;
}

export interface ICharacter {
  name?: string;
  id?: string;
  img?: string;
}

export type TypeSetState<T>=Dispatch<SetStateAction<T>>