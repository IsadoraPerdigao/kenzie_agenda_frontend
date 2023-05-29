export interface ButtonProps {
    text: string;
    type: "button" | "submit" | "reset" | undefined;
    callBack?: () => void
  }