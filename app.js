let targetNumber;
let attempts;

function startGame() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('resultMessage').textContent = '';
  document.getElementById('attemptsCount').textContent = '';
  document.getElementById('guessInput').value = '';
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById('resultMessage').textContent = '1〜100の数字を入力してください';
    return;
  }

  attempts++;
  if (guess === targetNumber) {
    document.getElementById('resultMessage').textContent = `正解！${attempts}回で当たりました！`;
  } else if (guess < targetNumber) {
    document.getElementById('resultMessage').textContent = 'もっと大きい数字です';
  } else {
    document.getElementById('resultMessage').textContent = 'もっと小さい数字です';
  }

  document.getElementById('attemptsCount').textContent = `試行回数: ${attempts}`;
}

function resetGame() {
  startGame();
}

// 最初の初期化
startGame();
