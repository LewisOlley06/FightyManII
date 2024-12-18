kaboom({ // Initiates kaboom instance
    background: [255, 255, 255], // Sets the background colour to white
    font: "arcade", // Sets the default font to the "arcade" font, loaded from a TTF file later
    width: 1920,
    height: 961, // Accounting for the taskbar. Default resolution is 1920x961
    virtualControls: false,
    crisp: true, // Disables anti-aliasing and sharpens the game instead
    stretch: true, // Stretches the game to fit the screen
    debug: false // Disables debug mode (Kaboom.js by default allows the player to hit function keys to show game information)
})

loadFont("arcade", "/fonts/arcade.ttf") // Loads the font used throughout the game
//loading sounds
loadSound("game_over", "/sounds/game_over.mp3")
loadSound("axe", "/sounds/FX/axe.wav")
loadSound("menu_theme", "/sounds/menu.mp3")
loadSound("bad_ending", "/sounds/BadEnding.mp3")
loadSound("good_ending", "/sounds/good_ending.mp3")
loadSound("wheels", "/sounds/FX/car.wav")
loadSound("reload", "/sounds/FX/reload.wav")
loadSound("fireShort", "/sounds/FX/fireShort.wav")
loadSound("fireLong", "/sounds/FX/fireLong.wav")
loadSound("flamethrower", "/sounds/FX/flamethrower.wav")
loadSound("fall", "/sounds/FX/fall.wav")
loadSound("elevator_start", "/sounds/FX/elevator_start.wav")
loadSound("shoot", "/sounds/FX/shoot.wav")
loadSound("knocked_down", "/sounds/FX/knocked_down.wav")
loadSound("stage_select", "/sounds/stage_select.mp3")
loadSound("stage_one", "/sounds/Stage1.mp3")
loadSound("stage_two", "/sounds/Stage2.mp3")
loadSound("stage_three", "/sounds/Stage3.mp3")
loadSound("stage_four", "/sounds/Stage4.mp3")
loadSound("Boss", "/sounds/Boss.mp3")
loadSound("stage_five_a", "/sounds/Stage5a.mp3")
loadSound("stage_five_b", "/sounds/Stage5b.mp3")
loadSound("stage_six", "/sounds/Stage6.mp3")
loadSound("Boss_Final", "/sounds/Boss_Final.mp3")
loadSound("FinalBossIntro", "/sounds/FinalBossIntro.mp3")
loadSound("FinalBossLoop1", "/sounds/FinalBossLoop1.mp3")
loadSound("FinalBossLoop2", "/sounds/FinalBossLoop2.mp3")
loadSound("leaderboard", "/sounds/leaderboard.mp3")
loadSound("button", "/sounds/button.mp3")
loadSound("level_complete", "/sounds/level_complete.mp3")
loadSound("bad", "/sounds/FX/declined.mp3")
loadSound("enemyPunch1", "/sounds/FX/light_punch1.wav")
loadSound("enemyPunch2", "/sounds/FX/light_punch2.wav")
loadSound("enemyPunch3", "/sounds/FX/enemy_heavy_punch.wav")
loadSound("enemyDeath1", "/sounds/FX/death1.wav")
loadSound("enemyDeath2", "/sounds/FX/death2.wav")
loadSound("beep", "/sounds/beep.mp3")
loadSound("character_select", "/sounds/character_select.mp3")


for (let i = 1; i <= 4; i++) { loadSound(`punch${i}`, `/sounds/FX/punch${i}.wav`) }


//loading sprites
loadSprite("menu_bg", `/sprites/backgrounds/menu.png`)
loadSprite("johnny_standing1", `/sprites/johnny/standing1.png`)
loadSprite("fireProj", `/sprites/enemies/fireProjectile.png`)
loadSprite("goSign", `/sprites/ui/goSign.png`)
loadSprite("bullet", `/sprites/enemies/bullet.png`)
loadSprite("staple", `/sprites/enemies/staple.png`)
loadSprite("old_man", `/sprites/old_man.png`)
loadSprite("character_select_bg", "/sprites/backgrounds/charSelect.png")
loadSprite("leaderboard_bg", "/sprites/backgrounds/leaderboardInput.png")
loadSprite("dark", "/sprites/ui/Black.jpg")
loadSprite("fightyManIcon", "/sprites/ui/fightyMan.png")
loadSprite("hodsonIcon", "/sprites/ui/hodson.png")
loadSprite("grigoryIcon", "/sprites/ui/grigory.png")
loadSprite("venusIcon", "/sprites/ui/venus.png")
loadSprite("stage_select", "/sprites/backgrounds/Stage Select.png")
loadSprite("chevron", "/sprites/ui/chevron.png")
loadSprite("healthbar", "/sprites/ui/healthbar.png")
loadSprite("johnny_hp", "/sprites/ui/johnny.png")
loadSprite("stage_one_sea_bg", "/sprites/backgrounds/Round 1 BG.png")
loadSprite("stage_one_pier_bg", "/sprites/backgrounds/Round 1 Pier.png")
loadSprite("stage_two_bg", "/sprites/backgrounds/Stage 2-1.png")
loadSprite("stage_two_bg2", "/sprites/backgrounds/Stage2-2.png")
loadSprite("stage_two_bg3", "/sprites/backgrounds/Stage 2-3.png")
loadSprite("stage_three_bg", "/sprites/backgrounds/Stage3.png")
loadSprite("stage_four_bg2", "/sprites/backgrounds/Stage4BG.png")
loadSprite("stage_four_bg", "/sprites/backgrounds/Stage4FG.png")
loadSprite("stage_four_side", "/sprites/backgrounds/Stage4Side.png")

loadSprite("stage_five_a_bg", "/sprites/backgrounds/Stage5a.png")
loadSprite("stage_five_b_bg", "/sprites/backgrounds/Stage5b.png")

loadSpriteAtlas("/sprites/ui/weightLimit.png", {
    "weightLimitSprite": {
        x: 0,
        y: 0,
        width: 96,
        height: 16,
        sliceX: 6,
        anims: {
            '1': { from: 0, to: 0, loop: true, speed: 0.5 },
            '2': { from: 1, to: 1, loop: true, speed: 0.5 },
            '3': { from: 2, to: 2, loop: true, speed: 0.5 },
            '4': { from: 3, to: 3, loop: true, speed: 0.5 },
            '5': { from: 4, to: 4, loop: true, speed: 0.5 },
            '6': { from: 5, to: 5, loop: true, speed: 0.5 },
        }
    }
})

loadSpriteAtlas("/sprites/johnny/johnnySpriteSheet.png", {
    'johnny': {
        x: 0,
        y: 0,
        width: 704,
        height: 32,
        sliceX: 22,
        anims: {
            'idle': { from: 0, to: 1, loop: true, speed: 0.5 },
            'walking': { from: 18, to: 21, loop: true, speed: 6 },
            'knockedDown': { from: 12, to: 12, loop: true, speed: 1 },
            'downed': { from: 13, to: 13, loop: true, speed: 1 },
            'jab': { from: 4, to: 4, loop: false, speed: 3 },
            'cross': { from: 8, to: 11, loop: false, speed: 10 },
            'block': { from: 14, to: 14, loop: false, speed: 20 },
        }
    }
})
loadSpriteAtlas("/sprites/enemies/hodson.png", {
    'hodson': {
        x: 0,
        y: 0,
        width: 352,
        height: 48,
        sliceX: 11,
        anims: {
            'idle': { from: 0, to: 0, loop: true, speed: 0.5 },
            'walking': { from: 1, to: 4, loop: true, speed: 6 },
            'cross': { from: 5, to: 8, loop: false, speed: 10 },
            'stapler': { from: 9, to: 10, loop: true, speed: 6 },
        }
    }
})
loadSpriteAtlas("/sprites/johnny/johnnySpriteSheet.png", {
    "johnny's Twin Brother": {
        x: 0,
        y: 0,
        width: 704,
        height: 32,
        sliceX: 22,
        anims: {
            'idle': { from: 0, to: 1, loop: true, speed: 0.5 },
            'walking': { from: 18, to: 21, loop: true, speed: 6 },
            'knockedDown': { from: 12, to: 12, loop: true, speed: 1 },
            'downed': { from: 13, to: 13, loop: true, speed: 1 },
            'jab': { from: 4, to: 4, loop: false, speed: 3 },
            'cross': { from: 8, to: 11, loop: false, speed: 10 },
            'block': { from: 14, to: 14, loop: false, speed: 20 },
        }
    }
})
loadSpriteAtlas("/sprites/enemies/venus.png", {
    'venus': {
        x: 0,
        y: 0,
        width: 192,
        height: 32,
        sliceX: 6,
        anims: {
            'idle': { from: 0, to: 5, loop: true, speed: 6 },
        }
    }
})
loadSpriteAtlas("/sprites/enemies/firebar.png", {
    'firebar': {
        x: 0,
        y: 0,
        width: 128,
        height: 10,
        sliceX: 4,
        anims: {
            'idle': { from: 0, to: 3, loop: true, speed: 5 },
        }
    }
})
loadSpriteAtlas("/sprites/enemies/Joseph.png", {
    'joseph': {
        x: 0,
        y: 0,
        width: 320,
        height: 32,
        sliceX: 10,
        anims: {
            'idle': { from: 0, to: 1, loop: true, speed: 0.5 },
            'walking': { from: 6, to: 9, loop: true, speed: 5 },
            'knockedDown': { from: 5, to: 5, loop: true, speed: 1 },
            'downed': { from: 4, to: 4, loop: true, speed: 1 },
            'jab': { from: 3, to: 3, loop: false, speed: 3 },
        }
    }
})
loadSpriteAtlas("/sprites/enemies/Grigory.png", {
    'grigory': {
        x: 0,
        y: 0,
        width: 384,
        height: 32,
        sliceX: 12,
        anims: {
            'idle': { from: 0, to: 0, loop: true, speed: 0.5 },
            'loading': { from: 1, to: 0, loop: false, speed: 1 },
            'walking': { from: 2, to: 3, loop: true, speed: 5 },
            'downed': { from: 5, to: 5, loop: true, speed: 1 },
            'shoot': { from: 6, to: 10, loop: false, speed: 25 },
        }
    }
})
loadSpriteAtlas("/sprites/enemies/Andrew.png", {
    'andrew': {
        x: 0,
        y: 0,
        width: 320,
        height: 32,
        sliceX: 10,
        anims: {
            'idle': { from: 0, to: 1, loop: true, speed: 0.5 },
            'walking': { from: 6, to: 9, loop: true, speed: 6 },
            'knockedDown': { from: 5, to: 5, loop: true, speed: 1 },
            'downed': { from: 4, to: 4, loop: true, speed: 1 },
            'jab': { from: 3, to: 3, loop: false, speed: 3 },
        }
    }
})
loadSpriteAtlas("/sprites/enemies/Gary.png", {
    'gary': {
        x: 0,
        y: 0,
        width: 352,
        height: 32,
        sliceX: 11,
        anims: {
            'idle': { from: 0, to: 1, loop: true, speed: 0.5 },
            'walking': { from: 7, to: 10, loop: true, speed: 6 },
            'downed': { from: 6, to: 6, loop: true, speed: 1 },
            'cross': { from: 2, to: 4, loop: false, speed: 10 },
        }
    }
})
loadSpriteAtlas("/sprites/enemies/David.png", {
    'david': {
        x: 0,
        y: 0,
        width: 352,
        height: 32,
        sliceX: 11,
        anims: {
            'idle': { from: 0, to: 1, loop: true, speed: 0.5 },
            'walking': { from: 7, to: 10, loop: true, speed: 6 },
            'downed': { from: 6, to: 6, loop: true, speed: 1 },
            'cross': { from: 2, to: 4, loop: false, speed: 10 },
        }
    }
})
loadSpriteAtlas("/sprites/enemies/Spicy Man.png", {
    'fightyMan': {
        x: 0,
        y: 0,
        width: 864,
        height: 32,
        sliceX: 27,
        anims: {
            'idle': { from: 0, to: 0, loop: true, speed: 0.5 },
            'summon': { from: 1, to: 2, loop: true, speed: 6 },
            'walking': { from: 3, to: 6, loop: true, speed: 7 },
            'fireProj': { from: 7, to: 11, loop: false, speed: 10 },
            'flamethrower': { from: 12, to: 16, loop: false, speed: 10 },
            'fireShield': { from: 17, to: 21, loop: false, speed: 10 },
            'flarePunch': { from: 22, to: 26, loop: false, speed: 5 }
        }
    }
})



let darkOverlay = null // Stores the dark overlay in memory
let stageGround = add([
    rect(width(), 64),
    pos(0, height() - 32),
    area(),
    body({ isStatic: true }),
    color(0, 0, 0),
    outline(4, rgb(0, 0, 0)),
    "stageGround"
]) // Stores the ground in memory. Used for collision detection with entity movement

let accountStats = {
    "username": "admin",
    "password": "admin123",
    "enemies_defeated": 100,
    "hardest_good": 5,
    "infinity_0_highest": 18,
    "infinity_1_highest": 8,
    "infinity_2_highest": 21,
    "infinity_3_highest": 6,
    "infinity_4_highest": 5,
    "stage_select": true,
    "boss_rush": true
}
let userAccountStats = [ // Array holding the data of all locally stored accounts for the current session, including default scores
    {
        "username": "guest",
        "password": "guest",
        "enemies_defeated": 0,
        "hardest_good": -1,
        "infinity_0_highest": 5,
        "infinity_1_highest": 0,
        "infinity_2_highest": 2,
        "infinity_3_highest": 1,
        "infinity_4_highest": 7,
        "stage_select": false,
        "boss_rush": false
    },
    {
        "username": "johnny",
        "password": "johnny",
        "enemies_defeated": 0,
        "hardest_good": -1,
        "infinity_0_highest": 24,
        "infinity_1_highest": 22,
        "infinity_2_highest": 12,
        "infinity_3_highest": 9,
        "infinity_4_highest": 4,
        "stage_select": false,
        "boss_rush": false
    },
    {
        "username": "gary",
        "password": "gary",
        "enemies_defeated": 0,
        "hardest_good": -1,
        "infinity_0_highest": 2,
        "infinity_1_highest": 2,
        "infinity_2_highest": 1,
        "infinity_3_highest": 1,
        "infinity_4_highest": 1,
        "stage_select": false,
        "boss_rush": true
    },
    {
        "username": "david",
        "password": "david",
        "enemies_defeated": 0,
        "hardest_good": -1,
        "infinity_0_highest": 21,
        "infinity_1_highest": 22,
        "infinity_2_highest": 1,
        "infinity_3_highest": 14,
        "infinity_4_highest": 1,
        "stage_select": false,
        "boss_rush": true
    },
    {
        "username": "joseph",
        "password": "joseph",
        "enemies_defeated": 0,
        "hardest_good": -1,
        "infinity_0_highest": 1,
        "infinity_1_highest": 1,
        "infinity_2_highest": 1,
        "infinity_3_highest": 1,
        "infinity_4_highest": 1,
        "stage_select": false,
        "boss_rush": true
    },
    {
        "username": "fighty man",
        "password": "fighty man",
        "enemies_defeated": 0,
        "hardest_good": -1,
        "infinity_0_highest": 54,
        "infinity_1_highest": 38,
        "infinity_2_highest": 27,
        "infinity_3_highest": 19,
        "infinity_4_highest": 12,
        "stage_select": false,
        "boss_rush": true
    },
    {
        "username": "admin",
        "password": "admin123",
        "enemies_defeated": 100,
        "hardest_good": 5,
        "infinity_0_highest": 18,
        "infinity_1_highest": 8,
        "infinity_2_highest": 21,
        "infinity_3_highest": 6,
        "infinity_4_highest": 5,
        "stage_select": true,
        "boss_rush": true
    }
]

let loggedIn = false
let playerControlEvents = {
    keyDown: [], // Stores the keyDown events for the player
    keyUp: [], // Stores the keyUp events for the player
}

let stageFourBackgroundEntity = null // Stores the object of the moving background in Stage 4
let bgMoving = false // Stores the boolean value of whether the background is moving in Stage 2
let difficultyMultiplier = null // Stores the value of the enemy difficulty multiplier

let selectedCharacter = null // Stores the value of the selected character, used for round starts
let fightyManAttack = 2 // Stores the default value of the Final Boss' first attack
let hodsonAttack = 1 // Stores the default value of the Final Boss' first attack
let playerControlEnabled = false // Stores whether or not the player controls are enabled
let deathCount = 0
let sessionScore = 0
let globalVolume = 0.5
let difficultyNames = ["Easiest Difficulty", "Easy Difficulty", "Normal Difficulty", "Hard Difficulty", "Insane Difficulty"]; // Stores the names of the difficulties
let difficulty = 2 // Default difficulty is normal (2)
let gameMode = null // Stores the current game mode (either "main", "infinity" or "stage_select")
let currentRound = 1
let enemyAIBasic = null // Stores the enemy AI in memory when enabled
let oldManSpawn = null
let currentSong = play("menu_theme", { loop: true, volume: 0.0 }) // Loops the menu theme while the player is in the menu
// Initialise a global variable to store the current playing song

