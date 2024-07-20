// src/App.js
import React from 'react';
import FirestoreComponent from './components/FirestoreComponent';
import AnalyticsComponent from './components/AnalyticsComponent';

function App() {
  return (
    <div>
      <AnalyticsComponent />
      <FirestoreComponent />
    </div>
  );
}

export default App;