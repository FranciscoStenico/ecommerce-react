import { PropsWithChildren, ReactNode } from "react";

export interface IAnchorProps extends PropsWithChildren {
  Icon?: ReactNode;
  gap?: number | string;
  fontSize?: number | string;
  color?: string;
  hoverEffect?: boolean;
  hasProfile?: boolean;
  profileName?: string;
}

export interface IButtonProps extends PropsWithChildren {
  handler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: string;
  hoverColor?: string;
}

export interface ICustomTextProps extends PropsWithChildren {
  Icon: ReactNode;
  gap?: number | string;
  fontSize?: number | string;
  textDecoration?: string;
  noLimit?: boolean;
}

export interface ICustomCarousel {
  title: string;
  rows?: number;
  items: ICarouselItems[];
}

interface ICarouselItems {
  id: string;
  image?: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  price: number;
  previousPrice: number;
}

export type IRatingProps = { rating: number };
