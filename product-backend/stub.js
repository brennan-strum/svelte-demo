let products = [
  {
    id: "001",
    title: "Smart Watch",
    description: "A sleek smart watch with fitness tracking and notifications.",
    price: 149.99,
    brand: "TechWear",
    model: "SW-200",
  },
  {
    id: "002",
    title: "Wireless Headphones",
    description:
      "Noise-cancelling wireless headphones with high-fidelity audio.",
    price: 199.95,
    brand: "SoundZone",
    model: "WH-500",
  },
  {
    id: "003",
    title: "Laptop Backpack",
    description:
      "Durable backpack with compartments for laptops and accessories.",
    price: 79.99,
    brand: "TravelTech",
    model: "BP-1000",
  },
  {
    id: "004",
    title: "Smart Thermostat",
    description:
      "Energy-efficient smart thermostat for home temperature control.",
    price: 129.0,
    brand: "EcoSmart",
    model: "ST-300",
  },
  {
    id: "005",
    title: "Robot Vacuum Cleaner",
    description:
      "Autonomous vacuum cleaner with scheduling and mapping features.",
    price: 349.99,
    brand: "CleanBot",
    model: "RV-700",
  },
  {
    id: "006",
    title: "DSLR Camera",
    description: "Professional-grade DSLR camera with interchangeable lenses.",
    price: 1499.0,
    brand: "PhotoPro",
    model: "DSLR-5000",
  },
  {
    id: "007",
    title: "Electric Toothbrush",
    description:
      "Rechargeable electric toothbrush with multiple brushing modes.",
    price: 79.95,
    brand: "DentistClean",
    model: "ET-900",
  },
  {
    id: "008",
    title: "Air Fryer",
    description: "Compact air fryer for healthier cooking with less oil.",
    price: 89.99,
    brand: "KitchenMaster",
    model: "AF-200",
  },
  {
    id: "009",
    title: "Portable Bluetooth Speaker",
    description: "Waterproof Bluetooth speaker for outdoor use.",
    price: 69.99,
    brand: "SoundWave",
    model: "BS-300",
  },
  {
    id: "010",
    title: "Gaming Mouse",
    description: "High-performance gaming mouse with customizable buttons.",
    price: 59.99,
    brand: "GameTech",
    model: "GM-600",
  },
  {
    id: "011",
    title: "Fitness Tracker",
    description: "Activity tracker with heart rate monitoring and GPS.",
    price: 129.95,
    brand: "FitTech",
    model: "FT-100",
  },
  {
    id: "012",
    title: "4K Smart TV",
    description: "Ultra HD smart TV with built-in streaming apps.",
    price: 899.0,
    brand: "VisionTech",
    model: "TV-8000",
  },
  {
    id: "013",
    title: "Espresso Machine",
    description: "Espresso maker with milk frother for barista-quality drinks.",
    price: 299.99,
    brand: "BeanBrew",
    model: "EM-700",
  },
  {
    id: "014",
    title: "Wireless Router",
    description:
      "Dual-band wireless router for high-speed internet connections.",
    price: 129.99,
    brand: "NetConnect",
    model: "WR-1200",
  },
  {
    id: "015",
    title: "Smart Doorbell",
    description: "Video doorbell with motion detection and two-way audio.",
    price: 199.0,
    brand: "SecureHome",
    model: "DB-500",
  },
  {
    id: "016",
    title: "Noise-Cancelling Earbuds",
    description: "True wireless earbuds with active noise cancellation.",
    price: 179.95,
    brand: "AudioZone",
    model: "EB-800",
  },
  {
    id: "017",
    title: "Electric Scooter",
    description: "Foldable electric scooter for urban commuting.",
    price: 299.99,
    brand: "EcoRide",
    model: "ES-200",
  },
  {
    id: "018",
    title: "Smartphone",
    description:
      "High-performance smartphone with advanced camera and display.",
    price: 799.99,
    brand: "MobileTech",
    model: "SP-1000",
  },
  {
    id: "019",
    title: "Portable External SSD",
    description:
      "Portable solid-state drive for fast data transfer and storage.",
    price: 129.99,
    brand: "DataDrive",
    model: "SSD-500",
  },
  {
    id: "020",
    title: "Fitness Exercise Bike",
    description:
      "Indoor exercise bike with adjustable resistance and digital display.",
    price: 349.0,
    brand: "FitCycle",
    model: "EB-2000",
  },
];

