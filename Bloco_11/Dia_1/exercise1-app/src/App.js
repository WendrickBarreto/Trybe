import React from 'react';
import tasks from './Exercise1'

function App() {
  return (
    <ul>{ tasks.map(tasks => <li>{ tasks }</li>) }</ul>
  );
}

export default App;
