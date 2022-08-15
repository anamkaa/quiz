import { v4 as uuid } from "uuid";

export const questions = [
  {
    _id: uuid(),
    statement:
      "What destiny was prepared for Jesse Pinkman in the 1st season of the show?",
    option: [
      { id: 0, text: "He had to move", isCorrect: false },
      { id: 1, text: "Initially, he betrayed Walter", isCorrect: false },
      { id: 2, text: "He should refrain from drugs", isCorrect: false },
      { id: 3, text: "He should die", isCorrect: true },
    ],
    title: "BreakingBad",
    number: 1,
  },
  {
    _id: uuid(),
    statement:
      "Walter White chose Heisenberg as a nickname. Who was Heisenberg in real life?",
    option: [
      { id: 0, text: "A famous chemist", isCorrect: false },
      { id: 1, text: "A doctor who struggled against drugs", isCorrect: false },
      { id: 2, text: "A Nobel Prize winner in physics", isCorrect: true },
      { id: 3, text: " A famous psychoanalyst", isCorrect: false },
    ],
    title: "BreakingBad",
    number: 2,
  },
  {
    _id: uuid(),
    statement:
      "What tradition is there in Walter White's family for his birthday?",
    option: [
      {
        id: 0,
        text: "His wife cooks fried eggs and lays his age with bacon pieces",
        isCorrect: true,
      },
      {
        id: 1,
        text: "His wife bakes a cake with blue icing",
        isCorrect: false,
      },
      {
        id: 2,
        text: "His family gives him a piece of green clothing",
        isCorrect: false,
      },
      {
        id: 3,
        text: "His partner Jesse Pinkman is given a chemistry book as a present from Walter",
        isCorrect: false,
      },
    ],
    title: "BreakingBad",
    number: 3,
  },
  {
    _id: uuid(),
    statement: "Where the series was shot?",
    option: [
      { id: 0, text: " In Hollywood", isCorrect: false },
      { id: 1, text: " In New York", isCorrect: false },
      { id: 2, text: "Albuquerque and its vicinities", isCorrect: true },
      { id: 3, text: "In Riverside, California", isCorrect: false },
    ],
    title: "BreakingBad",
    number: 4,
  },
  {
    _id: uuid(),
    statement:
      " Walter White is the main character in the show. What is the name of the actor who portrays him?",
    option: [
      { id: 0, text: "Bryan Cranston", isCorrect: true },
      { id: 1, text: "Tylus Gray", isCorrect: false },
      { id: 2, text: "Brad John", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
    title: "BreakingBad",
    number: 5,
  },
  {
    _id: uuid(),
    statement: "What is the name of Jon’s direwolf?",
    option: [
      { id: 0, text: "Ghost", isCorrect: true },
      { id: 1, text: "Hunter", isCorrect: false },
      { id: 2, text: "Bloom", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
    title: "GameofThrones",
    number: 1,
  },
  {
    _id: uuid(),
    statement: "Which name is given to the bastards of The Reach?",
    option: [
      { id: 0, text: "Fire", isCorrect: false },
      { id: 1, text: "Wings", isCorrect: false },
      { id: 2, text: "Knight", isCorrect: false },
      { id: 3, text: "Flower", isCorrect: true },
    ],
    title: "GameofThrones",
    number: 2,
  },
  {
    _id: uuid(),
    statement:
      "Which House is a direct vassal of House Baratheon of King’s Landing?",
    option: [
      { id: 0, text: "Dark Majesty", isCorrect: false },
      { id: 1, text: "River Bloom", isCorrect: false },
      { id: 2, text: "Stokeworth", isCorrect: true },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
    title: "GameofThrones",
    number: 3,
  },
  {
    _id: uuid(),
    statement:
      "At Hoster Tully’s funeral, who shot the burning arrow that hit its mark?",
    option: [
      { id: 0, text: "Brynden Tully", isCorrect: true },
      { id: 1, text: "John Smith", isCorrect: false },
      { id: 2, text: "Reaper", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
    title: "GameofThrones",
    number: 4,
  },
  {
    _id: uuid(),
    statement:
      "What is the name of the continent on which most of the action of “GameofThrones” takes place?",
    option: [
      { id: 0, text: "Thames", isCorrect: false },
      { id: 1, text: "Westeros", isCorrect: true },
      { id: 2, text: "Westland", isCorrect: false },
      { id: 3, text: "Norway", isCorrect: false },
    ],
    title: "GameofThrones",
    number: 5,
  },
  {
    _id: uuid(),
    statement: "What is the name of the Flintstones' pet dinosaur?",
    option: [
      { id: 0, text: "Dino", isCorrect: true },
      { id: 1, text: "Barley", isCorrect: false },
      { id: 2, text: "Flint", isCorrect: false },
      { id: 3, text: "Pebb", isCorrect: false },
    ],
    title: "TheFlintstones",
    number: 1,
  },
  {
    _id: uuid(),
    statement: "Who is the paper boy?",
    option: [
      { id: 0, text: "Cruz", isCorrect: false },
      { id: 1, text: "Arnold", isCorrect: true },
      { id: 2, text: "john", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
    title: "TheFlintstones",
    number: 2,
  },
  {
    _id: uuid(),
    statement: "What animal does The Rubbles' pet dinosaur resemble?",
    option: [
      { id: 0, text: "Kangaroo", isCorrect: true },
      { id: 1, text: "Girrafe", isCorrect: false },
      { id: 2, text: "Unicorn", isCorrect: false },
      { id: 3, text: "Tiger", isCorrect: false },
    ],
    title: "TheFlintstones",
    number: 3,
  },
  {
    _id: uuid(),
    statement: "What is the name of Fred's baby?",
    option: [
      { id: 0, text: "Bunny", isCorrect: false },
      { id: 1, text: "Rosy", isCorrect: false },
      { id: 2, text: "Pebbles", isCorrect: true },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
    title: "TheFlintstones",
    number: 4,
  },
  {
    _id: uuid(),
    statement: "What is the real name of the episode that Pebbles was born in?",
    option: [
      { id: 0, text: "The Blessed Event", isCorrect: true },
      { id: 1, text: "Day of Bloom", isCorrect: false },
      { id: 2, text: "God's Gift", isCorrect: false },
      { id: 3, text: "Pebble Day", isCorrect: false },
    ],
    title: "TheFlintstones",
    number: 5,
  },
  {
    _id: uuid(),
    statement: "Which character is frequently being chased by Sylvester?",
    option: [
      { id: 0, text: "Tweety", isCorrect: true },
      { id: 1, text: "Grandma", isCorrect: false },
      { id: 2, text: "Lola", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
    title: "LooneyToons",
    number: 1,
  },
  {
    _id: uuid(),
    statement: "What song does Tweety most often  sing in the shower?",
    option: [
      { id: 0, text: "Lala land", isCorrect: false },
      { id: 1, text: "Roses and Pies", isCorrect: false },
      { id: 2, text: "Smells like teen puttycat", isCorrect: false },
      {
        id: 3,
        text: "Tweety dosent take a shower.He takes bath",
        isCorrect: true,
      },
    ],
    title: "LooneyToons",
    number: 2,
  },
  {
    _id: uuid(),
    statement: "What is the middle letter in Wile's name?",
    option: [
      { id: 0, text: "E", isCorrect: true },
      { id: 1, text: "Albus", isCorrect: false },
      { id: 2, text: "Peter", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
    title: "LooneyToons",
    number: 3,
  },
  {
    _id: uuid(),
    statement: "What animal was Petunia?",
    option: [
      { id: 0, text: "Duck", isCorrect: false },
      { id: 1, text: "Pig", isCorrect: true },
      { id: 2, text: "Frog", isCorrect: false },
      { id: 3, text: "Cat", isCorrect: false },
    ],
    title: "LooneyToons",
    number: 4,
  },
  {
    _id: uuid(),
    statement: "What was the name of the cat in the show?",
    option: [
      { id: 0, text: "Sylvester", isCorrect: true },
      { id: 1, text: "Cannopy", isCorrect: false },
      { id: 2, text: "Brucus", isCorrect: false },
      { id: 3, text: "Tom", isCorrect: false },
    ],
    title: "LooneyToons",
    number: 5,
  },
  {
    _id: uuid(),
    statement: " When the movie opens, where do we find Cobb?",
    option: [
      { id: 0, text: "Washed up on a beach", isCorrect: false },
      { id: 1, text: "In a hotel", isCorrect: true },
      { id: 2, text: "Working at the office", isCorrect: false },
      { id: 3, text: "Performing at show", isCorrect: false },
    ],
    title: "Inception",
    number: 1,
  },
  {
    _id: uuid(),
    statement: "Why is Cobb wanted by the police?",
    option: [
      { id: 0, text: "Stealing jewellery", isCorrect: false },
      { id: 1, text: "Murdering his wife", isCorrect: true },
      { id: 2, text: "Bluffing", isCorrect: false },
      { id: 3, text: "He was speeding", isCorrect: false },
    ],
    title: "Inception",
    number: 2,
  },
  {
    _id: uuid(),
    statement: "Who is Nash?",
    option: [
      { id: 0, text: "Cobb's former assistant", isCorrect: false },
      { id: 1, text: "Hotel Manager", isCorrect: false },
      { id: 2, text: "Police", isCorrect: false },
      { id: 3, text: "Cobb's former architect", isCorrect: true },
    ],
    title: "Inception",
    number: 3,
  },
  {
    _id: uuid(),
    statement:
      "Even though Arthur is skeptical, why is Cobb so confident that Inception is possible?",
    option: [
      {
        id: 0,
        text: "Cobb had performed it once before on Mal",
        isCorrect: true,
      },
      { id: 1, text: "Cobb has a friend helping him", isCorrect: false },
      { id: 2, text: "Cobb was not serious about it", isCorrect: false },
      { id: 3, text: "Cobb wanted the process to fail", isCorrect: false },
    ],
    title: "Inception",
    number: 4,
  },
  {
    _id: uuid(),
    statement: "Who said , I never taught you to be a thief?",
    option: [
      { id: 0, text: "Miles (Cobb's father-in-law)", isCorrect: true },
      { id: 1, text: "Cobb's mother", isCorrect: false },
      { id: 2, text: "Cobb's father", isCorrect: false },
      { id: 3, text: "Cobb's wife", isCorrect: false },
    ],
    title: "Inception",
    number: 5,
  },
  {
    _id: uuid(),
    statement:
      "At the start of the film, Ki-woo's friend, Min, pays a visit to the Kims to present them with a gift. What is it?",
    option: [
      { id: 0, text: "A cheese pizza", isCorrect: false },
      { id: 1, text: "A scholars rock", isCorrect: true },
      { id: 2, text: "A soju bottle", isCorrect: false },
      { id: 3, text: "A sacred book", isCorrect: false },
    ],
    title: "Parasite",
    number: 1,
  },
  {
    _id: uuid(),
    statement: "What does Min want Ki-woo to do while he's studying abroad?",
    option: [
      {
        id: 0,
        text: "Replace him as English tutor to the daughter of a wealthy family",
        isCorrect: true,
      },
      { id: 1, text: "House-sit for him and feed his cats", isCorrect: false },
      {
        id: 2,
        text: "Look after his aging father and sickly mother",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Take his place in university and sit for all his exams",
        isCorrect: false,
      },
    ],
    title: "Parasite",
    number: 2,
  },
  {
    _id: uuid(),
    statement:
      "What field of expertise does Ki-jung pretend to possess as a means of helping Da-song?",
    option: [
      { id: 0, text: "Teepee assembly", isCorrect: false },
      { id: 1, text: "Target archery", isCorrect: false },
      { id: 2, text: "Art therapy", isCorrect: true },
      { id: 3, text: "Dream-catching", isCorrect: false },
    ],
    title: "Parasite",
    number: 3,
  },
  {
    _id: uuid(),
    statement:
      "There's one thing the Kims can't hide from Parks, as both Da-song and Mr. Park observe and comment on it. What is it?",
    option: [
      { id: 0, text: "Their smell", isCorrect: true },
      { id: 1, text: "Their awkward gait", isCorrect: false },
      { id: 2, text: "Their hair color", isCorrect: false },
      { id: 3, text: "Their carefree nature", isCorrect: false },
    ],
    title: "Parasite",
    number: 4,
  },
  {
    _id: uuid(),
    statement: "What position does Ki-taek assume for the Parks?",
    option: [
      { id: 0, text: "Chef", isCorrect: false },
      { id: 1, text: "Chauffeur", isCorrect: true },
      { id: 2, text: "Helper", isCorrect: false },
      { id: 3, text: "Assistant", isCorrect: false },
    ],
    title: "Parasite",
    number: 5,
  },
  {
    _id: uuid(),
    statement: "What does HTML stands for?",
    option: [
      { id: 0, text: "", isCorrect: true },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
    title: "",
  },
];
