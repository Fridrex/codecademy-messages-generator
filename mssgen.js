    // Three arrays with random words to put from
    
    const firstArr = ["smarter",
    "stronger",
    "faster",
    "taller",
    "wiser",
    "happier",
    "more intelligent",
    "more confident",
    "more successful",
    "more capable",
    "more talented",
    "more creative",
    "more determined",
    "more patient",
    "more ambitious"];
    const secondArr = ["procrastination",
    "overeating",
    "lack of exercise",
    "smoking",
    "alcohol consumption",
    "gossiping",
    "neglecting personal hygiene",
    "using social media excessively",
    "not saving money",
    "not getting enough sleep",
    "being rude or disrespectful",
    "not practicing gratitude",
    "not setting goals or making plans",
    "being disorganized",
    "not taking care of one's physical or mental health"];
    const thirdArr = ["Keep working",
    "Keep grinding",
    "Don't give up",
    "Believe in yourself",
    "You can do it",
    "Stay focused",
    "Keep pushing",
    "Follow your dreams",
    "Take action",
    "Make it happen",
    "Believe in your potential",
    "Embrace challenges",
    "Keep learning",
    "Stay true to yourself",
    "Keep striving for improvement"];

    // Random script

    const randomIndex = Math.floor(Math.random() * 15);

    // Picking words for our final product

    let firstWord = firstArr[randomIndex];
    let secondWord = secondArr[randomIndex];
    let thirdWord = thirdArr[randomIndex];

    // Creating the random message

    const genRan = () => {
        return `You are ${firstWord} than you think! Wake up! Stop ${secondWord}! We are all can do this! ${thirdWord}!`
    }

    console.log(genRan());