let reviews = [
  {
    id: "001-1",
    product_id: "001",
    user: "userA",
    rating: 5,
    content:
      "This product exceeded my expectations. The quality is top-notch and the performance is unparalleled.",
  },
  {
    id: "001-2",
    product_id: "001",
    user: "userB",
    rating: 4,
    content:
      "Very good product, but there is room for improvement in the design. Overall, I am satisfied.",
  },
  {
    id: "001-3",
    product_id: "001",
    user: "userC",
    rating: 3,
    content:
      "It's decent for the price, but I encountered a few issues with durability. Might consider a different brand next time.",
  },
  {
    id: "002-1",
    product_id: "002",
    user: "userD",
    rating: 2,
    content:
      "I was disappointed with this product. It didn't work as advertised and felt cheaply made.",
  },
  {
    id: "002-2",
    product_id: "002",
    user: "userE",
    rating: 4,
    content:
      "Overall, a good product. It performs well and is easy to use. I would recommend it.",
  },
  {
    id: "002-3",
    product_id: "002",
    user: "userF",
    rating: 5,
    content:
      "Excellent product! It works perfectly and the quality is outstanding. Highly recommended.",
  },
  {
    id: "003-1",
    product_id: "003",
    user: "userG",
    rating: 3,
    content:
      "The product is okay, but I had higher expectations. It's functional but lacks some key features.",
  },
  {
    id: "003-2",
    product_id: "003",
    user: "userH",
    rating: 4,
    content:
      "I am pleased with this purchase. The product works well and is reasonably priced.",
  },
  {
    id: "003-3",
    product_id: "003",
    user: "userI",
    rating: 2,
    content:
      "Not very impressed. It didn't meet my needs and had several flaws in its design.",
  },
  {
    id: "004-1",
    product_id: "004",
    user: "userJ",
    rating: 5,
    content:
      "Fantastic product! I am extremely happy with its performance and build quality.",
  },
  {
    id: "004-2",
    product_id: "004",
    user: "userK",
    rating: 3,
    content:
      "It's an average product. Does the job but nothing exceptional about it.",
  },
  {
    id: "004-3",
    product_id: "004",
    user: "userL",
    rating: 4,
    content: "Good value for money. The product is reliable and easy to use.",
  },
  {
    id: "005-1",
    product_id: "005",
    user: "userM",
    rating: 5,
    content:
      "This is one of the best products I have ever used. Highly efficient and durable.",
  },
  {
    id: "005-2",
    product_id: "005",
    user: "userN",
    rating: 4,
    content:
      "Great product overall. It has a few minor issues but nothing major.",
  },
  {
    id: "005-3",
    product_id: "005",
    user: "userO",
    rating: 3,
    content:
      "It's a decent product but doesn't stand out. It meets basic requirements.",
  },
  {
    id: "006-1",
    product_id: "006",
    user: "userP",
    rating: 2,
    content:
      "Not satisfied with this product. It didn't perform as expected and has several flaws.",
  },
  {
    id: "006-2",
    product_id: "006",
    user: "userQ",
    rating: 4,
    content: "Pretty good product. It works well and is worth the price.",
  },
  {
    id: "006-3",
    product_id: "006",
    user: "userR",
    rating: 5,
    content:
      "Outstanding product! I am very happy with its performance and quality.",
  },
  {
    id: "007-1",
    product_id: "007",
    user: "userS",
    rating: 3,
    content:
      "An average product with some useful features. It could be better.",
  },
  {
    id: "007-2",
    product_id: "007",
    user: "userT",
    rating: 5,
    content: "Excellent product! Exceeds expectations in every way.",
  },
  {
    id: "007-3",
    product_id: "007",
    user: "userU",
    rating: 4,
    content: "Good product overall. Performs well and is reasonably priced.",
  },
  {
    id: "008-1",
    product_id: "008",
    user: "userV",
    rating: 2,
    content:
      "I was not impressed with this product. It has several issues that need to be addressed.",
  },
  {
    id: "008-2",
    product_id: "008",
    user: "userW",
    rating: 4,
    content:
      "Overall, a good product. It has a few flaws but works well for the most part.",
  },
  {
    id: "008-3",
    product_id: "008",
    user: "userX",
    rating: 5,
    content:
      "Fantastic product! Highly recommended for its performance and quality.",
  },
  {
    id: "009-1",
    product_id: "009",
    user: "userY",
    rating: 3,
    content:
      "It's an okay product. Does what it's supposed to but nothing more.",
  },
  {
    id: "009-2",
    product_id: "009",
    user: "userZ",
    rating: 4,
    content: "Good product overall. Reliable and easy to use.",
  },
  {
    id: "009-3",
    product_id: "009",
    user: "userAA",
    rating: 5,
    content: "Excellent product! Works perfectly and is very durable.",
  },
  {
    id: "010-1",
    product_id: "010",
    user: "userAB",
    rating: 2,
    content:
      "I was not happy with this product. It didn't meet my expectations.",
  },
  {
    id: "010-2",
    product_id: "010",
    user: "userAC",
    rating: 4,
    content: "Good product. It works well and is reasonably priced.",
  },
  {
    id: "010-3",
    product_id: "010",
    user: "userAD",
    rating: 5,
    content:
      "Fantastic product! I am very satisfied with its performance and quality.",
  },
  {
    id: "011-1",
    product_id: "011",
    user: "userAE",
    rating: 3,
    content: "An average product. It does the job but lacks some key features.",
  },
  {
    id: "011-2",
    product_id: "011",
    user: "userAF",
    rating: 4,
    content: "Pretty good product. Reliable and easy to use.",
  },
  {
    id: "011-3",
    product_id: "011",
    user: "userAG",
    rating: 5,
    content:
      "Outstanding product! I am very happy with its performance and build quality.",
  },
  {
    id: "012-1",
    product_id: "012",
    user: "userAH",
    rating: 2,
    content:
      "I was disappointed with this product. It didn't work as expected.",
  },
  {
    id: "012-2",
    product_id: "012",
    user: "userAI",
    rating: 4,
    content:
      "Good product overall. It has a few flaws but works well for the most part.",
  },
  {
    id: "012-3",
    product_id: "012",
    user: "userAJ",
    rating: 5,
    content: "Excellent product! Exceeds expectations in every way.",
  },
  {
    id: "013-1",
    product_id: "013",
    user: "userAK",
    rating: 3,
    content: "It's an average product. Does the job but nothing exceptional.",
  },
  {
    id: "013-2",
    product_id: "013",
    user: "userAL",
    rating: 4,
    content: "Good value for money. The product is reliable and easy to use.",
  },
  {
    id: "013-3",
    product_id: "013",
    user: "userAM",
    rating: 5,
    content:
      "Fantastic product! Highly recommended for its performance and quality.",
  },
  {
    id: "014-1",
    product_id: "014",
    user: "userAN",
    rating: 2,
    content: "Not satisfied with this product. It didn't perform as expected.",
  },
  {
    id: "014-2",
    product_id: "014",
    user: "userAO",
    rating: 4,
    content:
      "Overall, a good product. It performs well and is worth the price.",
  },
  {
    id: "014-3",
    product_id: "014",
    user: "userAP",
    rating: 5,
    content:
      "Outstanding product! I am very happy with its performance and quality.",
  },
  {
    id: "015-1",
    product_id: "015",
    user: "userAQ",
    rating: 3,
    content:
      "The product is okay, but I had higher expectations. It's functional but lacks some key features.",
  },
  {
    id: "015-2",
    product_id: "015",
    user: "userAR",
    rating: 4,
    content:
      "I am pleased with this purchase. The product works well and is reasonably priced.",
  },
  {
    id: "015-3",
    product_id: "015",
    user: "userAS",
    rating: 5,
    content:
      "Excellent product! It works perfectly and the quality is outstanding.",
  },
  {
    id: "016-1",
    product_id: "016",
    user: "userAT",
    rating: 2,
    content:
      "I was disappointed with this product. It didn't work as advertised and felt cheaply made.",
  },
  {
    id: "016-2",
    product_id: "016",
    user: "userAU",
    rating: 4,
    content: "Overall, a good product. It performs well and is easy to use.",
  },
  {
    id: "016-3",
    product_id: "016",
    user: "userAV",
    rating: 5,
    content:
      "Excellent product! I am very satisfied with its performance and build quality.",
  },
  {
    id: "017-1",
    product_id: "017",
    user: "userAW",
    rating: 3,
    content: "It's an average product. Does the job but nothing more.",
  },
  {
    id: "017-2",
    product_id: "017",
    user: "userAX",
    rating: 4,
    content: "Good product overall. Reliable and easy to use.",
  },
  {
    id: "017-3",
    product_id: "017",
    user: "userAY",
    rating: 5,
    content:
      "Fantastic product! Highly recommended for its performance and quality.",
  },
  {
    id: "018-1",
    product_id: "018",
    user: "userAZ",
    rating: 2,
    content:
      "Not very impressed. It didn't meet my needs and had several flaws in its design.",
  },
  {
    id: "018-2",
    product_id: "018",
    user: "userBA",
    rating: 4,
    content: "Pretty good product. It works well and is worth the price.",
  },
  {
    id: "018-3",
    product_id: "018",
    user: "userBB",
    rating: 5,
    content:
      "Outstanding product! I am very happy with its performance and quality.",
  },
  {
    id: "019-1",
    product_id: "019",
    user: "userBC",
    rating: 3,
    content:
      "An average product with some useful features. It could be better.",
  },
  {
    id: "019-2",
    product_id: "019",
    user: "userBD",
    rating: 5,
    content: "Excellent product! Exceeds expectations in every way.",
  },
  {
    id: "019-3",
    product_id: "019",
    user: "userBE",
    rating: 4,
    content: "Good product overall. Performs well and is reasonably priced.",
  },
  {
    id: "020-1",
    product_id: "020",
    user: "userBF",
    rating: 2,
    content:
      "I was not impressed with this product. It has several issues that need to be addressed.",
  },
  {
    id: "020-2",
    product_id: "020",
    user: "userBG",
    rating: 4,
    content:
      "Overall, a good product. It has a few flaws but works well for the most part.",
  },
  {
    id: "020-3",
    product_id: "020",
    user: "userBH",
    rating: 5,
    content:
      "Fantastic product! Highly recommended for its performance and quality.",
  },
];

export default {
  products,
  reviews,
};
