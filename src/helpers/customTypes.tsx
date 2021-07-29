const defaultValues = {
  bgPrimary: 'bg-blue-500',
  textDark: 'text-gray-700',
  textLight: 'text-gray-100',
  disabled: 'bg-gray-200 text-gray-400 cursor-not-allowed',
  focusPrimary: 'focus:outline-none focus:bg-blue-700 focus:border-transparent',
  hoverPrimary: 'hover:bg-blue-700',
};

enum ButtonTypes {
  Default,
  Outline,
  Text,
}
enum ButtonSizes {
  Small,
  Regular,
  Large,
}
enum ButtonColors {
  primary,
  secondary,
  danger,
}

export { ButtonTypes, ButtonSizes, ButtonColors, defaultValues };
