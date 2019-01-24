import dotenv from 'dotenv';
import Category from '../model/category';
import Cheat from '../model/cheat';
import User from '../model/user';

import cheatData from './data';
dotenv.config();

const cheatSeed = (category, admin, newCategory) => {
  for (const cheat of cheatData[category]) {
    const createdCheat = new Cheat({
      ...cheat,
      author: admin._id,
      category: newCategory._id,
    });
    createdCheat.save();
    newCategory.cheats.push(createdCheat);
  }
};

const cheatCategorySeed = (admin) => {
  for (const category in cheatData) {
    const newCategory = new Category({title: category});
    cheatSeed(category, admin, newCategory);
    newCategory.save()
  }
};

const seed = async () => {
  console.log(`*************Seeding admin user*************`);
  const adminData = { username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD };
  const createdAdmin = await User.create(adminData);
  console.log(`*************Seeding admin user complete*************`);
  const admin = await User.findOne({ username: createdAdmin.username });
  console.log(`*************Seeding Cheat list*************`);
  cheatCategorySeed(admin);
  console.log(`🥂 Database seeding complete...`);
};

export default seed;