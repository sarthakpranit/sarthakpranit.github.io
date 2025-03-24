
// This file provides global type definitions

declare const __WS_TOKEN__: string;

// Extend Window interface to include our custom property
interface Window {
  __WS_TOKEN__: string;
}

// Extend globalThis to include our custom property
interface globalThis {
  __WS_TOKEN__: string;
}
