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
  className?: string;
}

export interface ICustomDepartmentCard extends PropsWithChildren {
  src: string;
}

export interface ICustomCarousel {
  title?: string;
  filter?: string;
  inverse?: boolean;
  highlight?: boolean;
}

export interface ICarouselItems {
  id: number;
  image?: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  price: number;
  previousPrice: number | null;
  sale: number | null;
  department: string;
}

export interface ICardProps {
  item: ICarouselItems;
}

export type IRatingProps = { rating: ICarouselItems["rating"] };

export type ICurrencyProps = { value: ICarouselItems["price"] };
