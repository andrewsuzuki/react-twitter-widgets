# react-twitter-widgets

[![npm version](https://badge.fury.io/js/react-twitter-widgets.svg)](https://badge.fury.io/js/react-twitter-widgets)
[![npm downloads](https://img.shields.io/npm/dm/react-twitter-widgets.svg)](https://badge.fury.io/js/react-twitter-widgets)
[![GitHub issues](https://img.shields.io/github/issues/andrewsuzuki/react-twitter-widgets)](https://github.com/andrewsuzuki/react-twitter-widgets/issues)

Quick and easy Twitter widgets for React.

Available widgets: `Timeline`, `Share`, `Follow`, `Hashtag`, `Mention`, `Tweet`.

See below for usage.

## Demo

**[Storybook / Live Demo](https://andrewsuzuki.github.io/react-twitter-widgets/)**

## Installation

```sh
// with npm
npm install --save react-twitter-widgets

// with yarn
yarn add react-twitter-widgets
```

## Example

```javascript
import { Timeline } from 'react-twitter-widgets'

// Timeline (with options)
<Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'TwitterDev'
  }}
  options={{
    height: '400'
  }}
/>

// Tweet (without options)
<Tweet tweetId="841418541026877441" />
```

## Usage

[**🔗 Official Twitter Documentation**](https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions)

Available widgets: `Timeline`, `Share`, `Follow`, `Hashtag`, `Mention`, `Tweet`

**`Timeline`** requires a `dataSource` object prop.
The source type can be `profile`, `likes`, `list`, `collection`, or `url`.
They each require their own co-fields; see Twitter documentation.

**`Share`** requires a `url` prop.

**`Follow`** and **`Mention`** require a `username` prop. NOTE that the Twitter
documentation now refers to this as *screenName*.

**`Hashtag`** requires a `hashtag` prop.

**`Tweet`** requires a `tweetId` prop. Ex. `'511181794914627584'`

### Common Props

All widgets accept these props.

- `options` (object)
  - To learn more about the available options, refer to the Twitter documentation. There are four options that are common to all widgets (`lang`, `dnt`, `related`, and `via`). There are further options for button widgets, tweet buttons, Timeline, and Tweet.
- `onLoad` (function)
  - Called every time the widget is loaded. A widget will reload if its props change.
- `renderError` (function)
  - Render prop. Rendered if widget cannot be loaded (no internet connection, screenName not found, bad props, etc).
  - Example: `renderError={(_err) => <p>Could not load timeline</p>}`

## Further Information

* This library loads the remote *Twitter for Websites* script.
* Twitter widgets are only loaded in the browser. A blank div will be rendered during SSR.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits

* Andrew Suzuki - @andrewsuzuki - [andrewsuzuki.com](http://andrewsuzuki.com)

## License

MIT
