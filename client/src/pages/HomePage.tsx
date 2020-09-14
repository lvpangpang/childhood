import React from 'react';
import {Link} from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.titleText}>This is HomePage</h1>
      <div style={styles.btnGroup}>
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100%',
    backgroundColor: '#6d6d12'
  },
  titleText: {
    textAlign: 'center'
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}