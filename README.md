# Emoji Generator

This npm package allows you to generate a list of emojis specifically curated for girls and women. It could be improvized for all. It includes a variety of emojis related to different activities, emotions, relationships, professions, and more. 


# Installation

You can install the Women's Emoji Generator npm package using npm or yarn:

```bash
    npm install womens-emoji-generator 

    yarn add womens-emoji-generator
```
# Usage
To use the Women's Emoji Generator in your project, simply import the generateWomenDayEmojiList function and call it with the number of emojis you want to generate:

```JavaScript
const { generateWomenDayEmojiList } = require('womens-emoji-generator');

const numEmojis = 10; // Number of emojis to generate
const womenDayEmojiList = generateWomenDayEmojiList(numEmojis);

console.log('Emojis for Women\'s Day:\n');
womenDayEmojiList.forEach(emoji => {
    console.log(emoji);
});
```
## Dependencies

This npm package relies on the `node-emoji` package for emoji-related functionality. 

## Customization

By default, the `generateWomenDayEmojiList` function generates a list of emojis with associated category, name, and emoji. Each emoji object in the list contains properties for `category`, `name`, and `emoji`. However, you can easily modify this functionality to suit your specific requirements.

### Modifying Emoji Generation

If you need to customize the way emojis are generated or change the properties associated with each emoji, you can edit the `generateWomenDayEmojiList` function in the `index.js` file. This function currently retrieves emojis from predefined categories and creates emoji objects with category, name, and emoji properties. You can modify the logic within this function to generate emojis based on different criteria or to include additional properties as needed.

### Extending Functionality

Additionally, you can extend the functionality of this package by adding new functions or modifying existing ones. For example, you could create a function to filter emojis based on specific criteria, or to generate emojis from different sources. Feel free to explore the code and make changes according to your requirements.

# Note
This package aims to provide diverse and inclusive emojis that represent girls and women from all parts of the culture and world. This However, it's important to note that the current set of emojis may not be exhaustive and additional contributions are welcome to make it more comprehensive.

# Contributing
Contributions to this npm package are encouraged and welcomed. If you have additional emojis that you believe should be included to make it more diverse and inclusive, please consider contributing by opening a pull request.

# License
This project is licensed under the MIT License
