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
      |
| `watchSlidesProgress`   | `watch-slides-progress`   |                                                                                              | `boolean`                                  |
| `watchSlidesVisibility` | `watch-slides-visibility` |                                                                                              | `boolean`                                  |


## Events

| Event                     | Description                                         |
| ------------------------- | --------------------------------------------------- |
| `ionSlideDidChange`       | Emitted after the active slide has changed.         |
| `ionSlideDrag`            | Emitted when the slider is actively being moved.    |
| `ionSlideNextEnd`         | Emitted when the next slide has ended.              |
| `ionSlideNextStart`       | Emitted when the next slide has started.            |
| `ionSlidePrevEnd`         | Emitted when the previous slide has ended.          |
| `ionSlidePrevStart`       | Emitted when the previous slide has started.        |
| `ionSlideReachEnd`        | Emitted when the slider is at the last slide.       |
| `ionSlideReachStart`      | Emitted when the slider is at its initial position. |
| `ionSlideTouchEnd`        | Emitted when the user releases the touch.           |
| `ionSlideTouchStart`      | Emitted when the user first touches the slider.     |
| `ionSlideTransitionEnd`   | Emitted when the slide transition has ended.        |
| `ionSlideTransitionStart` | Emitted when the slide transition has started.      |
| `ionSlideWillChange`      | Emitted before the active slide has changed.        |


## Methods

| Method             | Description                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `getActiveIndex`   | Get the index of the active slide.                                                              |
| `getPreviousIndex` | Get the index of the previous slide.                                                            |
| `isBeginning`      | Get whether or not the current slide is the first slide.                                        |
| `isEnd`            | Get whether or not the current slide is the last slide.                                         |
| `length`           | Get the total number of slides.                                                                 |
| `lockSwipeToNext`  | Lock or unlock the ability to slide to the next slides.                                         |
| `lockSwipeToPrev`  | Lock or unlock the ability to slide to the previous slides.                                     |
| `lockSwipes`       | Lock or unlock the ability to slide to change slides.                                           |
| `slideNext`        | Transition to the next slide.                                                                   |
| `slidePrev`        | Transition to the previous slide.                                                               |
| `slideTo`          | Transition to the specified slide.                                                              |
| `startAutoplay`    | Start auto play.                                                                                |
| `stopAutoplay`     | Stop auto play.                                                                                 |
| `update`           | Update the underlying slider implementation. Call this if you've added or removed child slides. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
