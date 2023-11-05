const MAX_STAR_THRESHOLD = 100;
const MIN_STAR_SIZE = 1;
const MAX_STAR_SIZE = 8;
const MIN_PLANET_SIZE = 20;
const MAX_PLANET_SIZE = 50;
const MAX_STAR_SPARSITY = 100;
const DEFAULT_SPEED = random_num(100, 500);
const BASIC_AVATAR_SIZE = 50;
const PLANET_PASSING_THRESHOLD = 3; // out of 100 stars, this is the % chance it'll be a planet instead (3% is the usual setting)
const STAR_COLORS = [
  '#FFFFFF', // white
  '#FFFFCC', // pale yellow
  '#FFFF99', // light yellow
  '#FFFF66', // yellow
  '#E6E6E6', // light gray
  '#CCCCCC', // gray
  '#99CCFF', // light blue
  '#66CCFF', // blue
  '#FF99CC', // light pink
  '#FF66CC'  // pink
];

const PLANET_COLORS = [
  "#F0A1A1", // Pinkish
  "#A1F0A1", // Greenish
  "#A1A1F0", // Bluish
  "#F0F0A1", // Yellowish
  "#DAA520"  // Goldenrod
];

const SPACE_COLORS = [
  '#000000', '#001f3f', '#520652', '#074d4d'
];

const PLAYER_SCORE_MAGNITUDE = 100;
const GAME_LEVEL_MAGNITUDE = 10;