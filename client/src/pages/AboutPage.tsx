import React from 'react';
import {Link} from 'react-router-dom';

export default function AboutPage(props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.titleText}>This is AboutPage</h1>
      <div style={styles.btnGroup}>
        <Link to='detail'>Detail</Link>
        <div onClick={() => {props.history.goBack()}}>返回Index</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100%',
    backgroundColor: '#6D4DC2'
  },
  titleText: {
    color: '#FFF',
    textAlign: 'center'
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}