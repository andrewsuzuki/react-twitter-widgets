import React from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import AbstractWidget from './AbstractWidget'

export default class Timeline extends React.Component {
  static propTypes = {
    dataSource: PropTypes.object.isRequired,
    options: PropTypes.object,
    onLoad: PropTypes.func,
    template: PropTypes.object
  };

  static defaultProps = {
    options: {},
    onLoad: () => {},
  };

  shouldComponentUpdate(nextProps) {
    const changed = (name) => !isEqual(this.props[name], nextProps[name])
    return changed('dataSource') || changed('options') || changed('template')
  }

  ready = (tw, element, done) => {
    const { dataSource, options, onLoad, template } = this.props

    if (template.type === 'list') {
      // Options and dataSource must be cloned since Twitter Widgets modifies it directly
      tw.widgets.createTimeline(cloneDeep(dataSource), element, cloneDeep(options))
        .then(() => {
          // Widget is loaded
          done()
          onLoad()
        })
    } else {
      // Options and dataSource must be cloned since Twitter Widgets modifies it directly
      tw.widgets.createGridFromCollection(cloneDeep(dataSource.id), element, cloneDeep(options))
        .then(() => {
          // Widget is loaded
          done()
          onLoad()
        })

    }

  }

  render() {
    return React.createElement(AbstractWidget, { ready: this.ready })
  }
}
