const Post = require("./modal/post/Post");

// Assuming your Post model has properties like title, description, and imageUrl
const dummyPosts = [
    {
      id: 1,
      title: "Lorem Ipsum 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://example.com/image1.jpg",
    },
    {
      id: 2,
      title: "Lorem Ipsum 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://example.com/image2.jpg",
    },
    {
      id: 3,
      title: "Lorem Ipsum 3",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageUrl: "https://example.com/image3.jpg",
    },
    // Add more dummy data as needed
  ];
  
  async function seedDB(){
    // await Post.deleteMany({});
    // await Post.insertMany(dummyPosts);
    console.log('Product Seeded');
  
}

module.exports=seedDB;