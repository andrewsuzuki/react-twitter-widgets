# react-twitter-widgets

Alleviates the need for Twitter's default 2008-style widget snippets.

Available widgets: `Timeline`, `Share`, `Follow`, `Hashtag`, `Mention`, `Tweet`.

See below for usage.

## Installation

```
npm install --save react-twitter-widgets
```

## Example

[Click here](./site/screenshot.png) for a preview of all available widgets with example code.

```javascript
import { Timeline } from 'react-twitter-widgets'
// var Timeline = require('react-twitter-widgets').Timeline

ReactDOM.render((
  <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'twitterdev'
    }}
    options={{
      username: 'TwitterDev',
      height: '400',
      lang: 'en'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />
), document.getElementById('root'))
```

# Usage

Available widgets: `Timeline`, `Share`, `Follow`, `Hashtag`, `Mention`, `Tweet`

All widgets take an optional options object prop. To learn more about the available options (height, width, align, count, etc), see [this link](https://dev.twitter.com/web/javascript/creating-widgets).

`Timeline` requires a `dataSource` object prop, see [here](https://dev.twitter.com/web/javascript/creating-widgets#timelines) for info. The source type can be profile, likes, list, collection, URL, or legacy widget configuration.

`Share` requires a `url` prop.

`Follow` and `Mention` require a `username` prop.

`Hashtag` requires a `hashtag` prop.

`Tweet` requires a `tweetId` prop. Ex. `'511181794914627584'`

All widgets accept an optional `onLoad` callback, which is called every time the widget is loaded/reloaded (both on initial load and updates).

Additional options such as localization and component dimensions can be found [on this page](https://dev.twitter.com/web/javascript/creating-widgets) under 'Options'.

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
