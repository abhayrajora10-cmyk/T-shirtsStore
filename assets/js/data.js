const tshirtData = [];
const categories = ['Male','Female','Uni','Child','Teen','Old'];

const categoryImages = {
  Male: [
    "https://i.pinimg.com/1200x/9e/1d/cc/9e1dccf3decc78c73a86f7e925951a65.jpg",
    "https://i.pinimg.com/1200x/31/a8/6e/31a86ef15688e5a6829d88bf321785a1.jpg",
    "https://images.meesho.com/images/products/238286138/jgtti_512.avif?width=512",
    "https://i.pinimg.com/1200x/58/d0/10/58d0106002d3180e2a66bc049ef829eb.jpg",
    "https://i.pinimg.com/736x/a2/b9/61/a2b961f12777c3c7f59889ee4f49ce11.jpg",
    "https://i.pinimg.com/736x/4c/68/55/4c68555002a9f7b4b0692bd3d07f04b8.jpg"
  ],
  Female: [
    "https://i.pinimg.com/474x/ec/ac/bd/ecacbd2fb9da896d2e19ca330656c1d2.jpg",
    "https://i.pinimg.com/1200x/b4/58/3e/b4583e2c009c9916b8152a749156a058.jpg",
    "https://i.pinimg.com/1200x/72/f2/3b/72f23b816765e98ea3164e3337fb31af.jpg",
    "https://i.pinimg.com/736x/6b/f2/1a/6bf21a6276e546338a440aba71094c73.jpg",
    "https://i.pinimg.com/736x/89/7b/0d/897b0d5c57d7e7d6e314fa410be65d38.jpg",
    "https://i.pinimg.com/1200x/d8/25/91/d8259150256858ad9bb36e90e7a05160.jpg",
  ],
  Uni: [
    "https://i.pinimg.com/736x/47/80/93/478093047da751d6f2653ad004f4d4e7.jpg",
    "https://i.pinimg.com/1200x/f7/45/87/f74587f962169b06e24d5b3022a0b260.jpg",
    "https://i.pinimg.com/1200x/f8/b2/49/f8b24962b2350c315732681072532d0c.jpg",
    "https://i.pinimg.com/736x/a4/6f/d9/a46fd931e9cae4900126880e8109852b.jpg",
    "https://i.pinimg.com/1200x/21/f5/19/21f5196a4e0dbd05ff4db6fe910601e7.jpg",
    "https://i.pinimg.com/736x/3e/48/9f/3e489f094814b306bceac7de81b24ed3.jpg",
    
  ],
  Child: [
    "https://i.pinimg.com/1200x/8f/f6/7c/8ff67cbda3a77dd1253bfc81cad56075.jpg",
    "https://i.pinimg.com/1200x/67/c3/d5/67c3d55665e2595dfa5d9d29a9c71706.jpg",
    "https://i.pinimg.com/1200x/4d/7e/55/4d7e55ed7bfe41bd88ff0270aecc1a2e.jpg",
    "https://i.pinimg.com/1200x/ce/cd/17/cecd177823182f8bef93297a7ac19aad.jpg",
    "https://i.pinimg.com/1200x/51/fd/b4/51fdb42c7a0349955431f3b6f5c4aeed.jpg",
    "https://i.pinimg.com/1200x/d8/b0/35/d8b035f368d3ecacd2d03e9b9cb42665.jpg",


  ],
  Teen: [
    "https://i.pinimg.com/736x/79/5a/ce/795ace916927bb91effa4937fbf08451.jpg",
    "https://i.pinimg.com/1200x/fd/df/0c/fddf0c42c6fc989c7904e7c66c6fa001.jpg",
    "https://i.pinimg.com/1200x/78/67/b3/7867b390d8362cc9e17da155d63b3743.jpg",
    "https://i.pinimg.com/736x/d1/8d/ff/d18dff3bb9d721cc9bf71d8b16195526.jpg",
    "https://i.pinimg.com/1200x/96/eb/8f/96eb8f4dafd789969d249351599da605.jpg",
    "https://i.pinimg.com/1200x/48/5a/d0/485ad05dda6c67bbc916ceb3292f0a32.jpg",
    "https://i.pinimg.com/1200x/3d/6c/6d/3d6c6d567ae9509f27b5a5dbe150dcf0.jpg",
    "https://i.pinimg.com/736x/1a/01/83/1a018308f117d7a49d952ee69e59c872.jpg",
  ],
  Old: [
    "https://i.pinimg.com/1200x/2e/c2/e8/2ec2e8de9e4d6c243ad50ddc63ea3d31.jpg",
    "https://i.pinimg.com/1200x/e8/03/ec/e803ece8647eca032535f1eb77503391.jpg",
    "https://i.pinimg.com/1200x/cf/5e/ab/cf5eab5dd350f357587a991499a1a3fa.jpg",
    "https://i.pinimg.com/1200x/b2/dd/a7/b2dda736a94f9a38e5278bd10ce3460a.jpg",
    "https://i.pinimg.com/1200x/f1/bd/15/f1bd1543a9ea0b40d9cedcdf9dda7493.jpg",
    "https://i.pinimg.com/1200x/cc/f0/1f/ccf01f8cb83dd615cef0639d7add6db9.jpg",
  ]
};

let idCounter = 1;

categories.forEach(cat => {
  for (let i = 1; i <= 6; i++) {
    tshirtData.push({
      id: idCounter++,
      name: `${cat} T-Shirt ${i}`,
      price: Math.floor(Math.random() * 25) + 15,
      discount: [0,5,10,15][Math.floor(Math.random()*4)],
      category: cat,
      img: categoryImages[cat][i - 1],   // ← DIFFERENT IMAGE PER ITEM
      description: `Comfortable ${cat.toLowerCase()} t-shirt, size options S-XL. Perfect for everyday wear.`
    });
  }
});

// sample retailers
const retailers = [
  {id:1,name:'City Apparel',contact:'retailer1@example.com'},
  {id:2,name:'Trendy Clothiers',contact:'retailer2@example.com'},
  {id:3,name:'Kids Wear Co',contact:'retailer3@example.com'},
  {id:4,name:'Downtown Retailers',contact:'retailer4@example.com'}
];

// Mock orders (referencing item ids)
const mockOrders = [
  {id:1,userEmail:'john@example.com',items:[{id:1,qty:2},{id:5,qty:1}],total:75,date:'2025-08-10'},
  {id:2,userEmail:'amy@example.com',items:[{id:10,qty:1}],total:25,date:'2025-10-02'},
  {id:3,userEmail:'john@example.com',items:[{id:3,qty:1},{id:8,qty:2}],total:95,date:'2025-11-01'}
];

// Demo users (NEVER overwrite real users)
const initialUsers = [
  {name:"Admin User", email:"admin@tshirtshop.com", password:"admin123", role:"admin"},
  {name:"Abhay", email:"abhay@gmail.com", password:"abhay123", role:"user"},
  {name:"Rohit Solanki", email:"rohit@gmail.com", password:"rohit123", role:"user"}
];

window.appData = {tshirtData, initialUsers};

// SAFE SEEDING
(function(){
  try {
    const existingUsers = localStorage.getItem('users');
    if(!existingUsers || existingUsers.trim()==="" || existingUsers==="[]"){
      localStorage.setItem('users', JSON.stringify(initialUsers));
    }

    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart', JSON.stringify([]));
    }

  } catch(e){
    console.warn("Seeding failed", e);
  }
})();