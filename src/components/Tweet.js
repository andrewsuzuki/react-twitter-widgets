import React from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import AbstractWidget from './AbstractWidget'

export default class Tweet extends React.Component {
  static propTypes = {
    tweetId: PropTypes.string.isRequired,
    options: PropTypes.object,
    onLoad: PropTypes.func,
    onError: PropTypes.func,
  };

  static defaultProps = {
    options: {},
    onLoad: () => {},
    onError: () => {},
  };

  shouldComponentUpdate(nextProps) {
    const changed = (name) => !isEqual(this.props[name], nextProps[name])
    return changed('tweetId') || changed('options')
  }

  ready = (tw, element, done) => {
    const { tweetId, options, onLoad, onError } = this.props

    // Options must be cloned since Twitter Widgets modifies it directly
    tw.widgets.createTweet(tweetId, element, cloneDeep(options))
    .then((res) => {
      // Widget is loaded
      done()
      
      if (res) onLoad();
      else onError();
    })
  }

  render() {
    return React.createElement(AbstractWidget, { ready: this.ready })
  }
}
