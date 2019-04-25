import { Component, Prop, State, Element, Listen } from '@stencil/core';

@Component({
  tag: 'stellar-content',
  styleUrl: 'content.css',
  shadow: true
})

export class Content {
  @Element() element: HTMLElement;
  @State() parent: any;
  @Prop({mutable: true, reflectToAttr: true}) open: boolean = false;
  @Prop({mutable: true, reflectToAttr: true}) for: string;
  @Prop({mutable: true, reflectToAttr: true}) name: string;
  @Prop({mutable: true, reflectToAttr: true}) behavior: string;

  @Listen('document:contentChange')
  async handleActive (event: CustomEvent) {
    this.parent = event.detail.parent;

    const contents = await this.parent.contents()

    contents.forEach((element) => {
      element.open = element.name === event.detail.name;
    });
  }

  render() {
    return (
      <div class="wrap" role="tabpanel" aria-hidden={!this.open ? "true" : "false"}>
        <slot></slot>
      </div>
    );
  }
}