class Healthbar {
    constructor(options) {
        this.options = options;
        this.text = options.text;
        this.icon = options.icon;
        this.maxHealth = options.maxHealth;
        this.position = options.position;
        this.color = options.color || rgb(255, 0, 0);
        this.backgroundColor = options.backgroundColor || rgb(50, 50, 50);
        this.flip = options.flip || false;
        this.healthbar = null;
        this.healthbarOutline = null;
        this.health = this.maxHealth;
        if (this.flip && currentRound === 6) return
        // Draw the healthbar outline
        this.healthbarOutline = add([
            sprite("healthbar"),
            pos(this.position),
            z(20),
            scale(0.75),
        ]);

        let scaleSize = this.icon === "johnny_hp" ? 0.7 : 7;

        this.healthbarImage = add([
            sprite(this.icon),
            pos(this.position.x + 30, this.position.y + 135),
            z(19),
            scale(scaleSize),
            "healthbarImage"
        ]);

        this.healthbarText = add([
            text(this.text, { align: this.flip ? "right" : "left", size: 48, font: "arcade" }),
            pos(this.position.x + (this.flip ? 330 : 200) - (this.flip ? this.text.length * 28 : 0), this.position.y + 135),
            z(19),
            scale(0.7),
            "healthbarText"
        ]);

        this.healthbar = [
            add([
                rect(386, 35),
                pos(this.position.x + 184, this.position.y + 225),
                color(this.color),
                rotate(this.flip ? 180 : 0),
                z(19),
                anchor("left"),
                "healthbar"
            ]),
            add([
                rect(386, 35),
                pos(this.position.x + 184, this.position.y + 260),
                color(rgb(this.color.r - 50, this.color.g - 50, this.color.b - 50)),
                rotate(this.flip ? 180 : 0),
                z(19),
                anchor("left"),
                "healthbar"
            ])
        ];

        this.healthbarBackground = add([
            rect(386, 70),
            pos(this.position.x + 184, this.position.y + 240),
            color(this.backgroundColor),
            z(18),
            anchor("left"),
            "healthbarBackground"
        ]);

        if (this.flip) {
            this.healthbarOutline.flipX = true;
            this.healthbarImage.flipX = true;
            this.healthbarImage.pos.x += 393;
            this.healthbarText.pos.x += 30;
            this.healthbar.forEach(healthbar => {
                healthbar.pos.x += 233;
            });
            this.healthbarBackground.flipX = true;
            this.healthbarBackground.pos.x -= 154;
        }
    }

    hurt(amount) {
        if (this.bottomTween) this.bottomTween.finish();
        if (this.topTween) this.topTween.finish();

        this.health -= amount;
        let newWidth = (this.health / this.maxHealth) * 386;
        if (newWidth < 0) newWidth = 0;

        this.topTween = tween(
            this.healthbar[0].width,
            newWidth,
            0.5,
            (width) => this.healthbar[0].width = width,
            easings.easeOutCubic
        );
        this.bottomTween = tween(
            this.healthbar[1].width,
            newWidth,
            0.5,
            (width) => this.healthbar[1].width = width,
            easings.easeOutCubic
        );
    }

    heal(amount) {
        if (this.bottomTween) this.bottomTween.finish();
        if (this.topTween) this.topTween.finish();

        this.health += amount;
        let newWidth = (this.health / this.maxHealth) * 386;
        if (newWidth < 0) newWidth = 0;

        this.topTween = tween(
            this.healthbar[0].width,
            newWidth,
            0.5,
            (width) => this.healthbar[0].width = width,
            easings.easeOutCubic
        );
        this.bottomTween = tween(
            this.healthbar[1].width,
            newWidth,
            0.5,
            (width) => this.healthbar[1].width = width,
            easings.easeOutCubic
        );
    }

    destroy() {
        if (this.flip) {
            // Destroy the healthbar outline
            if (this.healthbarOutline) {
                destroy(this.healthbarOutline);
                this.healthbarOutline = null;
            }

            // Destroy the healthbar image
            if (this.healthbarImage) {
                destroy(this.healthbarImage);
                this.healthbarImage = null;
            }

            // Destroy the healthbar text
            if (this.healthbarText) {
                destroy(this.healthbarText);
                this.healthbarText = null;
            }

            // Destroy the healthbar
            if (this.healthbar) {
                this.healthbar.forEach(healthbar => {
                    destroy(healthbar);
                });
                this.healthbar = null;
            }

            // Destroy the healthbar background
            if (this.healthbarBackground) {
                destroy(this.healthbarBackground);
                this.healthbarBackground = null;
            }
        }
    }
}



// DifficultyIndex = Difficulty Number
async function getLeaderboard(difficultyIndex) {
    function merge(left, right) { // Merge Sorts the values stored in userAccountStats, based on their highest Infinity Mode Scores in the specified difficulty
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex][`infinity_${difficultyIndex}_highest`] < right[rightIndex][`infinity_${difficultyIndex}_highest`]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;

        const middle = Math.floor(arr.length / 2);
        const leftHalf = arr.slice(0, middle);
        const rightHalf = arr.slice(middle);

        const leftSorted = mergeSort(leftHalf);
        const rightSorted = mergeSort(rightHalf);

        return merge(leftSorted, rightSorted);
    }

    let leaderboard = []; // Array to store sorted user stats

    if (userAccountStats.length) {
        leaderboard = mergeSort(userAccountStats).reverse();
    } else {
        leaderboard = null;
    }
    return (leaderboard)
}

