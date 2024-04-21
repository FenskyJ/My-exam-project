// TestErrorPage.js
import React from 'react';

function TestErrorPage() {
  // This function will throw an error
  const throwError = () => {
    throw new Error('This is a test error!');
  };

  return (
    <div>
      <h1>Test Error Page</h1>
      <button onClick={throwError}>Throw Error</button>
    </div>
  );
}

export default TestErrorPage;
