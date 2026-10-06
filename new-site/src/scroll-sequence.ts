import manifest from './bubble-sequence.json';

/** A bounded decoded-image cache: scroll position is the only playback clock. */
export function createScrollSequence(canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d', { alpha: false });
  if (!context) return undefined;
  const mobile = matchMedia('(max-width: 820px)').matches;
  const variant = mobile ? 'mobile' : 'desktop';
  const cacheLimit = mobile ? 20 : 28;
  const images = new Map<number, HTMLImageElement>();
  const loading = new Set<number>();
  const failed = new Set<number>();
  let target = 0;
  let displayed = -1;
  let enabled = false;
  let disposed = false;
  let animationFrame = 0;
  let width = 0;
  let height = 0;
  canvas.dataset.frameCount = String(manifest.frameCount);

  function draw(force = false) {
    if (!context || !images.size || disposed) return;
    const available = [...images.keys()].reduce((best, index) =>
      Math.abs(index - target) < Math.abs(best - target) ? index : best);
    if (!force && available === displayed) return;
    const image = images.get(available)!;
    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
    const imageWidth = image.naturalWidth * scale;
    const imageHeight = image.naturalHeight * scale;
    context.drawImage(image, (width - imageWidth) / 2, (height - imageHeight) / 2, imageWidth, imageHeight);
    displayed = available;
    canvas.dataset.frame = String(available);
    canvas.classList.add('is-ready');
  }

  function scheduleDraw() {
    if (animationFrame || disposed) return;
    animationFrame = requestAnimationFrame(() => { animationFrame = 0; draw(); });
  }

  function desiredFrames() {
    const result = [target];
    if (enabled) for (let distance = 1; distance <= (mobile ? 8 : 10); distance++) {
      result.push(target + distance, target - distance);
    }
    return result.filter(index => index >= 0 && index < manifest.frameCount);
  }

  function pump() {
    if (disposed) return;
    for (const index of desiredFrames()) {
      if (loading.size >= 4) break;
      if (images.has(index) || loading.has(index) || failed.has(index)) continue;
      loading.add(index);
      const image = new Image();
      image.decoding = 'async';
      image.onload = async () => {
        try { await image.decode(); } catch { /* Loaded images remain drawable. */ }
        loading.delete(index);
        if (disposed) return;
        images.set(index, image);
        while (images.size > cacheLimit) {
          const candidates = [...images.keys()].filter(key => key !== target && key !== displayed);
          const farthest = candidates.reduce((a, b) => Math.abs(a - target) > Math.abs(b - target) ? a : b);
          images.delete(farthest);
        }
        scheduleDraw();
        pump();
      };
      image.onerror = () => { loading.delete(index); failed.add(index); pump(); };
      image.src = `/assets/bubble-sequence/${variant}/frame-${String(index + 1).padStart(4, '0')}.webp`;
    }
  }

  function resize() {
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    width = Math.round(innerWidth * ratio);
    height = Math.round(innerHeight * ratio);
    canvas.width = width;
    canvas.height = height;
    draw(true);
  }

  resize();
  pump();
  addEventListener('resize', resize);
  return {
    frameCount: manifest.frameCount,
    setFrame(frame: number) {
      target = Math.max(0, Math.min(manifest.frameCount - 1, Math.round(frame)));
      canvas.dataset.targetFrame = String(target);
      scheduleDraw();
      pump();
    },
    setEnabled(value: boolean) {
      enabled = value;
      canvas.dataset.motion = value ? 'on' : 'off';
      if (!enabled) target = 0;
      scheduleDraw();
      pump();
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      removeEventListener('resize', resize);
      images.clear();
    },
  };
}
