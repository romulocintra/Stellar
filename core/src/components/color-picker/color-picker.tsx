import { Component, Prop, Element, State, Event, EventEmitter, Listen, Watch } from '@stencil/core';
import { colors } from '../../global/colors';
import properties from 'css-custom-properties'

@Component({
    tag: 'stellar-color-picker',
    styleUrl: 'color-picker.css',
    shadow: true
})
export class ColorPicker {
    @Element() element: HTMLElement;
    @Prop({mutable: true}) value: string = "red";
    @State() options: Array<string>;
    @Event() change: EventEmitter;

    componentWillLoad() {
        this.options = Object.keys(colors).filter((color) => {
            // @ts-ignore
            return !["base", "white", "black"].includes(color)
        })

        properties.set({
            "--selected-color": `var(--${this.value}5)`
        }, this.element);
    }

    @Watch('value')
    valueChangedHandler(value: string) {
        this.change.emit(value);

        properties.set({
            "--selected-color": `var(--${this.value}5)`
        }, this.element);
    }

    @Listen('inputValueChanged')
    inputChangedHandler(event: CustomEvent) {
        this.value = event.detail

        properties.set({
            "--selected-color": `var(--${this.value}5)`
        }, this.element);
    }

    render() {
        return (
            <div class="wrap">
                {this.options.map(option => <button
                    value={option}
                    class={option}
                    style={{ "background": `var(--${option}5)` }}
                    onClick={() => { this.value = option; }} />
                )}
                <div class="placeholder" />
            </div>
        );
    }
}
