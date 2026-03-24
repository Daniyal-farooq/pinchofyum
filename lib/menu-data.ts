export type MenuItem = {
  name: string
  price: string
  description?: string
  sizes?: { size: string; price: string }[]
}

export type MenuCategory = {
  category: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    category: "Salads",
    items: [
      { name: "Roasted Aubergine Salad", price: "Rs 950", description: "Tender roasted aubergine with fresh greens and tangy dressing" },
      { name: "Spinach Beetroot Salad", price: "Rs 950", description: "Fresh spinach leaves with earthy beetroot and citrus vinaigrette" },
      { name: "Red Bean Pasta Salad", price: "Rs 750", description: "Hearty pasta salad with red beans and Mediterranean herbs" },
      { name: "Thai Chop Salad", price: "Rs 850", description: "Crunchy Asian-inspired salad with Thai peanut dressing" },
      { name: "Pasta Salad", price: "Rs 850", description: "Classic pasta salad with garden vegetables and Italian herbs" },
      { name: "Customised Grazing Platters", price: "Rs 5,000", description: "Beautiful curated platters perfect for parties and gatherings" },
    ],
  },
  {
    category: "Entrées",
    items: [
      { name: "Sesame Chicken Bites", price: "Rs 850", description: "Crispy chicken bites with sesame glaze" },
      { name: "Malai Boti Skewers", price: "Rs 1,000", description: "Tender creamy chicken skewers, grilled to perfection" },
      { name: "Mini Vada Pao", price: "Rs 300", description: "Bite-sized Indian street food classic" },
      { name: "Desi Chaat", price: "Rs 1,250", description: "Traditional chaat with all the fixings" },
      { name: "Sev Puri Chaat", price: "Rs 750", description: "Crispy puris topped with tangy chutneys and sev" },
      { name: "Chicken Khow Suey", price: "Rs 1,350", description: "Burmese-style coconut curry with noodles" },
      { name: "Thai Green Curry with White Rice", price: "Rs 1,250", description: "Authentic Thai curry with fragrant jasmine rice" },
      { name: "Garlic Chicken and Vegetables", price: "Rs 1,450", description: "Succulent garlic chicken with seasonal vegetables" },
      { name: "Garlic Rice", price: "Rs 600", description: "Aromatic rice infused with garlic butter" },
      { name: "Singaporean Rice", price: "Rs 1,250", description: "Flavorful rice with curry powder and mixed vegetables" },
      { name: "Oyster Chilli Noodles", price: "Rs 1,050", description: "Spicy noodles with oyster sauce and vegetables" },
      { name: "Grilled Tawa Chicken", price: "Rs 350", description: "Tender chicken grilled on a traditional tawa" },
      { name: "Chicken Shawarma", price: "Rs 350", description: "Middle Eastern spiced chicken wrap" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Coffee / Oreo Shots", price: "Rs 250", description: "Mini dessert shots perfect for any occasion" },
      { name: "Creme & Crumble", price: "Rs 350", description: "Creamy dessert with crunchy crumble topping" },
      { name: "Mini Cookie", price: "Rs 275", description: "Freshly baked mini cookies" },
      { name: "Skillet Cookie", price: "Rs 325", description: "Warm skillet-baked cookie, perfect for sharing" },
      { name: "Bread Pudding", price: "Rs 2,200", description: "Classic bread pudding with rich vanilla sauce" },
      {
        name: "Tres Leches Cake",
        price: "From Rs 2,000",
        description: "Our signature three-milk soaked sponge cake",
        sizes: [
          { size: "Small", price: "Rs 2,000" },
          { size: "Medium", price: "Rs 3,000" },
          { size: "Large", price: "Rs 5,000" },
        ],
      },
      {
        name: "Sticky Toffee Date Loaf",
        price: "From Rs 1,500",
        description: "Moist date cake with luscious toffee sauce",
        sizes: [
          { size: "Small", price: "Rs 1,500" },
          { size: "Medium", price: "Rs 2,500" },
          { size: "Large", price: "Rs 3,000" },
        ],
      },
    ],
  },
]
