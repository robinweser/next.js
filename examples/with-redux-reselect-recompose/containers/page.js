import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { compose, setDisplayName, pure } from 'recompose'
import { addCount } from '../actions'
import { selectLight, selectLastUpdate, selectCount } from '../selectors'
import Page from '../components/page'

export default compose(
  setDisplayName('PageContainer'),
  connect(
    createSelector(
      selectLight(),
      selectLastUpdate(),
      selectCount(),
      (light, lastUpdate, count) => ({ light, lastUpdate, count })
    ),
    { addCount }
  ),
  pure
)(Page)
