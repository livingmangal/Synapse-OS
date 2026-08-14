(function() {
  function initOcrCarousel() {
    var buttons = document.querySelectorAll('.CardsCarouselButton');
    var cards = document.querySelectorAll('.CardsCarouselCard');
    var step1 = document.getElementById('ocr-engine-step1');
    var step2 = document.getElementById('ocr-engine-step2');
    var step3 = document.getElementById('ocr-engine-step3');
    var steps = [step1, step2, step3];

    if (!buttons.length || !cards.length) return;

    var activeIndex = 0;
    var autoTimer = null;

    function setStep(idx) {
      activeIndex = idx;
      buttons.forEach(function(btn, i) {
        btn.classList.toggle('active', i === idx);
      });
      cards.forEach(function(card, i) {
        card.classList.toggle('active', i === idx);
        card.style.display = (i === idx) ? 'block' : 'none';
      });
      steps.forEach(function(step, i) {
        if (!step) return;
        if (i === idx) {
          step.classList.add('active');
          step.setAttribute('transform', 'matrix(1.1,0,0,1.1,-30.12578,-62.8)');
        } else {
          step.classList.remove('active');
          var defaultTransform = i === 0 ? 'matrix(1,0,0,1,0,0)' : i === 1 ? 'matrix(1,0,0,1,0,65)' : 'matrix(1,0,0,1,0,130)';
          step.setAttribute('transform', defaultTransform);
        }
      });
    }

    buttons.forEach(function(btn, i) {
      btn.onclick = function() {
        setStep(i);
        resetAutoCycle();
      };
    });

    steps.forEach(function(step, i) {
      if (!step) return;
      step.onclick = function() {
        setStep(i);
        resetAutoCycle();
      };
    });

    function resetAutoCycle() {
      clearInterval(autoTimer);
      autoTimer = setInterval(function() {
        setStep((activeIndex + 1) % 3);
      }, 5000);
    }

    setStep(0);
    resetAutoCycle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOcrCarousel);
  } else {
    initOcrCarousel();
  }
  document.addEventListener('swup:page:view', initOcrCarousel);
})();