async function enableEnemyAI() {
    enemyAIBasic = onUpdate(() => {
        // Gets all entities with the "enemy" tag
        let enemies = get("enemy");
        let bosses = ["grigory", "fightyMan", "venus", "hodson"]
        enemies.forEach(async enemy => {
            if (enemy.dead) return // Stops the function if the enemy is dead
            // Get the player's position
            const player = get("player")[0] // Gets the first entity with the player tag
            if (!player) {
                enemy.play("idle")
                return // Stops the function if the player is null
            }
            const playerPos = player.worldPos() // Gets the player's position
            const enemyPos = enemy.worldPos() // Gets the enemy's position

            let horizontalDirection = null // Stores the horizontal direction of the enemy
            if (enemyPos.x < playerPos.x) horizontalDirection = "left"; // Checks whether the entity is to the left of the player
            if (enemyPos.x >= playerPos.x) horizontalDirection = "right"; // Checks whether the entity is to the right of the player
            if (enemyPos.y < playerPos.y) verticalDirection = "down"; // Checks whether the entity is to the lower of the player
            if (enemyPos.y >= playerPos.y) verticalDirection = "up"; // Checks whether the entity is to the upper of the player
            if (horizontalDirection === "left" && (enemy.attackType !== "venus")) enemy.flipX = false
            if (horizontalDirection === "right" && (enemy.attackType !== "venus")) enemy.flipX = true


            const distance = Math.sqrt(Math.pow(enemyPos.x - playerPos.x, 2) + Math.pow(enemyPos.y - playerPos.y, 2)) // Calculates the distance between the player and the enemy
            let attackChance = getRandomNumber(1, (1000 / enemy.aggression)) // Creates a random attack chance
            if (distance < 150 && (!bosses.includes(enemy.attackType))) { // If the distance is less than 100 pixels

                if (enemy.curAnim() === "cross") return // Checks to see if the attacking enemy is currently attacking, or dead.
                if (enemy.curAnim() === "jab") return
                if (enemy.dead) return

                if (attackChance === 1 && enemy.attackType === "jab") { // If the random attack chance hits, the enemy performs their attack.

                    if (enemy.attackCooldown === true) return // Jab attack sequence
                    performAttack(enemy, "jab")
                    enemy.attackCooldown = true
                    await wait(1)
                    enemy.attackCooldown = false
                }


                if (attackChance === 1 && enemy.attackType === "cross") {

                    if (enemy.attackCooldown === true) return // Cross attack sequence
                    performAttack(enemy, "cross")
                    enemy.attackCooldown = true
                    await wait(1)
                    enemy.attackCooldown = false
                }
                if (!enemy.dead) enemy.play("idle") // If the enemy is alive, restart the idle animation after the attack

            } else if (!bosses.includes(enemy.attackType)) {

                // Move the enemy towards the player
                moveSpeed = enemy.speed * 100

                if (horizontalDirection === "left") enemy.move(moveSpeed, 0)
                if (horizontalDirection === "right") enemy.move(-moveSpeed, 0)
                if (distance < 300) {
                    if (verticalDirection === "up") enemy.move(0, -moveSpeed)
                    if (verticalDirection === "down") enemy.move(0, moveSpeed)
                }

                if (enemy.curAnim() == "walking") return
                enemy.play("walking")
            }


            if (enemy.attackType === "fightyMan") { //If the enemy is the final boss, initiate Final Boss AI.
                let maxHealth = enemy.healthbar.maxHealth
                healthDifficultyMultiplier = 1 + (enemy.healthbar.maxHealth - enemy.hp()) / enemy.healthbar.maxHealth;
                if (enemy.attackCooldown === true) return
                if (enemy.dead) return
                enemy.collisionIgnore.push("enemy")


                if (fightyManAttack === 1) { // Initiates the walking right animation
                    enemy.attackCooldown = true
                    if (enemy.curAnim() !== "walking") enemy.play("walking")
                    await tween(
                        enemy.worldPos(),
                        vec2(1800, 500),
                        3 / difficultyMultiplier / healthDifficultyMultiplier,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )
                    enemy.play("idle")
                    await wait(1.5 / difficultyMultiplier / healthDifficultyMultiplier / (enemy.hp() > maxHealth * 0.5 ? 2 : 1))
                    fightyManAttack = getRandomNumber(3, 6)
                    enemy.attackCooldown = false
                }

                if (fightyManAttack === 2) { // Initiates the walking left animation

                    enemy.attackCooldown = true
                    if (enemy.curAnim() !== "walking") enemy.play("walking")
                    await tween(
                        enemy.worldPos(),
                        vec2(200, 500),
                        3 / difficultyMultiplier / healthDifficultyMultiplier,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )
                    enemy.play("idle")
                    await wait(1 / difficultyMultiplier / healthDifficultyMultiplier / (enemy.hp() > maxHealth * 0.5 ? 2 : 1))
                    fightyManAttack = getRandomNumber(3, 6)
                    enemy.attackCooldown = false
                }
                if (fightyManAttack === 3) { // Initiates the fireballs attack
                    enemy.attackCooldown = true
                    await wait(0.5 / difficultyMultiplier / healthDifficultyMultiplier / (enemy.hp() > maxHealth * 0.5 ? 2 : 1))

                    const playerPos = player.worldPos() // Gets the player's position
                    const enemyPos = enemy.worldPos() // Gets the enemy's position

                    let horizontalDirection = null // Stores the horizontal direction of the enemy
                    if (enemyPos.x < playerPos.x) horizontalDirection = "left"; // Checks whether the entity is to the left of the player
                    if (enemyPos.x >= playerPos.x) horizontalDirection = "right"; // Checks whether the entity is to the right of the player
                    if (enemyPos.y < playerPos.y) verticalDirection = "down"; // Checks whether the entity is to the lower of the player
                    if (enemyPos.y >= playerPos.y) verticalDirection = "up"; // Checks whether the entity is to the upper of the player

                    if (horizontalDirection === "left") {
                        enemy.flipX = false
                        fireballDown = "southEast"
                    }
                    if (horizontalDirection === "right") {
                        enemy.flipX = true
                        fireballDown = "southWest"
                    }
                    enemy.play("fireProj")

                    play("fireShort")
                    spawnProjectile({
                        spriteName: "fireProj",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 5 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, horizontalDirection, 1, false, true)
                    await wait(0.1)
                    spawnProjectile({
                        spriteName: "fireProj",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 5 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, fireballDown, 1, false, true)
                    await wait(0.1)
                    spawnProjectile({
                        spriteName: "fireProj",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 5 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, "down", 1, false, true)
                    await wait(0.1)
                    spawnProjectile({
                        spriteName: "fireProj",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 5 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, fireballDown, 1, false, true)
                    await wait(0.1)
                    spawnProjectile({
                        spriteName: "fireProj",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 5 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, horizontalDirection, 1, false, true)

                    const distance = Math.sqrt(Math.pow(enemyPos.x - playerPos.x, 2) + Math.pow(enemyPos.y - playerPos.y, 2)) // Calculates the distance between the player and the enemy

                    if (horizontalDirection === "left") fightyManAttack = 1
                    if (horizontalDirection === "right") fightyManAttack = 2
                    if (getRandomNumber(1, 2) === 2) fightyManAttack = 5
                    if (getRandomNumber(1, 2) === 2) fightyManAttack = 6
                    if (getRandomNumber(1, 2) === 2) fightyManAttack = 4
                    if (distance < 150) fightyManAttack = 4

                    enemy.attackCooldown = false
                }
                if (fightyManAttack === 4) { // Initiates the fireshield attack
                    enemy.attackCooldown = true
                    play("flamethrower")
                    await performAttack(enemy, "fireShield")
                    enemy.play("idle")

                    const playerPos = player.worldPos() // Gets the player's position
                    const enemyPos = enemy.worldPos() // Gets the enemy's position

                    let horizontalDirection = null // Stores the horizontal direction of the enemy
                    if (enemyPos.x < playerPos.x) horizontalDirection = "left"; // Checks whether the entity is to the left of the player
                    if (enemyPos.x >= playerPos.x) horizontalDirection = "right"; // Checks whether the entity is to the right of the player
                    if (enemyPos.y < playerPos.y) verticalDirection = "down"; // Checks whether the entity is to the lower of the player
                    if (enemyPos.y >= playerPos.y) verticalDirection = "up"; // Checks whether the entity is to the upper of the player
                    if (horizontalDirection === "left") enemy.flipX = false
                    if (horizontalDirection === "right") enemy.flipX = true
                    const distance = Math.sqrt(Math.pow(enemyPos.x - playerPos.x, 2) + Math.pow(enemyPos.y - playerPos.y, 2)) // Calculates the distance between the player and the enemy

                    await wait(0.5 / difficultyMultiplier / healthDifficultyMultiplier / (enemy.hp() > maxHealth * 0.5 ? 2 : 1))
                    if (horizontalDirection === "left") fightyManAttack = 1
                    if (horizontalDirection === "right") fightyManAttack = 2
                    if (distance < 150) fightyManAttack = 4
                    enemy.attackCooldown = false
                }
                if (fightyManAttack === 5) { // Initiates the firePunch attack
                    enemy.attackCooldown = true
                    if (enemy.curAnim() !== "walking") enemy.play("walking")
                    const playerPos = player.worldPos() // Gets the player's position
                    const enemyPos = enemy.worldPos() // Gets the enemy's position
                    if (enemyPos.x < playerPos.x) horizontalDirection = "left"; // Checks whether the entity is to the left of the player
                    if (enemyPos.x >= playerPos.x) horizontalDirection = "right"; // Checks whether the entity is to the right of the player

                    play("flamethrower")
                    await tween(
                        enemy.worldPos(),
                        (horizontalDirection === "left") ? vec2(player.worldPos().x - 100, player.worldPos().y) : vec2(player.worldPos().x + 100, player.worldPos().y),
                        1 / (enemy.speed / 5) / difficultyMultiplier / healthDifficultyMultiplier,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )
                    await performAttack(enemy, "cross")
                    fightyManAttack = getRandomNumber(1, 5)
                    enemy.attackCooldown = false

                }
                if (fightyManAttack === 6) { // Initiates the firewalls attack
                    enemy.attackCooldown = true

                    await wait(0.5 / difficultyMultiplier / healthDifficultyMultiplier / (enemy.hp() > maxHealth * 0.5 ? 2 : 1))

                    const playerPos = player.worldPos() // Gets the player's position
                    const enemyPos = enemy.worldPos() // Gets the enemy's position
                    let horizontalDirection = null // Stores the horizontal direction of the enemy
                    if (enemyPos.x < playerPos.x) horizontalDirection = "left"; // Checks whether the entity is to the left of the player
                    if (enemyPos.x >= playerPos.x) horizontalDirection = "right"; // Checks whether the entity is to the right of the player
                    if (enemyPos.y < playerPos.y) verticalDirection = "down"; // Checks whether the entity is to the lower of the player
                    if (enemyPos.y >= playerPos.y) verticalDirection = "up"; // Checks whether the entity is to the upper of the player

                    if (horizontalDirection === "left") {
                        enemy.flipX = false
                        fireballDown = "southEast"
                    }
                    if (horizontalDirection === "right") {
                        enemy.flipX = true
                        fireballDown = "southWest"
                    }
                    enemy.play("summon")
                    await wait(1)
                    if (horizontalDirection === "left") {
                        play("fireLong")
                        spawnProjectile({
                            spriteName: "firebar",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 5 * healthDifficultyMultiplier,
                                attackType: "firebar",
                            }
                        }, enemyPos, "left", 10, false, true)
                        spawnProjectile({
                            spriteName: "firebar",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 5 * healthDifficultyMultiplier,
                                attackType: "firebar",
                            }
                        }, vec2(enemy.worldPos().x - 300, enemy.worldPos().y + 200), "left", 5, false, true)
                        spawnProjectile({
                            spriteName: "firebar",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 5 * healthDifficultyMultiplier,
                                attackType: "firebar",
                            }
                        }, vec2(enemy.worldPos().x, enemy.worldPos().y + 400), "left", 10, false, true)
                    }
                    else {
                        play("fireLong")
                        spawnProjectile({
                            spriteName: "firebar",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 5 * healthDifficultyMultiplier,
                                attackType: "firebar",
                            }
                        }, enemyPos, "right", 10, false, true)
                        spawnProjectile({
                            spriteName: "firebar",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 5 * healthDifficultyMultiplier,
                                attackType: "firebar",
                            }
                        }, vec2(enemy.worldPos().x + 300, enemy.worldPos().y + 200), "right", 5, false, true)
                        spawnProjectile({
                            spriteName: "firebar",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 5 * healthDifficultyMultiplier,
                                attackType: "firebar",
                            }
                        }, vec2(enemy.worldPos().x, enemy.worldPos().y + 400), "right", 10, false, true)
                    }
                    enemy.attackCooldown = false
                    if (getRandomNumber(1, 4) !== 4) fightyManAttack = getRandomNumber(3, 5)
                }
                enemy.attackCooldown = false
            }
            if (enemy.attackType === "hodson") { //If the enemy is the final boss, initiate Final Boss AI.
                console.log(enemy.hp())
                healthDifficultyMultiplier = 1 + (enemy.healthbar.maxHealth - enemy.hp()) / enemy.healthbar.maxHealth;
                if (enemy.attackCooldown === true) return
                enemy.collisionIgnore.push("enemy")
                if (hodsonAttack === 1) { // Initiates the walking right animation
                    enemy.attackCooldown = true
                    if (enemy.curAnim() !== "walking") enemy.play("walking")
                    await tween(
                        enemy.worldPos(),
                        vec2(1800, 500),
                        1.5 / difficultyMultiplier / healthDifficultyMultiplier,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )
                    enemy.play("idle")
                    await wait(0.8 / difficultyMultiplier / healthDifficultyMultiplier)
                    hodsonAttack = getRandomNumber(3, 4)
                    enemy.attackCooldown = false
                }

                if (hodsonAttack === 2) { // Initiates the walking left animation
                    enemy.attackCooldown = true
                    if (enemy.curAnim() !== "walking") enemy.play("walking")
                    await tween(
                        enemy.worldPos(),
                        vec2(200, 500),
                        1.5 / difficultyMultiplier / healthDifficultyMultiplier,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )
                    enemy.play("idle")
                    await wait(0.8 / difficultyMultiplier / healthDifficultyMultiplier)
                    hodsonAttack = getRandomNumber(3, 4)
                    enemy.attackCooldown = false
                }
                if (hodsonAttack === 3) { // Initiates the stapler attack
                    enemy.attackCooldown = true
                    await wait(1 / difficultyMultiplier / healthDifficultyMultiplier)

                    const playerPos = player.worldPos() // Gets the player's position
                    const enemyPos = enemy.worldPos() // Gets the enemy's position

                    let horizontalDirection = null // Stores the horizontal direction of the enemy
                    if (enemyPos.x < playerPos.x) horizontalDirection = "left"; // Checks whether the entity is to the left of the player
                    if (enemyPos.x >= playerPos.x) horizontalDirection = "right"; // Checks whether the entity is to the right of the player
                    if (enemyPos.y < playerPos.y) verticalDirection = "down"; // Checks whether the entity is to the lower of the player
                    if (enemyPos.y >= playerPos.y) verticalDirection = "up"; // Checks whether the entity is to the upper of the player

                    if (horizontalDirection === "left") {
                        enemy.flipX = false
                    }
                    if (horizontalDirection === "right") {
                        enemy.flipX = true
                    }
                    enemy.play("stapler")

                    play("reload")
                    spawnProjectile({
                        spriteName: "staple",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 2 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, horizontalDirection, 2, false, true)
                    await wait(0.1)
                    play("reload")
                    spawnProjectile({
                        spriteName: "staple",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 2 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, horizontalDirection, 2, false, true)
                    await wait(0.1)
                    play("reload")
                    spawnProjectile({
                        spriteName: "staple",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 2 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, horizontalDirection, 2, false, true)


                    const distance = Math.sqrt(Math.pow(enemyPos.x - playerPos.x, 2) + Math.pow(enemyPos.y - playerPos.y, 2)) // Calculates the distance between the player and the enemy
                    if (distance < 150) hodsonAttack = 4
                    else {
                        hodsonAttack = getRandomNumber(2, 4)
                        if (horizontalDirection === "left" && hodsonAttack === 2) {
                            hodsonAttack = 1
                        }
                    }

                    enemy.attackCooldown = false
                }

                if (hodsonAttack === 4) { // Initiates the axe attack
                    enemy.attackCooldown = true
                    if (enemy.curAnim() !== "walking") enemy.play("walking")
                    const playerPos = player.worldPos() // Gets the player's position
                    const enemyPos = enemy.worldPos() // Gets the enemy's position
                    if (enemyPos.x < playerPos.x) horizontalDirection = "left"; // Checks whether the entity is to the left of the player
                    if (enemyPos.x >= playerPos.x) horizontalDirection = "right"; // Checks whether the entity is to the right of the player


                    await tween(
                        enemy.worldPos(),
                        (horizontalDirection === "left") ? vec2(player.worldPos().x - 100, player.worldPos().y) : vec2(player.worldPos().x + 100, player.worldPos().y),
                        1.5 / (enemy.speed / 5) / difficultyMultiplier / healthDifficultyMultiplier,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )
                    play("axe")
                    await performAttack(enemy, "cross")
                    enemy.attackCooldown = false
                    hodsonAttack = getRandomNumber(2, 4)
                    if (horizontalDirection === "left" && hodsonAttack === 2) {
                        hodsonAttack = 1
                    }

                }
                enemy.attackCooldown = false
            }





            if (enemy.attackType === "grigory") { // Grigory Boss AI
                enemy.collisionIgnore.push("enemy")
                if (enemy.dead) return
                if (enemy.attackCooldown === true) return
                grigoryAttack = getRandomNumber(1, 3)


                if (grigoryAttack === 1) { // Moves Grigory to the opposite side of the screen
                    if (enemy.curAnim() !== "walking") enemy.play("walking")
                    enemy.attackCooldown = true
                    if (enemy.worldPos().x === (200)) {
                        tw = await tween(
                            enemy.worldPos(),
                            vec2(1800, 590),
                            3 / (enemy.speed / 5),
                            (pos) => enemy.pos = pos,
                            easings.linear
                        )
                    }
                    else {
                        tw = await tween(
                            enemy.worldPos(),
                            vec2(200, 590),
                            3 / (enemy.speed / 5) / difficultyMultiplier,
                            (pos) => enemy.pos = pos,
                            easings.linear
                        )
                    }
                    enemy.play("idle")
                    await wait(1 / difficultyMultiplier)
                    enemy.attackCooldown = false
                }
                if (grigoryAttack === 2) { // Initiaties the standing still shooting attack
                    enemy.attackCooldown = true
                    play("reload")
                    enemy.play("loading")
                    await wait(0.5)
                    let shotgunDown = ""
                    let shotgunUp = ""
                    const playerPos = player.worldPos() // Gets the player's position
                    const enemyPos = enemy.worldPos() // Gets the enemy's position

                    let horizontalDirection = null // Stores the horizontal direction of the enemy
                    if (enemyPos.x < playerPos.x) horizontalDirection = "left"; // Checks whether the entity is to the left of the player
                    if (enemyPos.x >= playerPos.x) horizontalDirection = "right"; // Checks whether the entity is to the right of the player
                    if (enemyPos.y < playerPos.y) verticalDirection = "down"; // Checks whether the entity is to the lower of the player
                    if (enemyPos.y >= playerPos.y) verticalDirection = "up"; // Checks whether the entity is to the upper of the player
                    if (horizontalDirection === "left") {
                        enemy.flipX = false
                        shotgunDown = "southEast"
                        shotgunUp = "northEast"
                    }
                    if (horizontalDirection === "right") {
                        enemy.flipX = true
                        shotgunDown = "southWest"
                        shotgunUp = "northWest"
                    }

                    if (enemy.dead) return

                    spawnProjectile({
                        spriteName: "bullet",
                        scaleAmount: 2,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 2,
                            attackType: "fireball",
                        }
                    }, enemyPos, horizontalDirection, 1)

                    spawnProjectile({
                        spriteName: "bullet",
                        scaleAmount: 2,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 2,
                            attackType: "fireball",
                        }
                    }, enemyPos, shotgunUp, 1, true)

                    spawnProjectile({
                        spriteName: "bullet",
                        scaleAmount: 2,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 2,
                            attackType: "fireball",
                        }
                    }, enemyPos, shotgunDown, 1, true)

                    if (difficulty > 3) {
                        spawnProjectile({
                            spriteName: "bullet",
                            scaleAmount: 2,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2,
                                attackType: "fireball",
                            }
                        }, enemyPos, shotgunDown, 1, true)
                        spawnProjectile({
                            spriteName: "bullet",
                            scaleAmount: 2,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2,
                                attackType: "fireball",
                            }
                        }, enemyPos, shotgunUp, 1, true)

                    }
                    if (difficulty > 4) {
                        spawnProjectile({
                            spriteName: "bullet",
                            scaleAmount: 2,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2,
                                attackType: "fireball",
                            }
                        }, enemyPos, shotgunDown, 1, true)
                        spawnProjectile({
                            spriteName: "bullet",
                            scaleAmount: 2,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2,
                                attackType: "fireball",
                            }
                        }, enemyPos, shotgunUp, 1, true)

                    }
                    enemy.play("shoot")
                    play("shoot")
                    await wait(0.5)
                    enemy.play("idle")
                    enemy.attackCooldown = false
                }

                if (grigoryAttack === 3) { // Initiaties the point blank range shooting attack

                    enemy.attackCooldown = true
                    enemy.play("loading") // Plays the reload animation
                    play("reload") // Plays the reload sound
                    await wait(0.5)


                    let shotgunDown = ""
                    let shotgunUp = ""
                    let playerPos = player.worldPos() // Gets the player's position
                    let enemyPos = enemy.worldPos() // Gets the enemy's position

                    let horizontalDirection = null // Stores the horizontal direction of the enemy
                    if (enemyPos.x < playerPos.x) horizontalDirection = "left"; // Checks whether the entity is to the left of the player
                    if (enemyPos.x >= playerPos.x) horizontalDirection = "right"; // Checks whether the entity is to the right of the player
                    if (enemyPos.y < playerPos.y) verticalDirection = "down"; // Checks whether the entity is to the lower of the player
                    if (enemyPos.y >= playerPos.y) verticalDirection = "up"; // Checks whether the entity is to the upper of the player
                    if (horizontalDirection === "left") {
                        enemy.flipX = false
                        shotgunDown = "southEast"
                        shotgunUp = "northEast"
                    }
                    if (horizontalDirection === "right") {
                        enemy.flipX = true
                        shotgunDown = "southWest"
                        shotgunUp = "northWest"
                    }


                    if (enemy.curAnim() !== "walking") enemy.play("walking")

                    tw = await tween(
                        enemy.worldPos(),
                        playerPos,
                        3 / (enemy.speed / 5) / difficultyMultiplier,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )

                    enemyPos = enemy.worldPos()
                    playerPos = player.worldPos() // Gets the player's position
                    if (enemyPos.x < playerPos.x) horizontalDirection = "left"; // Checks whether the entity is to the left of the player
                    if (enemyPos.x >= playerPos.x) horizontalDirection = "right"; // Checks whether the entity is to the right of the player
                    if (enemyPos.y < playerPos.y) verticalDirection = "down"; // Checks whether the entity is to the lower of the player
                    if (enemyPos.y >= playerPos.y) verticalDirection = "up"; // Checks whether the entity is to the upper of the player
                    if (horizontalDirection === "left") {
                        enemy.flipX = false
                        shotgunDown = "southEast"
                        shotgunUp = "northEast"
                    }
                    if (horizontalDirection === "right") {
                        enemy.flipX = true
                        shotgunDown = "southWest"
                        shotgunUp = "northWest"
                    }

                    if (enemy.dead) return

                    spawnProjectile({
                        spriteName: "bullet",
                        scaleAmount: 2,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 2,
                            attackType: "fireball",
                        }
                    }, enemyPos, horizontalDirection, 1)

                    spawnProjectile({
                        spriteName: "bullet",
                        scaleAmount: 2,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 2,
                            attackType: "fireball",
                        }
                    }, enemyPos, shotgunUp, 1, true)

                    spawnProjectile({
                        spriteName: "bullet",
                        scaleAmount: 2,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 2,
                            attackType: "fireball",
                        }
                    }, enemyPos, shotgunDown, 1, true)

                    if (difficulty > 3) { // If in Hard Difficulty or higher, shoot these two bullets too
                        spawnProjectile({
                            spriteName: "bullet",
                            scaleAmount: 2,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2,
                                attackType: "fireball",
                            }
                        }, enemyPos, shotgunDown, 1, true)
                        spawnProjectile({
                            spriteName: "bullet",
                            scaleAmount: 2,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2,
                                attackType: "fireball",
                            }
                        }, enemyPos, shotgunUp, 1, true)

                    }
                    if (difficulty > 4) { // If in Insane Difficulty, shoot these two bullets too
                        spawnProjectile({
                            spriteName: "bullet",
                            scaleAmount: 2,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2,
                                attackType: "fireball",
                            }
                        }, enemyPos, shotgunDown, 1, true)
                        spawnProjectile({
                            spriteName: "bullet",
                            scaleAmount: 2,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2,
                                attackType: "fireball",
                            }
                        }, enemyPos, shotgunUp, 1, true)

                    }

                    enemy.play("shoot")
                    play("shoot")
                    await wait(0.5)
                    enemy.play("idle")

                    let returnMovement = getRandomNumber(1, 2) // Returns to a random side of the screen

                    if (returnMovement === 1) {
                        if (enemy.curAnim() !== "walking") enemy.play("walking")
                        tw = await tween(
                            enemy.worldPos(),
                            vec2(1800, 590),
                            3 / (enemy.speed / 5),
                            (pos) => enemy.pos = pos,
                            easings.linear
                        )

                    }
                    else {
                        enemy.attackCooldown = true
                        if (enemy.curAnim() !== "walking") enemy.play("walking")
                        tw = await tween(
                            enemy.worldPos(),
                            vec2(200, 590),
                            3 / (enemy.speed / 5),
                            (pos) => enemy.pos = pos,
                            easings.linear
                        )

                    }
                    enemy.play("idle")
                    await wait(2 / difficultyMultiplier)
                }

                enemy.attackCooldown = false // Allows the next attack to be initiated

            }

            if (enemy.attackType === "venus") { // AI for the Venus boss

                enemy.collisionIgnore.push("enemy") // Ignore all hitbox collisions for this boss.
                if (enemy.dead) return
                if (enemy.attackCooldown === true) return
                enemy.play("idle")


                if (enemy.worldPos().x <= (0)) { // Code to run for the boss to attack to the left of itself
                    enemy.flipX = false
                    console.log("left")
                    enemy.attackCooldown = true
                    await tween(
                        enemy.worldPos(),
                        vec2(enemy.worldPos().x, getRandomNumber(400, 800)),
                        0.01,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )
                    tween(
                        enemy.worldPos(),
                        vec2(2500, enemy.worldPos().y),
                        3,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )
                    for (let i = 0; i < 6; i++) { // Spawns in the projectiles that the boss shoots,
                        spawnProjectile({
                            spriteName: "fireProj",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2,
                                attackType: "fireball",
                            }
                        }, vec2(enemy.worldPos().x + 150, enemy.worldPos().y + 50), "left", 2, false, true)
                        if (difficulty >= 3 && getRandomNumber(1, 2) === 2) {
                            spawnProjectile({
                                spriteName: "fireProj",
                                scaleAmount: 5,
                                hitboxScale: 0.5,
                                health: 999,
                                attributes: {
                                    strength: 2,
                                    attackType: "fireball",
                                }
                            }, vec2(enemy.worldPos().x + 150, enemy.worldPos().y + 50), "southEast", 2, false, true)
                            spawnProjectile({
                                spriteName: "fireProj",
                                scaleAmount: 5,
                                hitboxScale: 0.5,
                                health: 999,
                                attributes: {
                                    strength: 2,
                                    attackType: "fireball",
                                }
                            }, vec2(enemy.worldPos().x + 150, enemy.worldPos().y + 50), "northEast", 2, false, true)
                        }
                        await wait(0.5)
                    }
                }

                else { // Code to run for the boss to attack to the right of itself
                    enemy.flipX = true
                    enemy.attackCooldown = true
                    console.log("right")
                    yTeleport = getRandomNumber(400, 800)
                    console.log(yTeleport)
                    await tween(
                        enemy.worldPos(),
                        vec2(enemy.worldPos().x, yTeleport),
                        0.01,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )
                    console.log("Y Set")
                    tween(
                        enemy.worldPos(),
                        vec2(-400, enemy.worldPos().y),
                        3,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )
                    console.log("X Move")
                    for (let j = 0; j < 6; j++) {
                        spawnProjectile({
                            spriteName: "fireProj",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2,
                                attackType: "fireball",
                            }
                        }, vec2(enemy.worldPos().x - 100, enemy.worldPos().y + 50), "right", 2, false, true)
                        if (difficulty >= 3 && getRandomNumber(1, 2) === 2) {
                            spawnProjectile({
                                spriteName: "fireProj",
                                scaleAmount: 5,
                                hitboxScale: 0.5,
                                health: 999,
                                attributes: {
                                    strength: 2,
                                    attackType: "fireball",
                                }
                            }, vec2(enemy.worldPos().x - 100, enemy.worldPos().y + 50), "southWest", 2, false, true)
                            spawnProjectile({
                                spriteName: "fireProj",
                                scaleAmount: 5,
                                hitboxScale: 0.5,
                                health: 999,
                                attributes: {
                                    strength: 2,
                                    attackType: "fireball",
                                }
                            }, vec2(enemy.worldPos().x - 100, enemy.worldPos().y + 50), "northWest", 2, false, true)
                        }
                        await wait(0.5)
                    }

                }
                await wait(0.5 / difficultyMultiplier)
                enemy.attackCooldown = false
            }

        }



        )
    }





    )
}

