import { Component, Prop, State, Element, Method, Watch } from '@stencil/core';
import {delay} from '../../utils';
import properties from 'css-custom-properties';
import mediumZoom from 'medium-zoom';
import { ColorThief } from './vendor/colorThief.js';

@Component({
  tag: 'stellar-image',
  styleUrl: 'image.css',
  shadow: true
})

export class Picture {
  @Element() element: HTMLElement;
  @State() figure: HTMLElement;

  @Prop({mutable: true}) poster: string;

  @Prop() width: number;
  @Prop() height: number;

  @Prop({reflectToAttr: true}) nozoom: boolean = false;

  @Prop({mutable: true}) bg: string = "auto";

  @State() aspectRatio: number;

  @State() sources: Array<any> = [];

  @State() io: IntersectionObserver;
  @State() active: boolean = false;

  @State() zoom;
  @State() palette;

  componentWillLoad() {
    this.prepareSources();
    this.setBG();
    this.updateAspectRatio();
  }

  componentDidLoad() {
    this.addIntersectionObserver();
    this.figure = this.element.shadowRoot.querySelector('figure');
  }

  mountZoom() {
    let zoomable = this.element.shadowRoot.querySelector('img');

    this.zoom = mediumZoom(zoomable, {
      background: `${this.bg}`,
      scrollOffset: 1,
      margin: 30
    });
  }

  @Watch('poster')
  handlePosterChange () {
    this.setBG();
  }

  @Method()
  async medium() {
    return this.zoom
  }

  async handleImage() {
    this.active = true;

    if (!this.nozoom) {
      await delay(200);
      this.mountZoom();
    }
  }

  addIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any) => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.handleImage();
          this.removeIntersectionObserver();
        }
      })

      this.io.observe(this.element.shadowRoot.querySelector('figure'));
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => {
        this.handleImage();
      }, 300);
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  getPictureColor() {
    const img = new Image(80, 80);

    img.addEventListener('load', () => {
      const cf = new ColorThief();
      this.palette = cf.getColor(img)

      properties.set({
        "--bg": `rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`
      }, this.element);

      this.bg = `rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`;

      if (this.zoom) {
        this.zoom.update({
          background: this.bg
        })
      }
    }, false);

    img.src = this.poster;
    img.crossOrigin = "Anonymous";
  }

  setBG() {
    if (this.bg === "auto") {
      this.getPictureColor();
    } else {
      properties.set({
        "--bg": `${this.bg}`
      }, this.element);
    }
  }

  prepareSources() {
    const sources = this.element.querySelectorAll("source");

    let sourcesArray = [];

    [].forEach.call(sources, (source) => {
      sourcesArray = [...sourcesArray, source];
      source.hidden = true
    });

    this.sources = sourcesArray;
    this.poster = this.poster ? this.poster : this.sources[this.sources.length - 1].srcset;
  }

  updateAspectRatio() {
    this.aspectRatio = (this.height / this.width) * 100;

    properties.set({
      "--aspect_ratio": `${this.aspectRatio}%`,
      "--width": `${this.width}px`,
      "--height": `${this.height}px`,
    }, this.element);

  }

  renderPicture() {
    if (this.active) {
      return [
        this.sources.map((source) =>
          <source srcSet={source.srcset} media={source.media ? source.media : false} />
        ),
        <img src={this.sources[0].srcset} class="final_image" />
      ]
    }
  }

  render() {
    return (
      <figure itemtype="http://schema.org/ImageObject" class={this.active ? 'loaded' : ''} onClick={() => { if (this.zoom) { this.zoom.open() } }} >
        <div class="overlay"></div>
        <picture>
          { this.renderPicture() }
        </picture>
        <div class="placeholder" style={{"background-image": `url(${this.poster})`}} />
      </figure>
    );
  }
}
