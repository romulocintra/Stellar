/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import 'ionicons';


export namespace Components {

  interface StellarAccordion {
    'label': string;
    'name': string;
    'open': boolean;
    'refresh': () => void;
    'tight': boolean;
  }
  interface StellarAccordionAttributes extends StencilHTMLAttributes {
    'label'?: string;
    'name'?: string;
    'open'?: boolean;
    'tight'?: boolean;
  }

  interface StellarAsset {
    'align': string;
    'ariaLabel': string;
    'block': boolean;
    'language': string;
    'name': string;
    'src': string;
  }
  interface StellarAssetAttributes extends StencilHTMLAttributes {
    'align'?: string;
    'ariaLabel'?: string;
    'block'?: boolean;
    'language'?: string;
    'name'?: string;
    'src'?: string;
  }

  interface StellarAvatar {
    'color': string;
    'initials': string;
    'name': string;
    'processing': boolean;
    'shape': "circle"|"square"|"rectangle"|"diamond"|"hexagon"|"star"|"message";
    'size': string;
    'src': string;
    'tooltip': boolean;
  }
  interface StellarAvatarAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'initials'?: string;
    'name'?: string;
    'processing'?: boolean;
    'shape'?: "circle"|"square"|"rectangle"|"diamond"|"hexagon"|"star"|"message";
    'size'?: string;
    'src'?: string;
    'tooltip'?: boolean;
  }

  interface StellarBlur {
    'horizontal': number;
    'setBlurFilter': () => void;
    'vertical': number;
  }
  interface StellarBlurAttributes extends StencilHTMLAttributes {
    'horizontal'?: number;
    'vertical'?: number;
  }

  interface StellarBreadcrumb {
    'color': string;
    'disabled': boolean;
    'first': boolean;
    'href': string;
    'label': string;
    'last': boolean;
    'target': string;
  }
  interface StellarBreadcrumbAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'disabled'?: boolean;
    'first'?: boolean;
    'href'?: string;
    'label'?: string;
    'last'?: boolean;
    'target'?: string;
  }

  interface StellarBreadcrumbs {
    'color': string;
    'description': string;
    'home': string;
    'icon': string;
    'icon_size': number;
    'icon_src': string;
    'label': string;
  }
  interface StellarBreadcrumbsAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'description'?: string;
    'home'?: string;
    'icon'?: string;
    'icon_size'?: number;
    'icon_src'?: string;
    'label'?: string;
  }

  interface StellarButton {
    /**
    * Sets the button or link as an active state.
    */
    'active': boolean;
    /**
    * Sets the button or link to render at full width to the parent.
    */
    'block': boolean;
    /**
    * Sets the button or link to provide the affordance of a dangerous action.
    */
    'danger': boolean;
    /**
    * Sets the button or link as disabled and not-interactable.
    */
    'disabled': boolean;
    /**
    * Sets the href on the anchor tag if the button is a link.
    */
    'for': string;
    'ghost': boolean;
    /**
    * Sets the href on the anchor tag if the button is a link.
    */
    'href': string;
    /**
    * Sets the button or link as a button with only an icon.
    */
    'icon': boolean;
    /**
    * Sets the button or link as an outlined button.
    */
    'invert': boolean;
    /**
    * Sets accessibility options on the buttons
    */
    'label': string;
    /**
    * Sets the name on the button if the button is an input. Allows the button to act as an item in a form.
    */
    'name': string;
    /**
    * Sets the button or link as an outlined button.
    */
    'outline': boolean;
    /**
    * Sets the padding inside of the button. Can be small, medium, or large.
    */
    'padding': string|"small"|"medium"|"large";
    /**
    * Sets the button or link to render as a pill.
    */
    'pill': boolean;
    /**
    * Sets the button or link as processing when clicked.
    */
    'processable': boolean;
    /**
    * Sets the size of the button. Can be tiny, small, medium, or large.
    */
    'size': string|"tiny"|"small"|"medium"|"large";
    /**
    * Allows the button to render for different tags.
    */
    'tag': "button"|"submit"|"link"|"span"|"route-link";
    /**
    * Sets the target on the anchor tag if the button is a link.
    */
    'target': string;
    /**
    * Sets the value on the button if the button is an input.
    */
    'value': string;
  }
  interface StellarButtonAttributes extends StencilHTMLAttributes {
    /**
    * Sets the button or link as an active state.
    */
    'active'?: boolean;
    /**
    * Sets the button or link to render at full width to the parent.
    */
    'block'?: boolean;
    /**
    * Sets the button or link to provide the affordance of a dangerous action.
    */
    'danger'?: boolean;
    /**
    * Sets the button or link as disabled and not-interactable.
    */
    'disabled'?: boolean;
    /**
    * Sets the href on the anchor tag if the button is a link.
    */
    'for'?: string;
    'ghost'?: boolean;
    /**
    * Sets the href on the anchor tag if the button is a link.
    */
    'href'?: string;
    /**
    * Sets the button or link as a button with only an icon.
    */
    'icon'?: boolean;
    /**
    * Sets the button or link as an outlined button.
    */
    'invert'?: boolean;
    /**
    * Sets accessibility options on the buttons
    */
    'label'?: string;
    /**
    * Sets the name on the button if the button is an input. Allows the button to act as an item in a form.
    */
    'name'?: string;
    /**
    * Sets the button or link as an outlined button.
    */
    'outline'?: boolean;
    /**
    * Sets the padding inside of the button. Can be small, medium, or large.
    */
    'padding'?: string|"small"|"medium"|"large";
    /**
    * Sets the button or link to render as a pill.
    */
    'pill'?: boolean;
    /**
    * Sets the button or link as processing when clicked.
    */
    'processable'?: boolean;
    /**
    * Sets the size of the button. Can be tiny, small, medium, or large.
    */
    'size'?: string|"tiny"|"small"|"medium"|"large";
    /**
    * Allows the button to render for different tags.
    */
    'tag'?: "button"|"submit"|"link"|"span"|"route-link";
    /**
    * Sets the target on the anchor tag if the button is a link.
    */
    'target'?: string;
    /**
    * Sets the value on the button if the button is an input.
    */
    'value'?: string;
  }

  interface StellarCard {
    'flip_card': (e?: UIEvent) => Promise<void>;
    /**
    * Sets the href on the anchor tag if the button is a link.
    */
    'flip_icon': string;
    /**
    * Let's a card be flippable
    */
    'flippable': boolean;
    /**
    * Renders a flipped card
    */
    'flipped': boolean;
    /**
    * Sets the href on the anchor tag if the button is a link.
    */
    'for': string;
    /**
    * Sets the href if the card is a link.
    */
    'href': string;
    /**
    * Sets the name if the card is a button.
    */
    'name': string;
    /**
    * Sets the padding inside of the button. Can be small, medium, or large.
    */
    'padding': string|"small"|"medium"|"large";
    /**
    * Renders a shadow on the card
    */
    'shadow': string|"light"|"medium"|"heavy";
    /**
    * Sets the element to render the card as - an anchor tag, a button, or a div.
    */
    'tag': "stencil-route-link"|"a"|"button"|"div";
    'transition': boolean;
    /**
    * Sets the element to render the card as - an anchor tag, a button, or a div.
    */
    'type': string;
    /**
    * Sets the value if the card is a button.
    */
    'value': string;
  }
  interface StellarCardAttributes extends StencilHTMLAttributes {
    /**
    * Sets the href on the anchor tag if the button is a link.
    */
    'flip_icon'?: string;
    /**
    * Let's a card be flippable
    */
    'flippable'?: boolean;
    /**
    * Renders a flipped card
    */
    'flipped'?: boolean;
    /**
    * Sets the href on the anchor tag if the button is a link.
    */
    'for'?: string;
    /**
    * Sets the href if the card is a link.
    */
    'href'?: string;
    /**
    * Sets the name if the card is a button.
    */
    'name'?: string;
    'onFlip'?: (event: CustomEvent) => void;
    /**
    * Sets the padding inside of the button. Can be small, medium, or large.
    */
    'padding'?: string|"small"|"medium"|"large";
    /**
    * Renders a shadow on the card
    */
    'shadow'?: string|"light"|"medium"|"heavy";
    /**
    * Sets the element to render the card as - an anchor tag, a button, or a div.
    */
    'tag'?: "stencil-route-link"|"a"|"button"|"div";
    'transition'?: boolean;
    /**
    * Sets the element to render the card as - an anchor tag, a button, or a div.
    */
    'type'?: string;
    /**
    * Sets the value if the card is a button.
    */
    'value'?: string;
  }

  interface CopyWrap {
    'align': string;
    'full': boolean;
  }
  interface CopyWrapAttributes extends StencilHTMLAttributes {
    'align'?: string;
    'full'?: boolean;
  }

  interface StellarGrid {
    'align': string;
    'cols': number|string;
    'compact': boolean;
    'padding': boolean;
    'refresh': () => Promise<void>;
    'responsive': boolean|string;
    'swappable': boolean;
    'swappableSelector': string;
  }
  interface StellarGridAttributes extends StencilHTMLAttributes {
    'align'?: string;
    'cols'?: number|string;
    'compact'?: boolean;
    'onOrderChanged'?: (event: CustomEvent) => void;
    'padding'?: boolean;
    'responsive'?: boolean|string;
    'swappable'?: boolean;
    'swappableSelector'?: string;
  }

  interface StellarImage {
    'bg': string;
    'height': number;
    'medium': () => Promise<any>;
    'nozoom': boolean;
    'poster': string;
    'width': number;
  }
  interface StellarImageAttributes extends StencilHTMLAttributes {
    'bg'?: string;
    'height'?: number;
    'nozoom'?: boolean;
    'poster'?: string;
    'width'?: number;
  }

  interface StellarLayout {
    'align': "baseline"|"center"|"top"|"bottom";
    'padding': "none"|"tiny"|"small"|"medium"|"large";
    'refresh': () => void;
    'size': "tiny"|"small"|"medium"|"large"|"full"|"flush";
    'type': string;
  }
  interface StellarLayoutAttributes extends StencilHTMLAttributes {
    'align'?: "baseline"|"center"|"top"|"bottom";
    'padding'?: "none"|"tiny"|"small"|"medium"|"large";
    'size'?: "tiny"|"small"|"medium"|"large"|"full"|"flush";
    'type'?: string;
  }

  interface StellarTooltip {
    'align': "left"|"center"|"right";
  }
  interface StellarTooltipAttributes extends StencilHTMLAttributes {
    'align'?: "left"|"center"|"right";
  }
}

