function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const debouncedAnalyze = debounce(analyzeStatement, 500);
document.getElementById('userInput').addEventListener('input', debouncedAnalyze);

function updateResultContainer(content) {
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = content;
  resultContainer.classList.add('results--active');
}

function scrollToResult() {
  document.getElementById('resultContainer').scrollIntoView({ behavior: 'smooth' });
}
