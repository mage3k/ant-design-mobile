/**
 * T for web or react native
 */
export interface SwipeActionPropsType<T> {
  /** whether button is disabled*/
  autoClose?: boolean;
  disabled?: boolean;
  title?: string;
  left?: Array<{
    text: React.ReactNode;
    onPress?: () => void;
    style?: T;
    className?: string;
  }>;
  right?: Array<{
    text: React.ReactNode;
    onPress?: () => void;
    style?: T;
    className?: string;
  }>;
  onOpen?: () => void;
  onClose?: () => void;
}