declare global {
  interface StencilElementInterfaces {
    'StellarAccordion': Components.StellarAccordion;
    'StellarAsset': Components.StellarAsset;
    'StellarAvatar': Components.StellarAvatar;
    'StellarBlur': Components.StellarBlur;
    'StellarBreadcrumb': Components.StellarBreadcrumb;
    'StellarBreadcrumbs': Components.StellarBreadcrumbs;
    'StellarButton': Components.StellarButton;
    'StellarCard': Components.StellarCard;
    'CopyWrap': Components.CopyWrap;
    'StellarGrid': Components.StellarGrid;
    'StellarImage': Components.StellarImage;
    'StellarLayout': Components.StellarLayout;
    'StellarTooltip': Components.StellarTooltip;
  }

  interface StencilIntrinsicElements {
    'stellar-accordion': Components.StellarAccordionAttributes;
    'stellar-asset': Components.StellarAssetAttributes;
    'stellar-avatar': Components.StellarAvatarAttributes;
    'stellar-blur': Components.StellarBlurAttributes;
    'stellar-breadcrumb': Components.StellarBreadcrumbAttributes;
    'stellar-breadcrumbs': Components.StellarBreadcrumbsAttributes;
    'stellar-button': Components.StellarButtonAttributes;
    'stellar-card': Components.StellarCardAttributes;
    'copy-wrap': Components.CopyWrapAttributes;
    'stellar-grid': Components.StellarGridAttributes;
    'stellar-image': Components.StellarImageAttributes;
    'stellar-layout': Components.StellarLayoutAttributes;
    'stellar-tooltip': Components.StellarTooltipAttributes;
  }


  interface HTMLStellarAccordionElement extends Components.StellarAccordion, HTMLStencilElement {}
  var HTMLStellarAccordionElement: {
    prototype: HTMLStellarAccordionElement;
    new (): HTMLStellarAccordionElement;
  };

  interface HTMLStellarAssetElement extends Components.StellarAsset, HTMLStencilElement {}
  var HTMLStellarAssetElement: {
    prototype: HTMLStellarAssetElement;
    new (): HTMLStellarAssetElement;
  };

  interface HTMLStellarAvatarElement extends Components.StellarAvatar, HTMLStencilElement {}
  var HTMLStellarAvatarElement: {
    prototype: HTMLStellarAvatarElement;
    new (): HTMLStellarAvatarElement;
  };

  interface HTMLStellarBlurElement extends Components.StellarBlur, HTMLStencilElement {}
  var HTMLStellarBlurElement: {
    prototype: HTMLStellarBlurElement;
    new (): HTMLStellarBlurElement;
  };

  interface HTMLStellarBreadcrumbElement extends Components.StellarBreadcrumb, HTMLStencilElement {}
  var HTMLStellarBreadcrumbElement: {
    prototype: HTMLStellarBreadcrumbElement;
    new (): HTMLStellarBreadcrumbElement;
  };

  interface HTMLStellarBreadcrumbsElement extends Components.StellarBreadcrumbs, HTMLStencilElement {}
  var HTMLStellarBreadcrumbsElement: {
    prototype: HTMLStellarBreadcrumbsElement;
    new (): HTMLStellarBreadcrumbsElement;
  };

  interface HTMLStellarButtonElement extends Components.StellarButton, HTMLStencilElement {}
  var HTMLStellarButtonElement: {
    prototype: HTMLStellarButtonElement;
    new (): HTMLStellarButtonElement;
  };

  interface HTMLStellarCardElement extends Components.StellarCard, HTMLStencilElement {}
  var HTMLStellarCardElement: {
    prototype: HTMLStellarCardElement;
    new (): HTMLStellarCardElement;
  };

  interface HTMLCopyWrapElement extends Components.CopyWrap, HTMLStencilElement {}
  var HTMLCopyWrapElement: {
    prototype: HTMLCopyWrapElement;
    new (): HTMLCopyWrapElement;
  };

  interface HTMLStellarGridElement extends Components.StellarGrid, HTMLStencilElement {}
  var HTMLStellarGridElement: {
    prototype: HTMLStellarGridElement;
    new (): HTMLStellarGridElement;
  };

  interface HTMLStellarImageElement extends Components.StellarImage, HTMLStencilElement {}
  var HTMLStellarImageElement: {
    prototype: HTMLStellarImageElement;
    new (): HTMLStellarImageElement;
  };

  interface HTMLStellarLayoutElement extends Components.StellarLayout, HTMLStencilElement {}
  var HTMLStellarLayoutElement: {
    prototype: HTMLStellarLayoutElement;
    new (): HTMLStellarLayoutElement;
  };

  interface HTMLStellarTooltipElement extends Components.StellarTooltip, HTMLStencilElement {}
  var HTMLStellarTooltipElement: {
    prototype: HTMLStellarTooltipElement;
    new (): HTMLStellarTooltipElement;
  };

  interface HTMLElementTagNameMap {
    'stellar-accordion': HTMLStellarAccordionElement
    'stellar-asset': HTMLStellarAssetElement
    'stellar-avatar': HTMLStellarAvatarElement
    'stellar-blur': HTMLStellarBlurElement
    'stellar-breadcrumb': HTMLStellarBreadcrumbElement
    'stellar-breadcrumbs': HTMLStellarBreadcrumbsElement
    'stellar-button': HTMLStellarButtonElement
    'stellar-card': HTMLStellarCardElement
    'copy-wrap': HTMLCopyWrapElement
    'stellar-grid': HTMLStellarGridElement
    'stellar-image': HTMLStellarImageElement
    'stellar-layout': HTMLStellarLayoutElement
    'stellar-tooltip': HTMLStellarTooltipElement
  }

  interface ElementTagNameMap {
    'stellar-accordion': HTMLStellarAccordionElement;
    'stellar-asset': HTMLStellarAssetElement;
    'stellar-avatar': HTMLStellarAvatarElement;
    'stellar-blur': HTMLStellarBlurElement;
    'stellar-breadcrumb': HTMLStellarBreadcrumbElement;
    'stellar-breadcrumbs': HTMLStellarBreadcrumbsElement;
    'stellar-button': HTMLStellarButtonElement;
    'stellar-card': HTMLStellarCardElement;
    'copy-wrap': HTMLCopyWrapElement;
    'stellar-grid': HTMLStellarGridElement;
    'stellar-image': HTMLStellarImageElement;
    'stellar-layout': HTMLStellarLayoutElement;
    'stellar-tooltip': HTMLStellarTooltipElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
