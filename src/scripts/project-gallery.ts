class ProjectGallery extends HTMLElement {
    connectedCallback() {
      if (this.dataset.enhanced) return;
      const track = this.querySelector<HTMLElement>('.gallery-track');
      const slides = this.querySelectorAll('.gallery-slide');
      if (!track || !slides.length) return;
      this.dataset.enhanced = 'true';
      this.querySelectorAll<HTMLImageElement>('img[data-fallback]').forEach(img => {
        const fallback = () => {
          if (img.dataset.failed) return;
          img.dataset.failed = 'true';
          img.src = img.dataset.fallback!;
          img.alt = 'Screenshot unavailable — project cover';
        };
        img.addEventListener('error', fallback);
        if (img.complete && img.naturalWidth === 0) fallback();
      });
      const prev = this.querySelector<HTMLButtonElement>('[data-gallery-prev]');
      const next = this.querySelector<HTMLButtonElement>('[data-gallery-next]');
      const count = this.querySelector('.gallery-count');
      let current = 0;
      const update = () => {
        current = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / Math.max(1, track.clientWidth))));
        if (prev) prev.disabled = current === 0;
        if (next) next.disabled = current === slides.length - 1;
        if (count) count.textContent = `${current + 1} / ${slides.length}`;
      };
      const move = (delta: number) => {
        const index = Math.max(0, Math.min(slides.length - 1, current + delta));
        track.scrollTo({ left: index * track.clientWidth, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      };
      let drag: { x: number; left: number; index: number; moved: boolean } | null = null;
      let suppressClick = false;
      track.addEventListener('dragstart', event => event.preventDefault());
      track.addEventListener('pointerdown', event => {
        if (event.pointerType !== 'mouse' || event.button !== 0) return;
        suppressClick = false;
        drag = { x: event.clientX, left: track.scrollLeft, index: current, moved: false };
      });
      track.addEventListener('pointermove', event => {
        if (!drag) return;
        const delta = event.clientX - drag.x;
        if (!drag.moved && Math.abs(delta) < 6) return;
        if (!drag.moved) {
          drag.moved = true;
          track.setPointerCapture(event.pointerId);
          track.classList.add('is-dragging');
        }
        track.scrollLeft = drag.left - delta;
      });
      const endDrag = (event: PointerEvent) => {
        if (!drag) return;
        const state = drag;
        drag = null;
        track.classList.remove('is-dragging');
        if (!state.moved) return;
        suppressClick = true;
        const delta = event.clientX - state.x;
        current = state.index;
        move(Math.abs(delta) > Math.min(80, track.clientWidth * .15) ? (delta < 0 ? 1 : -1) : 0);
        if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
      };
      track.addEventListener('pointerup', endDrag);
      track.addEventListener('pointercancel', endDrag);
      track.addEventListener('pointerleave', () => { if (drag && !drag.moved) drag = null; });
      track.addEventListener('click', event => {
        if (suppressClick) { event.preventDefault(); event.stopPropagation(); suppressClick = false; }
      }, true);
      prev?.addEventListener('click', () => move(-1));
      next?.addEventListener('click', () => move(1));
      track.addEventListener('scroll', update, { passive: true });
      track.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1);
      });
      update();
    }
  }
  if (!customElements.get('project-gallery')) customElements.define('project-gallery', ProjectGallery);
