import React from 'react'

import styles from './nav-styles';

const { func, bool } = React.PropTypes

function Nav(props) {
  return (
    <div style={styles.root}>
      <button style={styles.prev} onClick={props.onPrevious}>&#10094;</button>
    <button style={styles.next} onClick={props.onNext}>&#10095;</button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
}

export default Nav
