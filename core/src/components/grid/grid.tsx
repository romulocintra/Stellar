import { Component, Prop, Element, Method } from '@stencil/core';
import { default as eqjs } from 'eq.js';

@Component({
  tag: 'stellar-grid',
  styleUrl: 'grid.css',
  shadow: true
})
export class Grid {
  @Element() element: HTMLElement;

  @Prop({reflectToAttr: true}) cols: number|string = "auto";
  @Prop({reflectToAttr: true}) compact: boolean = false;
  @Prop({reflectToAttr: true}) padding: boolean = false;
  @Prop({reflectToAttr: true}) align: string = "items-start";
  @Prop({reflectToAttr: true}) responsive: boolean|string = true;

  async makeResponsive() {
    if (this.responsive && this.responsive !== "false") {
      eqjs.definePts(this.element, {
        "tiny": 320,
        "small": 480,
        "medium": 640,
        "large": 800,
        "massive": 1024
      });

      this.refresh();
    }
  }

  componentWillLoad() {
    this.makeResponsive()
  }

  componentDidLoad() {
    this.makeResponsive()
  }

  @Method()
  async refresh() {
    var resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(resizeEvent);
  }

  render() {
    return (
      <div class={`grid ${this.align}`}>
        <slot></slot>
      </div>
    );
  }
}
