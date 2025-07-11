import React from 'react';
import * as Sentry from '@sentry/react';
import { Button, Card } from './ui';

function LoginScreen({ onLogin }) {
  const handleLoginClick = () => {
    // Create a span to measure login button performance
    Sentry.startSpan(
      {
        op: 'ui.click',
        name: 'Login Button Click',
      },
      (span) => {
        span.setAttribute('component', 'LoginScreen');
        span.setAttribute('action', 'login_initiated');
        
        onLogin();
      },
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50" data-testid="login-screen">
      <Card className="w-full max-w-md">
        <Card.Body className="p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Vikings Event Management</h1>
          <p className="text-gray-600 mb-6">
            Please log in with your Online Scout Manager account to continue.
          </p>
          <Button 
            variant="scout-blue"
            size="lg"
            onClick={handleLoginClick}
            className="w-full"
            data-testid="login-button"
          >
            Login with Online Scout Manager (OSM)
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginScreen;
