import { Component, Prop, State, Element, Method, Event, EventEmitter } from "@stencil/core";
import { blurringEase } from "../../utils";

@Component({
  tag: "stellar-toggle-option",
  styleUrl: "toggle-option.css",
})
export class ToggleOption {
  @Element() element: HTMLElement;
  @State() input: HTMLInputElement;

  @Prop({reflectToAttr: true}) type: string = "checkbox";
  @Prop({mutable: true, reflectToAttr: true}) checked: boolean = false;
  @Prop() checkedDefault: boolean = false;
  @Prop({reflectToAttr: true}) single: boolean;
  @Prop({reflectToAttr: true}) icon: boolean;
  @Prop({mutable: true}) tooltip: string;
  @Prop({mutable: true, reflectToAttr: true}) disabled: boolean;

  @Prop() for: string = "";
  @Prop({mutable: true, reflectToAttr: true}) name: string;
  @Prop() default: string = "";
  @Prop() value: string;
  @Prop() required: boolean;
  @Prop() inline: boolean;
  @Prop() size: boolean;

  @Prop() selectedCopy: string = "Selected!";

  @State() _type: string = "checkbox";
  @State() focused: boolean = false;
  @State() blur: number = 0;
  @State() ease: TweenInstance = blurringEase({
    end: 10,
    start: -1,
    duration: 250,
    tick: (args) => {
      this.blur = args.value;
    },
    complete: () => {
      this.blur = 0;
    },
  });

  @Event() change: EventEmitter;

  componentWillLoad () {
    this.updateRealType();
  }

  componentDidLoad () {
    this.input = this.element.querySelector('input.input');

    if (this.checkedDefault) {
      this.checked = this.checkedDefault;
      this.change.emit({ element: this.element, value: this.value, checked: this.input.checked });
    }
  }

  updateRealType () {
    if (this.type === "radio-block") {
      this._type = "radio";
    } else if (this.type === "checkbox-block") {
      this._type = "checkbox";
    } else {
      this._type = this.type;
    }
  }

  @Method()
  async confirm() {
    console.log(this.input)
    if (this.input.checked !== this.checked) {
      this.checked = this.input.checked;
    }
  }

  @Method()
  updateSelected (value: boolean) {
    this.input.checked = value;
    this.checked = value;
    this.change.emit({ element: this.element, value: this.value, checked: this.input.checked });
  }

  onToggleChange (e) {
    e.stopPropagation();
    this.checked = this.input.checked;
    this.ease.start();
    this.change.emit({ element: this.element, value: this.value, checked: this.checked });
  }

  onFocus () {
    this.focused = true;
  }

  onBlur () {
    this.focused = false;
  }

  onKeyUp (e) {
    if (e.key === "Enter") {
      this.input.checked = !this.input.checked; this.onToggleChange(e)
    }
  }

  renderCheckbox () {
    if (this.type === "checkbox" || this.type === "radio") {
      return (
        <div class={this.focused ? "box focused" : "box"}>
          <div class={this.checked ? "indicator active" : "indicator"}>
            {this.type === "checkbox" && <stellar-asset name="checkmark"></stellar-asset>}
          </div>
        </div>
      );
    }
  }

  renderRadioBlock () {
    if (this.type === "radio-block") {
      return (
        <div class="wrapper">
          <div class={this.focused ? "box focused" : "box"}>
            <div class={this.checked ? "indicator active" : "indicator"} />
          </div>
          <div class="block-content">
            <slot></slot>
          </div>
        </div>
      );
    }
  }

  renderCheckBlock () {
    if (this.type === "checkbox-block") {
      return (
        <div class="wrapper">
          <div class={this.focused ? "box focused" : "box"}>
            <div class={this.checked ? "indicator active" : "indicator"}>
              <stellar-asset name="checkmark" block></stellar-asset>
            </div>
          </div>
          <div class="block-content">
            <slot></slot>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <label>
        <input type="hidden" name={`${this.for}[${this.name}]`} value={this.default} />
        <input class="input" type={this._type} id={`${this.for}_${this.name}_${this.value}`} name={`${this.for}[${this.name}]`} checked={this.checked} value={this.value} required={this.required} onChange={e => this.onToggleChange(e) } onFocus={() => this.onFocus()} onBlur={() => this.onBlur()} onKeyUp={e => this.onKeyUp(e)} onClick={e => { e.stopPropagation() }} />

        { this.renderCheckbox() }

        { ["radio", "checkbox"].indexOf(this.type) !== -1 && <p><slot></slot></p> }

        { this.renderRadioBlock() }
        { this.renderCheckBlock() }

        { ["radio", "checkbox"].indexOf(this.type) === -1 &&
          <stellar-blur horizontal={this.blur} class={this.checked ? "status active" : "status"}>
            <stellar-tag size="small" color="theme-base5">{this.selectedCopy}</stellar-tag>
          </stellar-blur>
        }

        { this.tooltip && <stellar-tooltip align="bottom-left">{this.tooltip}</stellar-tooltip> }
      </label>
    )
  }
}
