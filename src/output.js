const { generateWomenDayEmojiList } = require('./index');

const numEmojis = 10; // Number of emojis to generate

const emojis = generateWomenDayEmojiList(numEmojis);

console.log('Emojis from Categories:\n');
emojis.forEach(({ category, name, emoji }) => {
    console.log(`Category: ${category}, Name: ${name}, Emoji: ${emoji}`);
});
