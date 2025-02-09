declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready(): void;
        expand(): void;
        close(): void;
        MainButton: {
          text: string;
          show(): void;
          hide(): void;
          onClick(fn: () => void): void;
        };
        BackButton: {
          show(): void;
          hide(): void;
          onClick(fn: () => void): void;
        };
        themeParams: {
          bg_color: string;
          text_color: string;
          hint_color: string;
          link_color: string;
          button_color: string;
          button_text_color: string;
        };
      };
    };
  }
}

export function initTelegramApp() {
  if (window.Telegram?.WebApp) {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
  }
}

export function useTelegramTheme() {
  const theme = window.Telegram?.WebApp?.themeParams;
  return {
    backgroundColor: theme?.bg_color || 'white',
    textColor: theme?.text_color || 'black',
    hintColor: theme?.hint_color || 'gray',
    linkColor: theme?.link_color || 'blue',
    buttonColor: theme?.button_color || 'blue',
    buttonTextColor: theme?.button_text_color || 'white',
  };
}

export function getTelegramUrl(username: string): string {
  return `https://t.me/${username.replace('@', '')}`;
} 