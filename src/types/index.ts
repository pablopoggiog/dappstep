declare global {
  interface Window {
    ethereum?: any;
  }
}

export interface Wave {
  waver: string;
  message: string;
  timestamp: string;
  winner: boolean;
}