// Variables for music handling
const bpm = 128;
const barDuration = (60 / bpm) * 16; // Duration of one bar in seconds

async function startFinalBossMusic() {
    console.log("Starting Final Boss Music");

    // Play the FinalBossIntro
    currentSong = play("FinalBossIntro", { volume: globalVolume });
    await wait(currentSong.duration() - 0.05);

    // Loop FinalBossLoop1
    currentSong = play("FinalBossLoop1", { loop: true, volume: globalVolume });

    // Continuously check FightyMan's HP and switch to FinalBossLoop2 when HP <= 50%
    checkFightyManHP();
}

async function switchToLoop2() {
    console.log("Switching to FinalBossLoop2");

    // Calculate the delay until the next bar starts
    const currentTime = currentSong.time();
    const timeUntilNextBar = barDuration - (currentTime % barDuration);

    // Wait until the next bar starts
    await wait(timeUntilNextBar - 0.05);

    // Switch to FinalBossLoop2

    newSong = play("FinalBossLoop2", { loop: true, volume: globalVolume });
    await wait(0.05)
    stopMusic(currentSong)
    currentSong = newSong
}

async function checkFightyManHP() {
    let maxHealth = 400 * difficultyMultiplier
    enemies = get("enemy")
    enemies.forEach(enemy => {
        if (enemy.attackType === "fightyMan") fightyMan = enemy
    })

    while (fightyMan.hp() > maxHealth * 0.5) {
        await wait(0.1); // Check every 100 milliseconds
    }
    // Once FightyMan's HP is <= 50%, switch the music
    await switchToLoop2();
}



async function gameOver(gameMode) {
    stopMusic(currentSong)
    currentSong = play("game_over", { loop: false, volume: 0.5 }) // Stops the music, plays the game over jingle

    await toggleDarkOverlay(false)
    await Promise.all([ // Wait for both texts to finish animating
        // Splits the intro text into two lines
        roundText("Game", height() / 2 - 96, "left", false),
        roundText("Over", height() / 2 + 96, "right", false)
    ])
    await toggleDarkOverlay(false)
    if (gameMode === "infinity") { // If the gamemode was Infinity Mode, show a screen with the session's score
        destroyAll()
        add([
            sprite("dark"),
            pos(0, 0),
            scale(10),
            fixed(),
            z(0)
        ])
        await wait(1.5)
        play("beep")
        if (sessionScore > accountStats[`infinity_${difficulty}_highest`]) {
            accountStats[`infinity_${difficulty}_highest`] = sessionScore

            for (let i = 0; i < userAccountStats.length; i++) { // Updates the user's highest score to their account
                if (accountStats.username === userAccountStats[i].username) {
                    accountStats[`infinity_${difficulty}_highest`] = sessionScore
                }
            }
        }
        add([
            text(`Score: ${sessionScore}`, { align: "center", size: 22.5 }), // Text displaying the user's session score
            color(255, 255, 255),
            pos(width() / 2, (height() / 2) + 205),
            anchor("center"),
            z(4)
        ])
        await wait(3)
        go("leaderboard", { difficulty: difficulty }) // Redirects the user to the leaderboard after an infinity mode game
    }
    go("starting_menu") // Redirects the user to the start menu after a main game
}

async function levelComplete() {
    toggleDarkOverlay(false)
    stopMusic(currentSong)
    currentSong = play("level_complete", { loop: false, volume: 0.5 })
    await Promise.all([ // Displays the Level Complete Text
        roundText("Level", height() / 2 - 96, "left", false, 2),
        roundText("Complete", height() / 2 + 96, "right", false, 2)
    ])
    await toggleDarkOverlay(false)
    bossAlive = false
    clearInterval(oldManSpawn) // Prevents any more "old man" enitites from spawning

}

