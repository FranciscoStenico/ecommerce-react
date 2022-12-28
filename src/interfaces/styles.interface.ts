export interface IAnchorStyle {
  flexGap?: number | string;
  fontSize?: number | string;
  color?: string;
  hover?: boolean;
  stack?: number;
}

export interface IButtonStyle {
  color?: string;
  hoverColor?: string;
}

export interface IHomepageStyles {
  src: {
    showcase1?: string;
    showcase2?: string;
    showcase3?: string;
    departments1?: string;
    departments2?: string;
    departments3?: string;
    departments4?: string;
  };
}

export interface ICustomTextStyles {
  width: number | string;
  gap?: number | string;
  fontSize?: number | string;
  textDecoration?: string;
}

export interface IProductCardStyles {
  width: string;
}

export interface IHighlightsStyles {
  background: string;
  width: number | false;
}

export interface ICarouselStyles {
  axis: number;
}
