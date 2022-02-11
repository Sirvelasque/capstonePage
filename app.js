const bars = document.getElementById('bars');
const menu = document.getElementById('mobile_nav');
const barsIcon = document.getElementById('barsIcon');
const features = document.getElementById('features');
const featuresContainer = document.createElement('div');

featuresContainer.classList.add('features_container');

function toggleNavManu() {
  menu.classList.toggle('active');
  menu.classList.toggle('noactive');
  bars.classList.toggle('x_Icon');
  barsIcon.classList.toggle('fa-times');
  barsIcon.classList.toggle('fa-bars');
}

bars.addEventListener('click', toggleNavManu);

const cards = [
  {
    img: 'img/speaker1.png',
    name: 'Yochai Benkler',
    intro: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    cardText: 'Benkler studies commons-based peer productions, and published his seminal book The Wealth of Networks in 2006',
  },
  {
    img: 'img/speaker2.png',
    name: 'Kilnam Chon',
    intro: '',
    cardText: 'Kilnam Chon helped bring the internet to asia and is an outspoken advocate for the open web and digital commons, In 2012, he was inducted into the inaugural class of the internet societys internet Hall of Fame',
  },
  {
    img: 'img/speaker3.png',
    name: 'YSohYeong Noh',
    intro: 'Directo of Art Center Nabi and a board member of CC Korea',
    cardText: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science thechnology humanities, and arts',
  },
  {
    img: 'img/speaker4.png',
    name: 'Julia Leda',
    intro: 'President of Young Pirates of Europe',
    cardText: 'European  ingretration, political democracy and participation of youth through online as her major condem, Redas report outlining potencial changes to EU copyright law was approved by the Parliament in July',
  },
  {
    img: 'img/speaker5.png',
    name: 'Lila Tretikov',
    intro: 'Executive Director of the Wikipedia Foundation',
    cardText: 'Lila Tretikov is the Directo of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia, Wikipedia is freely available in 290 languages and used by nearly half a billion people arround the world every month',
  },
  {
    img: 'img/speaker6.png',
    name: 'Ryan Merkley',
    intro: 'CEO of creative Commons, ex COO of the Mozilla Foundation',
    cardText: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source move-ment.',
  },
];

let image;
let Name;
let intro;
let cardText;
//  asign values function
function asignValues(index) {
  image = cards[index].img;
  Name = cards[index].name;
  intro = cards[index].intro;
  cardText = cards[index].cardText;
}

function template() {
  featuresContainer.innerHTML += `
  <div class="speaker">
    <div class="speaker_img"><div class="square-bg"></div><img src="${image}" alt="speaker picture"></div>
    <div class="cardText">
      <div class="name">${Name}</div>
      <div class="title">${intro}</div>
      <div class="grey_vector"></div>
      <div class="speaker_text">${cardText}</div>
    </div>
  </div>
  `;
}

features.innerHTML += `
<h2>Featured Speakers</h2>
<div class="red_vector"></div>
<div class="speakers">
`;

for (let index = 0; index < cards.length; index += 1) {
  asignValues(index);
  template(index);
}
features.appendChild(featuresContainer);