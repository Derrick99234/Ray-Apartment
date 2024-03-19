// InstallButton.js
import React, { useState, useEffect } from 'react';

const InstallButton = () => {
  const [installButtonVisible, setInstallButtonVisible] = useState(false);
  const [installPromptEvent, setInstallPromptEvent] = useState(null);

  useEffect(() => {
    if ('serviceWorker' in navigator && 'beforeinstallprompt' in window) {
      setInstallButtonVisible(true);

      window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        setInstallPromptEvent(event);
      });
    }
  }, []);

  const handleInstallClick = () => {
    if (installPromptEvent) {
      installPromptEvent.prompt();
      installPromptEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setInstallPromptEvent(null);
      });
    }
  };

  return (
    <>
      {installButtonVisible && (
        <button onClick={handleInstallClick}>Install App</button>
      )}
    </>
  );
};

export default InstallButton;
