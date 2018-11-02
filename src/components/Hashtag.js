import React from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import AbstractWidget from './AbstractWidget'

export default class Hashtag extends React.Component {
  static propTypes = {
    hashtag: PropTypes.string.isRequired,
    options: PropTypes.object,
    onLoad: PropTypes.func,
  };

  static defaultProps = {
    options: {},
    onLoad: () => {},
  };

  shouldComponentUpdate(nextProps) {
    const changed = (name) => !isEqual(this.props[name], nextProps[name])
    return changed('hashtag') || changed('options')
  }

  ready = (tw, element, done) => {
    const { hashtag, options, onLoad } = this.props

    // Options must be cloned since Twitter Widgets modifies it directly
    tw.widgets.createHashtagButton(hashtag, element, cloneDeep(options))
    .then((result) => {
      // Widget is loaded
      done()
      onLoad(result)
    })
  }

  render() {
    return React.createElement(AbstractWidget, { ready: this.ready })
  }
}
