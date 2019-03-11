declare interface EaseParams {
    tick?: ({start, end, duration, progress, ease, value}) => void;
    complete?: ({start, end, duration, progress, ease, value}) => void;
    start?: number;
    end?: number;
    duration?: number;
    delay?: number;
    curve?: string;
  }

  declare interface TweenInstance {
    start: () => void
    stop: () => void
    on: (name: string, callback: Function) => void
    progress: number
  }
