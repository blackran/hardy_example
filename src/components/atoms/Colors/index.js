function Colors(isDark = false) {
  // Primary Color
  const PrimaryDark = isDark ? '#e8f5e9' : '#4caf50';
  const PrimaryLight = isDark ? '#4caf50' : '#e8f5e9';

  // Secondary Color
  const Disabled = isDark ? '#b0b0b0' : '#d7d7d7';
  const Error = '#fa573f';

  const White = isDark ? '#0e3110' : '#ffffff';
  const Black = isDark ? '#ffffff' : '#0e3110';
  const Yellow = isDark ? '#ffff00' : '#e2e204';

  return { PrimaryDark, PrimaryLight, Disabled, Error, White, Black, Yellow };
}

export default Colors;
