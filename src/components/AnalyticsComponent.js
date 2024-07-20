// src/components/AnalyticsComponent.js
import React, { useEffect } from 'react';
import { analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';

function AnalyticsComponent() {
  useEffect(() => {
    logEvent(analytics, 'notification_received');
  }, []);

  return (
    <div>
      <h1>엄준식</h1>
    </div>
  );
}

export default AnalyticsComponent;