function getRandomNumber(min, max) { // Helper function to get a random number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to stop an audio instance immediately
function stopMusic(audioContext) {
    audioContext.loop = false // Disables looping if it is enabled
    const duration = audioContext.duration() // Gets the duration of the audio
    audioContext.seek(duration) // Seeks to the end of the audio
}

async function toggleDarkOverlay(isRoundOne = false) {
    // Make the dark overlay fade in if null and fade out if not null
    if (darkOverlay === null) {

        darkOverlay = add([
            rect(width(), height()),
            opacity(isRoundOne ? 1 : 0),
            color(0, 0, 0),
            z(25)
        ])
        if (!isRoundOne) {
            for (let i = 0; i < 18; i++) { // 18 * 0.05 = 0.9
                await wait(0.02, () => darkOverlay.opacity += 0.05)
            }
        } else {
            let topDarkOverlay = add([
                rect(width(), height()),
                opacity(1),
                color(0, 0, 0),
                z(30)
            ])
            await wait(2.5)
            // Over 3 seconds, fade out the top dark overlay
            await tween(
                topDarkOverlay.opacity,
                0,
                3,
                (op) => topDarkOverlay.opacity = op,
                easings.easeInCubic
            )
        }
    } else {
        darkOverlay.opacity = 1
        for (let i = 0; i < 18; i++) {
            await wait(0.02, () => darkOverlay.opacity -= 0.05)
        }
        await wait(0.02, () => darkOverlay.destroy())
        darkOverlay = null
    }
}

// Inital pos is either left or right. yPos is the y position of the text
// The text will first slide in fast, then slow down, then slide out fast
// The text will slide in from the left or right depending on initialPos
async function roundText(titleText, yPos, initialPos, isRoundOne = false, duration = 1.5) {
    let textObj = add([
        text(titleText, { size: 96 }),
        pos(initialPos == "left" ? -width() - 500 : width() + 500, yPos),
        anchor("center"),
        z(26)
    ])

    // Move quickly towards the center
    await tween(
        textObj.pos,
        vec2(width() / 2 - (initialPos == "left" ? 64 : -64), yPos),
        0.4,
        (pos) => textObj.pos = pos,
        easings.easeInOutCubic
    )

    // Move slowly around the center
    await tween(
        textObj.pos,
        vec2(width() / 2 - (initialPos == "left" ? -64 : 64), yPos),
        isRoundOne ? 2 : duration,
        (pos) => textObj.pos = pos,
        easings.linear
    )


    // Send off screen in the opposite direction
    await tween(
        textObj.pos,
        vec2(initialPos == "left" ? width() + 500 : -width() - 500, yPos),
        0.4,
        (pos) => textObj.pos = pos,
        easings.easeInOutCubic
    )

    textObj.destroy()
}

// Helper function to make managing buttons easier
function addButton(txt, btn_opt, position, callback) {
    // Creates the button box
    const btn = add([
        rect(btn_opt.x, btn_opt.y, { radius: 8 }),
        pos(position),
        area(),
        scale(1),
        anchor("center"),
        outline(4, rgb(255, 255, 255)),
        "ui_button",
    ])

    // Adds a child object that displays the text
    btn.add([
        text(txt, { align: "center", size: btn_opt.txtsize || 22.5 }),
        anchor("center"),
        color(255, 255, 255),
    ])

    btn.use(color(0, 0, 0)) // Sets the button colour to white

    // The btn_opt parameter is an object that contains optional parameters for the button's styling

    if (btn_opt.z) btn.use(z(btn_opt.z)) // Sets the button's z-index to the specified value
    if (btn_opt.scale) {
        btn.scaleAmount = btn_opt.scale // This is a variable that stores the scale amount of the button for when it is hovered over
    } else {
        btn.scaleAmount = 1.15 // Default scale amount
    }

    btn.size = { x: btn_opt.x, y: btn_opt.y }
    btn.callback = callback

    btn.onHoverUpdate(() => { // Registers an event that runs every frame the mouse is hovered over the button
        if (btn.disabled) {
            btn.color = rgb(75, 75, 75)
            // how some text saying why the button is disabled
            if (btn.disabledText) {
                add([
                    text(`${btn.disabledText}`, { align: "left", lineSpacing: 2.5, size: 22.5, font: "arcade" }),
                    color(225, 0, 50),
                    pos(vec2(btn.worldPos().x + (btn.size.x / 2 + 16), btn.worldPos().y)),
                    anchor("left"),
                    z(4),
                    "disabled_text"
                ])
            }
        } else {
            btn.scale = vec2(btn.scaleAmount)
            setCursor("pointer")
        }
    })

    btn.onHoverEnd(() => { // Registers an event that runs on the frame the mouse stops hovering over the button
        btn.scale = vec2(1)
        btn.color = rgb(0, 0, 0)
        if (btn.disabled && btn.disabledText) destroyAll("disabled_text")
        setCursor("default")
    })

    btn.onClick(() => { // Registers an event that runs when the button is clicked
        if (!btn.disabled) {
            setCursor("default")
            btn.callback()
        }
    })

    return btn
} // DONE

async function destroyHitbox(hitbox) {
    await wait(0.2)
    destroy(hitbox)
} // DONE

async function performAttack(entity, attackName) {
    let attackHitbox = null // Stores the hitbox of the attack
    if (attackName === "jab") {
        if (entity.curAnim() == attackName) return // Stops the jab animation from playing twice
        entity.play(attackName) // Plays the attack animation
        await wait(0.05, () => {
            if (!isKeyDown("z") && entity.is("player")) return // Stops the cross hitbox from spawning if the player stops holding the key
            attackHitbox = entity.add([
                rect(20, 10),
                pos(entity.flipX ? -6 : 6, 0),
                area({ collisionIgnore: entity.is("player") ? ["player"] : ["enemy", "boss"] }), // Stops the player hurting themselves
                anchor("center"),
                opacity(0),
                "atkHitbox"
            ])
            destroyHitbox(attackHitbox)
        })
    }
    if (attackName === "cross") {
        if (entity.attackType === "fightyMan") {
            if (entity.curAnim() === "flarePunch") return
            entity.play("flarePunch")
        }// Stops the cross animation from playing twice
        else {
            if (entity.curAnim() === attackName) return
            entity.play(attackName)
        }
        // Plays the walking animation by default
        await wait(0.15, () => {
            if (!isKeyDown("x") && entity.is("player")) return // Stops the cross hitbox from spawning if the player stops holding the key
            attackHitbox = entity.add([
                rect(15, 10),
                pos(entity.flipX ? -6 : 6, 0),
                area({ collisionIgnore: entity.is("player") ? ["player"] : ["enemy", "boss"] }), // Stops the player hurting themselves
                anchor("center"),
                opacity(0),
                "atkHitbox"
            ])
            destroyHitbox(attackHitbox)
        })
    }
    if (attackName === "summon") {
        if (entity.curAnim() === attackName) return // Stops the cross animation from playing twice
        entity.play(attackName) // Plays the walking animation by default
    }
    if (attackName === "flamethrower") {
        if (entity.curAnim() === attackName) return // Stops the cross animation from playing twice
        entity.play(attackName) // Plays the walking animation by default
    }
    if (attackName === "fireShield") {
        if (entity.curAnim() === attackName) return // Stops the cross animation from playing twice
        attackHitbox = entity.add([
            rect(33, 33),
            pos(0, 0),
            area({ collisionIgnore: entity.is("player") ? ["player"] : ["enemy", "boss"] }), // Stops the player hurting themselves
            anchor("center"),
            opacity(0),
            "atkHitbox"
        ])
        entity.play(attackName) // Plays the walking animation by default
        await wait(0.8)
        destroyHitbox(attackHitbox)
    }
    if (attackName === "block") {
        if (entity.curAnim() === attackName) return // Stops the block animation from playing twice
        entity.play(attackName) // Plays the block animation
    }

    // Check if attack hit anything
    let characters = get("enemy") // Gets all entities with the "enemy" tag
    let playerChars = get("player")
    //let playerChar = playerChars[0]
    characters.push(get("player")[0]) // Adds the player to the array of characters

    for (let i = 0; i < characters.length; i++) {
        const character = characters[i]
        if (attackHitbox?.isColliding(character)) {
            if (character.dead) continue;


            if (attackName === "jab") {
                if (character.dead) continue;
                if (character.is("player") && !isKeyDown("c")) character.defense = 0
                if (!character.is("player")) { play(`punch${getRandomNumber(1, 2)}`) } // Plays a random punch sound effect
                else { play(`enemyPunch${character.weight}`) } // Plays a punch sound effect
                character.hurt(7 * entity.strength * (1 - character.defense))
                if ((character.healthbar && currentRound !== 7) || (currentRound === 7 && character.is("player"))) character.healthbar.hurt(7 * entity.strength * (1 - character.defense)) // Update the healthbar visual
            }


            if (attackName === "cross") {
                if (character.dead) continue;
                play(`punch${getRandomNumber(3, 4)}`) // Plays a random punch sound effect
                character.hurt(12 * (1 - character.defense)) // Hurts the character by 12 health
                if (character.healthbar) character.healthbar.hurt(12 * (1 - character.defense)) // Update the healthbar visual
            }
            if (attackName === "fireShield") {
                if (character.dead) continue;
                play(`punch${getRandomNumber(3, 4)}`) // Plays a random punch sound effect
                character.hurt(22 * entity.strength * (1 - character.defense)) // Hurts the character by 12 health
                if (character.healthbar) character.healthbar.hurt(22 * entity.strength * (1 - character.defense)) // Update the healthbar visual, -12 health
            }
            await checkDeath(character, attackHitbox)
            destroyAll("atkHitbox") // Destroys all instances of the attack hitbox
        }

    }
}
async function checkDeath(character, attackHitbox) {
    if (character.hp() <= 0) { // Checks if the character is dead
        //remove the dead character from the collision ignore list
        if (character.is("player")) {
            character.defense = 0
            character.collisionIgnore = character.collisionIgnore.filter(item => item !== "enemy")
        }
        else {
            character.collisionIgnore = character.collisionIgnore.filter(item => item !== "player")
        }
        attackHitbox?.destroy()
        get("player")[0].collisionIgnore.push(`${character.id}`) // Stops the player from colliding with the enemy
        character.collisionIgnore.push("player") // Stops the player from colliding with the player
        character.collisionIgnore.push("enemy") // Stops the enemy from colliding with the enemy
        // Remove the hitbox after the animation is done
        if (character.dead) return;
        if (character.attackType !== "venus" && character.attackType !== "fightyMan" && character.attackType !== "hodson") { character.play("downed") }
        if (character.attackType === "fightyMan") character.play("fireShield")
        if (character.attackType === "hodson") character.play("idle")
        tween(
            character.worldPos(),
            vec2(character.worldPos().x + (character.flipX ? 150 : -150), character.worldPos().y),
            0.4,
            (pos) => character.pos = pos,
            easings.easeOutCubic
        )
        deathSoundNumber = getRandomNumber(1, 2)
        play(`enemyDeath${deathSoundNumber}`, { detune: (getRandomNumber(1, (8 / deathSoundNumber)) * 100) }) // Randomises the pitch of the sound effect
        if (!character.is("player")) sessionScore++;
        character.move(0, -200)
        character.dead = true // Labels the character as dead, this way they can't move or attack
        if (character.is("player")) {
            playerControlEvents.keyDown.forEach(keyDownEvent => keyDownEvent.cancel()) // Stops the player from moving
            playerControlEvents.keyUp.forEach(keyUpEvent => keyUpEvent.cancel()) // Stops the player from moving
            enemyAIBasic.cancel() // Stops the enemy AI from running
            gameOver(gameMode)
        }
        else deathCount++;
        await tween(
            character.opacity,
            0,
            character.attackType === "grigory" || character.attackType === "fightyMan" || character.attackType === "venus" || character.attackType === "hodson" ? 0.35 : 3,
            (op) => character.opacity = op,
            easings.easeInCubic
        )
        await wait(0.5, () => character.destroy())
        if (gameMode === "boss_rush" && (character.attackType === "grigory" || character.attackType === "fightyMan" || character.attackType === "venus" || character.attackType === "hodson")) {
            character.healthbar.destroy()
        }
    }
}


// Helper function to spawn entities
function spawnEntity(options, ySpawn) { // Summons an entity at a specific point with a sprite and AI type
    let spawnX = chance(0.5) === true ? 0 : 1920 // Randomly picks a side to spawn the entity on
    let bossesList = ["fightyMan", "venus", "grigory"]
    if (bossesList.indexOf(options.attributes.attackType) !== -1) {
        spawnX = 2000;
    }
    if (currentRound === 4) {
        spawnX = chance(0.5) === true ? 600 : 1300
        ySpawn = getRandomNumber(-240, 260)
    }
    let entity = add([
        sprite(options.spriteName), // Renders as a sprite
        pos(options.position || vec2(spawnX, 540 + ySpawn)), // pick random position if not specified
        scale(options.scaleAmount || 1), // Default scale amount is 1
        area({ scale: options.hitboxScale || 0 }), // Default hitbox scale is 1
        opacity(1),
        z(options.z || 5),
        health(options.attributes.health || 100), // Default health is 100
        anchor("center"),
        options.tag,
        { // Stores the entity's attributes
            healthbar: options.healthbar || null,
            aggression: options.attributes.aggression || 1,
            speed: options.attributes.speed || 1,
            weight: options.attributes.weight || 1,
            defense: options.attributes.defense || 0,
            strength: options.attributes.strength || 1,
            attackType: options.attributes.attackType || "jab"
        }
    ]);

    entity.use(entity.id) // Give another tag to the entity that is the same as the entity's ID
    if (options.tag !== "player") entity.use(body()); // Give the entity a physics body if it is not the player
    if (options.isBoss) entity.use("boss") // Give the entity the "boss" tag if it is a boss
    return entity
}

async function spawnProjectile(options, spawnPos, direction, velocity, shotgun = false, linear = false, damagesEnemies = false) { // Summons an entity at a specific point with a sprite and AI type
    let rotation = 0
    let player = get("player")[0]
    if (direction === "left" && options.attributes.attackType === "firebar") rotation = 90
    if (direction === "right" && options.attributes.attackType === "firebar") rotation = -90

    let projectile = add([
        sprite(options.spriteName), // Renders as a sprite
        pos(options.position || vec2(spawnPos)),
        scale(options.scaleAmount || 1), // Default scale amount is 1
        area({ scale: options.hitboxScale || 0 }), // Default hitbox scale is 1
        opacity(1),
        z(options.z || 5),
        health(options.attributes.health || 9999), // Default health is 9999
        anchor("center"),
        rotate(rotation),
        ("projectile"),
        { // Stores the entity's attributes
            healthbar: null,
            aggression: 0,
            speed: options.attributes.speed,
            weight: 0,
            defense: 0,
            strength: options.attributes.strength,
            attackType: options.attributes.attackType || "fire"
        }
    ]);

    if (direction === "left" || direction === "southEast" || direction === "northEast") {
        projectile.flipX = false
    }
    else {
        projectile.flipX = true
    }
    if (projectile.attackType === "firebar") projectile.play("idle")
    projectileDamage = onUpdate(() => {
        player = get("player")[0]
        if (!player) return
        if (projectile.isColliding(player) && damagesEnemies === false) {
            if (!projectile.hit) { // Check if the hit property is false
                projectile.hit = true // Set the hit property to true
                projectileDamage.cancel()
                if (projectile.attackType !== "firebar") projectile.destroy()
                player.hurt(5 * projectile.strength)
                play("enemyPunch1")
                player.healthbar.hurt(5 * projectile.strength)
                checkDeath(player, projectile)
            }
        } enemies = get("enemy")
        enemies.forEach(enemy => {
            if (projectile.isColliding(enemy) && damagesEnemies === true) {
                if (!projectile.hit) { // Check if the hit property is false
                    projectile.hit = true // Set the hit property to true
                    projectileDamage.cancel()
                    if (projectile.attackType !== "firebar") projectile.destroy()
                    enemy.hurt(5 * projectile.strength)
                    play("enemyPunch1")
                    try {
                        enemy.healthbar.hurt(5 * projectile.strength)
                    }
                    catch { }
                    checkDeath(enemy, projectile)
                }
            }
        })
    })
    if (shotgun === true) spread = 0.4
    else spread = 1

    if (difficulty > 3) spread = getRandomNumber(5, 100) / 100
    if (direction === "left") {
        await tween(
            projectile.pos,
            vec2(width() + 2500, projectile.pos.y),
            1 * velocity,
            (pos) => projectile.pos = pos,
            linear ? easings.easeLinear : easings.easeInOutCubic
        )
    }
    else if (direction === "right") {
        await tween(
            projectile.pos,
            vec2(-width() - 2500, projectile.pos.y),
            1 * velocity,
            (pos) => projectile.pos = pos,
            linear ? easings.easeLinear : easings.easeInOutCubic
        )
    }
    else if (direction === "down") {
        await tween(
            projectile.pos,
            vec2(projectile.pos.x, height() + 2500),
            1 * velocity,
            (pos) => projectile.pos = pos,
            linear ? easings.easeLinear : easings.easeInOutCubic
        )
    }
    else if (direction === "up") {
        await tween(
            projectile.pos,
            vec2(projectile.pos.x, -height() - 2500),
            1 * velocity,
            (pos) => projectile.pos = pos,
            linear ? easings.easeLinear : easings.easeInOutCubic
        )
    }
    else if (direction === "southWest") {
        await tween(
            projectile.pos,
            vec2(-width() - 2500, height() + 2500 * spread),
            1 * velocity,
            (pos) => projectile.pos = pos,
            linear ? easings.easeLinear : easings.easeInOutCubic
        )
    }
    else if (direction === "southEast") {
        await tween(
            projectile.pos,
            vec2(+width() + 2500, height() + 2500 * spread),
            1 * velocity,
            (pos) => projectile.pos = pos,
            linear ? easings.easeLinear : easings.easeInOutCubic
        )
    }
    else if (direction === "northWest") {
        await tween(
            projectile.pos,
            vec2(-width() - 2500, -height() - 2500 * spread),
            1 * velocity,
            (pos) => projectile.pos = pos,
            linear ? easings.easeLinear : easings.easeInOutCubic
        )
    }
    else if (direction === "northEast") {
        await tween(
            projectile.pos,
            vec2(+width() + 2500, -height() - 2500 * spread),
            1 * velocity,
            (pos) => projectile.pos = pos,
            linear ? easings.easeLinear : easings.easeInOutCubic
        )
    }
    projectile.destroy()
    projectileDamage.cancel()


}

// Helper function for setting enemy attributes. Takes in an entity name, the round and the difficulty
function getEnemyAttributes(entityName, currentRound, difficulty) {

    difficultyMultiplier = ((currentRound + (4 + difficulty * 2)) / 10)
    let enemyAttributes;
    if (entityName === "joseph") {
        enemyAttributes = {
            health: 30 * difficultyMultiplier,
            aggression: 9 * difficultyMultiplier,
            speed: 2.5 * difficultyMultiplier,
            weight: 1,
            strength: 0.8 * difficultyMultiplier,
            attackType: "jab",
        }
    } else if (entityName === "andrew") {
        enemyAttributes = {
            health: 32 * difficultyMultiplier,
            aggression: 12 * difficultyMultiplier,
            speed: 2.5 * difficultyMultiplier,
            weight: 1,
            strength: 0.9 * difficultyMultiplier,
            attackType: "jab",
        }
    } else if (entityName === "gary") {
        enemyAttributes = {
            health: 28 * difficultyMultiplier,
            aggression: 9 * difficultyMultiplier,
            speed: 2.5 * difficultyMultiplier,
            weight: 2,
            strength: 0.8 * difficultyMultiplier,
            attackType: "cross",
        }
    } else if (entityName === "david") {
        enemyAttributes = {
            health: 26 * difficultyMultiplier,
            aggression: 16 * difficultyMultiplier,
            speed: 2.5 * difficultyMultiplier,
            weight: 2,
            strength: 0.9 * difficultyMultiplier,
            attackType: "cross",
        }
    } else if (entityName === "fightyMan") {
        enemyAttributes = {
            health: 400 * difficultyMultiplier,
            healthbar: 400 * difficultyMultiplier,
            aggression: 60 * difficultyMultiplier,
            speed: 7 * difficultyMultiplier,
            weight: 2,
            strength: 1.7 * difficultyMultiplier,
            attackType: "fightyMan",
        }
    } else if (entityName === "hodson") {
        enemyAttributes = {
            health: 180 * difficultyMultiplier,
            healthbar: 180 * difficultyMultiplier,
            aggression: 60 * difficultyMultiplier,
            speed: 6 * difficultyMultiplier,
            weight: 2,
            strength: 2.2 * difficultyMultiplier,
            attackType: "hodson",
        }
    } else if (entityName === "grigory") {
        enemyAttributes = {
            health: 250 * difficultyMultiplier,
            healthbar: 250 * difficultyMultiplier,
            aggression: 60 * difficultyMultiplier,
            speed: 7 * difficultyMultiplier,
            weight: 2,
            strength: 0.3 * difficultyMultiplier,
            attackType: "grigory",
        }
    } else if (entityName === "venus") {
        enemyAttributes = {
            health: 150 * difficultyMultiplier,
            healthbar: 150 * difficultyMultiplier,
            aggression: 60 * difficultyMultiplier,
            speed: 7 * difficultyMultiplier,
            weight: 2,
            strength: 0.3 * difficultyMultiplier,
            attackType: "venus",
        }
    } else if (entityName === "fireProj") {
        enemyAttributes = {
            speed: 20 * difficultyMultiplier,
            strength: 0.3 * difficultyMultiplier,
            attackType: "fire",
        }
    } else if (entityName === "firebar") {
        enemyAttributes = {
            speed: 0,
            strength: 0.3 * difficultyMultiplier,
            attackType: "fire",
        }
    } else {
        console.error("Invalid enemy name")
    }
    return enemyAttributes
}

// Spawning enemy functions.
async function spawnJoseph(zSpawn) {
    const joseph = spawnEntity({
        spriteName: "joseph",
        scaleAmount: 8,
        hitboxScale: 0.5,
        attributes: getEnemyAttributes("joseph", currentRound, difficulty),
        tag: "enemy"
    }, zSpawn)
    joseph.play("idle")
}
async function spawnGrigory(zSpawn) {
    const grigory = spawnEntity({
        spriteName: "grigory",
        scaleAmount: 8,
        hitboxScale: 0.5,
        attributes: getEnemyAttributes("grigory", currentRound, difficulty),
        tag: "enemy",
        healthbar: new Healthbar({
            text: "Grigory",
            icon: "grigoryIcon",
            maxHealth: 250 * difficultyMultiplier,
            position: vec2(1300, -100),
            color: rgb(255, 0, 0),
            flip: true
        })
    }, zSpawn)
    stopMusic(currentSong)
    currentSong = play("Boss", { loop: true }, { volume: globalVolume })
    grigory.play("idle")
}
async function spawnVenus(zSpawn) {
    const venus = spawnEntity({
        spriteName: "venus",
        scaleAmount: 8,
        hitboxScale: 0.5,
        attributes: getEnemyAttributes("venus", currentRound, difficulty),
        tag: "enemy",
        healthbar: new Healthbar({
            text: "Venus",
            icon: "venusIcon",
            maxHealth: 150 * difficultyMultiplier,
            position: vec2(1300, -100),
            color: rgb(255, 0, 0),
            flip: true
        })
    }, zSpawn)
    stopMusic(currentSong)
    currentSong = play("Boss", { loop: true }, { volume: globalVolume })
    venus.play("idle")
}
async function spawnAndrew(zSpawn) {
    const andrew = spawnEntity({
        spriteName: "andrew",
        scaleAmount: 8,
        hitboxScale: 0.5,
        attributes: getEnemyAttributes("andrew", currentRound, difficulty),
        tag: "enemy"
    }, zSpawn)
    andrew.play("idle")
}
async function spawnGary(zSpawn) {
    const gary = spawnEntity({
        spriteName: "gary",
        scaleAmount: 7.5,
        hitboxScale: 0.5,
        attributes: getEnemyAttributes("gary", currentRound, difficulty),
        tag: "enemy"
    }, zSpawn)
    gary.play("idle")
}
async function spawnDavid(zSpawn) {
    const david = spawnEntity({
        spriteName: "david",
        scaleAmount: 7.5,
        hitboxScale: 0.5,
        attributes: getEnemyAttributes("david", currentRound, difficulty),
        tag: "enemy"
    }, zSpawn)
    david.play("idle")
}
async function spawnFightyMan(zSpawn) {
    let maxHealth = 400 * difficultyMultiplier
    const fightyMan = spawnEntity({
        spriteName: "fightyMan",
        scaleAmount: 7.5,
        hitboxScale: 0.5,
        attributes: getEnemyAttributes("fightyMan", currentRound, difficulty),
        tag: "enemy",
        healthbar: new Healthbar({
            text: "Fighty Man",
            icon: "fightyManIcon",
            maxHealth: maxHealth,
            position: vec2(1300, -100),
            color: rgb(255, 0, 0),
            flip: true
        })
    }, zSpawn)
    startFinalBossMusic(() => fightyMan.attributes);
    fightyMan.play("idle")
}
async function spawnHodson(zSpawn) {
    let maxHealth = 180 * difficultyMultiplier
    const hodson = spawnEntity({
        spriteName: "hodson",
        scaleAmount: 6.5,
        hitboxScale: 0.5,
        attributes: getEnemyAttributes("hodson", currentRound, difficulty),
        tag: "enemy",
        healthbar: new Healthbar({
            text: "Hodson",
            icon: "hodsonIcon",
            maxHealth: maxHealth,
            position: vec2(1300, -100),
            color: rgb(255, 0, 0),
            flip: true
        })
    }, zSpawn)
    currentSong = play("Boss", { loop: true }, { volume: globalVolume })
    hodson.play("idle")
}
async function spawnWave(enemyQueue, entityCap) {
    let i = 0;
    while (enemyQueue.length) { // while the array is not empty
        let spawnedEntities = get("enemy").length // Gets the number of spawned entities

        if (spawnedEntities >= entityCap) { // Stops spawning enemies if the entity cap has been reached
            await wait(0.1) // Wait for 0.5 seconds
            continue; // Skip to the next iteration of the loop
        }
        const item = enemyQueue.shift() // Removes the first item from the array
        if (item.name === "joseph") {
            spawnJoseph(item.yPos);
            console.log(`Spawned ${item.name} (${enemyQueue.length} left)`)
        } else if (item.name === "andrew") {
            spawnAndrew(item.yPos);
            console.log(`Spawned ${item.name} (${enemyQueue.length} left)`)
        } else if (item.name === "gary") {
            spawnGary(item.yPos);
            console.log(`Spawned ${item.name} (${enemyQueue.length} left)`)
        } else if (item.name === "david") {
            spawnDavid(item.yPos);
            console.log(`Spawned ${item.name} (${enemyQueue.length} left)`)
        } else if (item.name === "fightyMan") {
            spawnFightyMan(item.yPos);
            console.log(`Spawned ${item.name} (${enemyQueue.length} left)`)
        } else if (item.name === "grigory") {
            spawnGrigory(item.yPos);
            console.log(`Spawned ${item.name} (${enemyQueue.length} left)`)
        } else if (item.name === "venus") {
            spawnVenus(item.yPos);
            console.log(`Spawned ${item.name} (${enemyQueue.length} left)`)
        } else if (item.name === "hodson") {
            spawnHodson(item.yPos);
            console.log(`Spawned ${item.name} (${enemyQueue.length} left)`)
        } else if (item.name === "wait") {
            await wait(item.time);
            console.log(`Spawned ${item.name} (${enemyQueue.length} left)`)

        } else if (item.name === "fadeout") {
            const interval = 0.1; // time interval between each volume change
            let vol = 1; // initial volume
            for (let i = 0; i < 11; i++) {
                if (vol > 0) {
                    vol -= 0.1; // decrease volume by 0.1
                    volume(vol); // set the new volume
                    await wait(interval)

                }
            }
            stopMusic(currentSong)
            volume(1)
        } else {
            console.error("Invalid name");
        }
        i++;
    }
}

function registerPlayerControls(player) {
    // Player controls (keyDown events)
    playerControlEvents.keyDown.push(onKeyDown("left", () => {
        if (!playerControlEnabled) return // Stops the player from moving if the controls are disabled (e.g. during an attack)
        if ((isKeyDown("left") && isKeyDown("right"))) return player.play("idle") // Stops the player from moving if conflicting keys are pressed
        player.flipX = true // Flips the sprite horizontally
        if (currentRound !== 4 && player.worldPos().x < 100) return // Stops player from moving offscreen
        if (currentRound === 4 && player.worldPos().x < 600) return // Stops player from moving offscreen
        player.move(-350 * player.speed, 0)
        if (player.curAnim() == "walking") return // Stops the walking animation from playing twice
        player.play("walking") // Plays the walking animation by default
    }))

    playerControlEvents.keyDown.push(onKeyDown("right", () => {
        if (bgMoving === true && player.worldPos().x > width() / 2) {
            if (player.curAnim() == "walking") return // Stops the walking animation from playing twice
            player.play("walking") // Plays the walking animation by default
            return
        }
        if (!playerControlEnabled) return // Stops the player from moving if the controls are disabled (e.g. during an attack)
        if ((isKeyDown("left") && isKeyDown("right"))) return player.play("idle") // Stops the player from moving if conflicting keys are pressed

        player.flipX = false // Flips the sprite horizontally
        if (currentRound !== 4 && player.worldPos().x > width() - 100) return
        if (currentRound === 4 && player.worldPos().x > width() - 600) return
        player.move(350 * player.speed, 0)
        if (player.curAnim() == "walking") return // Stops the walking animation from playing twice
        player.play("walking") // Plays the walking animation by default
    }))

    playerControlEvents.keyDown.push(onKeyDown("up", () => {
        if (!playerControlEnabled) return // Stops the player from moving if the controls are disabled (e.g. during an attack)
        if ((isKeyDown("up") && isKeyDown("down"))) return player.play("idle") // Stops the player from moving if conflicting keys are pressed
        const yDist = (stageGround.worldPos().y - player.worldPos().y) - 60 // Calculate the distance between the player and the bottom of 2.5d platform
        if (currentRound !== 4 && yDist > 400) return
        if (currentRound === 4 && yDist > 600) return
        player.move(0, -350 * player.speed)
        if (player.curAnim() == "walking") return // Stops the walking animation from playing twice
        player.play("walking") // Plays the walking animation by default
    }))

    playerControlEvents.keyDown.push(onKeyDown("down", () => {
        if (!playerControlEnabled) return // Stops the player from moving if the controls are disabled (e.g. during an attack)
        if ((isKeyDown("up") && isKeyDown("down"))) return player.play("idle") // Stops the player from moving if conflicting keys are pressed
        const yDist = (stageGround.worldPos().y - player.worldPos().y) - 60 // Calculate the distance between the player and the bottom of 2.5d platform
        if (yDist < 64) return // Stops player from moving offscreen
        player.move(0, 350 * player.speed) // Moves the player down
        if (player.curAnim() == "walking") return // Stops the walking animation from playing twice
        player.play("walking") // Plays the walking animation by default
    }))
    playerControlEvents.keyDown.push(onKeyPress("z", async () => {
        playerControlEnabled = false // Disables player controls

        let direction = null
        if (selectedCharacter === "grigory") {
            console.log(player.reloaded)
            if (player.reloaded === false) return
            if (player.shotgunCooldown === true) return
            player.shotgunCooldown = true
            play("shoot")
            player.play("shoot")
            direction = (player.flipX ? "right" : "left")
            if (player.flipX === false) {
                shotgunDown = "southEast"
                shotgunUp = "northEast"
            }
            if (player.flipX === true) {
                shotgunDown = "southWest"
                shotgunUp = "northWest"
            }

            spawnProjectile({
                spriteName: "bullet",
                scaleAmount: 2,
                hitboxScale: 0.5,
                health: 999,
                attributes: {
                    strength: 4,
                    attackType: "fireball",
                }
            }, player.worldPos(), direction, 1, true, true, true)

            spawnProjectile({
                spriteName: "bullet",
                scaleAmount: 2,
                hitboxScale: 0.5,
                health: 999,
                attributes: {
                    strength: 4,
                    attackType: "fireball",
                }
            }, player.worldPos(), shotgunUp, 1, true, true, true)

            spawnProjectile({
                spriteName: "bullet",
                scaleAmount: 2,
                hitboxScale: 0.5,
                health: 999,
                attributes: {
                    strength: 4,
                    attackType: "fireball",
                }
            }, player.worldPos(), shotgunDown, 1, true, true, true)
            player.reloaded = false
            await wait(2)
            player.shotgunCooldown = false
        }
        else performAttack(player, "jab") // Cross attack
    }))
    playerControlEvents.keyDown.push(onKeyPress("x", async () => {
        playerControlEnabled = false // Disables player controls
        if (selectedCharacter === "grigory") {
            player.play("loading")
            play("reload")
            await wait(0.2)
            player.reloaded = true
        }
        else performAttack(player, "cross")
    }))
    playerControlEvents.keyDown.push(onKeyPress("c", async () => {
        playerControlEnabled = false // Disables player controls
        if (selectedCharacter === "grigory") {
            if (player.speedCooldown = true) return
            player.speedCooldown = true
            player.speed = player.speed * 2
            await wait(5)
            player.speed = player.speed / 2
            await wait(15)
            player.speedCooldown = false
        }
        else {
            player.defense = 0.9
            performAttack(player, "block")
        }
    }))
    playerControlEvents.keyUp.push(onKeyRelease("c", async () => {
        player.defense = 0
    }))



    // Player controls (keyUp events)
    const directions = ["left", "right", "up", "down", "z", "x", "c"]
    directions.forEach(key => {
        playerControlEvents.keyUp.push(onKeyRelease(key, () => {
            if (
                !isKeyDown("left") &&
                !isKeyDown("right") &&
                !isKeyDown("up") &&
                !isKeyDown("down") &&
                !isKeyDown("z") && // Jab
                !isKeyDown("x") && // Cross
                !isKeyDown("c") // Special
            ) {
                player.play("idle") // Plays the idle animation by default
            }

            if (key == "z" || key == "x" || key == "c") {
                playerControlEnabled = true // Enables player controls
            }
        }))
    })
}


async function levelInit(playerTag, introText, songName, backgrounds) { // Function that runs the common code for all levels
    destroyAll(obj => !obj.is("bg"));
    if (enemyAIBasic !== null) enemyAIBasic.cancel() // Stops the enemy AI from running
    enableEnemyAI() // Enables enemy AI (movement, attacking, etc.)
    setCursor("default") // Sets the cursor to the default cursor
    if (songName !== "None") {
        stopMusic(currentSong)
        currentSong = play(songName, { loop: true, volume: 0.5 })
    }
    let playerHP = 100
    if (selectedCharacter === "grigory") healthbarIcon = "grigoryIcon"
    else healthbarIcon = "johnny_hp"
    playerSpeed = selectedCharacter === "grigory" ? 1.5 : 1
    const player = spawnEntity({
        spriteName: selectedCharacter,
        position: vec2(width() / 2, height() - 200),
        scaleAmount: 7.5,
        hitboxScale: 0.5,
        z: 26,
        attributes: {
            health: playerHP,
            defense: 0,
            speed: playerSpeed
        },
        tag: "player",
        healthbar: new Healthbar({
            text: playerTag,
            icon: healthbarIcon,
            maxHealth: playerHP,
            position: vec2(0, -100),
            color: rgb(255, 0, 0),
            flip: false
        })
    })
    player.play("idle")
    const isRoundFour = introText.toLowerCase().includes("four")






    const isRoundOne = introText.toLowerCase().includes("one") // Checks if the intro text is for round one

    if (isRoundFour) {
        const darkBackground = add([
            sprite("stage_four_bg2"),
            pos(489, 0),
            scale(10.1),
            fixed(),
            z(-2),
        ])
        add([
            sprite("dark"),
            pos(0, 0),
            scale(10),
            fixed(),
            z(-4)
        ])
        stageFourBackgroundEntity = add([
            sprite(backgrounds[0]),
            pos(0, 0),
            scale(10),
            fixed(),
            z(0)
        ])
    }
    else {
        backgrounds.forEach(background => {
            background = add([
                sprite(background),
                pos(0, 0),
                scale(10),
                fixed(),
                z(0)
            ])
        })
    }
    toggleDarkOverlay(isRoundOne) //fade in the dark overlay
    if (isRoundOne) await wait(4.5) // Wait for 4.5 seconds if it is round one
    await Promise.all([ //wait for both texts to finish animating
        //split the intro text into two lines
        roundText(introText.split(" ")[0], height() / 2 - 96, "left", isRoundOne),
        roundText(introText.split(" ")[1], height() / 2 + 96, "right", isRoundOne)
    ])
    toggleDarkOverlay(isRoundOne) //fade out the dark overlay

    //delete and re-register player controls
    playerControlEvents.keyDown.forEach(keyDownEvent => keyDownEvent.cancel()) // Stops the player from moving
    playerControlEvents.keyUp.forEach(keyUpEvent => keyUpEvent.cancel()) // Stops the player from moving
    registerPlayerControls(player) // Registers events for player controls
    playerControlEnabled = true // Enables player controls (movement, jumping, etc.)
}

scene("stage_one", async (playerTag) => { // Opens up a new scene for level one of the game
    await levelInit(playerTag, "Stage One", "stage_one", ["stage_one_sea_bg", "stage_one_pier_bg"])
    currentRound = 1
    onKeyPress("p", () => {
        go("stage_two", playerTag)
    })

    await spawnWave([
        { name: "gary", yPos: 50 }, // Spawn Gary at y position 50
        { name: "gary", yPos: 100 }, // Spawn Gary at y position 100
        { name: "joseph", yPos: 180 }, // Spawn Joseph at y position 180
        { name: "wait", time: 7 }, // Wait for 7 seconds, and so on...
        { name: "andrew", yPos: 50 },
        { name: "gary", yPos: 150 },
        { name: "gary", yPos: 200 },
        { name: "wait", time: 7 },
        { name: "gary", yPos: 90 },
        { name: "david", yPos: 125 },
        { name: "wait", time: 7 },
        { name: "david", yPos: 25 },
        { name: "david", yPos: 75 },
        { name: "david", yPos: 150 },
        { name: "david", yPos: 275 },
        { name: "wait", time: 10 },
        { name: "joseph", yPos: 10 },
        { name: "joseph", yPos: 40 },
        { name: "joseph", yPos: 90 },
        { name: "joseph", yPos: 280 },
        { name: "wait", time: 10 },
        { name: "gary", yPos: 60 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 90 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 60 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 90 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 60 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 90 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 60 },
        { name: "wait", time: 8 },
        { name: "andrew", yPos: 0 },
        { name: "david", yPos: 190 },
        { name: "andrew", yPos: 250 },
        { name: "david", yPos: 300 }
    ], 4); // Spawns are capped at 4 at a time

    await spawnWave([
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "venus", yPos: 90 },
        { name: "gary", yPos: 200 },
        { name: "gary", yPos: 200 },
        { name: "gary", yPos: 200 },
        { name: "gary", yPos: 200 },
        { name: "gary", yPos: 200 },
    ], 2)

    const roundEnd = onUpdate(async () => {
        if (!get("enemy").length) {
            roundEnd.cancel()
            await levelComplete()
            go("stage_two", playerTag)
        }
    })
})

