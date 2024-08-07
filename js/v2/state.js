let game_paused = true;
let animated_frames_count = 0; // not all frames are animated, if the game is paused for example, then p5's frameCount continues running but anything that makes use of it may be off. So use this instead, and update it after every frame of animations that has run
let controller_connected = false;
let game_canvas;
let game_difficulty = 1;
let use_bg_transition = true; 
let player_avatar;
let player_1 = {};
let player_1_spawned = false; // a flag to determine if the player is currently on the canvas
let bg_scroll_factor = 1; // the background animations have set speeds, use this to speed em up or slow em down
let game_clock = 0;




const enemy_angle_obj = {
  min_speed: 3,
  max_speed: 5,
  min_angle: 15, // dont set this to 0, will cause bugs because calculate_rotation_angle will convert small values to 0, which in turn leads to rotations being set to default (ie 0 position origin) which is at odds with the direction of the flight path
  max_angle: 75
};


let enemy_avatar_1;
//let enemy_last_spawned = 0;
let enemy_spawn_interval =  60 * 3; // 60 frames per second (p5 default) * 3 seconds
let powerup_spawn_interval = 60 * 10;
let player_score = 0;

let scoreboard, lifeboard;

 // used for transitions
let bg_color_index1 = 0;
let bg_color_index2 = 1;
let lerp_amount = 0;

// Initialise object containers. These will hold objects that get translated into elements on the canvas
let stars = [];
let planets = [];
let projectiles = [];
let enemies = [];
let messages = [];
let powerups = [];

// turn an array of words into an array of message objects ready to use ingame
function initialise_messages(msg_arr){
    
  let messages = [];

  for(let i = 0; i < msg_arr.length; i++){
      let current_msg = msg_arr[i];
      let new_message = generate_message_box(current_msg, i + 1);
      messages.push(new_message);
  }

  return messages;
}




function pause_game(){
  game_paused = !game_paused;

  if(game_paused){
    pause_canvas_btn.textContent = "Resume";
    stop_audio(backing_track);
  } else {
    pause_canvas_btn.textContent = "Pause";
    backing_track.play();
  }
  //player_1_spawned = false;
}

function reset_state(){
  stars = [];
  planets = [];
  projectiles = [];
  enemies = [];
  messages = [];
  
  pause_canvas_btn.classList.add("hide");
  test_btn.classList.add("hide");
  reset_btn.classList.add("hide");
  start_vert_scroller.classList.remove("hide");
  header_panel.classList.remove("hide");
  splash_panel.classList.remove("hide");
  player_1_spawned = false;
  game_difficulty = 1;
  use_bg_transition = true; 
  player_score = 0;
  enemy_spawn_interval =  60 * 3; // 60 frames per second (p5 default) * 3 seconds
}

