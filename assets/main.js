const results = {
  2: { a: 90, b: 95, c: 95, summary: 'At 2 cm/s, Patterns B and C both reach 95%.' },
  3: { a: 90, b: 95, c: 75, summary: 'At 3 cm/s, Pattern B reaches 95%, compared with 90% for A and 75% for C.' },
  6: { a: 90, b: 90, c: 100, summary: 'At 6 cm/s, Pattern C reaches 100%; Patterns A and B each reach 90%.' }
};

document.querySelectorAll('[data-speed]').forEach(button => {
  button.addEventListener('click', () => {
    const speed = button.dataset.speed;
    const result = results[speed];
    document.querySelectorAll('[data-speed]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    for (const pattern of ['a', 'b', 'c']) {
      document.querySelector(`[data-bar="${pattern}"]`).style.width = `${result[pattern]}%`;
      document.querySelector(`[data-value="${pattern}"]`).textContent = `${result[pattern]}%`;
    }
    document.getElementById('texture-chart').setAttribute('aria-label', `Texture classification at ${speed} centimeters per second: Pattern A ${result.a}%, Pattern B ${result.b}%, Pattern C ${result.c}%.`);
    document.getElementById('speed-summary').textContent = result.summary;
  });
});

const dialog = document.getElementById('figure-dialog');
document.querySelectorAll('.zoomable').forEach(link => {
  link.addEventListener('click', event => {
    if (typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    const img = link.querySelector('img');
    const enlarged = document.getElementById('dialog-image');
    enlarged.src = link.href;
    enlarged.alt = img.alt;
    document.getElementById('dialog-caption').textContent = img.alt;
    dialog.showModal();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});

document.getElementById('copy-bibtex').addEventListener('click', async () => {
  const text = document.getElementById('bibtex').textContent;
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = 'BibTeX copied to clipboard.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('bibtex'));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Select and copy the highlighted BibTeX with Ctrl+C or ⌘C.';
  }
});
