const  Monitor = require('../models/Monitor');

const monitorData = [
  {
    brand_name: 'Hp',
    resolution: '1920 * 1080 pixels',
    size: '27 Inches',
    price: 279,
    amazon_link: 'https://www.amazon.ca/HP-27-inch-FreeSync-Technology-M27fw/dp/B091FXP622/ref=sr_1_8?crid=2KV5S69BT5V3O&keywords=monitor+hp&qid=1670452887&sprefix=monitor+hp%2Caps%2C84&sr=8-8'
  },
  {
    brand_name: 'Samsung',
    resolution: '1920 * 1080 pixels',
    size: '22 Inches',
    price: 118,
    amazon_link: 'https://www.amazon.ca/Samsung-LF22T350FHNXZA-22-inch-Eye-Saver-Freesync/dp/B08FNW672V/ref=sr_1_13?crid=2KV5S69BT5V3O&keywords=monitor+hp&qid=1670452887&sprefix=monitor+hp%2Caps%2C84&sr=8-13'
  },
  {
    brand_name: 'Dell',
    resolution: '1920 * 1080 pixels',
    size: '24 Inches',
    price: 254,
    amazon_link: 'https://www.amazon.ca/Dell-24-Monitor-Technology-Comfortview/dp/B096T36G8L/ref=sr_1_6?crid=3M926XBW09YCQ&keywords=monitor+dell&qid=1670453072&sprefix=monitor+dell%2Caps%2C83&sr=8-6'
  },
  {
    brand_name: 'Asus',
    resolution: '1920 * 1080 pixels',
    size: '27 Inches',
    price: 215,
    amazon_link: 'https://www.amazon.ca/VY279HE-Adaptive-Sync-Augmentation-Antibacterial-Frameless/dp/B08K26TJNP/ref=sr_1_8?crid=BVR0R0921OEC&keywords=monitor+asus&qid=1670453142&sprefix=monitor+asus%2Caps%2C91&sr=8-8'
  },
  {
    brand_name: 'Samsung',
    resolution: '1920 * 1080 pixels',
    size: '27 Inches',
    price: 279,
    amazon_link: 'https://www.amazon.ca/Samsung-LS27T350FHNXZA-Eye-Saver-Freesync-LF27T350FHNXZA/dp/B08FF3JQ28/ref=sr_1_20?crid=X5TBYPI8WXXD&keywords=gaming+screen&qid=1670453197&sprefix=gaming+screen%2Caps%2C83&sr=8-20'
  }
];

const seedMonitor = () => Monitor.bulkCreate(monitorData);

module.exports = seedMonitor;