scene("stage_two", async (playerTag) => {
    const bg1 = add([
        sprite("stage_two_bg"),
        pos(0, 0),
        scale(10),
        z(-1),
        ("bg"),
    ]);
    const bg2 = add([
        sprite("stage_two_bg2"),
        pos(1920, 0),
        scale(10),
        z(-1),
        ("bg")
    ]);
    const bg3 = add([
        sprite("stage_two_bg3"),
        pos(4040, 0),
        scale(10),
        z(-1),
        ("bg")
    ]);

    await levelInit(playerTag, "Stage Two", "stage_two", [])



    currentRound = 2
    oldManSpawn = setInterval(async () => { //old man spawns every 10 seconds (background decoration)
        const oldManDirection = chance(0.5) == 0 ? "left" : "right"
        const oldMan = add([
            sprite("old_man"),  // Renders as a sprite
            pos((oldManDirection == "right" ? -width() - 100 : width() + 100), height() / 2 - 100),
            outline(4, rgb(0, 0, 0)),
            health(30),
            scale(5)
        ])

        if (oldManDirection == "left") oldMan.flipX = true
        let oldManSpeed = getRandomNumber(1, 20)
        if (oldManSpeed < 5) {
            play("wheels")
        }
        await tween(
            oldMan.pos,
            vec2((oldManDirection == "left" ? -width() - 100 : width() + 100), height() / 2 - 100),
            oldManSpeed,
            (pos) => oldMan.pos = pos,
            easings.linear
        )
        oldMan.destroy()
    }, 15000)

    onKeyPress("p", () => {
        clearInterval(oldManSpawn)
        go("stage_three", playerTag)
    })

    await spawnWave([
        { name: "wait", time: 3 },
        { name: "gary", yPos: 50 },
        { name: "gary", yPos: 100 },
        { name: "joseph", yPos: 180 },
        { name: "wait", time: 7 },
        { name: "andrew", yPos: 50 },
        { name: "gary", yPos: 150 },
        { name: "gary", yPos: 200 },
        { name: "wait", time: 7 },
        { name: "david", yPos: 25 },
        { name: "gary", yPos: 90 },
        { name: "david", yPos: 125 },
        { name: "wait", time: 7 },
        { name: "david", yPos: 75 },
        { name: "david", yPos: 150 },
        { name: "david", yPos: 275 },
        { name: "wait", time: 10 },
        { name: "joseph", yPos: 10 },
        { name: "joseph", yPos: 40 },
        { name: "joseph", yPos: 90 },
        { name: "joseph", yPos: 280 },
        { name: "wait", time: 10 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "joseph", yPos: 60 },
        { name: "joseph", yPos: 90 },
        { name: "joseph", yPos: 120 },
    ], 4) // Spawns are capped at 4 at a time




    const moveStart = onUpdate(async () => {
        if (!get("enemy").length) {
            moveStart.cancel()
            player = get("player")[0]
            if (player.worldPos().x > width() / 2) {
                distanceMoved = player.worldPos().x - width() / 2
                tween(
                    player.worldPos(),
                    vec2(width() / 2, player.worldPos().y),
                    0.2,
                    (pos) => player.pos = pos,
                    easings.linear
                )
                tween(
                    bg2.worldPos(),
                    vec2(bg2.worldPos().x - distanceMoved - 10, bg2.worldPos().y),
                    0.2,
                    (pos) => bg2.pos = pos,
                    easings.linear
                )
                tween(
                    bg1.worldPos(),
                    vec2(bg1.worldPos().x - distanceMoved, bg1.worldPos().y),
                    0.2,
                    (pos) => bg1.pos = pos,
                    easings.linear
                )
            }
        }
    })
    let bgCancel = false
    bgMoving = false
    let goSignCooldown = false
    const goSignUpdater = onUpdate(async () => {
        if (!get("enemy").length) {
            if (!bgMoving && !bgCancel) bgMoving = true // Start background movement
        }
        if (!get("enemy").length) {
            if (bgMoving === true) {
                if (goSignCooldown === false) {
                    const goSign = add([
                        sprite("goSign"),
                        pos(1650, 400),
                        scale(10),
                        fixed(),
                        z(2),
                        ("ui"),
                    ])
                    play("beep")
                    goSignCooldown = true
                    await wait(0.35)

                    goSign.destroy()
                    await wait(0.35)
                    goSignCooldown = false
                }
            }
        }
    })

    const backgroundMovement1 = onUpdate(async () => {
        player = get("player")[0]
        if (isKeyDown("right") && player.worldPos().x >= (width() / 2) && bg2.worldPos().x > 10 && bgMoving === true) {
            bg1.move(-350, 0)
            bg2.move(-350, 0)
        }
        else if (bg2.worldPos().x <= 10) {
            bgCancel = false
            bgMoving = false
            goSignUpdater.cancel()
            try {
                goSign.destroy()
            }
            catch { }
            backgroundMovement1.cancel()
            await spawnWave([
                { name: "wait", time: 1 },
                { name: "andrew", yPos: 50 },
                { name: "gary", yPos: 150 },
                { name: "gary", yPos: 200 },
                { name: "wait", time: 5 },
                { name: "david", yPos: 25 },
                { name: "gary", yPos: 90 },
                { name: "david", yPos: 125 },
                { name: "wait", time: 5 },
                { name: "david", yPos: 25 },
                { name: "gary", yPos: 90 },
                { name: "david", yPos: 125 },
                { name: "wait", time: 5 },
            ], 4)

            await spawnWave([
                { name: "fadeout" },
                { name: "wait", time: 2 },
                { name: "grigory", yPos: 90 },
                { name: "gary", yPos: 200 },
                { name: "gary", yPos: 200 },
                { name: "gary", yPos: 200 },
                { name: "gary", yPos: 200 },
                { name: "gary", yPos: 200 },
            ], 2)

            const roundEnd = onUpdate(async () => {
                if (!get("enemy").length) {
                    roundEnd.cancel()
                    await levelComplete()
                    go("stage_three", playerTag)
                }
            })
        }
    })






})



