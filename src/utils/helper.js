var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

export const buttonList = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "News",
  },
  {
    id: 3,
    name: "Pop Songs",
  },
  {
    id: 4,
    name: "Gaming",
  },
  {
    id: 5,
    name: "Sports",
  },
  {
    id: 6,
    name: "Music",
  },
  {
    id: 7,
    name: "Live",
  },
  {
    id: 8,
    name: "History",
  },
  {
    id: 9,
    name: "Indian Music",
  },
  {
    id: 10,
    name: "Hindi",
  },
  {
    id: 11,
    name: "Telugu",
  },
  {
    id: 12,
    name: "Tamil",
  },
  {
    id: 13,
    name: "Love",
  },
  {
    id: 13,
    name: "Health",
  },
];

export const generateRandomName = () => {
  return nameList[Math.floor(Math.random() * nameList.length)];
};

export const generateRandomMsg = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const nthprime = (n) => {
  var prime = [],
    i = 1;
  while (i++ && prime.length < n)
    prime.reduce((a, c) => (i % c) * a, 2) && prime.push(i);
  return prime.length ? prime.pop() : -1;
};

export const count = (viewsCount) => {
  if (viewsCount) {
    if (viewsCount > 1000 && viewsCount < 10000) return viewsCount[0] + "K";
    else if ((viewsCount) => 10000 && viewsCount < 100000)
      return viewsCount[0] + viewsCount[1] + "K";
    else if ((viewsCount) => 100000 && viewsCount < 1000000)
      return viewsCount[0] + viewsCount[1] + viewsCount[2] + "K";
    else if ((viewsCount) => 1000000 && viewsCount < 10000000)
      return (
        viewsCount[0] + viewsCount[1] + viewsCount[2] + viewsCount[3] + "M"
      );
  } else return 0;
};
