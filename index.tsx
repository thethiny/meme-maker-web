import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Register the service worker for COEP/COOP headers
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register(new URL("/service-worker.js", import.meta.url).href)
            .then((reg) => {
                console.log("SW registered:", reg);

                // check if crossOriginIsolated and if not ask user to refresh page
                if (!window.crossOriginIsolated) {
                    // force refresh page
                    // window.location.reload(); // might trigger infinite reload
                    alert("Video Plugin loaded. Please refresh the page to generate!");
                }
            })
            .catch((err) => {
                console.error("SW registration failed:", err);
                alert("Video generator is not available! Your browser either does not support it or something went wrong.");
            });
    });
}


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);