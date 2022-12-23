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