scene("stage_three", async (playerTag) => {
    await levelInit(playerTag, "Stage Three", "stage_three", ["stage_three_bg"])
    currentRound = 3


    onKeyPress("p", () => {
        go("stage_four", playerTag)
    })

    await spawnWave([
        { name: "wait", time: 3 },
        { name: "gary", yPos: 50 },
        { name: "gary", yPos: 100 },
        { name: "joseph", yPos: 180 },
        { name: "wait", time: 7 },
        { name: "andrew", yPos: 50 },
        { name: "gary", yPos: 150 },
        { name: "gary", yPos: 200 },
        { name: "wait", time: 7 },
        { name: "david", yPos: 25 },
        { name: "gary", yPos: 90 },
        { name: "david", yPos: 125 },
        { name: "wait", time: 7 },
        { name: "david", yPos: 75 },
        { name: "david", yPos: 150 },
        { name: "david", yPos: 275 },
        { name: "wait", time: 10 },
        { name: "joseph", yPos: 10 },
        { name: "joseph", yPos: 40 },
        { name: "joseph", yPos: 90 },
        { name: "joseph", yPos: 280 },
        { name: "wait", time: 10 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 1 },
        { name: "joseph", yPos: 60 },
        { name: "joseph", yPos: 90 },
        { name: "joseph", yPos: 120 }
    ], 5); // Spawns are capped at 5 at a time

    await spawnWave([
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "hodson", yPos: 90 },
        { name: "gary", yPos: 200 },
        { name: "gary", yPos: 200 },
        { name: "gary", yPos: 200 },
        { name: "gary", yPos: 200 },
        { name: "gary", yPos: 200 },
    ], 2)


    const roundEnd = onUpdate(async () => {
        if (!get("enemy").length) {
            roundEnd.cancel()
            await levelComplete()
            go("stage_four", playerTag)
        }
    })
})

scene("stage_four", async (playerTag) => {
    await levelInit(playerTag, "Stage Four", "stage_four", ["stage_four_bg"])
    currentRound = 4



    const weightSign = add([
        sprite("weightLimitSprite"),
        pos(1200, 80),
        scale(5),
        fixed(),
        z(2),
        ("ui"),
    ])
    play("elevator_start")

    enemyCount = get("enemy")
    currentWeight = enemyCount.length + 1
    weightSign.play(currentWeight.toString())


    const bg1 = add([
        sprite("stage_four_bg2"),
        pos(489, 0),
        scale(10.5),
        z(-1),
        { speed: 100 },
    ]);

    const bg2 = add([
        sprite("stage_four_bg2"),
        pos(489, -height()),
        scale(10.5),
        z(-1),
        { speed: 100 },
    ]);

    // Update the position of the backgrounds to create the scrolling effect
    bg1.onUpdate(() => {
        bg1.move(0, bg1.speed);
        if (bg1.pos.y >= height()) {
            bg1.pos.y -= height() * 2;
        }
    });

    bg2.onUpdate(() => {
        bg2.move(0, bg2.speed);
        if (bg2.pos.y >= height()) {
            bg2.pos.y -= height() * 2;
        }
    });

    const side1 = add([
        sprite("stage_four_side"),
        pos(-20, 0),
        scale(10),
        z(0),
        { speed: 200 },
    ]);

    const side2 = add([
        sprite("stage_four_side"),
        pos(-20, -height()),
        scale(10),
        z(0),
        { speed: 200 },
    ]);

    // Update the position of the backgrounds to create the scrolling effect
    side1.onUpdate(() => {
        side1.move(0, side1.speed);
        if (side1.pos.y >= height()) {
            side1.pos.y -= height() * 2 + 50;
        }
    });

    side2.onUpdate(() => {
        side2.move(0, side2.speed);
        if (side2.pos.y >= height()) {
            side2.pos.y -= height() * 2 + 50;
        }
    });


    const side3 = add([
        sprite("stage_four_side"),
        pos(1420, 0),
        scale(10),
        z(0),
        { speed: 200 },
    ]);

    const side4 = add([
        sprite("stage_four_side"),
        pos(1420, -height()),
        scale(10),
        z(0),
        { speed: 200 },
    ]);
    side3.flipX = true
    side4.flipX = true

    // Update the position of the backgrounds to create the scrolling effect
    side3.onUpdate(() => {
        side3.move(0, side3.speed);
        if (side3.pos.y >= height()) {
            side3.pos.y -= height() * 2 + 50;
        }
    });

    side4.onUpdate(() => {
        side4.move(0, side4.speed);
        if (side4.pos.y >= height()) {
            side4.pos.y -= height() * 2 + 50;
        }
    });


    weightSign.onUpdate(async () => {
        if (get("enemy").length < 6) {
            weightSign.play(String(get("enemy").length + 1))
        }
        else {
            if (currentRound === 4) {
                weightSign.play("6")
                playerControlEvents.keyDown.forEach(keyDownEvent => keyDownEvent.cancel()) // Stops the player from moving
                playerControlEvents.keyUp.forEach(keyUpEvent => keyUpEvent.cancel()) // Stops the player from moving
                enemyAIBasic.cancel() // Stops the enemy AI from running
                await wait(0.5)
                fallingEntities = get("enemy")
                fallingEntities.push(get("player")[0], stageFourBackgroundEntity, weightSign)
                await fallingEntities.forEach(async fallingEntity => {
                    if (currentRound === 4) {
                        tween(
                            fallingEntity.pos,
                            vec2(fallingEntity.pos.x, fallingEntity.pos.y + 2000),
                            1,
                            (pos) => fallingEntity.pos = pos,
                            easings.easeLinear
                        )
                    }

                })
                await wait(1)
                if (currentRound === 4) {
                    stopMusic(currentSong)
                    play("knocked_down", { loop: false, volume: 1 })
                    go("stage_four_fail", playerTag)
                }
            }

        }
    })


    onKeyPress("p", () => {
        go("stage_five_a", playerTag)
    })

    await spawnWave([
        { name: "wait", time: 3 },
        { name: "gary", yPos: 50 },
        { name: "gary", yPos: 100 },
        { name: "joseph", yPos: 180 },
        { name: "wait", time: 7 },
        { name: "andrew", yPos: 50 },
        { name: "gary", yPos: 150 },
        { name: "gary", yPos: 200 },
        { name: "wait", time: 7 },
        { name: "david", yPos: 25 },
        { name: "gary", yPos: 90 },
        { name: "david", yPos: 125 },
        { name: "wait", time: 7 },
        { name: "david", yPos: 75 },
        { name: "david", yPos: 150 },
        { name: "david", yPos: 275 },
        { name: "wait", time: 10 },
        { name: "joseph", yPos: 10 },
        { name: "joseph", yPos: 40 },
        { name: "joseph", yPos: 90 },
        { name: "joseph", yPos: 280 },
        { name: "wait", time: 10 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 1 },
        { name: "joseph", yPos: 60 },
        { name: "joseph", yPos: 90 },
        { name: "joseph", yPos: 120 }
    ], 10); // Spawns are capped at 5 at a time

    const roundEnd = onUpdate(async () => {
        if (!get("enemy").length) {
            roundEnd.cancel()
            await levelComplete()
            go("stage_five_a", playerTag)
        }
    })

})



scene("stage_five_a", async (playerTag) => {
    currentRound = 5
    let bossSpawned = false
    await levelInit(playerTag, "Stage Five", "stage_five_a", ["stage_five_a_bg"])



    onKeyPress("p", () => {
        go("stage_five_b", playerTag)
    })


    await spawnWave([
        { name: "wait", time: 3 },
        { name: "gary", yPos: 50 },
        { name: "gary", yPos: 100 },
        { name: "joseph", yPos: 180 },
        { name: "wait", time: 7 },
        { name: "andrew", yPos: 50 },
        { name: "gary", yPos: 150 },
        { name: "gary", yPos: 200 },
        { name: "wait", time: 7 },
        { name: "david", yPos: 25 },
        { name: "gary", yPos: 90 },
        { name: "david", yPos: 125 },
        { name: "wait", time: 7 },
        { name: "david", yPos: 75 },
        { name: "david", yPos: 150 },
        { name: "david", yPos: 275 },
        { name: "wait", time: 10 },
        { name: "joseph", yPos: 10 },
        { name: "joseph", yPos: 40 },
        { name: "joseph", yPos: 90 },
        { name: "joseph", yPos: 280 },
        { name: "wait", time: 10 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 60 },
        { name: "wait", time: 2 },
        { name: "david", yPos: 90 },
        { name: "joseph", yPos: 60 },
        { name: "joseph", yPos: 90 },
        { name: "joseph", yPos: 120 },
    ], 5); // Spawns are capped at 5 at a time


    const spawnBoss = onUpdate(async () => {
        if (!get("enemy").length) {
            spawnBoss.cancel()
            await spawnWave([
                { name: "fadeout" },
                { name: "wait", time: 2 },
                { name: "fightyMan", yPos: 90 },
            ], 2)
            bossSpawned = true
        }
    })

    const roundEnd = onUpdate(async () => {
        if (!get("enemy").length && bossSpawned === true) {
            roundEnd.cancel()
            await levelComplete()
            go("good_ending", playerTag)
        }
    })
})

scene("stage_five_b", async (playerTag) => {
    currentRound = 6
    await levelInit(playerTag, "Stage Five", "stage_five_b", ["stage_five_b_bg"])


    onKeyPress("p", () => {
        go("stage_one", playerTag)
    })

    await spawnWave([
        { name: "gary", yPos: 50 }, // Spawn Gary at y position 50
        { name: "gary", yPos: 100 }, // Spawn Gary at y position 100
        { name: "joseph", yPos: 180 }, // Spawn Joseph at y position 180
        { name: "wait", time: 7 }, // Wait for 7 seconds, and so on...
        { name: "andrew", yPos: 50 },
        { name: "gary", yPos: 150 },
        { name: "gary", yPos: 200 },
        { name: "wait", time: 7 },
        { name: "gary", yPos: 90 },
        { name: "david", yPos: 125 },
        { name: "wait", time: 7 },
        { name: "david", yPos: 25 },
        { name: "david", yPos: 75 },
        { name: "david", yPos: 150 },
        { name: "david", yPos: 275 },
        { name: "wait", time: 10 },
        { name: "joseph", yPos: 10 },
        { name: "joseph", yPos: 40 },
        { name: "joseph", yPos: 90 },
        { name: "joseph", yPos: 280 },
        { name: "wait", time: 10 },
        { name: "gary", yPos: 60 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 90 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 60 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 90 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 60 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 90 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 60 },
        { name: "wait", time: 8 },
        { name: "andrew", yPos: 0 },
        { name: "david", yPos: 190 },
    ], 5);
    await spawnWave([
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "venus", yPos: 90 },
        { name: "grigory", yPos: 90 },
    ], 2); // Spawns are capped at 1 at a time




    const roundEnd = onUpdate(async () => {
        if (!get("enemy").length) {
            roundEnd.cancel()
            await levelComplete()
            go("bad_ending", playerTag)
        }
    })
})
scene("boss_rush", async (playerTag) => {

    stage_background = "stage_five_a_bg"

    await levelInit(playerTag, `Boss-Rush: ${difficultyNames[difficulty]}`, "None", [stage_background])
    await spawnWave([
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "venus", yPos: 90 },
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "grigory", yPos: 90 },
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "hodson", yPos: 90 },
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "fightyMan", yPos: 90 },
    ], 1); // Spawns are capped at 1 at a time

    const roundEnd = onUpdate(async () => {
        if (!get("enemy").length) {
            roundEnd.cancel()
            await levelComplete()
            go("starting_menu", playerTag)
        }
    })
}




)
scene("character_select", () => { // Opens up a new scene for the character select
    stopMusic(currentSong) // Stops the menu theme
    setCursor("default")

    currentSong = play(gameMode === "boss_rush" ? "stage_six" : "character_select", { loop: true, volume: 0.5 })

    const chevPositions = [] // Stores the postions the chevrons can be in

    let background1 = add([
        sprite("character_select_bg"),
        pos(0, 0),
        scale(10),
        fixed(),
        z(0)
    ])
    sprites = ["johnny_standing1", "johnny_standing1", "grigory"]
    for (let i = 0; i < 3; i++) { // create 3 characters
        const characterPos = vec2(((width() / 3) * i) + 110, (height() / 2) - 320) // Sets the position of the character on select screen. This will also be used to help the position of the chevron.
        //vec2 is an object that stores two values, x and y.
        chevPositions.push({ x: characterPos.x + 130, y: characterPos.y - 145 })
        add([
            sprite(sprites[i]),  // Renders as a sprite
            pos(characterPos), // Sets the position
            area(), // Has a collider
            scale(12.5), // Scales the sprite up
            z(10),
        ])
    }

    //help message text
    add([
        text("(Use arrow keys to select)", { align: "center", size: 22.5 }),
        color(255, 255, 255),
        pos(width() / 2, (height() / 2) + 205),
        anchor("center"),
        z(4)
    ])

    let characterNames = ["johnny", "johnny's Twin Brother", "grigory"] // Stores the names of the characters

    let cPos = 0

    //set default selected character to the first one
    const charSelectChevron = add([
        sprite("chevron"),  // Renders as a sprite
        pos(chevPositions[cPos].x, chevPositions[cPos].y), // Sets the position
        scale(5), // Scales the sprite up
        "sChev"
    ])

    //character name text
    const selectCharName = add([
        text(characterNames[cPos], { align: "center", size: 48 }),
        color(255, 255, 255),
        pos(width() / 2, (height() / 2) + 270),
        anchor("center"),
        z(4)
    ])

    function moveSelection(direction) {
        play("beep")
        destroyAll("sChev") // Destroys all chevrons
        direction === "right" ? cPos++ : cPos-- // Moves the chevron in the specified direction
        if (cPos < 0) cPos = 2; // Wrap around to 2 if the chevron index is less than 0
        else if (cPos > 2) cPos = 0; // Wrap around to 0 if the chevron index is greater than 2

        add([
            sprite("chevron"),  // Renders as a sprite
            pos(chevPositions[cPos].x, chevPositions[cPos].y), // Sets the position
            scale(5), // Scales the sprite up
            "sChev" // Adds a tag to identify the chevron
        ])

        //character name text
        selectCharName.text = characterNames[cPos]
    }

    onKeyPress("left", () => moveSelection("left")) // Activates moveChevron function to move left
    onKeyPress("right", () => moveSelection("right")) // Activates moveChevron function to move right


    addButton("Select\nCharacter", { x: 240, y: 80 }, vec2(width() / 2, (height() / 2) + 380), () => {
        play("button")
        selectedCharacter = characterNames[cPos]
        if (gameMode === "main") {
            go("stage_one", characterNames[cPos])
        }
        if (gameMode === "boss_rush") {
            go("boss_rush", characterNames[cPos])
        }
        if (gameMode === "stage_select") {
            go("stage_select", characterNames[cPos])
        }
    })
    addButton("<", { x: 100, y: 60 }, vec2(width() / 2 - 880, (height() / 2) - 420), () => {
        play("button")
        go("starting_menu")
    })



    onKeyPress("z", () => {
        play("button")
        selectedCharacter = characterNames[cPos]
        if (gameMode === "main") {
            go("stage_one", selectedCharacter)
        }
        if (gameMode === "boss_rush") {
            go("boss_rush", selectedCharacter)
        }
        if (gameMode === "stage_select") {
            go("stage_select", selectedCharacter)
        }

    })
})

scene("stage_four_fail", async (playerTag) => {
    currentRound = 6
    let background1 = add([
        sprite("dark"),
        pos(0, 0),
        scale(10),
        fixed(),
        z(0)
    ])
    await wait(1.5)
    play("beep")
    failText = add([
        text(`The elevator exceeded its weight limit.`, { align: "center", size: 22.5 }),
        color(255, 255, 255),
        pos(width() / 2, (height() / 2) + 205),
        anchor("center"),
        z(4)
    ])
    await wait(1.5)
    let opacity = 1; // Initial opacity
    let decreasePerSecond = 0.5; // The amount to decrease the opacity by per second

    failText.onUpdate(() => {
        opacity -= decreasePerSecond * dt(); // Decrease the opacity
        if (opacity < 0) opacity = 0; // Ensure opacity doesn't go below 0
        failText.color.a = opacity; // Apply the new opacity
    });
    await wait(1)
    go("stage_five_b", playerTag)



})

