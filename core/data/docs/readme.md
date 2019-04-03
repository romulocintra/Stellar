# stellar-accordian



<!-- Auto Generated Below -->


## Usage

### Align

<stellar-grid style="--grid-width: 270px">
	<stellar-button block>
		Hover over me...
		<stellar-tooltip align="top-left">
			<stellar-avatar name="William M. Riley" size="tiny" class="mr2"></stellar-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</stellar-tooltip>
	</stellar-button>
	<stellar-button block>
		Hover over me...
		<stellar-tooltip align="top-center">
			<stellar-avatar name="William M. Riley" size="tiny" class="mr2"></stellar-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</stellar-tooltip>
	</stellar-button>
	<stellar-button block>
		Hover over me...
		<stellar-tooltip align="top-right">
			<stellar-avatar name="William M. Riley" size="tiny" class="mr2"></stellar-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</stellar-tooltip>
	</stellar-button>
	<stellar-button block>
		Hover over me...
		<stellar-tooltip align="middle-left">
			<stellar-avatar name="William M. Riley" size="tiny" class="mr2"></stellar-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</stellar-tooltip>
	</stellar-button>
	<stellar-button block>
		Hover over me...
		<stellar-tooltip align="middle-right">
			<stellar-avatar name="William M. Riley" size="tiny" class="mr2"></stellar-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</stellar-tooltip>
	</stellar-button>
	<stellar-button block>
		Hover over me...
		<stellar-tooltip align="bottom-left">
			<stellar-avatar name="William M. Riley" size="tiny" class="mr2"></stellar-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</stellar-tooltip>
	</stellar-button>
	<stellar-button block>
		Hover over me...
		<stellar-tooltip align="bottom-center">
			<stellar-avatar name="William M. Riley" size="tiny" class="mr2"></stellar-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</stellar-tooltip>
	</stellar-button>
	<stellar-button block>
		Hover over me...
		<stellar-tooltip align="bottom-right">
			<stellar-avatar name="William M. Riley" size="tiny" class="mr2"></stellar-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</stellar-tooltip>
	</stellar-button>
</stellar-grid>


### Default

<stellar-button block>
	Hover over me...
	<stellar-tooltip>
		<stellar-avatar name="William M. Riley" size="tiny" class="mr2"></stellar-avatar>
		<span>
			William M. Riley
			<small class="db o-70">Joined Feb. 2nd</small>
		</span>
	</stellar-tooltip>
</stellar-button>



## Properties

| Property | Attribute | Description | Type                            | Default    |
| -------- | --------- | ----------- | ------------------------------- | ---------- |
| `align`  | `align`   |             | `"center" \| "left" \| "right"` | `"center"` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
alue if the card is a button.                                     | `string`                                           | `"#"`       |


## Events

| Event  | Description | Type                |
| ------ | ----------- | ------------------- |
| `flip` |             | `CustomEvent<void>` |


## Methods

### `flip_card(e?: UIEvent) => Promise<void>`



#### Parameters

| Name | Type      | Description |
| ---- | --------- | ----------- |
| `e`  | `UIEvent` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
essing when clicked.                                                   | `boolean`                                                  | `false`     |
| `size`        | `size`        | Sets the size of the button. Can be tiny, small, medium, or large.                                    | `string`                                                   | `"medium"`  |
| `tag`         | `tag`         | Allows the button to render for different tags.                                                       | `"button" \| "link" \| "route-link" \| "span" \| "submit"` | `"link"`    |
| `target`      | `target`      | Sets the target on the anchor tag if the button is a link.                                            | `string`                                                   | `'_self'`   |
| `value`       | `value`       | Sets the value on the button if the button is an input.                                               | `string`                                                   | `''`        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
