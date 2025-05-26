const xpEl = document.getElementById('xp');
const levelEl = document.getElementById('level');
const profileImg = document.getElementById('profile-img');
const btn = document.getElementById('upgrade-btn');

let xp = 0;
let level = 1;
const upgrades = [
  { xp: 100, message: '🖼 Аватарка разблокирована', img: 'avatar.png' },
  { xp: 500, message: '👥 Первый друг добавлен', img: 'friend.png' },
  { xp: 1000, message: '🎮 Скин получен', img: 'skin.png' },
  { xp: 2000, message: '🕹 Первая игра активирована', img: 'game.png' },
  { xp: 5000, message: '🔥 Arcana открыта!', img: 'arcana.png' },
  { xp: 10000, message: '🎁 Бонус: -10% на пополнение Steam!', img: 'bonus.png' }
];

btn.addEventListener('click', () => {
  xp += 50;
  xpEl.innerText = xp;
  checkUpgrade();
});

function checkUpgrade() {
  upgrades.forEach(u => {
    if (xp === u.xp) {
      alert(u.message);
      profileImg.src = `assets/${u.img}`;
      level++;
      levelEl.innerText = level;
    }
  });
}