scene("bad_ending", async () => {
    stopMusic(currentSong)
    currentSong = play("bad_ending")
    add([
        sprite("dark"),
        pos(0, 0),
        scale(10),
        fixed(),
        z(0)
    ])
    await wait(10)
    add([
        text(`Fighty Man fled the stronghold.`, { align: "center", size: 22.5 }),
        color(255, 255, 255),
        pos(width() / 2, (height() / 2) - 205),
        anchor("center"),
        z(4)
    ])
    await wait(10)
    add([
        text(`He continues to have complete control of the city.`, { align: "center", size: 22.5 }),
        color(255, 255, 255),
        pos(width() / 2, (height() / 2)),
        anchor("center"),
        z(4)
    ])
    await wait(10)
    add([
        text(`You recieved the Bad Ending.`, { align: "center", size: 22.5 }),
        color(255, 255, 255),
        pos(width() / 2, (height() / 2) + 205),
        anchor("center"),
        z(4)
    ])
    await wait(17)
    stopMusic(currentSong)
    go("starting_menu")


})
scene("good_ending", async () => {
    stopMusic(currentSong)
    currentSong = play("good_ending", { loop: true })
    add([
        sprite("dark"),
        pos(0, 0),
        scale(10),
        fixed(),
        z(0)
    ])
    await wait(2)
    add([
        text(`Weakened, Fighty Man fled the stronghold, leaving command behind.`, { align: "center", size: 22.5 }),
        color(255, 255, 255),
        pos(width() / 2, (height() / 2) - 205),
        anchor("center"),
        z(4)
    ])
    await wait(4.5)
    add([
        text(`His forces have been neutralised.`, { align: "center", size: 22.5 }),
        color(255, 255, 255),
        pos(width() / 2, (height() / 2)),
        anchor("center"),
        z(4)
    ])
    await wait(5)
    add([
        text(`You recieved the Good Ending.`, { align: "center", size: 22.5 }),
        color(255, 255, 255),
        pos(width() / 2, (height() / 2) + 205),
        anchor("center"),
        z(4)
    ])
    await wait(5)
    if (gameMode !== "stage_select") {
        accountStats.hardest_good = difficulty
    }
    go("starting_menu")


})
scene("leaderboard", async (data) => {
    console.log(currentSong)
    if (currentSong !== "leaderboard") {
        stopMusic(currentSong)
        currentSong = play("leaderboard", { loop: true })
    }

    add([
        sprite("dark"),
        pos(0, 0),
        scale(10),
        fixed(),
        z(0)
    ])

    const leaderboardData = await getLeaderboard(data?.difficulty || 2); // If the difficulty is not specified, default to 2 (Normal)

    let leaderboardTitle = add([
        text(`Leaderboard (${difficultyNames[difficulty]})`, { align: "center", size: 48 }),
        color(255, 255, 255),
        pos(width() / 2, (height() / 2) - 350),
        anchor("center"),
        z(4)
    ])
    addButton("< back", { x: 320, y: 80 }, vec2((width() / 2) - 850, (height() / 2) - 450), () => {
        play("beep")
        go("starting_menu")
    })
    addButton("<", { x: 80, y: 80 }, vec2((width() / 2) - 830, (height() / 2) - 350), () => {
        if (difficulty === 0) return play("bad");
        play("beep")
        difficulty--;
        go("leaderboard")
    })
    addButton(">", { x: 80, y: 80 }, vec2((width() / 2) + 830, (height() / 2) - 350), () => {
        if (difficulty === 4) return play("bad");
        play("beep")
        difficulty++;
        go("leaderboard")
    })
    console.log("This is the leaderboard:", leaderboardData)

    // This searches for the currently logged in player's username and adds it to the memory
    let leaderboardPlacement = 0
    for (let i = 0; i < leaderboardData.length; i++) {

        if (leaderboardData[i][`infinity_${difficulty}_highest`] > 0) {
            leaderboardPlacement++;
            if (accountStats.username === leaderboardData[i].username) {
                add([
                    text(leaderboardPlacement, { align: "center", size: 48 }),
                    color(255, 255, 255),
                    pos(width() / 2 - 750, (height() / 2) + 350),
                    anchor("center"),
                    z(4)
                ])
                add([
                    text(leaderboardData[i].username, { align: "center", size: 48 }),
                    color(255, 255, 255),
                    pos(width() / 2 - 450, (height() / 2) + 350),
                    anchor("center"),
                    z(4)
                ])
                add([
                    text(leaderboardData[i][`infinity_${difficulty}_highest`], { align: "center", size: 48 }),
                    color(255, 255, 255),
                    pos(width() / 2 + 450, (height() / 2) + 350),
                    anchor("center"),
                    z(4)
                ])
            }
            if (leaderboardPlacement < 6) {
                add([
                    text(leaderboardPlacement, { align: "center", size: 48 }),
                    color(255, 255, 255),
                    pos(width() / 2 - 750, (height() - 800 + (100 * leaderboardPlacement))),
                    anchor("center"),
                    z(4)
                ])
                add([
                    text(leaderboardData[i].username, { align: "center", size: 48 }),
                    color(255, 255, 255),
                    pos(width() / 2 - 450, (height() - 800 + (100 * leaderboardPlacement))),
                    anchor("center"),
                    z(4)
                ])
                add([
                    text(leaderboardData[i][`infinity_${difficulty}_highest`], { align: "center", size: 48 }),
                    color(255, 255, 255),
                    pos(width() / 2 + 450, (height() - 800 + (100 * leaderboardPlacement))),
                    anchor("center"),
                    z(4)
                ])
            }

        }
    }
})

scene("stage_select", async (playerTag) => {
    add([
        sprite("stage_select"),
        pos(0, 0),
        scale(10),
        fixed(),
        z(0)
    ])
    stopMusic(currentSong)
    currentSong = play("stage_select", { loop: true, volume: 0.5 })

    add([
        text("(Use arrow keys to select)", { align: "center", size: 22.5 }),
        color(255, 255, 255),
        pos(width() / 2 + 25, (height() / 2) + 405),
        anchor("center"),
        z(4)
    ])


    addButton("<", { x: 100, y: 60 }, vec2(width() / 2 - 880, (height() / 2) - 420), () => {
        play("button")
        go("starting_menu")
    })

    add([
        text("(Press Z to confirm)", { align: "center", size: 22.5 }),
        color(255, 255, 255),
        pos(width() / 2 + 25, (height() / 2) + 435),
        anchor("center"),
        z(4)
    ])


    const chevPositions = [vec2(230, 50), vec2(905, 50), vec2(1535, 50), vec2(230, 500), vec2(905, 500), vec2(1535, 500)] // Stores the postions the chevrons can be in

    let cPos = 0


    const charSelectChevron = add([
        sprite("chevron"),  // Renders as a sprite
        pos(chevPositions[cPos].x, chevPositions[cPos].y), // Sets the position
        scale(5), // Scales the sprite up
        "sChev"
    ])

    stageNames = ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5a", "Stage 5b"]

    //character name text
    const stageName = add([
        text(stageNames[cPos], { align: "center", size: 48 }),
        color(255, 255, 255),
        pos(width() / 2 + 30, (height() / 2)),
        anchor("center"),
        z(4)
    ])

    function moveSelection(direction) {
        play("beep")
        destroyAll("sChev") // Destroys all chevrons
        direction === "right" ? cPos++ : cPos-- // Moves the chevron in the specified direction
        if (cPos < 0) cPos = 5; // Wrap around to 5 if the chevron index is less than 0
        else if (cPos > 5) cPos = 0; // Wrap around to 0 if the chevron index is greater than 5

        add([
            sprite("chevron"),  // Renders as a sprite
            pos(chevPositions[cPos].x, chevPositions[cPos].y), // Sets the position
            scale(5), // Scales the sprite up
            "sChev" // Adds a tag to identify the chevron
        ])

        //character name text
        stageName.text = stageNames[cPos]
    }

    onKeyPress("left", () => moveSelection("left")) // Activates moveChevron function to move left
    onKeyPress("right", () => moveSelection("right")) // Activates moveChevron function to move right

    stagesArray = ["stage_one", "stage_two", "stage_three", "stage_four", "stage_five_a", "stage_five_b"]

    onKeyPress("z", () => {
        currentRound = cPos + 1
        if (gameMode === "stage_select") go(`${stagesArray[cPos]}`, playerTag)
        if (gameMode === "infinity") go(`boss_rush`, stagesArray[cPos], playerTag)

    })
})

scene("starting_menu", () => { // Opens up a new scene for the starting menu
    accountStats.enemies_defeated += deathCount
    deathCount = 0
    destroyAll() // Make sure all objects are cleared
    difficulty = 2 // Reset the difficulty to normal
    let menuButtonPressed = false
    // Account functions to update account statistics
    for (let i = 0; i < userAccountStats.length; i++) {
        if (accountStats.username === userAccountStats[i].username) {
            userAccountStats[i] = accountStats
        }
    }
    if (accountStats.enemies_defeated > 99) accountStats.boss_rush = true
    if (accountStats.hardest_good > 0) accountStats.stage_select = true
    add([
        sprite("menu_bg"),
        pos(0, 0),
        scale(10),
        fixed(),
        z(0)
    ])
    let difficultyText = add([
        text("Normal Difficulty", { align: "center", size: 24 }),
        color(255, 255, 255),
        pos(vec2((width() / 2) + 615, (height() / 2) + 180)),
        anchor("center"),
    ])
    stopMusic(currentSong)
    setCursor("default")
    setBackground(255, 255, 255);

    addButton("Main Game", { x: 290, y: 80 }, vec2(width() / 2 + 480, (height() / 2) + 64), () => {
        play("button")
        gameMode = "main"
        go("character_select")
    })
    addButton("Boss Rush", { x: 290, y: 80 }, vec2(width() / 2 + 780, (height() / 2) + 64), async () => {
        if (accountStats.boss_rush === false) {
            play("bad")
            if (menuButtonPressed === true) return
            infinityLockedText = add([
                text("Defeat a total of 100 enemies to access the Boss Rush", { align: "center", size: 20 }),
                color(255, 255, 255),
                pos(width() / 2, (height() / 2) + 400),
                anchor("center"),
                z(8),
                opacity(1) // Set initial opacity to 1
            ])
            menuButtonPressed = true
            await wait(2)
            infinityLockedText.destroy()
            menuButtonPressed = false
        }

        else {
            play("button")
            gameMode = "boss_rush"
            go("character_select")
        }
    })

    addButton("<", { x: 80, y: 80 }, vec2((width() / 2) + 330, (height() / 2) + 180), () => {
        if (difficulty === 0) return play("bad");
        play("beep")
        difficulty--;
        difficultyText.text = difficultyNames[difficulty];
    })

    addButton(">", { x: 80, y: 80 }, vec2((width() / 2) + 900, (height() / 2) + 180), () => {
        if (difficulty === difficultyNames.length - 1) return play("bad");
        play("beep")
        difficulty++;
        difficultyText.text = difficultyNames[difficulty];
    })

    // addButton("Leaderboard", { x: 290, y: 80 }, vec2((width() / 2) + 780, (height() / 2) + 320), async () => {
    //     if (accountStats.boss_rush === true) {
    //         play("button")
    //         go("leaderboard")
    //     }
    //     else {
    //         play("bad")
    //         if (menuButtonPressed === true) return
    //         infinityLockedText = add([
    //             text("Defeat a total of 100 enemies to access Infinity Mode", { align: "center", size: 20 }),
    //             color(255, 255, 255),
    //             pos(width() / 2, (height() / 2) + 400),
    //             anchor("center"),
    //             z(8),
    //             opacity(1) // Set initial opacity to 1
    //         ])
    //         menuButtonPressed = true
    //         await wait(2)
    //         infinityLockedText.destroy()
    //         menuButtonPressed = false
    //     }
    // })

    // if (loggedIn === false) {
    //     addButton("Login", { x: 160, y: 80 }, vec2((width() / 2) + 850, (height() / 2 - 400)), () => {
    //         play("button")
    //         go("login")
    //     })
    // }

    // if (loggedIn === true) {
    //     addButton("Logout", { x: 160, y: 80 }, vec2((width() / 2) + 850, (height() / 2 - 400)), () => {
    //         play("button")
    //         go("logout")
    //     })
    // }

    addButton("Stage Select", { x: 290, y: 80 }, vec2((width() / 2) + 630, (height() / 2) + 320), async () => {
        if (accountStats.stage_select === false) {
            play("bad")
            if (menuButtonPressed === true) return
            stageSelectLockedText = add([
                text("Complete the game in any difficulty to unlock Stage Select", { align: "center", size: 20 }),
                color(255, 255, 255),
                pos(width() / 2, (height() / 2) + 400),
                anchor("center"),
                z(8),
                opacity(1)
            ])
            menuButtonPressed = true
            await wait(2)
            stageSelectLockedText.destroy()
            menuButtonPressed = false
        }
        else {
            play("button")
            gameMode = "stage_select"
            go("character_select")
        }
    })
    onKeyPress("left", () => {
        if (difficulty === 0) return play("bad");
        play("beep")
        difficulty--;
        difficultyText.text = difficultyNames[difficulty];
    })
    onKeyPress("right", () => {
        if (difficulty === difficultyNames.length - 1) return play("bad");
        play("beep")
        difficulty++;
        difficultyText.text = difficultyNames[difficulty];
    })

})

// scene("logout", async () => {
//     add([
//         sprite("dark"),
//         pos(0, 0),
//         scale(10),
//         fixed(),
//         z(0)
//     ])

//     add([
//         text("Logging out...", { align: "center", size: 48 }),
//         color(255, 255, 255),
//         pos(width() / 2, (height() / 2) - 128),
//         anchor("center"),
//         z(4)
//     ])
//     for (let i = 0; i < userAccountStats.length; i++) {
//         if (accountStats.username === userAccountStats[i].username) {
//             userAccountStats[i] = userAccountStats
//         }
//     }
//     accountStats = {
//         "enemies_defeated": 0,
//         "blocks": 0,
//         "crosses": 0,
//         "jabs": 0,
//         "hardest_good": -1,
//         "infinity_0_highest": 0,
//         "infinity_1_highest": 0,
//         "infinity_2_highest": 0,
//         "infinity_3_highest": 0,
//         "infinity_4_highest": 0,
//         "stage_select": false,
//         "boss_rush": false
//     }

//     await wait(0.8)
//     loggedIn = false

//     go("starting_menu")

// })

// scene("login", async () => {
//     add([
//         sprite("dark"),
//         pos(0, 0),
//         scale(10),
//         fixed(),
//         z(0)
//     ])
//     let titleText = add([
//         text("Press ENTER to switch between username and password", 8),
//         pos(width() / 2, height() / 2 - 400),
//         anchor("center"),
//     ]);

//     let username = add([
//         text("", 8),
//         pos(width() / 2, height() / 2 - 200),
//         anchor("center"),
//     ]);

//     let usernameText = add([
//         text("Username:", 8),
//         pos(width() / 2, height() / 2 - 250),
//         anchor("center"),
//     ]);

//     let password = add([
//         text("", 8),
//         pos(width() / 2, height() / 2),
//         anchor("center"),
//     ]);

//     let passwordText = add([
//         text("Password:", 8),
//         pos(width() / 2, height() / 2 - 50),
//         anchor("center"),
//     ]);

//     let passwordVariable = ""

//     let loginCursor = "username"

//     onKeyPress((char) => { // Listens for key presses
//         let allowedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "space"]
//         // If the user presses enter, switch between password and username fields
//         if (char === "enter" || char === "tab") {
//             if (loginCursor === "password") loginCursor = "username"
//             else loginCursor = "password"
//             play("knocked_down")
//         }
//         // If the user presses backspace, remove the last character
//         else if (char === "backspace") {
//             play("enemyPunch1")
//             if (loginCursor === "username") {
//                 username.text = username.text.slice(0, -1);
//             } else if (loginCursor === "password") {
//                 password.text = password.text.slice(0, -1);
//                 passwordVariable = passwordVariable.slice(0, -1);
//             }
//         }

//         else if (allowedCharacters.includes(char)) {
//             if (char === "space") char = " "
//             if (loginCursor === "username") {
//                 if (username.text.length === 10) return play("bad")
//                 play("beep")
//                 username.text += char;
//                 username.pos = vec2(width() / 2, height() / 2 - 200)
//             } else if (loginCursor === "password") {
//                 if (password.text.length === 10) return play("bad")
//                 play("beep")
//                 password.text += "*";
//                 passwordVariable += char;
//                 password.pos = vec2(width() / 2, height() / 2)
//             }
//         }
//     });

//     addButton("Signup", { x: 320, y: 80 }, vec2((width() / 2) + 180, (height() / 2) + 320), async () => {
//         let valid = true
//         for (let i = 0; i < userAccountStats.length; i++) {
//             if (username.text === userAccountStats[i].username) {
//                 valid = false;
//                 break;
//             }
//         }
//         if (username.text.length === 0 || passwordVariable.length === 0) valid = false

//         if (valid === false) {
//             play("enemyDeath2")
//             let titleText = add([
//                 text("Invalid Signup Detais.", 8),
//                 color(255, 0, 0),
//                 pos(width() / 2, height() / 2 - 320),
//                 anchor("center"),
//             ]);
//         }
//         if (valid === true) {
//             accountStats = {
//                 "username": username.text,
//                 "password": passwordVariable,
//                 "enemies_defeated": 0,
//                 "hardest_good": -1,
//                 "infinity_0_highest": 0,
//                 "infinity_1_highest": 0,
//                 "infinity_2_highest": 0,
//                 "infinity_3_highest": 0,
//                 "infinity_4_highest": 0,
//                 "stage_select": false,
//                 "boss_rush": false
//             }
//             loggedIn = true
//             userAccountStats.push(accountStats)
//             play("button")
//             go("starting_menu")
//         }
//     })


//     addButton("Login", { x: 320, y: 80 }, vec2((width() / 2) + -180, (height() / 2) + 320), async () => {
//         for (let i = 0; i < userAccountStats.length; i++) {
//             if (username.text === userAccountStats[i].username && passwordVariable === userAccountStats[i].password) {
//                 loggedIn = true;
//                 accountStats = userAccountStats[i]
//                 break;
//             }
//         }


//         if (loggedIn === false) {
//             play("enemyDeath2")
//             add([
//                 text("Incorrect Login Details.", 8),
//                 color(255, 0, 0),
//                 pos(width() / 2, height() / 2 - 320),
//                 anchor("center"),
//             ]);
//         }

//         if (loggedIn === true) {
//             play("button")

//             go("starting_menu")

//         }


//     })



// })




go("starting_menu") // This is the first scene that is loaded when the game starts
