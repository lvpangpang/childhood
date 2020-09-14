import React from 'react';

export default function DetailPage(props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.titleText}>This is DetailPage</h1>
      <div style={styles.btnGroup}>
        <div onClick={() => {props.history.goBack()}}>返回About</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100%',
    backgroundColor: '#80D4AC'
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