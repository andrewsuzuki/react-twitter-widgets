// Example props for each widget

export default {
  Follow: {
    username: 'reactjs',
  },
  Hashtag: {
    hashtag: 'reactjs',
  },
  Mention: {
    username: 'reactjs',
    options: {
      size: 'large',
    }
  },
  Share: {
    url: 'https://github.com/andrewsuzuki/react-twitter-widgets',
  },
  Timeline: {
    dataSource: {
      sourceType: 'profile',
      screenName: 'reactjs'
    },
    options: {
      username: 'reactjs',
      height: '600'
    },
  },
  Tweet: {
    tweetId: '841418541026877441',
    options: {
      theme: 'dark',
    }
  },
}
