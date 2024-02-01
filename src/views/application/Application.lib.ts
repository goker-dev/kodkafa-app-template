import type { Coordinates, EventMap, Events } from '@/views/application/Application.types.ts';

export class Application {
  container: HTMLDivElement = document.createElement('div');
  canvas: HTMLCanvasElement = document.createElement('canvas');
  context: CanvasRenderingContext2D | null = this.canvas.getContext('2d');
  mouseDown: boolean = false;
  width: number = 100;
  height: number = 100;
  gridSize = 60;
  init(container: HTMLDivElement, width: number, height: number, gridSize: number = 50) {
    this.container = container;
    this.setSize(width, height, gridSize);
    this.container.appendChild<HTMLCanvasElement>(this.canvas);
  }
  private grid() {
    if (!this.context || !this.gridSize) return;
    const s = this.gridSize;
    const pL = 0;
    const pT = 0;
    const pR = 0;
    const pB = 0;

    this.context.fillRect(0, 0, this.width, this.height);
    this.context.beginPath();
    this.context.strokeStyle = '#333';
    for (let x = pL; x <= this.width - pR; x += s) {
      this.context.moveTo(x, pT);
      this.context.lineTo(x, this.height - pB);
    }
    for (let y = pT; y <= this.height - pB; y += s) {
      this.context.moveTo(pL, y);
      this.context.lineTo(this.width - pR, y);
    }
    this.context.stroke();
    this.context.closePath();
  }

  private start = () => {
    this.mouseDown = true;
    this.context?.beginPath();
  };
  private move = ({ x, y }: Coordinates) => {
    if (this.mouseDown && this.context) {
      this.context.strokeStyle = '#fff';
      this.context.lineJoin = 'round';
      this.context.lineWidth = 3;
      this.context.lineTo(x, y);
      this.context.stroke();
    }
  };
  private stop = () => {
    this.mouseDown = false;
    this.context?.closePath();
  };

  public events: EventMap = {
    mousedown: this.start,
    mousemove: this.move,
    mouseup: this.stop,
    touchstart: this.start,
    touchmove: this.move,
    touchend: this.stop,
  };

  private handler = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    if (!Object.keys(this.events).includes(e.type)) return;
    const type = e.type as unknown as Events;
    const coors =
      e instanceof MouseEvent
        ? {
            x: e.clientX - (this.container?.offsetLeft || 0),
            y: e.clientY - (this.container?.offsetTop || 0),
          }
        : {
            x: e.targetTouches[0]?.pageX - (this.container?.offsetLeft || 0),
            y: e.targetTouches[0]?.pageY - (this.container?.offsetTop || 0),
          };
    this.events[type](coors);
  };

  private setSize(width: number, height: number, gridSize: number) {
    this.width = this.canvas.width = width - (width % gridSize);
    this.height = this.canvas.height = height - (height % gridSize);
    this.gridSize = gridSize;
    this.grid();
  }

  // ------------------------------------------------------------
  // PUBLIC METHODS
  // ------------------------------------------------------------
  public resize() {
    this.setSize(this.container.clientWidth, this.container.clientHeight, this.gridSize);
  }

  public addListeners() {
    this.canvas?.addEventListener('mousedown', this.handler, false);
    this.canvas?.addEventListener('mousemove', this.handler, false);
    this.canvas?.addEventListener('mouseup', this.handler, false);
    this.canvas?.addEventListener('touchstart', this.handler, false);
    this.canvas?.addEventListener('touchmove', this.handler, false);
    this.canvas?.addEventListener('touchend', this.handler, false);
    window.addEventListener('resize', () => this.resize(), false);
  }
  public exportImage(cb?: () => void) {
    if (!this.canvas) return;
    const dataURL = this.canvas.toDataURL('image/png', 100);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = dataURL;
    link.download = 'image';
    document.body.appendChild(link);
    link.click();
    setTimeout(function () {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(dataURL);
      if (cb) cb();
    }, 100);
  }
}
