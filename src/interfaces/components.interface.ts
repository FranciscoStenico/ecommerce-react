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
  noLimit?: boolean;
}
