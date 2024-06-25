import React,{useState} from 'react';
import './Ima.css';
import ImagePopup from './Imapop';
import Bar2 from './Bar2';


const cards = [
  {
    image: 'https://cdn.dribbble.com/userupload/14746532/file/original-900af86e1ce77f5a9d6ed6fe8a4da21f.png?resize=1200x900 ',
    alt: 'Crying book',
    authorImage: 'https://images.unsplash.com/photo-1718900351979-3e00f88386a3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Tetiana Kobzeva',
    likes: '186',
    views: '55.7k',
    category: 'Mobile',

  },
  {
    image: 'https://cdn.dribbble.com/userupload/14942905/file/original-3e47158bce130a701381d1adb2c079e6.png?resize=1200x900&vertical=center',
    alt: 'Monkey illustration',
    authorImage: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Michael Smith',
    likes: '375',
    views: '2.5k',
    category: 'Print',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/15045771/file/original-331fa8f1791d98528d6d6cc7d494b14b.png?resize=752x',
    alt: 'Houses illustration',
    authorImage: 'https://images.unsplash.com/photo-1490138139357-fc819d02e344?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Alexandra Zutto',
    likes: '146',
    views: '23.4k',
    category: 'Mobile',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/15094034/file/original-c1255c00690a72c19feb19505570562d.gif',
    alt: 'Animation Art',
    authorImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Oliver Clark',
    likes: '620',
    views: '7.1k',
    category: 'Animation',
  },
  {
    image: 'https://images.unsplash.com/photo-1560461396-41fd0b4f711c?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Mobile UX',
    authorImage: 'https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Horizon Enterprises',
    likes: '506',
    views: '8.5k',
    category: 'Mobile', 

  },
  {
    image: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beach ',
    authorImage: 'https://images.unsplash.com/photo-1621493821961-4afd7f1b267e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Laura Davis',
    likes: '546',
    views: '5.2k',
    category: 'Print',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/15106996/file/original-1bf05a5e50e2a09ac7fbd6acf46c7773.png?resize=1024x853',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Samantha Moore',
    likes: '500',
    views: '6.1k',
    category: 'Product Design', 
  },

  {
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Brand logo illustration',
    authorImage: 'https://plus.unsplash.com/premium_photo-1681288102341-d648316ecac2?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Skilline Design Co.',
    likes: '45',
    views: '7k',
    category: 'Branding', 

  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Pattern illustration',
    authorImage: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Kendrick Kidd',
    likes: '119',
    views: '18k',
    category: 'Typography',
  },
 
  {
    image: 'https://cdn.dribbble.com/userupload/14807988/file/original-2f68022906802fbb67109f137987ac7e.jpg?resize=1200x900',
    alt: 'Coffee illustration',
    authorImage: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Thunder Rockets',
    likes: '82',
    views: '13k',
    category: 'Branding', 
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1683133486351-2bceb03d9d0f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Abstract illustration',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Mary Maka',
    likes: '97',
    views: '8.7k',
    category: 'Illustration',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/14518743/file/original-4ad8a2634850be76a6b7612c175f8f7f.png?resize=1200x900',
    alt: 'Robot illustration',
    authorImage: 'https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Nimbus Industries',
    likes: '645',
    views: '1.25k',
    category: 'Animation',
  },
  
  {
    image: 'https://plus.unsplash.com/premium_vector-1711987733175-73e22841e9dc?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Christopher Martinez',
    likes: '204',
    views: '5.2k',
    category: 'Animation',
  },
   
  {
    image: 'https://cdn.dribbble.com/userupload/15207704/file/original-2002f56eda1bfdbbd6f59941976b9405.jpg?resize=752x',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/photo-1573037722315-eb5f8a1be3c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Kemal Sanli',
    likes: '410',
    views: '4.6k',
    category: 'Typography'
  },
  {
    image: 'https://images.unsplash.com/photo-1469366379702-59bb9f45c11e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Basketball illustration',
    authorImage: 'https://images.unsplash.com/photo-1718868325476-734e85aebb8e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Benoit Drigny',
    likes: '122',
    views: '39.1k',
    category: 'Discover'
  },
  {
    image: 'https://images.unsplash.com/photo-1602445132305-637d3c0a244a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'David Anderson',
    likes: '584',
    views: '9.4k',
    category:'Web Design'
  },
  {
    image: 'https://cdn.dribbble.com/userupload/15194785/file/original-3d9c906ada83660ab0a42c983913aa28.png?resize=752x564',
    alt: 'Geometric illustration',
    authorImage: 'https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Daniel Wilson',
    likes: '708',
    views: '9.2k',
    category: 'Typography'
  },
  {
    image: 'https://cdn.dribbble.com/userupload/15204852/file/original-dd9df270b8da12d00661814cf77ddade.jpg?resize=1024x1024',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Sarah Thompson',
    likes: '100',
    views: '5.6k',
    category: 'Discover'
  },
  {
    image: 'https://cdn.dribbble.com/userupload/14973030/file/original-8a98efbd74896d3c6381eb01d075d5b7.jpg?resize=1200x900',
    alt: 'Phoenix',
    authorImage: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Ben Didier',
    likes: '524',
    views: '14k',
    category: 'Print',
  },
  {
    image: 'https://images.unsplash.com/photo-1580196969807-cc6de06c05be?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Art Illustration',
    authorImage: 'https://plus.unsplash.com/premium_vector-1713785274963-8f16a1c52849?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Sanline Visionaries',
    likes: '203k',
    views: '141.6k',
    category: 'Illustration',
  },
  {
    image: 'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'street illustration',
    authorImage: 'https://images.unsplash.com/photo-1665392996886-0949d131a5da?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Vertex Ventures',
    likes: '904',
    views: '4.6k',
    category: 'Travel',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/15190752/file/original-0b41accc4e690ebce278fae29247aef7.jpg?resize=1024x768',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'FusionTech',
    likes: '423',
    views: '4.6k',
    category: 'Branding',
  },
 
  {
    image: 'https://cdn.dribbble.com/userupload/15152686/file/original-72881f7c1b44e42088865bc4923c9d61.jpg?resize=1200x904',
    alt: 'Illustration Artwork',
    authorImage: 'https://images.unsplash.com/photo-1551523839-5dc0610b0c2c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Ella Hansen',
    likes: '410',
    views: '7.3k',
    category: 'Illustration',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/15101072/file/original-c0e9b0db17841040354922c93f60f784.png?resize=1200x900',
    alt: 'Web Design Mockup',
    authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Lucas Thompson',
    likes: '670',
    views: '9.8k',
    category: 'Web Design',
  },
  {
    image: 'https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Branding Identity',
    authorImage: 'https://plus.unsplash.com/premium_photo-1673792326003-64e2b16f5d50?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Grace Roberts',
    likes: '590',
    views: '6.9k',
    category: 'Branding',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1687509673996-0b9e35d58168?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Typography Design',
    authorImage: 'https://images.unsplash.com/photo-1535426618342-0bbe434e7927?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Daniel Walker',
    likes: '750',
    views: '8.2k',
    category: 'Typography',
  },
  {
    image: 'https://images.unsplash.com/photo-1580687391539-8f3b613f9be9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Discover New Trends',
    authorImage: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Sophia Carter',
    likes: '680',
    views: '7.6k',
    category: 'Discover',
  },
  
  

 
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Discover', 'Animation', 'Branding', 'Illustration', 'Mobile', 'Print', 'Product Design', 'Typography', 'Web Design'];

  const handleCategoryClick = (category) => {
      setSelectedCategory(category);
  };

  const filteredCards = selectedCategory === 'All' ? cards : cards.filter(card => card.category === selectedCategory);

  return (
      <div className="app">
          <Bar2 onCategoryClick={handleCategoryClick} categories={categories} selectedCategory={selectedCategory} />
          <div className="cards">
              {filteredCards.map((card, index) => (
                  <div className="card" key={index}>
                      <div className="image">
                          <ImagePopup src={card.image} alt={card.alt} />
                      </div>
                      <div className="info">
                          <div className="author">
                              <img src={card.authorImage} alt="Profile" />
                              <span>{card.authorName}</span>
                          </div>
                          <div className="stats">
                              <span>❤{card.likes}</span>
                              <span>👁{card.views}</span>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default App;

