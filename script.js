const btn = document.getElementById('changeBtn');
const msg = document.getElementById('message');

btn.addEventListener('click', () => {
  const now = new Date().toLocaleTimeString('ja-JP');
  msg.textContent = `訪問ありがとうございます！（現在の時刻: ${now}）`;
});
