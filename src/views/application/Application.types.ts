export type Coordinates = {
  x: number;
  y: number;
};
export type Events =
  | 'mousedown'
  | 'mousemove'
  | 'mouseup'
  | 'touchstart'
  | 'touchmove'
  | 'touchend';

export type EventMap = {
  [e in Events]: (p: Coordinates) => void;
};
