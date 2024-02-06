const emoji = require('node-emoji');
const categories = {
    emotions: [
        { name: "heartbeat", emoji: "💓" },
        { name: "broken_heart", emoji: "💔" },
        { name: "two_hearts", emoji: "💕" },
        { name: "sparkling_heart", emoji: "💖" },
        { name: "older_woman", emoji: "👵" },
        { name: "pregnant_woman", emoji: "🤰" },
        { name: "baby_bottle", emoji: "🍼" },
        { name: "breast-feeding", emoji: "🤱" },
        { name: "woman-wearing-turban", emoji: "👳‍♀️" },
        { name: "woman-juggling", emoji: "🤹‍♀️" },
        { name: "woman-gesturing-ok", emoji: "🙆‍♀️" },
        { name: "woman-gesturing-no", emoji: "🙅‍♀️" },
        { name: "woman-shrugging", emoji: "🤷‍♀️" },
        { name: "woman-bowing", emoji: "🙇‍♀️" },
        { name: "woman-raising-hand", emoji: "🙋‍♀️" }
    ],
    activities: [
        { name: "coffee", emoji: "☕" },
        { name: "tea", emoji: "🍵" },
        { name: "wine_glass", emoji: "🍷" },
        { name: "ice_cream", emoji: "🍨" },
        { name: "doughnut", emoji: "🍩" },
        { name: "cookie", emoji: "🍪" },
        { name: "chocolate_bar", emoji: "🍫" },
        { name: "candy", emoji: "🍬" },
        { name: "cocktail", emoji: "🍸" },
        { name: "gift", emoji: "🎁" },
        { name: "birthday", emoji: "🎂" },
        { name: "question", emoji: "❓" },
        { name: "woman-wrestling", emoji: "🤼‍♀️" },
        { name: "woman-playing-water-polo", emoji: "🤽‍♀️" },
        { name: "woman-playing-handball", emoji: "🤾‍♀️" },
        { name: "woman-running", emoji: "🏃‍♀️" },
        { name: "woman-with-bunny-ears-partying", emoji: "👯‍♀️" },
        { name: "woman-surfing", emoji: "🏄‍♀️" },
        { name: "woman-swimming", emoji: "🏊‍♀️" },
        { name: "woman-lifting-weights", emoji: "🏋️‍♀️" },
        { name: "woman-rowing-boat", emoji: "🚣‍♀️" },
        { name: "woman-biking", emoji: "🚴‍♀️" },
        { name: "woman-mountain-biking", emoji: "🚵‍♀️" },
        { name: "woman-golfing", emoji: "🏌️‍♀️" },
        { name: "woman_in_tuxedo", emoji: "🤵‍♀️" },
        { name: "woman-getting-massage", emoji: "💆‍♀️" },
        { name: "woman-getting-haircut", emoji: "💇‍♀️" },
        { name: "date", emoji: "📅" }
    ],
    relationships: [
        { name: "family", emoji: "👨‍👩‍👦" },
        { name: "wedding", emoji: "💒" },
        { name: "couplekiss", emoji: "💏" }
    ],
    objects: [
        { name: "seedling", emoji: "🌱" },
        { name: "tulip", emoji: "🌷" },
        { name: "cherry_blossom", emoji: "🌸" },
        { name: "rose", emoji: "🌹" },
        { name: "hibiscus", emoji: "🌺" },
        { name: "sunflower", emoji: "🌻" },
        { name: "blossom", emoji: "🌼" },
        { name: "crystal_ball", emoji: "🔮" },
        { name: "lipstick", emoji: "💄" },
        { name: "ballet_shoes", emoji: "🩰" },
        { name: "nail_care", emoji: "💅" },
        { name: "ring", emoji: "💍" },
        { name: "mirror", emoji: "🪞" },
        { name: "money_with_wings", emoji: "💸" }
    ],
    professions: [
        { name: "woman", emoji: "👩" },
        { name: "female-guard", emoji: "💂‍♀️" },
        { name: "female-technologist", emoji: "👩‍💻" },
        { name: "female-office-worker", emoji: "👩‍💼" },
        { name: "female-mechanic", emoji: "👩‍🔧" },
        { name: "female-scientist", emoji: "👩‍🔬" },
        { name: "female-doctor", emoji: "👩‍⚕️" },
        { name: "female-judge", emoji: "👩‍⚖️" },
        { name: "female-pilot", emoji: "👩‍✈️" },
        { name: "female-astronaut", emoji: "👩‍🚀" },
        { name: "female-student", emoji: "👩‍🎓" },
        { name: "female-singer", emoji: "👩‍🎤" },
        { name: "female-artist", emoji: "👩‍🎨" },
        { name: "female-teacher", emoji: "👩‍🏫" },
        { name: "female-factory-worker", emoji: "👩‍🏭" },
        { name: "female-farmer", emoji: "👩‍🌾" },
        { name: "female-cook", emoji: "👩‍🍳" },
        { name: "female-construction-worker", emoji: "👷‍♀️" },
        { name: "female-detective", emoji: "🕵️‍♀️" },
        { name: "female-police-officer", emoji: "👮‍♀️" }
    ]
};

function shuffle(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateWomenDayEmojiList(numEmojis) {
    const allEmojis = Object.entries(categories).flatMap(([category, emojis]) =>
        emojis.map(({ name, emoji }) => ({ category, name, emoji }))
    );
    shuffle(allEmojis);
    return allEmojis.slice(0, Math.min(allEmojis.length, numEmojis));
}

module.exports = {
    generateWomenDayEmojiList
};
