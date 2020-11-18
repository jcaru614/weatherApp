import * as React from 'react';

export default function MainView(props) {

  const styles = {
    view: {
      position: 'absolute',
      top: '20%',
      left: '35%',
      marginTop: '-50px',
      marginLeft: '-50px',
    },
    subview: {
      position: 'relative',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 55, 0.3)',
      color: 'white',
      padding: '40px',
      width: '500px',
      height: '500px',
      borderRadius: '90px 5px 90px 5px / 90px 5px 90px 5px',
    },
  }

  return (
    <div style={styles.view}>
      <div style={styles.subview}>
        {props.children}
      </div>
    </div>
  );
}
