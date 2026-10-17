(() => {
  'use strict';
  const section = document.querySelector('.experience-section');
  if (!section) return;
  const svg = section.querySelector('.journey-lines');
  const currentCard = section.querySelector('[data-current-card]');
  const previousCard = section.querySelector('[data-previous-card]');
  const housePin = section.querySelector('[data-house-pin]');
  const previousPin = section.querySelector('[data-previous-pin]');
  const ornaments = section.querySelectorAll('.journey-art');
  svg.style.visibility = 'hidden';
  housePin.style.visibility = 'hidden';
  previousPin.style.visibility = 'hidden';
  let pending = false;
  const updateTrail = () => {
    pending = false;
    const bounds = section.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const relativeBox = element => {
      const box = element.getBoundingClientRect();
      return { left: box.left - bounds.left, top: box.top - bounds.top,
        right: box.right - bounds.left, bottom: box.bottom - bounds.top,
        width: box.width, height: box.height };
    };
    const current = relativeBox(currentCard);
    // Match the unchanged 2048 x 1536 photograph, cover scale, and 46% 39% framing.
    const scale = Math.max(bounds.width / 2048, bounds.height / 1536);
    const imageWidth = 2048 * scale;
    const imageHeight = 1536 * scale;
    const imageLeft = (bounds.width - imageWidth) * .46;
    const imageTop = (bounds.height - imageHeight) * .39;
    const house = { left: imageLeft + imageWidth * .35, right: imageLeft + imageWidth * .55,
      top: imageTop + imageHeight * .315, bottom: imageTop + imageHeight * .46 };
    const narrow = window.matchMedia('(max-width: 860px)').matches;
    const nominalSize = narrow ? 76 : 88;
    const roomOnLeft = house.left - 30;
    let size, pin;
    if (roomOnLeft >= 40) {
      size = Math.min(nominalSize, roomOnLeft);
      pin = { x: house.left - 18 - size / 2, y: bounds.height * .39 };
    } else {
      // Portrait cover crops can fill the viewport with the house; use the gap above it.
      size = Math.min(nominalSize, Math.max(28, house.top - current.bottom - 16));
      pin = { x: 12 + size / 2, y: house.top - 8 - size * .12 };
    }
    housePin.style.width = `${size}px`;
    housePin.style.height = `${size}px`;
    housePin.style.left = `${pin.x}px`;
    housePin.style.top = `${pin.y}px`;
    const point = element => {
      const box = relativeBox(element);
      return { x: box.left + box.width / 2, y: box.top + box.height * .88 };
    };
    previousPin.style.top = '';
    const previousBox = relativeBox(previousPin);
    if (previousBox.right > house.left - 8 && previousBox.left < house.right + 8 &&
        previousBox.bottom > house.top - 8 && previousBox.top < house.bottom + 8) {
      previousPin.style.top = `${house.bottom + 12 - relativeBox(previousCard).top}px`;
    }
    const previous = point(previousPin);
    const start = { x: Math.max(current.left + 24, Math.min(current.right - 24, pin.x)), y: current.bottom - 1 };
    const round = value => Math.round(value * 10) / 10;
    const xy = point => `${round(point.x)} ${round(point.y)}`;
    const leaderDrop = pin.y - start.y;
    const leaderWave = Math.min(28, Math.max(0, leaderDrop * .25),
      pin.y < house.top ? 28 : Math.max(0, house.left - 12 - pin.x));
    const leader = `M${xy(start)} C${xy({ x: start.x - leaderWave, y: start.y + leaderDrop * .35 })} ${xy({ x: pin.x + leaderWave, y: pin.y - leaderDrop * .35 })} ${xy(pin)}`;
    // Every cubic stays in a safe half-plane: above, left of, or below the house.
    // The leftward bend may leave a portrait viewport instead of crossing its roof.
    const leftLane = Math.min(pin.x, house.left - 28, previous.x - 12);
    const wave = Math.min(narrow ? 48 : 100,
      leftLane > 12 ? leftLane - 12 : 40, (previous.x - leftLane) * .75);
    let trail = `M${xy(pin)}`;
    let descent = pin;
    if (pin.y < house.top && pin.x > house.left - 12) {
      descent = { x: leftLane, y: house.top - 10 };
      trail += ` C${xy({ x: pin.x - (pin.x - leftLane) * .45, y: pin.y - 8 })} ${xy({ x: leftLane, y: pin.y })} ${xy(descent)}`;
    }
    const low = Math.max(house.bottom + 55, previous.y + (narrow ? 48 : 80));
    const drop = low - descent.y;
    const turn = { x: leftLane, y: low };
    trail += ` C${xy({ x: descent.x, y: descent.y + drop * .38 })} ${xy({ x: leftLane - wave, y: low - drop * .18 })} ${xy(turn)}`;
    // S reflects the preceding handle for a continuous, gently looping return.
    trail += ` S${xy({ x: previous.x - Math.min(70, (previous.x - leftLane) * .35), y: Math.max(house.bottom + 24, previous.y - 75) })} ${xy(previous)}`;
    svg.setAttribute('viewBox', `0 0 ${round(bounds.width)} ${round(bounds.height)}`);
    section.querySelectorAll('[data-route="leader"]').forEach(path => path.setAttribute('d', leader));
    section.querySelectorAll('[data-route="trail"]').forEach(path => path.setAttribute('d', trail));
    // Keep map flourishes off the roof and stonework at every cover crop.
    ornaments.forEach(ornament => {
      const box = relativeBox(ornament);
      const overlaps = box.right > house.left - 8 && box.left < house.right + 8 &&
        box.bottom > house.top - 8 && box.top < house.bottom + 8;
      ornament.style.visibility = overlaps ? 'hidden' : '';
    });
    housePin.style.visibility = '';
    previousPin.style.visibility = '';
    svg.style.visibility = '';
  };
  const schedule = () => {
    if (!pending) { pending = true; window.requestAnimationFrame(updateTrail); }
  };
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(schedule);
    [section, currentCard, previousCard].forEach(element => observer.observe(element));
  }
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('pageshow', schedule);
  if (document.fonts?.ready) document.fonts.ready.then(schedule);
  schedule();
})();
