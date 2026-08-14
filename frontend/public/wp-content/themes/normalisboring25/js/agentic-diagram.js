/**
 * Sanjeevani OS - LiveKit-Style Isometric Agentic Flowchart Controller
 */
(function() {
  function initAgenticDiagram() {
    const stage = document.querySelector('.isometric-stage');
    if (!stage) return;

    // 1. Stack Tile Rotator
    const stacks = document.querySelectorAll('.iso-tile-stack');
    stacks.forEach(stack => {
      const items = stack.querySelectorAll('.iso-tile-stack-item');
      if (items.length < 2) return;

      let currentIndex = 0;
      let interval = null;

      function updateStack() {
        const len = items.length;
        items.forEach((item, idx) => {
          let diff = idx - currentIndex;
          if (diff > len / 2) diff -= len;
          if (diff < -len / 2) diff += len;

          item.classList.remove('focused', 'on-deck', 'exit', 'exit2');

          if (diff === 0) {
            item.classList.add('focused');
          } else if (diff === 1 || (diff < 0 && Math.abs(diff) === len - 1)) {
            item.classList.add('exit');
          } else if (diff === -1) {
            item.classList.add('on-deck');
          } else {
            item.classList.add('exit2');
          }
        });
      }

      function startCycling() {
        if (interval) clearInterval(interval);
        interval = setInterval(() => {
          currentIndex = (currentIndex + 1) % items.length;
          updateStack();
        }, 3600);
      }

      function stopCycling() {
        if (interval) clearInterval(interval);
      }

      stack.addEventListener('mouseenter', stopCycling);
      stack.addEventListener('mouseleave', startCycling);

      updateStack();
      startCycling();
    });

    // 2. Interactive 3 Pillars Hover & Click Highlighting
    const pillars = document.querySelectorAll('.livekit-feature-item, .agentic-term-row, .agentic-pillar-card');
    const nodes = {
      clinical: document.querySelectorAll('.node-clinical'),
      private: document.querySelectorAll('.node-private'),
      predictive: document.querySelectorAll('.node-predictive')
    };

    pillars.forEach(card => {
      const target = card.getAttribute('data-pillar');
      
      card.addEventListener('mouseenter', () => {
        pillars.forEach(p => p.classList.remove('active'));
        card.classList.add('active');

        // Reset any previous highlights
        document.querySelectorAll('.iso-tile, .cloud-telemetry-node, .framework-enclave-box').forEach(el => {
          el.classList.remove('active-highlight');
        });

        if (target && nodes[target]) {
          nodes[target].forEach(node => {
            node.classList.add('active-highlight');
          });
        }
      });

      card.addEventListener('mouseleave', () => {
        document.querySelectorAll('.iso-tile, .cloud-telemetry-node, .framework-enclave-box').forEach(el => {
          el.classList.remove('active-highlight');
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAgenticDiagram);
  } else {
    initAgenticDiagram();
  }

  // Hook into client side page navigation
  window.addEventListener('load', initAgenticDiagram);
  document.addEventListener('swup:contentReplaced', initAgenticDiagram);
})();
