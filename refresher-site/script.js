(() => {
  const pages = Array.from(document.querySelectorAll('.page'));
  const chrome = document.getElementById('chrome');
  const controls = document.getElementById('controls');
  const indexList = document.getElementById('index');
  const counter = document.getElementById('counter');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const muteBtn = document.getElementById('mute');
  const beginBtn = document.getElementById('begin');
  const bed = document.getElementById('bed');

  let i = 0;
  let started = false;

  // Build the section index dots (skips the landing at index 0)
  pages.forEach((p, idx) => {
    const li = document.createElement('li');
    li.title = p.dataset.title || '';
    li.addEventListener('click', () => go(idx));
    indexList.appendChild(li);
  });

  function render() {
    pages.forEach((p, idx) => p.classList.toggle('is-active', idx === i));
    Array.from(indexList.children).forEach((dot, idx) =>
      dot.classList.toggle('is-active', idx === i)
    );
    counter.textContent = `${i} / ${pages.length - 1}`;
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === pages.length - 1;

    // Chrome appears once you've left the landing.
    const showChrome = started && i > 0;
    chrome.hidden = !started;
    controls.hidden = !started;

    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  function go(n) {
    if (n < 0 || n >= pages.length) return;
    i = n;
    render();
  }

  function next() { go(i + 1); }
  function prev() { go(i - 1); }

  // Begin: unlocks audio and advances to page 1.
  beginBtn.addEventListener('click', () => {
    started = true;
    if (bed && bed.querySelector('source')) {
      bed.volume = 0.55;
      bed.play().catch(() => { /* user can unmute later */ });
    }
    go(1);
  });

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // Mute toggle
  muteBtn.addEventListener('click', () => {
    if (!bed) return;
    bed.muted = !bed.muted;
    muteBtn.classList.toggle('is-muted', bed.muted);
    muteBtn.textContent = bed.muted ? '♪̸' : '♪';
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!started) {
      if (e.key === 'Enter' || e.key === ' ') beginBtn.click();
      return;
    }
    // Don't hijack arrows while a <details> has keyboard focus on its summary
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    else if (e.key === 'Home') { go(1); }
    else if (e.key === 'End') { go(pages.length - 1); }
  });

  render();
})();
