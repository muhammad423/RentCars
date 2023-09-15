import { ReactNode } from 'react';
export interface CustomBtnProps {
  customCls: string;
  title: string;
  BsArrow?: ReactNode
  handleClick?: () => void;
}

export interface ManifactureProps {
  manifacture: string;
  setManifacture: (manifacture: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year?: number;
}

export interface FilterProps {
  manifacture: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface OptionsFilterProps {
  title: string;
  options: OptionsProps[];
}

export type SearchParamsType = URLSearchParams;

export interface HomeProps {
  // Other properties...
  searchParams: {
    manifacture?: string;
    year?: number;
    fuel?: string;
    limit?: number;
    model?: string;
  };
}

export interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
}