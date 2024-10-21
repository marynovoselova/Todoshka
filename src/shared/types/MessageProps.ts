export interface MessageProps {
  text: string;
  iconName: keyof typeof import('@shared/assets/icons');
  iconAriaLabel: string;
}
