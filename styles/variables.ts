export const Radius = {
  Small: '4px',
  Medium: '8px',
  X_Medium: '12px',
  Large: '40px',
  X_Large: '60px',
} as const;

export const Shadow = {
  Elevation_8: '0px 2px 8px rgba(0, 0, 0, 0.16)',
  Elevation_16: '0px 2px 16px rgba(0, 0, 0, 0.08)',
} as const;

export const BreakPoint = {
  lg: '@media (min-width: 1200px)',
};

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export type FontWeight = 'normal' | 'bold';

export type Alignment =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'baseline'
  | 'stretch';

export const FontFamily = {
  Default: '-apple-system, BlinkMacSystemFont, Meiryo, sans-serif',
};
