
/// <reference types="vite/client" />

// Ensure __WS_TOKEN__ is recognized by TypeScript
interface Window {
  __WS_TOKEN__?: string;
}
