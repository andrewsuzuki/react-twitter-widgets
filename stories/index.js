import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Follow,
  Hashtag,
  Mention,
  Share,
  Timeline,
  Tweet,
} from '../src/index'

storiesOf('Components', module)
  .add('Follow', () => (
    <Follow username="reactjs" />
  ))
  .add('Hashtag', () => (
    <Hashtag hashtag="reactjs" />
  ))
  .add('Mention', () => (
    <Mention username="reactjs" options={{ size: 'large' }} />
  ))
  .add('Share', () => (
    <Share url="https://github.com/andrewsuzuki/react-twitter-widgets" />
  ))
  .add('Timeline', () => (
    <Timeline
      dataSource={{ sourceType: 'profile', screenName: 'reactjs' }}
      options={{ username: 'reactjs', height: '600' }}
    />
  ))
  .add('Tweet', () => (
    <Tweet tweetId="1001521260482904064" />
  ))
