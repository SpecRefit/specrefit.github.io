const themeButton = document.querySelector('#theme');
themeButton.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  themeButton.setAttribute('aria-label', `Switch to ${isDark ? 'dark' : 'light'} theme`);
});

const ruleButton = document.querySelector('#json-rule');
ruleButton.addEventListener('click', () => {
  const enabled = ruleButton.getAttribute('aria-checked') !== 'true';
  ruleButton.setAttribute('aria-checked', String(enabled));
  const output = document.querySelector('#result-formats');
  output.replaceChildren();
  for (const format of enabled ? ['application/json'] : ['application/json', 'application/xml']) {
    const label = document.createElement('code');
    label.textContent = format;
    if (format === 'application/json') label.className = 'output-json';
    output.append(label);
  }
  document.querySelector('#rule-status').textContent = enabled
    ? 'JSON selected. XML removed from this response.'
    : 'Rule disabled. Both response types are retained.';
});
