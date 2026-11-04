kaboom({ // Initiates kaboom instance
    background: [255, 255, 255], // Sets the background colour to white
    font: "arcade", // Sets the default font to the "arcade" font, loaded from a TTF file later
    width: 1920,
    height: 961, // Accounting for the taskbar. Default resolution is 1920x961
    virtualControls: false,
    crisp: true, // Disables anti-aliasing and sharpens the game instead
    stretch: true, // Stretches the game to fit the screen
    debug: true // Disables debug mode (Kaboom.js by default allows the player to hit function keys to show game information)
})
console.log("VERSION UPDATED 2")
loadFont("arcade", "/fonts/arcade.ttf") // Loads the font used throughout the game
//loading sounds
loadSound("game_over", "/sounds/game_over.mp3")
loadSound("axe", "/sounds/FX/axe.wav")
loadSound("lightning", "/sounds/FX/lightning.mp3")
loadSound("menu_theme", "/sounds/menu.mp3")
loadSound("bad_ending", "/sounds/BadEnding.mp3")
loadSound("good_ending", "/sounds/credits.mp3")
loadSound("wheels", "/sounds/FX/car.wav")
loadSound("arcade", "/sounds/arcade.wav")
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
loadSound("stage_four", "/sounds/Stage4-1.mp3")
loadSound("stage_four_elevator", "/sounds/Stage 4 - v3.wav")
loadSound("Boss", "/sounds/Boss.mp3")
loadSound("stage_five_a", "/sounds/Stage5a.mp3")
loadSound("stage_five_b", "/sounds/Stage5b.mp3")
loadSound("stage_six", "/sounds/Stage6.mp3")
loadSound("Boss_Final", "/sounds/Boss_Final.mp3")
loadSound("Boss_Final_Theme", "/sounds/Boss_Final_Theme.mp3")
loadSound("FinalBossIntro", "/sounds/FinalBossIntro.mp3")
loadSound("FinalBossLoop1", "/sounds/FinalBossLoop1.mp3")
loadSound("FinalBossLoop2", "/sounds/FinalBossLoop2.mp3")
loadSound("FinalBossOutro", "/sounds/FinalBossOutro.mp3")
loadSound("leaderboard", "/sounds/leaderboard.mp3")
loadSound("button", "/sounds/FX/button.mp3")
loadSound("level_complete", "/sounds/level_complete.mp3")
loadSound("bad", "/sounds/FX/declined.mp3")
loadSound("enemyPunch1", "/sounds/FX/light_punch1.wav")
loadSound("enemyPunch2", "/sounds/FX/light_punch2.wav")
loadSound("enemyPunch3", "/sounds/FX/enemy_heavy_punch.wav")
loadSound("enemyDeath1", "/sounds/FX/death1.wav")
loadSound("enemyDeath2", "/sounds/FX/death2.wav")
loadSound("beep", "/sounds/FX/beep.mp3")
loadSound("character_select", "/sounds/character_select.mp3")


for (let i = 1; i <= 4; i++) { loadSound(`punch${i}`, `/sounds/FX/punch${i}.wav`) }


//loading sprites
loadSprite("menu_bg", `/sprites/backgrounds/menu.png`)
loadSprite("arcade", `/sprites/backgrounds/arcade.png`)
loadSprite("johnny_standing1", `/sprites/johnny/standing1.png`)
loadSprite("fireProj", `/sprites/enemies/fireProjectile.png`)
loadSprite("ladroDropping", `/sprites/enemies/dropping.png`)
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
loadSprite("ladroIcon", "/sprites/ui/ladro.png")
loadSprite("djinnIcon", "/sprites/ui/djinn.png")
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
loadSprite("stage_four_1", "/sprites/backgrounds/Stage4-1.png")
loadSprite("stage_four_2", "/sprites/backgrounds/Stage4-2.png")
loadSprite("stage_four_bg2", "/sprites/backgrounds/Stage4BG.png")
loadSprite("stage_four_bg", "/sprites/backgrounds/Stage4FG.png")
loadSprite("stage_four_side", "/sprites/backgrounds/Stage4Side.png")
loadSprite("deliveryManBackground", "/sprites/backgrounds/deliveryMan.png")
loadSprite("stage_five_a_bg", "/sprites/backgrounds/Stage5a.png")
loadSprite("stage_five_b_bg", "/sprites/backgrounds/Stage5b.png")
loadSprite("stage_six", "/sprites/backgrounds/Stage6.png")

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
loadSpriteAtlas("/sprites/enemies/ladro.png", {
    'ladro': {
        x: 0,
        y: 0,
        width: 96,
        height: 32,
        sliceX: 3,
        anims: {
            'idle': { from: 0, to: 1, loop: true, speed: 8 },
            'downed': { from: 2, to: 2, loop: false },
        }
    }
})
loadSpriteAtlas("/sprites/ui/deliveryMan.png", {
    'deliveryMan': {
        x: 0,
        y: 0,
        width: 39,
        height: 13,
        sliceX: 3,
        anims: {
            'idle': { from: 0, to: 0, loop: true, speed: 8 },
            'walking': { from: 1, to: 2, loop: true, speed: 4 },
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
loadSpriteAtlas("/sprites/backgrounds/round1Bg.png", {
    'round1Background': {
        x: 0,
        y: 0,
        width: 1152,
        height: 108,
        sliceX: 6,
        anims: {
            'idle': { from: 0, to: 5, loop: true, speed: 3 },
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

loadSpriteAtlas("/sprites/enemies/Djinn.png", {
    'djinn': {
        x: 0,
        y: 0,
        width: 480,
        height: 32,
        sliceX: 15,
        anims: {
            'idle': { from: 5, to: 5, loop: true, speed: 0.5 },
            'lightning': { from: 6, to: 8, loop: true, speed: 6 },
            'chaosBall': { from: 0, to: 4, loop: true, speed: 2 },
            'tpStart': { from: 9, to: 14, loop: false, speed: 8 },
            'tpEnd': { from: 14, to: 9, loop: false, speed: 8 },
            'superPunch': { from: 0, to: 0, loop: false, speed: 5 }
        }
    }
})
loadSpriteAtlas("/sprites/enemies/chaosBall.png", {
    'chaosBall': {
        x: 0,
        y: 0,
        width: 24,
        height: 8,
        sliceX: 3,
        anims: {
            'idle': { from: 0, to: 2, loop: true, speed: 5 },
        }
    }
})
loadSpriteAtlas("/sprites/enemies/lightning.png", {
    'lightning': {
        x: 0,
        y: 0,
        width: 48,
        height: 96,
        sliceX: 3,
        anims: {
            'idle': { from: 0, to: 2, loop: true, speed: 16 },
        }
    }
})
loadSpriteAtlas("/sprites/enemies/djinndicator.png", {
    'djinndicator': {
        x: 0,
        y: 0,
        width: 128,
        height: 16,
        sliceX: 8,
        anims: {
            'charge': { from: 0, to: 5, loop: true, speed: 5 },
            'idle': { from: 6, to: 7, loop: true, speed: 16 },
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

let fightyManPhase2 = false
let game_over = false
let stageFourBackgroundEntity = null // Stores the object of the moving background in Stage 4
let bgMoving = false // Stores the boolean value of whether the background is moving in Stage 2
let difficultyMultiplier = 0.9 // Stores the value of the enemy difficulty multiplier
let Access = true
let selectedCharacter = null // Stores the value of the selected character, used for round starts
let fightyManAttack = 2 // Stores the default value of the Final Boss' first attack
let djinnAttack = 1
let hodsonAttack = 1
let playerControlEnabled = false // Stores whether or not the player controls are enabled
let deathCount = 0
let sessionScore = 0
let globalVolume = 0.5
let difficultyNames = ["Easiest Difficulty", "Easy Difficulty", "Normal Difficulty", "Hard Difficulty", "Insane Difficulty"]; // Stores the names of the difficulties
let difficulty = 2 // Default difficulty is normal (2)
let gameMode = null // Stores the current game mode (either "main", "infinity" or "stage_select")
let currentRound = 1
let finalRound = false
let oldManSpawn = null
let currentSong = play("menu_theme", { loop: true, volume: 0.0 }) // Loops the menu theme while the player is in the menu
const funRoom = null
let fightyManDead = false
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
            pos(this.position.x + 30, this.position.y + 133),
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
        console.log("Damage taken!")
        this.health -= amount;
        if (this.health > this.maxHealth) this.health = this.maxHealth
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
        if (this.health > this.maxHealth) this.health = this.maxHealth
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

    reset() {
        // Restores the bar to full, even if health has gone negative
        this.heal(this.maxHealth - this.health)
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

async function lightningAttack(location) {
    spawnProjectile({
        spriteName: "lightning",
        scaleAmount: 11,
        hitboxScale: 0,
        health: 999,
        attributes: {
            strength: 0,
            attackType: "fireball",
        }
    }, vec2(location.x, location.y - 2000), "down", 0.5, false, true, false, location, true)

}

let enemyAIBasic = null;

function disableEnemyAI() {
    if (enemyAIBasic) {
        enemyAIBasic.cancel();
        enemyAIBasic = null;
    }
}

async function restartEnemyAI() {
    disableEnemyAI();
    await wait(0.05);
    enableEnemyAI();
}

async function enableEnemyAI() {
    // Prevent multiple AI loops
    disableEnemyAI();

    enemyAIBasic = onUpdate(() => {
        // Gets all entities with the "enemy" tag
        let enemies = get("enemy");
        let bosses = ["ladro", "grigory", "fightyMan", "venus", "hodson", "djinn"]
        enemies.forEach(async enemy => {
            if (enemy.dead || enemy.knockedDown) return // Stops the function if the enemy is dead
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
            if (horizontalDirection === "left" && (enemy.attackType !== "venus")) enemy.flipX = (enemy.attackType === "ladro") ? true : false
            if (horizontalDirection === "right" && (enemy.attackType !== "venus")) enemy.flipX = (enemy.attackType === "ladro") ? false : true

            if (!enemy.zUpdaterAdded) {
                enemy.zUpdaterAdded = true;

                enemy.onUpdate(() => {
                    enemy.z = (enemy.pos.y - 460) / 10;
                });
            }



            const distance = Math.sqrt(Math.pow(enemyPos.x - playerPos.x, 2) + Math.pow(enemyPos.y - playerPos.y, 2)) // Calculates the distance between the player and the enemy
            let attackChance = getRandomNumber(1, (1000 / enemy.aggression)) // Creates a random attack chance
            if (distance < 150 && (!bosses.includes(enemy.attackType))) { // If the distance is less than 100 pixels

                if (enemy.curAnim() === "cross") return // Checks to see if the attacking enemy is currently attacking, or dead.
                if (enemy.curAnim() === "jab") return
                if (enemy.dead || enemy.knockedDown) return

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


            // INSANE: every boss uses the Infernum-style AI from game_additions.js
            if (isInsane() && BOSS_TYPES.includes(enemy.attackType)) {
                startInfernumAI(enemy)
                return
            }

            if (enemy.attackType === "djinn") { //If the enemy is the final boss, initiate Final Boss AI. //If the enemy is the final boss, initiate Final Boss AI.
                let maxHealth = enemy.healthbar.maxHealth
                healthDifficultyMultiplier = 1 + (enemy.healthbar.maxHealth - enemy.hp()) / enemy.healthbar.maxHealth;
                if (enemy.attackCooldown === true) return
                if (enemy.dead || enemy.knockedDown) return
                ignoreEnemyCollisions(enemy)


                if (djinnAttack === 1) { // Initiates the random float movement
                    djinnAttack = 2
                    // enemy.attackCooldown = true
                    // if (enemy.curAnim() !== "idle") enemy.play("idle")
                    // await tween(
                    //     enemy.worldPos(),
                    //     vec2(getRandomNumber(200, 1800), getRandomNumber(500, 800)),
                    //     2 / difficultyMultiplier / healthDifficultyMultiplier,
                    //     (pos) => enemy.pos = pos,
                    //     easings.linear
                    // )

                    // enemy.play("idle")
                    // await wait(0.3 / difficultyMultiplier / healthDifficultyMultiplier / (enemy.hp() > maxHealth * 0.5 ? 2 : 1))
                    // djinnAttack = getRandomNumber(1, 5)
                    // enemy.attackCooldown = false
                }

                if (djinnAttack === 2) { // Initiates the teleport

                    enemy.attackCooldown = true
                    enemy.play("tpStart")
                    await tween(
                        enemy.worldPos(),
                        vec2(getRandomNumber(200, 1800), getRandomNumber(500, 800)),
                        0.3 / difficultyMultiplier / healthDifficultyMultiplier,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )
                    await enemy.play("tpEnd")
                    await wait(0.7)
                    enemy.play("idle")
                    await wait(1 / (difficultyMultiplier * 1.5) / healthDifficultyMultiplier / (enemy.hp() > maxHealth * 0.5 ? 2 : 1))
                    djinnAttack = getRandomNumber(1, 5)
                    destroyAll("projectile")
                    enemy.attackCooldown = false
                }
                if (djinnAttack === 3) { // Initiates the chaos balls attack
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
                    enemy.play("chaosBall")

                    play("fireShort")
                    spawnProjectile({
                        spriteName: "chaosBall",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 3 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, horizontalDirection, 1, false, true)
                    await wait(0.5)
                    play("fireShort")
                    spawnProjectile({
                        spriteName: "chaosBall",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 3 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, fireballDown, 1, false, true)
                    await wait(0.5)
                    play("fireShort")
                    spawnProjectile({
                        spriteName: "chaosBall",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 3 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, "down", 1, false, true)
                    await wait(0.5)
                    play("fireShort")
                    spawnProjectile({
                        spriteName: "chaosBall",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 5 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, fireballDown, 1, false, true)
                    await wait(0.5)
                    play("fireShort")
                    spawnProjectile({
                        spriteName: "chaosBall",
                        scaleAmount: 5,
                        hitboxScale: 0.5,
                        health: 999,
                        attributes: {
                            strength: 5 * healthDifficultyMultiplier,
                            attackType: "fireball",
                        }
                    }, enemyPos, horizontalDirection, 1, false, true)
                    await wait(0.5)
                    const distance = Math.sqrt(Math.pow(enemyPos.x - playerPos.x, 2) + Math.pow(enemyPos.y - playerPos.y, 2)) // Calculates the distance between the player and the enemy
                    djinnAttack = 2

                    enemy.attackCooldown = false
                }
                if (djinnAttack === 4) { // Initiates the lightning
                    enemy.attackCooldown = true
                    if (enemy.curAnim() !== "lightning") enemy.play("lightning")
                    attackLocations = [vec2(getRandomNumber(200, 1800), getRandomNumber(600, 800)), vec2(getRandomNumber(200, 1800), getRandomNumber(600, 800)), vec2(getRandomNumber(200, 1800), getRandomNumber(600, 800))]
                    if (difficulty >= 3) {
                        attackLocations.push(vec2(getRandomNumber(200, 1800), getRandomNumber(600, 800)))
                    }
                    for (const location of attackLocations) {
                        spawnProjectile({
                            spriteName: "djinndicator",
                            scaleAmount: 10,
                            hitboxScale: 0,
                            health: 999,
                            attributes: {
                                strength: 0,
                                attackType: "none",
                            }
                        }, location, "djinndicator", 0, false);
                    }

                    await wait(1)
                    for (let i = 0; i < 10; i++) {
                        play("beep");
                        await wait(0.1);
                    }

                    const attackPromises = attackLocations.map(location =>
                        performAttack(enemy, "damageBox", 50, location, 0.5)
                    );

                    play("lightning")

                    await Promise.all(attackPromises);
                    enemy.play("idle")
                    djinnAttack = getRandomNumber(1, 3)
                    enemy.attackCooldown = false
                }
                if (djinnAttack === 5) {
                    djinnAttack = getRandomNumber(1, 3)
                } // Initiates the chaos balls attack
            }


            







            if (enemy.attackType === "fightyMan") { //If the enemy is the final boss, initiate Final Boss AI.
                let maxHealth = enemy.healthbar.maxHealth
                healthDifficultyMultiplier = 1 + (enemy.healthbar.maxHealth - enemy.hp()) / enemy.healthbar.maxHealth;
                if (enemy.attackCooldown === true) return
                if (enemy.dead || enemy.knockedDown) return
                ignoreEnemyCollisions(enemy)

                if ((finalRound || (fightyManPhase2 === true && gameMode === "boss_rush")) && (enemy.hp() < (maxHealth * 0.6))) healthDifficultyMultiplier = healthDifficultyMultiplier * 1.5


                if (fightyManAttack === 1) { // Initiates the walking right animation
                    enemy.attackCooldown = true
                    if (enemy.dead || enemy.knockedDown) return
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
                    if (enemy.dead || enemy.knockedDown) return
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

                    if (finalRound || (fightyManPhase2 === true && gameMode === "boss_rush")) {
                        if (enemy.dead || enemy.knockedDown) return
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
                        if (enemy.dead || enemy.knockedDown) return
                        play("fireShort")
                        spawnProjectile({
                            spriteName: "fireProj",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2 * healthDifficultyMultiplier,
                                attackType: "fireball",
                            }
                        }, enemyPos, horizontalDirection, 3, false, true)
                        if (enemy.dead || enemy.knockedDown) return
                        await wait(0.1)
                        spawnProjectile({
                            spriteName: "fireProj",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2 * healthDifficultyMultiplier,
                                attackType: "fireball",
                            }
                        }, enemyPos, fireballDown, 3, false, true)
                        await wait(0.1)
                        if (enemy.dead || enemy.knockedDown) return
                        spawnProjectile({
                            spriteName: "fireProj",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2 * healthDifficultyMultiplier,
                                attackType: "fireball",
                            }
                        }, enemyPos, "down", 3, false, true)
                        await wait(0.1)
                        if (enemy.dead || enemy.knockedDown) return
                        spawnProjectile({
                            spriteName: "fireProj",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2 * healthDifficultyMultiplier,
                                attackType: "fireball",
                            }
                        }, enemyPos, fireballDown, 3, false, true)
                        await wait(0.1)
                        if (enemy.dead || enemy.knockedDown) return
                        spawnProjectile({
                            spriteName: "fireProj",
                            scaleAmount: 5,
                            hitboxScale: 0.5,
                            health: 999,
                            attributes: {
                                strength: 2 * healthDifficultyMultiplier,
                                attackType: "fireball",
                            }
                        }, enemyPos, horizontalDirection, 3, false, true)

                        const distance = Math.sqrt(Math.pow(enemyPos.x - playerPos.x, 2) + Math.pow(enemyPos.y - playerPos.y, 2)) // Calculates the distance between the player and the enemy

                        if (horizontalDirection === "left") fightyManAttack = 1
                        if (horizontalDirection === "right") fightyManAttack = 2
                        if (getRandomNumber(1, 2) === 2) fightyManAttack = 5
                        if (getRandomNumber(1, 2) === 2) fightyManAttack = 6
                        if (getRandomNumber(1, 2) === 2) fightyManAttack = 4
                        if (distance < 150) fightyManAttack = 4

                        enemy.attackCooldown = false
                    }
                    else {
                        fightyManAttack = 5
                    }
                }
                if (fightyManAttack === 4) { // Initiates the fireshield attack
                    if (enemy.dead || enemy.knockedDown) return
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
                    if (enemy.dead || enemy.knockedDown) return
                    enemy.attackCooldown = true
                    if (enemy.curAnim() !== "walking") enemy.play("walking")
                    const playerPos = player.worldPos() // Gets the player's position
                    const enemyPos = enemy.worldPos() // Gets the enemy's position
                    if (enemyPos.x < playerPos.x) horizontalDirection = "left"; // Checks whether the entity is to the left of the player
                    if (enemyPos.x >= playerPos.x) horizontalDirection = "right"; // Checks whether the entity is to the right of the player

                    play("fireShort")
                    if (enemy.dead || enemy.knockedDown) return
                    await tween(
                        enemy.worldPos(),
                        (horizontalDirection === "left") ? vec2(player.worldPos().x - 100, player.worldPos().y) : vec2(player.worldPos().x + 100, player.worldPos().y),
                        1.5 / (enemy.speed / 5) / difficultyMultiplier / healthDifficultyMultiplier,
                        (pos) => enemy.pos = pos,
                        easings.linear
                    )
                    play("flamethrower")
                    await performAttack(enemy, "cross")
                    fightyManAttack = getRandomNumber(1, 5)
                    enemy.attackCooldown = false

                }
                if (fightyManAttack === 6) { // Initiates the firewalls attack
                    enemy.attackCooldown = true
                    if (enemy.dead || enemy.knockedDown) return
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
                    if (horizontalDirection === "left" || finalRound === true || (fightyManPhase2 === true && gameMode === "boss_rush")) {
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
                        }, vec2(2000, getRandomNumber(500, 900)), "right", 10, false, true)
                        await wait(0.8)
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
                        }, vec2(2000, getRandomNumber(500, 900)), "right", 10, false, true)
                    }
                    if (finalRound === true || (fightyManPhase2 === true && gameMode === "boss_rush")) await wait(0.8)
                    if (horizontalDirection === "right" || finalRound === true) {
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
                        }, vec2(-100, getRandomNumber(500, 900)), "left", 10, false, true)
                        await wait(0.8)
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
                        }, vec2(-100, getRandomNumber(500, 900)), "left", 10, false, true)
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
                ignoreEnemyCollisions(enemy)
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
                    await wait(1.5 / difficultyMultiplier / healthDifficultyMultiplier)
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
                    await wait(1.5 / difficultyMultiplier / healthDifficultyMultiplier)
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
                        2.5 / (enemy.speed / 5) / difficultyMultiplier / healthDifficultyMultiplier,
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
                ignoreEnemyCollisions(enemy)
                if (enemy.dead || enemy.knockedDown) return
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

                    if (enemy.dead || enemy.knockedDown) return

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

                    if (enemy.dead || enemy.knockedDown) return

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

                ignoreEnemyCollisions(enemy) // Ignore all hitbox collisions for this boss.
                if (enemy.dead || enemy.knockedDown) return
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
            (async function mainLoop() {
                if (enemy.attackType === "ladro" && !enemy.dead) { // AI for the Ladro boss
                    ignoreEnemyCollisions(enemy); // Ignore all hitbox collisions for this boss.

                    if (enemy.attackType === "ladro" && !enemy.spawned) {
                        t = 0;
                        diveTimer = 0;
                        attackCooldown = false;
                        fireballTimer = 0; // Initialize the fireball timer
                        healthDifficultyMultiplier = 1 + (enemy.healthbar.maxHealth - enemy.hp()) / enemy.healthbar.maxHealth;
                        enemy.spawned = true;
                    }

                    // Update figure-eight position
                    if (!enemy.attackCooldown) {
                        healthDifficultyMultiplier = 1 + (enemy.healthbar.maxHealth - enemy.hp()) / enemy.healthbar.maxHealth;
                        t += 3 * dt(); // Adjusted speed increment by delta time
                        enemy.pos.x = (0.5 * width()) + (0.35 * width() * Math.sin(t)); // Centered on X-axis
                        enemy.pos.y = (0.25 * height()) + (0.08 * height() * Math.sin(2 * t)); // Moved down by 15% of screen height

                        // Update fireball timer
                        fireballTimer += dt(); // Increment fireball timer by delta time

                        // Check if it's time to fire a fireball
                        if (fireballTimer >= 2 / (healthDifficultyMultiplier * healthDifficultyMultiplier) / (difficultyMultiplier * difficultyMultiplier)) {
                            fireballTimer = 0; // Reset fireball timer

                            // Spawn fireball projectile
                            spawnProjectile({
                                spriteName: "ladroDropping",
                                scaleAmount: 10,
                                hitboxScale: 0.5,
                                health: 999,
                                attributes: {
                                    strength: 2 * healthDifficultyMultiplier,
                                    attackType: "fireball",
                                }
                            }, enemy.pos.clone(), "down", 2, false, true);
                        }
                    }

                    // Update dive timer
                    diveTimer += dt(); // Increment dive timer by delta time (time since last frame)

                    // Check if it's time to dive
                    if (diveTimer >= 10 && !attackCooldown) { // Dive every 6 seconds
                        enemy.attackCooldown = true;
                        diveTimer = 0; // Reset dive timer

                        let startPos = enemy.pos.clone();
                        let endPos = player.pos.clone();

                        await tween(
                            startPos,
                            endPos,
                            1,
                            (pos) => enemy.pos = pos,
                            easings.easeInExpo
                        );
                        performAttack(enemy, "cross");
                        await wait(1);
                        await tween(
                            enemy.pos,
                            startPos,
                            1,
                            (pos) => enemy.pos = pos,
                            easings.easeInOutCubic
                        );

                        enemy.attackCooldown = false;
                    }
                }
            })();






        })
    })
}









// Variables for music handling
const bpm = 128;
const barDuration = (60 / bpm) * 16; // Duration of one bar in seconds

async function startFinalBossMusic() {
    console.log("Starting Final Boss Music");

    // Play the FinalBossIntro
    currentSong = play("FinalBossIntro", { volume: globalVolume });
    await wait(currentSong.duration() - 0.05);
    if (game_over) return

    // Loop FinalBossLoop1
    currentSong = play("FinalBossLoop1", { loop: true, volume: globalVolume });

    // Continuously check FightyMan's HP and switch to FinalBossLoop2 when HP <= 50%
    if (finalRound || (fightyManPhase2 === true && gameMode === "boss_rush")) {
        checkFightyManHP();
    }
}

async function switchToLoop2() {
    console.log("Switching to FinalBossLoop2");

    // Calculate the delay until the next bar starts
    const currentTime = currentSong.time();
    const timeUntilNextBar = barDuration - (currentTime % barDuration);

    // Wait until the next bar starts
    await wait(timeUntilNextBar - 0.1);

    // Switch to FinalBossLoop2

    newSong = play("FinalBossLoop2", { loop: true, volume: globalVolume });
    await wait(0.05)
    stopMusic(currentSong)
    currentSong = newSong
}

async function checkFightyManHP() {
    const maxHealth = (isInsane() ? 200:500)* difficultyMultiplier
    const fightyMan = get("enemy").find(e => e.attackType === "fightyMan")
    if (!fightyMan) return
    while (fightyMan.exists() && !game_over && fightyMan.hp() > maxHealth * 0.6) {
        await wait(0.1) // Check every 100 milliseconds
    }
    if (!fightyMan.exists() || game_over || fightyMan.dead) return
    await switchToLoop2()
}



async function gameOver(gameMode) {
    game_over = true
    stopMusic(currentSong)
    currentSong = play("game_over", { loop: false, volume: 0.5 }) // Stops the music, plays the game over jingle
    if (currentRound === 2) {
        clearInterval(oldManSpawn)
        try {
            funRoom.cancel()
        } catch (error) { }
    }
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
async function stopMusic(audioContext) {
    audioContext.loop = false // Disables looping if it is enabled
    const duration = audioContext.duration() // Gets the duration of the audio
    audioContext.volume = 0
    await audioContext.seek(duration) // Seeks to the end of the audio
}

async function toggleDarkOverlay(isRoundOne = false, blackout = false) {
    // Make the dark overlay fade in if null and fade out if not null
    if (darkOverlay === null) {

        darkOverlay = add([
            rect(width(), height()),
            opacity(isRoundOne ? 1 : 0),
            color(0, 0, 0),
            z((blackout ? 50 : 25))
        ]);
        if (!isRoundOne) {
            for (let i = 0; i < (blackout ? 20 : 18); i++) {
                await wait(0.02, () => darkOverlay.opacity += 0.05);
            }
        } else {
            let topDarkOverlay = add([
                rect(width(), height()),
                opacity(1),
                color(0, 0, 0),
                z(30)
            ]);
            await wait(2.5);
            // Over 3 seconds, fade out the top dark overlay
            await tween(
                topDarkOverlay.opacity,
                0,
                3,
                (op) => topDarkOverlay.opacity = op,
                easings.easeInCubic
            );
            topDarkOverlay.destroy()
        }
    } else {
        darkOverlay.opacity = 1;
        for (let i = 0; i < (blackout ? 20 : 18); i++) {
            await wait(0.02, () => darkOverlay.opacity -= 0.05);
        }
        await wait(0.02, () => darkOverlay.destroy());
        darkOverlay = null;
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
function addButton(txt, btn_opt, position, callback, opc = 1) {
    // Creates the button box
    const btn = add([
        rect(btn_opt.x, btn_opt.y, { radius: 8 }),
        pos(position),
        area(),
        scale(1),
        anchor("center"),
        outline(4, rgb(255, 255, 255)),
        opacity(opc),
        "ui_button",
    ])

    // Adds a child object that displays the text
    btn.add([
        text(txt, { align: "center", size: btn_opt.txtsize || 22.5 }),
        anchor("center"),
        color(255, 255, 255),
        opacity(opc),
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
            if (btn.disabledText && !get("disabled_text").length) {
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

async function performAttack(entity, attackName, damageBoxDamage = null, damageBoxLocation = null, damageBoxTime = null) {
    let attackHitbox = null // Stores the hitbox of the attack
    if (attackName === "jab") {
        if (entity.curAnim() === attackName) return // Stops the jab animation from playing twice
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


    if (attackName === "damageBox") {
        await wait(damageBoxTime, () => {
            attackHitbox = add([
                rect(150, 40),
                pos(damageBoxLocation),
                area({ collisionIgnore: ["enemy", "boss"] }), // Stops the player hurting themselves
                anchor("center"),
                opacity(0),
                "atkHitbox"
            ])
            attackHitbox.destroy()
        })
    }




    if (attackName === "cross") {
        if (entity.attackType === "fightyMan") {
            if (entity.curAnim() === "flarePunch") return
            entity.play("flarePunch")
        }
        else if (entity.attackType === "ladro") { }
        else {
            if (entity.curAnim() === attackName || entity.curAnim() === "jab") return
            entity.play(attackName)
        }
        // Plays the walking animation by default
        await wait(0.15, () => {
            if (!isKeyDown("x") && entity.is("player") && !(entity.curAnim() === "jab")) return // Stops the cross hitbox from spawning if the player stops holding the key
            attackHitbox = entity.add([
                rect(15, 10),
                pos(entity.attackType === "ladro" ? 0 : (entity.flipX ? -6 : 6), 0),
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

    if (entity.knockedDown) { // knocked down mid-attack: cancel it
        attackHitbox?.destroy()
        return
    }

    // Check if attack hit anything
    let characters = get("enemy") // Gets all entities with the "enemy" tag
    let playerChars = get("player")
    //let playerChar = playerChars[0]
    if (get("player")[0]) characters.push(get("player")[0]) // Adds the player to the array of characters

    for (let i = 0; i < characters.length; i++) {
        const character = characters[i]
        if (attackHitbox?.isColliding(character)) {
            if (character.dead || character.invulnerable) continue;


            if (attackName === "jab") {
                if (character.dead) continue;
                if (character.is("player") && !isKeyDown("c")) character.defense = 0
                if (!character.is("player")) { play(`punch${getRandomNumber(1, 2)}`) } // Plays a random punch sound effect
                else { play(`enemyPunch${character.weight}`) } // Plays a punch sound effect
                character.hurt(7 * entity.strength * (1 - character.defense))
                if ((character.healthbar && currentRound !== 7) || (currentRound === 7 && character.is("player"))) character.healthbar.hurt(7 * entity.strength * (1 - character.defense)) // Update the healthbar visual
                if (entity.is("player") && !character.is("player")) registerJabHit(character, entity)
            }


            if (attackName === "cross") {
                if (character.dead) continue;
                play(`punch${getRandomNumber(3, 4)}`) // Plays a random punch sound effect
                character.hurt(((entity.attackType === "ladro") ? 20 : 12) * (1 - character.defense)) // Hurts the character by 12 health
                if (character.healthbar) character.healthbar.hurt(12 * (1 - character.defense)) // Update the healthbar visual
                if (entity.is("player") && !character.is("player")) knockDownEnemy(character, entity)
            }
            if (attackName === "fireShield") {
                if (character.dead) continue;
                play(`punch${getRandomNumber(3, 4)}`) // Plays a random punch sound effect
                character.hurt(22 * entity.strength * (1 - character.defense)) // Hurts the character by 12 health
                if (character.healthbar) character.healthbar.hurt(22 * entity.strength * (1 - character.defense)) // Update the healthbar visual, -12 health
            }
            if (attackName === "damageBox") {
                if (character.dead) continue;
                play(`punch${getRandomNumber(3, 4)}`) // Plays a random punch sound effect
                character.hurt(damageBoxDamage * (1 - character.defense)) // Hurts the character by 12 health
                if (character.healthbar) character.healthbar.hurt(22 * entity.strength * (1 - character.defense)) // Update the healthbar visual, -12 health
            }
            await checkDeath(character, attackHitbox)
            destroyAll("atkHitbox") // Destroys all instances of the attack hitbox
        }

    }
}
async function checkDeath(character, attackHitbox) {
    if (character.hp() <= 0) { // Checks if the character is dead
        if (character.dead) return // Already handled (stops repeated hits re-running this)
        if (character.is("player")) {
            lives--
            updateLivesHud()
            if (lives > 0) { // Lives left: respawn in place instead of game over
                attackHitbox?.destroy()
                respawnPlayer(character) // intentionally not awaited
                return
            }
        }
        //remove the dead character from the collision ignore list
        if (character.is("player")) {
            character.defense = 0
            character.collisionIgnore = character.collisionIgnore.filter(item => item !== "enemy")
        }
        else {
            playerChar = get("player")[0]
            if (selectedCharacter === "johnny's Twin Brother") {
                playerChar.healthbar.hurt(-3)
                playerChar.hurt(-3)
            }
            character.collisionIgnore = character.collisionIgnore.filter(item => item !== "player")
        }
        attackHitbox?.destroy()
        if (!character.is("player")) {
            const pl = get("player")[0]
            if (pl) {
                const deadId = `${character.id}`
                pl.collisionIgnore.push(deadId) // Stops the player from colliding with the enemy
                character.onDestroy(() => { pl.collisionIgnore = pl.collisionIgnore.filter(t => t !== deadId) })
            }
        }
        character.collisionIgnore.push("player") // Stops the player from colliding with the player
        character.collisionIgnore.push("enemy") // Stops the enemy from colliding with the enemy
        // Remove the hitbox after the animation is done
        if (character.dead) return;
        bosses = ["venus", "fightyMan", "hodson", "ladro", "grigory", "djinn"]
        if (!bosses.includes(character.attackType)) { character.play("downed") }


        if (character.attackType === "fightyMan") {
            disableEnemyAI();
            character.move(0, -200)
            tween(
                character.worldPos(),
                vec2(character.worldPos().x + (character.flipX ? 50 : -50), character.worldPos().y),
                0.4,
                (pos) => character.pos = pos,
                easings.easeOutCubic
            )
            character.dead = true // Labels the character as dead, this way they can't move or attack
            fightyManDead = true
            fightyManPhase2 = true
            character.play("fireShield")
            play(`enemyDeath1`, { detune: (getRandomNumber(1, (8 / 1)) * 100) }) // Randomises the pitch of the sound effect
            await wait(2)
            character.play("fireShield")
            play("flamethrower")
            await wait(3)
            character.play("idle")
            play("fireShort")
            await wait(2)
            play("fireShort")
            character.play("walking")
            tween(
                character.pos,
                vec2((width() + 100), height() / 2),
                4,
                (pos) => character.pos = pos,
                easings.linear)
            await wait(2)
            play("fireShort")
            await wait(2)
            play("fireShort")
            await wait(0.5, () => character.destroy())
            if (gameMode === "boss_rush" && bosses.includes(character.attackType) || (character.attackType === "djinn" && currentRound === 6)) {
                character.healthbar.destroy()
                restartEnemyAI();
            }

        }
        else {
            if (character.attackType === "hodson") character.play("idle")
            if (character.attackType === "djinn") character.play("tpStart")
            if (character.attackType === "ladro") character.play("downed")
            if (character.attackType === "grigory") character.play("downed")
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
                disableEnemyAI(); // Stops the enemy AI from running
                gameOver(gameMode)
            }
            else deathCount++;
            await tween(
                character.opacity,
                0,
                bosses.includes(character.attackType) ? 0.35 : 3,
                (op) => character.opacity = op,
                easings.easeInCubic
            )
            await wait(0.5, () => character.destroy())
            if (gameMode === "boss_rush" && bosses.includes(character.attackType) || (character.attackType === "djinn" && currentRound === 6)) {
                character.healthbar.destroy()
            }
        }



    }
}


// Helper function to spawn entities
function spawnEntity(options, ySpawn) { // Summons an entity at a specific point with a sprite and AI type
    if (game_over === true) return
    let spawnX = chance(0.5) === true ? 0 : 1920 // Randomly picks a side to spawn the entity on
    let bossesList = ["fightyMan", "venus", "grigory"]
    if (currentRound === 4) {
        ySpawn = getRandomNumber(0, 20)
    }
    if (currentRound === 4.5) {
        spawnX = chance(0.5) === true ? 600 : 1300
        ySpawn = getRandomNumber(-240, 260)
    }
    if (bossesList.indexOf(options.attributes.attackType) !== -1) {
        spawnX = 2000;
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

async function spawnProjectile(options, spawnPos, direction, velocity, shotgun = false, linear = false, damagesEnemies = false, stopPoint = null, lightningType = false) { // Summons an entity at a specific point with a sprite and AI type
    console.log(get("projectile"))
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
    projectile.onUpdate(() => {

        const y = projectile.pos.y
        projectile.z = (y - 460) / 10
    })
    if (direction === "left" || direction === "southEast" || direction === "northEast") {
        projectile.flipX = false
    }
    else {
        projectile.flipX = true
    }
    if (projectile.attackType === "firebar") projectile.play("idle")
    const projectileDamage = projectile.onUpdate(() => {
        player = get("player")[0]
        if (!player) return
        if (projectile.isColliding(player) && damagesEnemies === false && !player.invulnerable && !player.dead) {
            if (!projectile.hit) { // Check if the hit property is false
                projectile.hit = true // Set the hit property to true
                if (lightningType === true) return
                if (projectile.attackType === "none") return
                projectileDamage.cancel()
                if (projectile.attackType !== "firebar") projectile.destroy()
                player.hurt(5 * projectile.strength)
                play("enemyPunch1")
                player.healthbar.hurt(5 * projectile.strength)
                checkDeath(player, projectile)
            }
        }
        if (damagesEnemies !== true) return
        const enemies = get("enemy")
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
    if (lightningType === true) projectile.play("idle")
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
            vec2(projectile.pos.x, stopPoint === null ? height() + 2500 : stopPoint.y - 500),
            1 * velocity,
            (pos) => projectile.pos = pos,
            linear ? easings.easeLinear : easings.easeInOutCubic
        )
    }
    else if (direction === "up") {
        await tween(
            projectile.pos,
            vec2(projectile.pos.x, stopPoint === null ? -height() - 2500 : stopPoint.y + 500),
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
    else if (direction === "djinndicator") {
        await projectile.play("charge")
        await wait(1)
        await projectile.play("idle")
        await wait(1)
        lightningAttack(projectile.pos)
        await wait(0.5)
        projectile.destroy()
    }
    if (lightningType === true) {
        await wait(1)
        for (let i = 0; i < (20); i++) {
            await wait(0.01, () => projectile.opacity -= 0.05);
        }
        projectile.destroy()
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
            health: (isInsane() ? 200:500),
            healthbar: (isInsane() ? 200:500),
            aggression: 60 * difficultyMultiplier,
            speed: 7 * difficultyMultiplier,
            weight: 2,
            strength: 1.7 * difficultyMultiplier,
            attackType: "fightyMan",
        }
    } else if (entityName === "djinn") {
        enemyAttributes = {
            health: (isInsane() ? 150:300)* difficultyMultiplier,
            healthbar: (isInsane() ? 150:300)* difficultyMultiplier,
            aggression: 60 * difficultyMultiplier,
            speed: 10 * difficultyMultiplier,
            weight: 2,
            strength: 1.5 * difficultyMultiplier,
            attackType: "djinn",
        }
    } else if (entityName === "ladro") {
        enemyAttributes = {
            health: (isInsane() ? 80:120)* difficultyMultiplier,
            healthbar: (isInsane() ? 80:120)* difficultyMultiplier,
            aggression: 60 * difficultyMultiplier,
            speed: 7 * difficultyMultiplier,
            weight: 2,
            strength: 1.7 * difficultyMultiplier,
            attackType: "ladro",
        }
    } else if (entityName === "hodson") {
        enemyAttributes = {
            health: (isInsane() ? 40:80)* difficultyMultiplier,
            healthbar: (isInsane() ? 40:80)* difficultyMultiplier,
            aggression: 60 * difficultyMultiplier,
            speed: 6 * difficultyMultiplier,
            weight: 2,
            strength: 2.2 * difficultyMultiplier,
            attackType: "hodson",
        }
    } else if (entityName === "bossGary") {
        enemyAttributes = {
            health: 240 * difficultyMultiplier,
            healthbar: 240 * difficultyMultiplier,
            aggression: 20 * difficultyMultiplier,
            speed: 9 * difficultyMultiplier,
            weight: 2,
            strength: 0.8 * difficultyMultiplier,
            attackType: "bossGary",
        }
    } else if (entityName === "grigory") {
        enemyAttributes = {
            health: (isInsane() ? 120:250)* difficultyMultiplier,
            healthbar: (isInsane() ? 120:250)* difficultyMultiplier,
            aggression: 60 * difficultyMultiplier,
            speed: 7 * difficultyMultiplier,
            weight: 2,
            strength: 0.3 * difficultyMultiplier,
            attackType: "grigory",
        }
    } else if (entityName === "venus") {
        enemyAttributes = {
            health: (isInsane() ? 80:125)* difficultyMultiplier,
            healthbar: (isInsane() ? 80:125)* difficultyMultiplier,
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
            maxHealth: maxHealth = (isInsane() ? 80:125)* difficultyMultiplier,
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
    try {
        gary.play("idle")
    } catch (error) {
        pass
    }

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
    let maxHealth = (isInsane() ? 200:500)
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
async function spawnLadro(zSpawn) {
    let maxHealth = (isInsane() ? 60:120)* difficultyMultiplier
    const ladro = spawnEntity({
        spriteName: "ladro",
        scaleAmount: 7.5,
        hitboxScale: 0.5,
        attributes: getEnemyAttributes("ladro", currentRound, difficulty),
        tag: "enemy",
        healthbar: new Healthbar({
            text: "Ladro",
            icon: "ladroIcon",
            maxHealth: maxHealth,
            position: vec2(1300, -100),
            color: rgb(255, 0, 0),
            flip: true
        })
    }, zSpawn)
    currentSong = play("Boss", { loop: true }, { volume: globalVolume })
    ladro.play("idle")
}
async function spawnDjinn(zSpawn) {
    let maxHealth = (isInsane() ? 130:300)* difficultyMultiplier
    const djinn = spawnEntity({
        spriteName: "djinn",
        scaleAmount: 10,
        hitboxScale: 0.5,
        attributes: getEnemyAttributes("djinn", currentRound, difficulty),
        tag: "enemy",
        healthbar: new Healthbar({
            text: "Djinn",
            icon: "djinnIcon",
            maxHealth: maxHealth,
            position: vec2(1300, -100),
            color: rgb(255, 0, 0),
            flip: true
        })
    }, zSpawn)
    currentSong = play("Boss", { loop: true }, { volume: globalVolume })
    djinn.play("idle")
}
async function spawnHodson(zSpawn) {
    let maxHealth = (isInsane() ? 40:80)* difficultyMultiplier
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
    if (game_over) return
    while (enemyQueue.length) { // while the array is not empty
        let spawnedEntities = get("enemy").length // Gets the number of spawned entities

        if (spawnedEntities >= entityCap) { // Stops spawning enemies if the entity cap has been reached
            await wait(0.1) // Wait for 0.5 seconds
            continue; // Skip to the next iteration of the loop
        }
        if (game_over) return
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
        } else if (item.name === "ladro") {
            spawnLadro(item.yPos);
            console.log(`Spawned ${item.name} (${enemyQueue.length} left)`)
        } else if (item.name === "djinn") {
            spawnDjinn(item.yPos);
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
    clearPlayerControls()
    // Player controls (keyDown events)
    playerControlEvents.keyDown.push(onKeyDown("left", () => {
        if (currentRound === 2 && (player.worldPos().x < 225) && player.worldPos().y < 468) return
        if (!playerControlEnabled) return // Stops the player from moving if the controls are disabled (e.g. during an attack)
        if ((isKeyDown("left") && isKeyDown("right"))) return player.play("idle") // Stops the player from moving if conflicting keys are pressed
        player.flipX = true // Flips the sprite horizontally
        if (currentRound !== 4.5 && player.worldPos().x < 100) return // Stops player from moving offscreen
        if (currentRound === 4.5 && player.worldPos().x < 600) return // Stops player from moving offscreen
        player.move(-350 * player.speed, 0)
        if (player.curAnim() == "walking") return // Stops the walking animation from playing twice
        player.play("walking") // Plays the walking animation by default
    }))

    playerControlEvents.keyDown.push(onKeyDown("right", () => {
        if (currentRound === 2 && (player.worldPos().x > 375) && player.worldPos().y < 468) return
        if (bgMoving === true && player.worldPos().x > width() / 2) {
            if (player.curAnim() == "walking") return // Stops the walking animation from playing twice
            player.play("walking") // Plays the walking animation by default
            return
        }
        if (!playerControlEnabled) return // Stops the player from moving if the controls are disabled (e.g. during an attack)
        if ((isKeyDown("left") && isKeyDown("right"))) return player.play("idle") // Stops the player from moving if conflicting keys are pressed

        player.flipX = false // Flips the sprite horizontally
        if (currentRound !== 4.5 && player.worldPos().x > width() - 100) return
        if (currentRound === 4.5 && player.worldPos().x > width() - 600) return
        player.move(350 * player.speed, 0)
        if (player.curAnim() == "walking") return // Stops the walking animation from playing twice
        player.play("walking") // Plays the walking animation by default
    }))

    playerControlEvents.keyDown.push(onKeyDown("up", () => {
        if (!playerControlEnabled) return // Stops the player from moving if the controls are disabled (e.g. during an attack)
        if ((isKeyDown("up") && isKeyDown("down"))) return player.play("idle") // Stops the player from moving if conflicting keys are pressed
        const yDist = (stageGround.worldPos().y - player.worldPos().y) - 60 // Calculate the distance between the player and the bottom of 2.5d platform
        if (currentRound !== 4.5 && yDist > 400 && !(currentRound === 2 && player.worldPos().x > 225 && player.worldPos().x < 375 && arcadeAccess === true)) return
        if (currentRound === 4.5 && yDist > 600) return
        player.move(0, -350 * player.speed)
        if (player.curAnim() == "walking") return // Stops the walking animation from playing twice
        player.play("walking") // Plays the walking animation by default
    }))

    playerControlEvents.keyDown.push(onKeyDown("down", () => {
        if (!playerControlEnabled) return // Stops the player from moving if the controls are disabled (e.g. during an attack)
        if ((isKeyDown("up") && isKeyDown("down"))) return player.play("idle") // Stops the player from moving if conflicting keys are pressed
        const yDist = (stageGround.worldPos().y - player.worldPos().y) - 60 // Calculate the distance between the player and the bottom of 2.5d platform
        if (currentRound === 4 && yDist < 250) return
        if (yDist < 64) return // Stops player from moving offscreen
        player.move(0, 350 * player.speed) // Moves the player down
        if (player.curAnim() == "walking") return // Stops the walking animation from playing twice
        player.play("walking") // Plays the walking animation by default
    }))
    playerControlEvents.keyDown.push(onKeyPress("z", async () => {
        playerControlEnabled = false // Disables player controls

        let direction = null
        if (selectedCharacter === "grigory") {
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
            if (isKeyDown("z") || isKeyDown("x")) return
            player.defense = 0.95
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
    clearInterval(oldManSpawn) // setInterval isn't scene-bound, so make sure none survives into a new stage
    difficultyMultiplier = ((currentRound + (4 + difficulty * 2)) / 10)
    if (enemyAIBasic !== null) disableEnemyAI(); // Stops the enemy AI from running
    enableEnemyAI() // Enables enemy AI (movement, attacking, etc.)
    setCursor("default") // Sets the cursor to the default cursor
    if (songName !== "None") {
        stopMusic(currentSong)
        currentSong = play(songName, { loop: true, volume: 0.5 })
    }
    let playerHP = 150
    game_over = false
    if (selectedCharacter === "grigory") healthbarIcon = "grigoryIcon"
    else if (selectedCharacter === "johnny's Twin Brother") {
        playerHP = 75, healthbarIcon = "johnny_hp"
    }
    else {
        healthbarIcon = "johnny_hp"
        playerHP = 200
    }
    playerSpeed = selectedCharacter === "grigory" ? 1.5 : 1
    const player = spawnEntity({
        spriteName: selectedCharacter,
        position: vec2(width() / 2, height() - (currentRound === 4 ? 400 : 200)),
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
    createLivesHud()
    const isRoundFour = introText.toLowerCase().includes("elevator")

    player.onUpdate(() => {
        const y = player.pos.y
        player.z = (y - 460) / 10
    })




    const isRoundOne = introText.toLowerCase().includes("one") // Checks if the intro text is for round one
    animBackground = false
    if (isRoundFour) {
        const darkBackground = add([
            sprite("stage_four_bg2"),
            pos(489, 0),
            scale(10.1),
            fixed(),
            z(-107),
        ])
        add([
            sprite("dark"),
            pos(0, 0),
            scale(10),
            fixed(),
            z(-107)
        ])
        stageFourBackgroundEntity = add([
            sprite(backgrounds[0]),
            pos(0, 0),
            scale(10),
            fixed(),
            z(-103)
        ])
    }
    else {
        backgrounds.forEach(background => {
            background = add([
                sprite(background),
                pos(0, 0),
                scale(10),
                fixed(),
                z(-102)
            ])
            if (isRoundOne && animBackground === false) {
                background.play("idle")
                animBackground = true
            }

        })

    }
    if (currentRound !== 4.5) {
        toggleDarkOverlay(isRoundOne) //fade in the dark overlay
        if (isRoundOne) await wait(4.5) // Wait for 4.5 seconds if it is round one
        await Promise.all([ //wait for both texts to finish animating
            //split the intro text into two lines
            roundText(introText.split(" ")[0], height() / 2 - 96, "left", isRoundOne),
            roundText(introText.split(" ")[1], height() / 2 + 96, "right", isRoundOne)
        ])
        toggleDarkOverlay(isRoundOne) //fade out the dark overlay
    }

    //delete and re-register player controls
    playerControlEvents.keyDown.forEach(keyDownEvent => keyDownEvent.cancel()) // Stops the player from moving
    playerControlEvents.keyUp.forEach(keyUpEvent => keyUpEvent.cancel()) // Stops the player from moving
    registerPlayerControls(player) // Registers events for player controls
    playerControlEnabled = true // Enables player controls (movement, jumping, etc.)
}

const BOSS_TYPES = ["ladro", "grigory", "fightyMan", "venus", "hodson", "djinn"]
const isBossType = (e) => BOSS_TYPES.includes(e.attackType)
const isInsane = () => difficulty >= 4 // 4 = "Insane Difficulty"
const clampN = (n, lo, hi) => Math.max(lo, Math.min(hi, n))
const rnd = (lo, hi) => lo + Math.random() * (hi - lo)
const RAD2DEG = 180 / Math.PI

// Leak fix: bosses used to push "enemy" onto collisionIgnore every frame.
function ignoreEnemyCollisions(e) {
    if (!e.collisionIgnore.includes("enemy")) e.collisionIgnore.push("enemy")
}

// Leak fix: cancel AND empty the control arrays so old players/closures can be collected.
function clearPlayerControls() {
    playerControlEvents.keyDown.forEach(ev => ev.cancel())
    playerControlEvents.keyUp.forEach(ev => ev.cancel())
    playerControlEvents.keyDown.length = 0
    playerControlEvents.keyUp.length = 0
}

// Plays an animation without throwing if the sprite lacks it.
function safePlay(e, name, force = false) {
    try {
        if (!e.exists()) return
        if (force || e.curAnim() !== name) e.play(name)
    } catch (err) { /* sprite has no such animation */ }
}

// ---------------------------------------------------------------------
// 2) LIVES SYSTEM
// ---------------------------------------------------------------------
let lives = 1
const LIVES_BY_MODE = { main: 3, stage_select: 1, boss_rush: 1, infinity: 1 }

function beginRun() { // call when a run starts (character select)
    lives = LIVES_BY_MODE[gameMode] ?? 1
}

function createLivesHud() {
    add([
        text(`LIVES x${lives}`, { size: 28 }),
        pos(40, 215),
        color(255, 255, 255),
        fixed(),
        z(60),
        "livesHud"
    ])
}

function updateLivesHud() {
    const hud = get("livesHud")[0]
    if (hud) hud.text = `LIVES x${Math.max(0, lives)}`
}

// Called from checkDeath when the player dies and still has lives left.
async function respawnPlayer(player) {
    player.dead = true // set synchronously so a second hit can't cost another life
    player.invulnerable = true
    playerControlEnabled = false
    clearPlayerControls()
    player.defense = 0
    play("knocked_down")
    safePlay(player, "downed", true)
    const dir = player.flipX ? 1 : -1
    tween(player.pos.x, clampN(player.pos.x + dir * 120, 100, width() - 100), 0.4,
        (v) => { if (player.exists()) player.pos.x = v }, easings.easeOutCubic)

    await Promise.all([
        roundText("Life", height() / 2 - 96, "left", false, 0.6),
        roundText("Lost", height() / 2 + 96, "right", false, 0.6),
    ])
    if (!player.exists() || game_over) return

    player.setHP(player.healthbar.maxHealth)
    player.healthbar.reset()
    player.pos = vec2(width() / 2, height() - (currentRound === 4 ? 400 : 200))
    player.dead = false
    safePlay(player, "idle", true)
    registerPlayerControls(player)
    playerControlEnabled = true

    // ~2 seconds of blinking invulnerability
    for (let i = 0; i < 16; i++) {
        if (!player.exists()) return
        player.opacity = (i % 2 === 0) ? 0.35 : 1
        await wait(0.125)
    }
    if (player.exists()) {
        player.opacity = 1
        player.invulnerable = false
    }
}

// ---------------------------------------------------------------------
// 3) KNOCKDOWN (non-boss enemies only)
//    3 jabs within 1 second, or 1 cross, knocks an enemy down for a moment.
// ---------------------------------------------------------------------
const KNOCKDOWN = {
    jabsNeeded: 3,
    jabWindow: 1.0,    // seconds in which the jabs must land
    duration: 1.6,     // seconds spent on the floor
    immunity: 1.2,     // seconds after getting up where they can't be knocked down again
    pushDistance: 130, // how far they slide away from the attacker
}
// Joseph/Andrew have a "knockedDown" frame; Gary/David only have "downed".
const KNOCKDOWN_ANIMS = { joseph: "knockedDown", andrew: "knockedDown", gary: "downed", david: "downed" }

function registerJabHit(enemy, attacker) {
    if (isBossType(enemy) || enemy.dead || enemy.knockedDown) return
    const now = time()
    enemy.jabHits = (enemy.jabHits || []).filter(t => now - t <= KNOCKDOWN.jabWindow)
    enemy.jabHits.push(now)
    if (enemy.jabHits.length >= KNOCKDOWN.jabsNeeded) knockDownEnemy(enemy, attacker)
}

async function knockDownEnemy(enemy, attacker) {
    if (isBossType(enemy) || enemy.dead || enemy.knockedDown) return
    if (enemy.hp() <= 0) return // dying enemies are handled by checkDeath
    if (enemy.knockdownImmuneUntil && time() < enemy.knockdownImmuneUntil) return

    enemy.knockedDown = true
    enemy.jabHits = []
    try { enemy.get("atkHitbox").forEach(h => h.destroy()) } catch (err) { }

    play("knocked_down", { volume: 0.6 })
    const dir = (attacker && attacker.pos.x < enemy.pos.x) ? 1 : -1 // away from the attacker
    safePlay(enemy, KNOCKDOWN_ANIMS[enemy.sprite] || "downed", true)
    tween(enemy.pos.x, clampN(enemy.pos.x + dir * KNOCKDOWN.pushDistance, 0, width()), 0.3,
        (v) => { if (enemy.exists()) enemy.pos.x = v }, easings.easeOutCubic)

    await wait(0.35)
    if (!enemy.exists() || enemy.dead) return
    safePlay(enemy, "downed", true)
    await wait(KNOCKDOWN.duration - 0.35)
    if (!enemy.exists() || enemy.dead) return

    enemy.knockedDown = false
    enemy.knockdownImmuneUntil = time() + KNOCKDOWN.immunity
    safePlay(enemy, "idle", true)
}

// ---------------------------------------------------------------------
// 4) INSANE DIFFICULTY - INFERNUM-STYLE BOSS AI
//    Every boss runs its own async attack loop with 3 phases (66% / 33% hp),
//    telegraphed attacks, predictive aim, safe-gap patterns and a burst on
//    each phase change. The legacy AI is untouched on other difficulties.
// ---------------------------------------------------------------------
const ARENA = { minX: 160, maxX: 1760, minY: 440, maxY: 840 }
const LANES = [520, 630, 740]  // three depth lanes the player can stand in
const LANE_H = 110             // lane band height (= lane spacing)
const PHW = 40, PHH = 50       // half-size of the player's hurtbox for boss attacks
const STRIP_HW = 60            // half-width of a lightning strip
const LADRO_Y = 240            // Ladro's hover height
const DMG = { bolt: 10, heavy: 18, strike: 20, melee: 30 }
const BOSS_DONE = Symbol("boss_done")

// ---- state helpers ----
function bossAlive(e) { return e.exists() && !e.dead && !game_over }

function bossPhase(e) {
    const f = e.hp() / e.healthbar.maxHealth
    return f > 0.66 ? 1 : (f > 0.33 ? 2 : 3)
}

function rageFactor(e) { // 1.0 at full hp, up to 1.6 near death
    return 1 + (1 - clampN(e.hp() / e.healthbar.maxHealth, 0, 1)) * 0.6
}

async function bossWait(e, t) { // wait, but abort the whole routine if the boss died
    await wait(t)
    if (!bossAlive(e)) throw BOSS_DONE
}

async function moveBoss(e, target, dur, ease = easings.easeInOutCubic) {
    await tween(e.pos.clone(), target, dur, (p) => { if (e.exists()) e.pos = p }, ease)
    if (!bossAlive(e)) throw BOSS_DONE
}

// ---- player tracking / aiming ----
function ensureVelTracker(p) { // estimates the player's velocity for predictive aim
    if (p.velTracked) return
    p.velTracked = true
    p.estVx = 0
    p.estVy = 0
    let lastX = p.pos.x, lastY = p.pos.y
    p.onUpdate(() => {
        const d = dt()
        if (d <= 0) return
        p.estVx = p.estVx * 0.8 + ((p.pos.x - lastX) / d) * 0.2
        p.estVy = p.estVy * 0.8 + ((p.pos.y - lastY) / d) * 0.2
        lastX = p.pos.x
        lastY = p.pos.y
    })
}

function leadPoint(lead = 0.3) {
    const p = get("player")[0]
    if (!p) return { x: width() / 2, y: 640 }
    return {
        x: clampN(p.pos.x + (p.estVx || 0) * lead, ARENA.minX, ARENA.maxX),
        y: clampN(p.pos.y + (p.estVy || 0) * lead, ARENA.minY, ARENA.maxY),
    }
}

function aimAt(fromX, fromY, lead = 0.3) { // angle in degrees (0 = right, 90 = down)
    const t = leadPoint(lead)
    return Math.atan2(t.y - fromY, t.x - fromX) * RAD2DEG
}

function angleDiff(a, b) { return Math.abs((((a - b) % 360) + 540) % 360 - 180) }

// ---- hit tests & damage ----
function playerInCircle(x, y, r) {
    const p = get("player")[0]
    return !!p && !p.dead && Math.hypot(p.pos.x - x, p.pos.y - y) < r + 20
}

function playerInBox(x, y, hw, hh) {
    const p = get("player")[0]
    return !!p && !p.dead && Math.abs(p.pos.x - x) < hw + PHW && Math.abs(p.pos.y - y) < hh + PHH
}

function hurtPlayer(amount) {
    const p = get("player")[0]
    if (!p || p.dead || p.invulnerable || p.iframes) return false
    const dmg = amount * (p.defense > 0.5 ? 0.5 : 1) // blocking halves boss damage
    p.iframes = true // 0.35s of mercy so overlapping hazards can't stack in one frame
    wait(0.35, () => { if (p.exists()) p.iframes = false })
    p.hurt(dmg)
    p.healthbar.hurt(dmg)
    play("enemyPunch1")
    shake(4)
    checkDeath(p)
    return true
}

// ---- visual telegraphs / effects (all self-destroying) ----
function telegraphCircle(x, y, r, dur, col = [255, 60, 40]) {
    const t = add([circle(r), pos(x, y), color(col[0], col[1], col[2]), opacity(0.15), z(3), "fx"])
    tween(0.15, 0.6, dur, (v) => { if (t.exists()) t.opacity = v }, easings.linear)
    wait(dur, () => { if (t.exists()) t.destroy() })
}

function telegraphBox(x, y, w, h, dur, col = [255, 60, 40], angle = 0) {
    const t = add([rect(w, h), pos(x, y), anchor("center"), rotate(angle), color(col[0], col[1], col[2]), opacity(0.15), z(3), "fx"])
    tween(0.15, 0.6, dur, (v) => { if (t.exists()) t.opacity = v }, easings.linear)
    wait(dur, () => { if (t.exists()) t.destroy() })
}

function telegraphLine(x1, y1, x2, y2, thick, dur, col = [255, 60, 40]) {
    telegraphBox((x1 + x2) / 2, (y1 + y2) / 2, Math.hypot(x2 - x1, y2 - y1), thick, dur, col,
        Math.atan2(y2 - y1, x2 - x1) * RAD2DEG)
}

function explosionFx(x, y, r, col = [255, 140, 40]) {
    const fx = add([circle(r * 0.4), pos(x, y), color(col[0], col[1], col[2]), opacity(0.8), scale(1), z(45), "fx"])
    tween(1, 2.5, 0.3, (v) => { if (fx.exists()) fx.scale = vec2(v) }, easings.easeOutCubic)
    tween(0.8, 0, 0.3, (v) => { if (fx.exists()) fx.opacity = v }, easings.linear)
    wait(0.32, () => { if (fx.exists()) fx.destroy() })
}

function lightningColumn(x, cy) {
    const l = add([sprite("lightning"), pos(x, cy), scale(8), anchor("center"), opacity(1), z(46), "fx"])
    l.play("idle")
    tween(1, 0, 0.35, (v) => { if (l.exists()) l.opacity = v }, easings.linear)
    wait(0.36, () => { if (l.exists()) l.destroy() })
}

// ---- projectiles: velocity based, self-cleaning, no global listeners ----
// o: { spr, anim, x, y, angle, speed, dmg, scale, r, box:[hw,hh], life,
//      homing (deg/s), homingTime, turn (seconds -> reverses), pierce }
function fireBolt(o) {
    const rad = (o.angle || 0) / RAD2DEG
    const speed = o.speed || 400
    let vx = Math.cos(rad) * speed
    let vy = Math.sin(rad) * speed
    let age = 0
    let turned = false
    let target = get("player")[0]

    const b = add([
        sprite(o.spr),
        pos(o.x, o.y),
        scale(o.scale || 4),
        anchor("center"),
        rotate(o.rot || 0),
        opacity(1),
        z(40),
        "infernumBolt",
    ])
    if (o.anim) b.play(o.anim)

    b.onUpdate(() => { // removed automatically when the bolt is destroyed
        const d = dt()
        age += d
        if (!target || !target.exists()) target = get("player")[0]

        if (o.homing && target && age < (o.homingTime || 2)) {
            const want = Math.atan2(target.pos.y - b.pos.y, target.pos.x - b.pos.x)
            let cur = Math.atan2(vy, vx)
            let diff = want - cur
            while (diff > Math.PI) diff -= 2 * Math.PI
            while (diff < -Math.PI) diff += 2 * Math.PI
            const step = (o.homing / RAD2DEG) * d
            cur += clampN(diff, -step, step)
            const sp = Math.hypot(vx, vy)
            vx = Math.cos(cur) * sp
            vy = Math.sin(cur) * sp
        }
        if (o.turn && !turned && age > o.turn) { vx = -vx; vy = -vy; turned = true }

        b.pos.x += vx * d
        b.pos.y += vy * d
        b.flipX = vx < 0
        b.z = (b.pos.y - 460) / 10

        if (age > (o.life || 6) || b.pos.x < -400 || b.pos.x > width() + 400 ||
            b.pos.y < -1300 || b.pos.y > height() + 400) {
            b.destroy()
            return
        }
        if (b.spent || !target || target.dead || target.invulnerable) return

        const dx = Math.abs(target.pos.x - b.pos.x)
        const dy = Math.abs(target.pos.y - b.pos.y)
        const hit = o.box
            ? (dx < o.box[0] + PHW && dy < o.box[1] + PHH)
            : (Math.hypot(dx, dy) < (o.r || 36) + 45)
        if (hit && hurtPlayer(o.dmg || DMG.bolt)) {
            if (o.pierce) b.spent = true
            else b.destroy()
        }
    })
    return b
}

// Ring of bolts. gapAt/gapWidth (degrees) leave a hole to escape through.
function radialBurst(x, y, count, speed, o = {}) {
    const offset = o.offset || 0
    for (let i = 0; i < count; i++) {
        const a = offset + (360 / count) * i
        if (o.gapWidth && angleDiff(a, o.gapAt) < o.gapWidth / 2) continue
        fireBolt({
            spr: o.spr || "fireProj", anim: o.anim, x, y, angle: a, speed,
            dmg: o.dmg || DMG.bolt, scale: o.scale || 4, r: o.r || 34, life: o.life || 5,
            homing: o.homing, homingTime: o.homingTime,
        })
    }
}

// Telegraphed circular explosion at a spot.
async function groundStrike(x, y, r, dmg, delay, kind = "fire") {
    const lightning = kind === "lightning"
    telegraphCircle(x, y, r, delay, lightning ? [120, 160, 255] : [255, 60, 40])
    await wait(delay)
    if (game_over) return
    explosionFx(x, y, r, lightning ? [160, 200, 255] : [255, 140, 40])
    play(lightning ? "lightning" : "fireShort", { volume: 0.5 })
    if (lightning) lightningColumn(x, y - 300)
    if (playerInCircle(x, y, r)) hurtPlayer(dmg)
}

// Telegraphed full-height lightning strip (Djinn).
async function lightningStrip(x, delay, dmg = DMG.strike) {
    telegraphBox(x, 640, 2 * (STRIP_HW + PHW), 760, delay, [120, 160, 255])
    await wait(delay)
    if (game_over) return
    lightningColumn(x, 470)
    play("lightning", { volume: 0.5 })
    shake(8)
    const p = get("player")[0]
    if (p && !p.dead && Math.abs(p.pos.x - x) < STRIP_HW + PHW) hurtPlayer(dmg)
}

// ---- generic boss loop ----
// sets: [phase1Attacks[], phase2Attacks[], phase3Attacks[]]  (attacks cycle in order)
// recovery(ph): seconds of rest between attacks.  repos: optional { anim, to() }
async function bossLoop(e, sets, recovery, repos = null) {
    let lastPhase = 1
    let idx = 0
    while (bossAlive(e)) {
        const ph = bossPhase(e)
        if (ph !== lastPhase) {
            lastPhase = ph
            idx = 0
            await phaseShift(e)
        }
        const list = sets[Math.min(ph, sets.length) - 1]
        const attack = list[idx++ % list.length]
        await attack(e, ph)
        await bossWait(e, Math.max(0.2, recovery(ph) / rageFactor(e)))
        if (repos) {
            safePlay(e, repos.anim, true)
            await moveBoss(e, repos.to(), 0.8 / rageFactor(e))
            safePlay(e, "idle", true)
        }
    }
}

async function phaseShift(e) { // roar + escapable ring on every phase change
    play("flamethrower")
    shake(14)
    radialBurst(e.pos.x, e.pos.y, 18, 340, { gapAt: aimAt(e.pos.x, e.pos.y, 0), gapWidth: 50 })
    await bossWait(e, 1.0)
}

// ======================= LADRO (flying) =======================
async function ladroCarpet(e, ph) {
    const dir = Math.random() < 0.5 ? 1 : -1
    const startX = dir > 0 ? 100 : width() - 100
    const endX = dir > 0 ? width() - 100 : 100
    await moveBoss(e, vec2(startX, LADRO_Y), 0.6 / rageFactor(e))

    const gapX = rnd(350, width() - 350)
    telegraphBox(gapX, 640, 220, 700, 0.9, [90, 255, 130]) // the safe pocket
    play("beep")
    await bossWait(e, 0.8)

    let lastDrop = -999
    const dropper = onUpdate(() => {
        if (!e.exists()) return
        if (Math.abs(e.pos.x - lastDrop) >= 115) {
            lastDrop = e.pos.x
            if (Math.abs(e.pos.x - gapX) > 190) {
                fireBolt({ spr: "ladroDropping", x: e.pos.x, y: e.pos.y + 40, angle: 90, speed: 560 + ph * 80, dmg: DMG.bolt, scale: 8, r: 34, life: 3 })
            }
        }
    })
    try { await moveBoss(e, vec2(endX, LADRO_Y), 1.5 / rageFactor(e), easings.linear) }
    finally { dropper.cancel() }

    if (ph >= 2) { // aimed fan from where he ends up
        const a = aimAt(e.pos.x, e.pos.y, 0.3)
        for (let k = -2; k <= 2; k++) {
            fireBolt({ spr: "ladroDropping", x: e.pos.x, y: e.pos.y, angle: a + k * 12, speed: 600, dmg: DMG.bolt, scale: 8, r: 34, life: 3 })
        }
    }
}

async function ladroDive(e, ph) {
    for (let i = 0; i < ph; i++) {
        const above = leadPoint(0)
        await moveBoss(e, vec2(above.x, LADRO_Y), 0.4 / rageFactor(e))
        const t = leadPoint(0.25)
        telegraphLine(e.pos.x, e.pos.y, t.x, t.y, 120, 0.55 / rageFactor(e))
        play("beep")
        await bossWait(e, 0.55 / rageFactor(e))

        let hit = false
        const chk = onUpdate(() => {
            if (!hit && e.exists() && playerInCircle(e.pos.x, e.pos.y, 85)) hit = hurtPlayer(DMG.melee)
        })
        try { await moveBoss(e, vec2(t.x, t.y), 0.26, easings.easeInExpo) }
        finally { chk.cancel() }

        shake(10)
        play("enemyPunch3")
        explosionFx(t.x, t.y, 150)
        if (ph >= 2) radialBurst(t.x, t.y, 10, 380, { r: 30, gapAt: aimAt(t.x, t.y, 0), gapWidth: 55 })
        await bossWait(e, 0.35)
    }
    await moveBoss(e, vec2(width() / 2, LADRO_Y), 0.6)
}

async function ladroRain(e, ph) {
    await moveBoss(e, vec2(width() / 2, LADRO_Y), 0.5)
    const n = 5 + ph * 2
    for (let i = 0; i < n; i++) {
        const t = leadPoint(0.2)
        const side = i % 2 === 0 ? 1 : -1
        const x = clampN(t.x + side * rnd(40, 260), ARENA.minX, ARENA.maxX)
        const y = clampN(t.y + rnd(-60, 60), ARENA.minY, ARENA.maxY)
        groundStrike(x, y, 120, DMG.strike, 0.85 / rageFactor(e)) // fire-and-forget
        await bossWait(e, 0.32 / rageFactor(e))
    }
    await bossWait(e, 0.9)
}

// ======================= GRIGORY (gunslinger) =======================
async function gSnipeVolley(e, ph) {
    const side = Math.random() < 0.5 ? ARENA.minX + 40 : ARENA.maxX - 40
    safePlay(e, "walking", true)
    await moveBoss(e, vec2(side, rnd(560, 720)), 0.5 / rageFactor(e))
    for (let i = 0; i < 2 + ph; i++) {
        safePlay(e, "loading", true)
        play("reload")
        const a = aimAt(e.pos.x, e.pos.y, 0.35)
        const rad = a / RAD2DEG
        telegraphLine(e.pos.x, e.pos.y, e.pos.x + Math.cos(rad) * 1900, e.pos.y + Math.sin(rad) * 1900, 14, 0.45)
        await bossWait(e, 0.45 / rageFactor(e))
        safePlay(e, "shoot", true)
        play("shoot")
        const n = 3 + ph
        for (let k = 0; k < n; k++) {
            fireBolt({ spr: "bullet", x: e.pos.x, y: e.pos.y + 10, angle: a + (k - (n - 1) / 2) * 9, speed: 950, dmg: DMG.bolt, scale: 3, r: 20, life: 3 })
        }
        await bossWait(e, 0.25)
    }
    safePlay(e, "idle", true)
}

async function gCrossfire(e, ph) {
    safePlay(e, "loading", true)
    play("reload")
    const waves = ph >= 3 ? 3 : 2
    for (let w = 0; w < waves; w++) {
        const safe = getRandomNumber(0, LANES.length - 1)
        LANES.forEach((ly, i) => {
            telegraphBox(width() / 2, ly, width(), LANE_H, 0.85, i === safe ? [90, 255, 130] : [255, 60, 40])
        })
        play("beep")
        await bossWait(e, 0.85 / rageFactor(e))
        safePlay(e, "shoot", true)
        play("shoot")
        LANES.forEach((ly, i) => {
            if (i === safe) return
            const fromLeft = (i + w) % 2 === 0
            fireBolt({ spr: "bullet", x: fromLeft ? -60 : width() + 60, y: ly, angle: fromLeft ? 0 : 180, speed: 1100, dmg: DMG.heavy, scale: 3, box: [30, 5], life: 3 })
        })
        await bossWait(e, 0.55)
    }
    safePlay(e, "idle", true)
}

async function gCharge(e, ph) {
    const dashes = ph >= 3 ? 2 : 1
    for (let i = 0; i < dashes; i++) {
        const t = leadPoint(0.3)
        telegraphLine(e.pos.x, e.pos.y, t.x, t.y, 100, 0.6)
        safePlay(e, "walking", true)
        play("beep")
        await bossWait(e, 0.6 / rageFactor(e))

        let hit = false
        const chk = onUpdate(() => {
            if (!hit && e.exists() && playerInCircle(e.pos.x, e.pos.y, 80)) hit = hurtPlayer(DMG.melee)
        })
        try { await moveBoss(e, vec2(t.x, t.y), 0.4 / rageFactor(e), easings.easeInExpo) }
        finally { chk.cancel() }

        safePlay(e, "shoot", true)
        play("shoot")
        const a = aimAt(e.pos.x, e.pos.y, 0)
        for (let k = -2; k <= 2; k++) {
            fireBolt({ spr: "bullet", x: e.pos.x, y: e.pos.y, angle: a + k * 11, speed: 900, dmg: DMG.bolt, scale: 3, r: 20, life: 3 })
        }
        radialBurst(e.pos.x, e.pos.y, ph >= 2 ? 12 : 8, 520, { spr: "bullet", scale: 3, r: 20, gapAt: a, gapWidth: 60 })
        await bossWait(e, 0.4)
    }
    safePlay(e, "idle", true)
}

async function gBarrage(e, ph) {
    await moveBoss(e, vec2(width() / 2 + rnd(-300, 300), 600), 0.5)
    safePlay(e, "loading", true)
    play("reload")
    await bossWait(e, 0.6)
    for (let i = 0; i < 16; i++) {
        const a = aimAt(e.pos.x, e.pos.y, 0.25) + Math.sin(i * 0.9) * 28
        play("shoot", { volume: 0.4 })
        safePlay(e, "shoot", true)
        fireBolt({ spr: "bullet", x: e.pos.x, y: e.pos.y + 10, angle: a, speed: 850, dmg: DMG.bolt, scale: 3, r: 20, life: 3 })
        await bossWait(e, 0.13 / rageFactor(e))
    }
    safePlay(e, "idle", true)
}

// ======================= HODSON (office terror) =======================
async function hStapleFan(e, ph) {
    safePlay(e, "stapler", true)
    for (let v = 0; v < 2 + ph; v++) {
        const a = aimAt(e.pos.x, e.pos.y, 0.3)
        play("reload")
        const n = 3 + ph
        for (let k = 0; k < n; k++) {
            fireBolt({ spr: "staple", x: e.pos.x, y: e.pos.y, angle: a + (k - (n - 1) / 2) * 12, speed: 780, dmg: DMG.bolt, scale: 5, r: 28, life: 3 })
        }
        await bossWait(e, 0.55 / rageFactor(e))
    }
    safePlay(e, "idle", true)
}

async function hAxeCombo(e, ph) {
    const swings = ph + 1
    for (let i = 0; i < swings; i++) {
        const t = leadPoint(0.25)
        const windup = 0.6 / rageFactor(e)
        telegraphCircle(t.x, t.y, 230, windup)
        safePlay(e, "walking", true)
        play("beep")
        await moveBoss(e, vec2(t.x, t.y), windup, easings.easeInOutCubic)
        safePlay(e, "cross", true)
        play("axe")
        shake(8)
        explosionFx(e.pos.x, e.pos.y, 230, [220, 220, 255])
        if (playerInCircle(e.pos.x, e.pos.y, 230)) hurtPlayer(DMG.melee)
        if (ph >= 2) radialBurst(e.pos.x, e.pos.y, 8, 450, { spr: "staple", scale: 4, r: 26, gapAt: aimAt(e.pos.x, e.pos.y, 0), gapWidth: 60 })
        await bossWait(e, (ph >= 3 && i === swings - 2) ? 0.9 : 0.3) // phase 3: delayed fake-out swing
    }
    safePlay(e, "idle", true)
}

async function hStapleRain(e, ph) {
    safePlay(e, "stapler", true)
    const n = 6 + ph * 2
    for (let i = 0; i < n; i++) {
        const aimed = i % 3 === 0
        const t = leadPoint(aimed ? 0.4 : 0)
        const x = aimed ? t.x : clampN(t.x + rnd(-380, 380), ARENA.minX, ARENA.maxX)
        const y = aimed ? t.y : clampN(t.y + rnd(-100, 100), ARENA.minY, ARENA.maxY)
        groundStrike(x, y, 105, DMG.strike, 0.8 / rageFactor(e))
        await bossWait(e, 0.2 / rageFactor(e))
    }
    await bossWait(e, 0.8)
    safePlay(e, "idle", true)
}

async function hBoomerang(e, ph) {
    safePlay(e, "stapler", true)
    play("reload")
    for (let i = 0; i < 2; i++) {
        const a = aimAt(e.pos.x, e.pos.y, 0.2) + (i === 0 ? -14 : 14)
        fireBolt({ spr: "staple", x: e.pos.x, y: e.pos.y, angle: a, speed: 900, dmg: DMG.heavy, scale: 10, r: 60, life: 3.2, turn: 0.75, pierce: true })
        await bossWait(e, 0.5)
    }
    await bossWait(e, 1.6)
    safePlay(e, "idle", true)
}

// ======================= VENUS (solar sweeps) =======================
async function vSweep(e, ph) {
    let dir = Math.random() < 0.5 ? 1 : -1
    for (let i = 0; i < ph + 1; i++) {
        const p = get("player")[0]
        const py = p ? p.pos.y : 630
        const lane = LANES.reduce((best, ly) => Math.abs(ly - py) < Math.abs(best - py) ? ly : best, LANES[0])
        telegraphBox(width() / 2, lane, width(), LANE_H, 0.75, [255, 60, 40])
        play("beep")
        e.flipX = dir < 0
        await moveBoss(e, vec2(dir > 0 ? -260 : width() + 260, lane), 0.3)
        await bossWait(e, 0.45 / rageFactor(e))

        let hit = false
        let last = e.pos.x
        const chk = onUpdate(() => {
            if (!hit && e.exists() && playerInBox(e.pos.x, e.pos.y, 120, 5)) hit = hurtPlayer(DMG.melee)
        })
        const emit = onUpdate(() => { // phase 2+: sparse vertical fire trails
            if (!e.exists() || ph < 2) return
            if (Math.abs(e.pos.x - last) >= 360) {
                last = e.pos.x
                fireBolt({ spr: "fireProj", x: e.pos.x, y: e.pos.y, angle: 90, speed: 330, dmg: DMG.bolt, scale: 4, r: 26, life: 3 })
                fireBolt({ spr: "fireProj", x: e.pos.x, y: e.pos.y, angle: -90, speed: 330, dmg: DMG.bolt, scale: 4, r: 26, life: 3 })
            }
        })
        play("fireLong")
        try { await moveBoss(e, vec2(dir > 0 ? width() + 260 : -260, lane), 1.05 / rageFactor(e), easings.linear) }
        finally { chk.cancel(); emit.cancel() }
        dir = -dir
    }
}

async function vSpiral(e, ph) {
    await moveBoss(e, vec2(width() / 2, 560), 0.7)
    play("flamethrower")
    const arms = ph + 1
    const duration = 2.6
    const interval = 0.075
    let angle = rnd(0, 360)
    const spin = Math.random() < 0.5 ? 1 : -1
    for (let t = 0; t < duration; t += interval) {
        for (let a = 0; a < arms; a++) {
            fireBolt({ spr: "fireProj", x: e.pos.x, y: e.pos.y, angle: angle + (360 / arms) * a, speed: 400, dmg: DMG.bolt, scale: 4, r: 30, life: 5 })
        }
        angle += 17 * spin * ((t > duration / 2 && ph >= 3) ? -1 : 1)
        await bossWait(e, interval)
    }
    await bossWait(e, 0.6)
}

async function vOrbs(e, ph) {
    await moveBoss(e, vec2(rnd(500, 1400), rnd(520, 640)), 0.6)
    play("fireShort")
    for (let i = 0; i < 2 + ph; i++) {
        fireBolt({ spr: "fireProj", x: e.pos.x, y: e.pos.y, angle: rnd(0, 360), speed: 300, dmg: DMG.heavy, scale: 6, r: 44, life: 6, homing: 75, homingTime: 3.5 })
        await bossWait(e, 0.35)
    }
    await bossWait(e, 1.5)
}

// ======================= FIGHTY MAN (final boss) =======================
async function fWallRun(e, ph) {
    safePlay(e, "summon", true)
    for (let w = 0; w < ph + 1; w++) {
        const safe = getRandomNumber(0, LANES.length - 1)
        LANES.forEach((ly, i) => {
            telegraphBox(width() / 2, ly, width(), LANE_H, 0.9, i === safe ? [90, 255, 130] : [255, 90, 20])
        })
        play("beep")
        await bossWait(e, 0.9 / rageFactor(e))
        play("fireLong")
        LANES.forEach((ly, i) => {
            if (i === safe) return
            const fromRight = (i + w) % 2 === 0
            fireBolt({ spr: "firebar", anim: "idle", x: fromRight ? width() + 120 : -120, y: ly, angle: fromRight ? 180 : 0, speed: 850, dmg: DMG.heavy, scale: 5, box: [75, 5], life: 4, pierce: true })
        })
        await bossWait(e, 0.8)
    }
    safePlay(e, "idle", true)
}

async function fRingBurst(e, ph) {
    safePlay(e, "fireProj", true)
    const baseGap = aimAt(e.pos.x, e.pos.y, 0.2)
    for (let i = 0; i < ph + 2; i++) {
        play("fireShort")
        radialBurst(e.pos.x, e.pos.y, 20, 360, { offset: i * 9, gapAt: baseGap + i * 40, gapWidth: 38 })
        await bossWait(e, 0.6 / rageFactor(e))
    }
    safePlay(e, "idle", true)
}

async function fPunchChain(e, ph) {
    for (let i = 0; i < ph + 1; i++) {
        const t = leadPoint(0.25)
        const windup = 0.55 / rageFactor(e)
        telegraphCircle(t.x, t.y, 200, windup, [255, 90, 20])
        safePlay(e, "walking", true)
        play("fireShort")
        await moveBoss(e, vec2(t.x, t.y), windup, easings.easeInOutCubic)
        safePlay(e, "flarePunch", true)
        play("flamethrower")
        shake(10)
        explosionFx(e.pos.x, e.pos.y, 200)
        if (playerInCircle(e.pos.x, e.pos.y, 200)) hurtPlayer(DMG.melee)
        if (ph >= 2) radialBurst(e.pos.x, e.pos.y, 10, 420, { r: 30, gapAt: aimAt(e.pos.x, e.pos.y, 0), gapWidth: 45 })
        await bossWait(e, 0.25)
    }
    safePlay(e, "idle", true)
}

async function fMeteors(e, ph) {
    safePlay(e, "summon", true)
    play("fireLong")
    for (let i = 0; i < 8 + ph * 3; i++) {
        const aimed = i % 3 === 0
        const t = leadPoint(aimed ? 0.45 : 0)
        const x = aimed ? t.x : clampN(t.x + rnd(-450, 450), ARENA.minX, ARENA.maxX)
        const y = aimed ? t.y : clampN(t.y + rnd(-110, 110), ARENA.minY, ARENA.maxY)
        groundStrike(x, y, 140, DMG.strike, 1.0 / rageFactor(e))
        await bossWait(e, 0.22 / rageFactor(e))
    }
    await bossWait(e, 1.0)
    safePlay(e, "idle", true)
}

async function fSpiral(e, ph) {
    await moveBoss(e, vec2(width() / 2, 600), 0.8)
    safePlay(e, "flamethrower", true)
    play("flamethrower")
    const arms = ph >= 3 ? 3 : 2
    let angle = rnd(0, 360)
    for (let t = 0; t < 3.0; t += 0.08) {
        for (let a = 0; a < arms; a++) {
            fireBolt({ spr: "fireProj", x: e.pos.x, y: e.pos.y, angle: angle + (360 / arms) * a, speed: 380, dmg: DMG.bolt, scale: 4, r: 30, life: 5 })
        }
        angle += t < 1.5 ? 14 : -14
        await bossWait(e, 0.08)
    }
    await bossWait(e, 0.7)
    safePlay(e, "idle", true)
}

async function fInferno(e, ph) { // phase 3: get out of the blast
    const t = leadPoint(0.3)
    telegraphCircle(t.x, t.y, 330, 1.0, [255, 90, 20])
    safePlay(e, "walking", true)
    play("flamethrower")
    await moveBoss(e, vec2(t.x, t.y), 0.7)
    safePlay(e, "fireShield", true)
    await bossWait(e, 0.3)
    shake(16)
    explosionFx(e.pos.x, e.pos.y, 330)
    if (playerInCircle(e.pos.x, e.pos.y, 330)) hurtPlayer(DMG.melee + 10)
    radialBurst(e.pos.x, e.pos.y, 24, 520, { offset: rnd(0, 360), gapAt: rnd(0, 360), gapWidth: 40 })
    await bossWait(e, 0.6)
    safePlay(e, "idle", true)
}

// ======================= DJINN (chaos caster) =======================
async function dTeleportBarrage(e, ph) {
    const p = get("player")[0]
    if (!p) return
    const side = p.pos.x < width() / 2 ? 1 : -1
    const dx = clampN(p.pos.x + side * rnd(300, 480), ARENA.minX, ARENA.maxX)
    const dy = clampN(p.pos.y + rnd(-60, 60), ARENA.minY, ARENA.maxY)
    telegraphCircle(dx, dy, 150, 0.7, [190, 90, 255])
    safePlay(e, "tpStart", true)
    play("beep")
    await bossWait(e, 0.7 / rageFactor(e))
    e.pos = vec2(dx, dy)
    safePlay(e, "tpEnd", true)
    play("fireShort")
    if (playerInCircle(dx, dy, 150)) hurtPlayer(DMG.melee)
    const a = aimAt(e.pos.x, e.pos.y, 0.25)
    radialBurst(e.pos.x, e.pos.y, 14, 380, { spr: "chaosBall", anim: "idle", scale: 5, r: 30, gapAt: a, gapWidth: 50 })
    for (let k = -1; k <= 1; k++) {
        fireBolt({ spr: "chaosBall", anim: "idle", x: e.pos.x, y: e.pos.y, angle: a + k * 18, speed: 520, dmg: DMG.heavy, scale: 6, r: 38, life: 5 })
    }
    await bossWait(e, 0.7)
    safePlay(e, "idle", true)
}

async function dLightningGrid(e, ph) {
    safePlay(e, "lightning", true)
    const xs = []
    for (let x = ARENA.minX; x <= ARENA.maxX; x += 2 * (STRIP_HW + PHW)) xs.push(x) // strips tile with no gaps
    const safe = getRandomNumber(1, xs.length - 2) // one strip is skipped = the escape route
    const leftToRight = Math.random() < 0.5
    const speedUp = Math.min(1.3, rageFactor(e))
    play("beep")
    xs.forEach((x, i) => {
        if (i === safe) return
        let delay = 1.0                                                  // phase 1: all at once
        if (ph === 2) delay = 0.9 + (leftToRight ? i : xs.length - i) * 0.1 // phase 2: sweeping wave
        if (ph >= 3) delay = (i % 2 === 0) ? 0.9 : 1.6                   // phase 3: two alternating waves
        lightningStrip(x, delay / speedUp)
    })
    await bossWait(e, 2.4)
    safePlay(e, "idle", true)
}

async function dChaosSpiral(e, ph) {
    const spots = [vec2(480, 560), vec2(1440, 560), vec2(960, 700)]
    for (const spot of spots) {
        safePlay(e, "tpStart", true)
        await moveBoss(e, spot, 0.35)
        safePlay(e, "chaosBall", true)
        play("fireShort")
        const baseGap = aimAt(e.pos.x, e.pos.y, 0.2)
        for (let r = 0; r < 3 + ph; r++) {
            radialBurst(e.pos.x, e.pos.y, 14, 340, { spr: "chaosBall", anim: "idle", scale: 5, r: 30, offset: r * 13, gapAt: baseGap + r * 50, gapWidth: 60 })
            await bossWait(e, 0.4 / rageFactor(e))
        }
    }
    safePlay(e, "idle", true)
}

async function dOrbs(e, ph) {
    await moveBoss(e, vec2(rnd(600, 1300), rnd(520, 660)), 0.5)
    safePlay(e, "chaosBall", true)
    play("fireShort")
    for (let i = 0; i < 2 + ph; i++) {
        fireBolt({ spr: "chaosBall", anim: "idle", x: e.pos.x, y: e.pos.y, angle: rnd(0, 360), speed: 280, dmg: DMG.heavy, scale: 7, r: 46, life: 6.5, homing: 85, homingTime: 4 })
        await bossWait(e, 0.4)
    }
    await bossWait(e, 1.6)
    safePlay(e, "idle", true)
}

async function dSuperPunch(e, ph) {
    for (let i = 0; i < (ph >= 3 ? 2 : 1); i++) {
        const t = leadPoint(0.3)
        const windup = 0.8 / rageFactor(e)
        telegraphCircle(t.x, t.y, 190, windup, [190, 90, 255])
        safePlay(e, "tpStart", true)
        play("beep")
        await bossWait(e, windup)
        e.pos = vec2(t.x, t.y)
        safePlay(e, "superPunch", true)
        play("flamethrower")
        shake(14)
        explosionFx(t.x, t.y, 190, [190, 120, 255])
        if (playerInCircle(t.x, t.y, 190)) hurtPlayer(DMG.melee + 6)
        radialBurst(t.x, t.y, 14, 430, { spr: "chaosBall", anim: "idle", scale: 5, r: 30, gapAt: aimAt(t.x, t.y, 0.2) + 90, gapWidth: 50 })
        await bossWait(e, 0.5)
    }
    safePlay(e, "idle", true)
}

// ======================= ROUTINE TABLE =======================
const groundRepos = () => vec2(rnd(450, 1450), rnd(560, 720))

const INFERNUM_ROUTINES = {
    ladro: async (e) => {
        await moveBoss(e, vec2(width() / 2, LADRO_Y), 0.8)
        await bossLoop(e, [
            [ladroCarpet, ladroDive],
            [ladroCarpet, ladroDive, ladroRain],
            [ladroRain, ladroDive, ladroCarpet, ladroDive],
        ], (ph) => 1.0 - 0.25 * (ph - 1))
    },
    grigory: async (e) => {
        await moveBoss(e, vec2(1650, 640), 1.0)
        await bossLoop(e, [
            [gSnipeVolley, gCharge],
            [gSnipeVolley, gCrossfire, gCharge],
            [gCrossfire, gBarrage, gCharge, gSnipeVolley],
        ], (ph) => 0.9 - 0.2 * (ph - 1))
    },
    hodson: async (e) => {
        await moveBoss(e, vec2(1450, 640), 1.0)
        await bossLoop(e, [
            [hStapleFan, hAxeCombo],
            [hStapleFan, hAxeCombo, hStapleRain],
            [hAxeCombo, hBoomerang, hStapleRain, hStapleFan],
        ], (ph) => 0.9 - 0.2 * (ph - 1), { anim: "walking", to: groundRepos })
    },
    venus: async (e) => {
        await moveBoss(e, vec2(1500, 560), 1.0)
        await bossLoop(e, [
            [vSweep, vOrbs],
            [vSweep, vSpiral, vOrbs],
            [vSweep, vSpiral, vSweep, vOrbs],
        ], (ph) => 0.9 - 0.2 * (ph - 1))
    },
    fightyMan: async (e) => {
        await moveBoss(e, vec2(1300, 640), 1.0)
        await bossLoop(e, [
            [fWallRun, fPunchChain, fRingBurst],
            [fPunchChain, fWallRun, fMeteors, fRingBurst, fSpiral],
            [fInferno, fWallRun, fPunchChain, fMeteors, fSpiral, fRingBurst],
        ], (ph) => 0.8 - 0.2 * (ph - 1), { anim: "walking", to: groundRepos })
    },
    djinn: async (e) => {
        await moveBoss(e, vec2(1300, 620), 1.0)
        await bossLoop(e, [
            [dTeleportBarrage, dLightningGrid, dOrbs],
            [dTeleportBarrage, dLightningGrid, dChaosSpiral, dSuperPunch],
            [dSuperPunch, dLightningGrid, dChaosSpiral, dOrbs, dTeleportBarrage],
        ], (ph) => 0.9 - 0.2 * (ph - 1))
    },
}

// Called once per boss from the enemy AI loop (see EDITS.md, edit 2b).
function startInfernumAI(e) {
    if (e.infernumStarted) return
    e.infernumStarted = true
    ignoreEnemyCollisions(e)
    const p = get("player")[0]
    if (p) ensureVelTracker(p)
    const routine = INFERNUM_ROUTINES[e.attackType]
    if (!routine) return
    routine(e)
        .catch((err) => { if (err !== BOSS_DONE) console.error("[Infernum]", e.attackType, err) })
        .finally(() => { if (e.dead || game_over) destroyAll("infernumBolt") })
}



scene("stage_one", async (playerTag) => { // Opens up a new scene for level one of the game
    currentRound = 1
    await levelInit(playerTag, "Stage One", "stage_one", ["round1Background", "stage_one_pier_bg"])
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
        { name: "wait", time: 2 },
        { name: "ladro", yPos: 90 },
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

scene("stage_two", async (playerTag, arcade = true) => {
    currentRound = 2
    const bg1 = add([
        sprite("stage_two_bg"),
        pos(0, 0),
        scale(10),
        z(-12),
        ("bg"),
    ]);
    const bg2 = add([
        sprite("stage_two_bg2"),
        pos(1920, 0),
        scale(10),
        z(-12),
        ("bg")
    ]);
    const bg3 = add([
        sprite("stage_two_bg3"),
        pos(4040, 0),
        scale(10),
        z(-12),
        ("bg")
    ]);

    await levelInit(playerTag, "Stage Two", "stage_two", [])
    player = get("player")[0]


    if (arcade === false) {
        arcadeAccess = false
    }
    else {
        arcadeAccess = true
    }
    const funRoom = onUpdate(async () => {
        if (player.z < -12) {
            playerControlEvents.keyDown.forEach(keyDownEvent => keyDownEvent.cancel()) // Stops the player from moving
            playerControlEvents.keyUp.forEach(keyUpEvent => keyUpEvent.cancel()) // Stops the player from moving
            const interval = 0.1; // time interval between each volume change
            let vol = 1; // initial volume
            await funRoom.cancel()
            toggleDarkOverlay(false, true)
            for (let i = 0; i < 11; i++) {
                if (vol > 0) {
                    vol -= 0.1; // decrease volume by 0.1
                    volume(vol); // set the new volume
                    await wait(interval)

                }
            }
            volume(0)
            await wait(1)
            volume(1)
            clearInterval(oldManSpawn)
            funRoom.cancel()
            go("arcade", playerTag)


        }
    })


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

    arcadeAccess = false
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

scene("arcade", async (playerTag) => {
    let background1 = add([
        sprite("deliveryManBackground"),
        pos(192, 54),
        scale(8),
        fixed(),
        z(-100)
    ])
    let background2 = add([
        sprite("arcade"),
        pos(192, 54),
        scale(8),
        fixed(),
        z(10)
    ])
    add([
        sprite("dark"),
        pos(-3000, 0),
        scale(5),
        fixed(),
        z(-7)
    ])
    add([
        sprite("dark"),
        pos(1500, 0),
        scale(5),
        fixed(),
        z(-7)
    ])
    add([
        sprite("dark"),
        pos(100, -4400),
        scale(5),
        fixed(),
        z(-7)
    ])
    add([
        sprite("dark"),
        pos(100, 900),
        scale(5),
        fixed(),
        z(-7)
    ])
    stopMusic(currentSong)
    await wait(1.5)


    oldManSpawn = setInterval(async () => {
        const oldManDirection = chance(0.5) == 0 ? "left" : "right"
        lanes = [300, 500, 700]
        const oldMan = add([
            sprite("old_man"),  // Renders as a sprite
            pos((oldManDirection == "right" ? -width() - 100 : width() + 100), lanes[getRandomNumber(0, 2)]),
            outline(4, rgb(0, 0, 0)),
            health(30),
            scale(3),
            z(-8),
            "oldManHitbox"
        ])
        oldManHitbox = oldMan.add([
            rect(10, 20),
            pos(15, 25),
            area({ collisionIgnore: ["oldManHitbox"] }), // Stops the player hurting themselves
            anchor("center"),
            opacity(0),
            "oldManHitbox"
        ])

        if (oldManDirection == "left") oldMan.flipX = true
        let oldManSpeed = getRandomNumber(1, 20)
        if (oldManSpeed < 5) {
            play("wheels")
        }
        await tween(
            oldMan.pos,
            vec2((oldManDirection == "left" ? -width() - 100 : width() + 100), oldMan.pos.y),
            oldManSpeed,
            (pos) => oldMan.pos = pos,
            easings.linear
        )
        oldMan.destroy()
        oldManHitbox.destroy()
    }, 150)

    currentSong = play("arcade", { loop: true, volume: 0.5 })
    play("beep")
    goalText = add([
        text(`Deliver the pizza!`, { align: "center", size: 22.5 }),
        color(255, 255, 255),
        pos(width() / 2, (height() / 2) + 350),
        anchor("center"),
        z(4),
    ])
    await wait(1.5)
    const deliveryManPlayer = add([
        sprite("deliveryMan"),  // Renders as a sprite
        pos(vec2(600, (height() / 2) + 300)),
        outline(4, rgb(0, 0, 0)),
        health(1),
        scale(8),
        z(5)
    ])
    playerHitbox = deliveryManPlayer.add([
        rect(2, 2),
        pos(6.5, 12),
        area({ collisionIgnore: ["deliveryMan"] }), // Stops the player hurting themselves
        anchor("center"),
        opacity(0),
        "deliveryMan"
    ])


    onCollideUpdate("oldManHitbox", "deliveryMan", () => {
        hitByMan()
    });
    const victoryCheck = onUpdate(async () => {

        if (deliveryManPlayer.worldPos().x > 1100 && deliveryManPlayer.worldPos().y < 210) {
            victoryCheck.cancel()
            deliveryManVictory()
        }
    })

    async function deliveryManVictory() {
        await clearInterval(oldManSpawn)
        await get("oldManHitbox").forEach((obj) => {
            destroy(obj);
        })
        destroy(goalText)
        deliveryManPlayer.play("idle")
        playerControlEnabled = false
        stopMusic(currentSong)
        await wait(2)
        failText = add([
            text(`You delivered the pizza!`, { align: "center", size: 22.5 }),
            color(255, 255, 255),
            pos(width() / 2, (height() / 2) + 350),
            anchor("center"),
            z(4),
        ])
        play("beep")
        toggleDarkOverlay(false, true)
        await wait(3)
        go("stage_three", playerTag)
    }

    async function hitByMan() {
        await clearInterval(oldManSpawn)
        await get("oldManHitbox").forEach((obj) => {
            destroy(obj);
        })
        destroy(goalText)
        destroy(background1)
        deliveryManPlayer.play("idle")
        playerControlEnabled = false
        stopMusic(currentSong)
        add([
            sprite("dark"),
            pos(0, 0),
            scale(10),
            fixed(),
            z(-100)
        ])
        await wait(2)
        failText = add([
            text(`You were hit by an old man.`, { align: "center", size: 22.5 }),
            color(255, 255, 255),
            pos(width() / 2, (height() / 2) + 350),
            anchor("center"),
            z(4),
        ])
        play("knocked_down")
        toggleDarkOverlay(false, true)
        await wait(3)
        go("stage_two", playerTag, false)
    }

    playerControlEvents.keyDown.push(onKeyDown("left", () => {
        if (!playerControlEnabled) return
        if ((isKeyDown("left") && isKeyDown("right"))) return
        if (deliveryManPlayer.worldPos().x < 540) return // Stops player from moving offscreen
        deliveryManPlayer.move(-150, 0)
    }))
    playerControlEvents.keyDown.push(onKeyDown("right", () => {
        if (!playerControlEnabled) return
        if ((isKeyDown("left") && isKeyDown("right"))) return
        if (deliveryManPlayer.worldPos().x > 1270) return // Stops player from moving offscreen
        deliveryManPlayer.move(150, 0)
    }))
    playerControlEvents.keyDown.push(onKeyDown("up", () => {
        if (!playerControlEnabled) return
        if ((isKeyDown("up") && isKeyDown("down"))) return
        if (deliveryManPlayer.worldPos().y < 200) return // Stops player from moving offscreen
        deliveryManPlayer.move(0, -150)
    }))
    playerControlEvents.keyDown.push(onKeyDown("down", () => {
        if (!playerControlEnabled) return
        if ((isKeyDown("up") && isKeyDown("down"))) return
        if (deliveryManPlayer.worldPos().y > 780) return // Stops player from moving offscreen
        deliveryManPlayer.move(0, 150)
    }))

    deliveryManPlayer.play("walking")
})





scene("deliveryManFail", async (playerTag) => {
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
        text(`You were hit by an old man.`, { align: "center", size: 22.5 }),
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
    await wait(3)
    await levelComplete()
    go("stage_two", playerTag)



})


scene("stage_three", async (playerTag) => {
    currentRound = 3
    await levelInit(playerTag, "Stage Three", "stage_three", ["stage_three_bg"])



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
    currentRound = 4
    const bg1 = add([
        sprite("stage_four_1"),
        pos(0, 0),
        scale(10),
        z(-1),
        ("bg"),
    ]);
    const bg2 = add([
        sprite("stage_four_2"),
        pos(1920, 0),
        scale(10),
        z(-1),
        ("bg")
    ]);

    await levelInit(playerTag, "Stage Four", "stage_four", [])




    onKeyPress("p", () => {
        clearInterval(oldManSpawn)
        go("stage_four_elevator", playerTag)
    })

    await spawnWave([
        { name: "wait", time: 3 },
        { name: "gary", yPos: 50 },
        { name: "gary", yPos: 100 },
        { name: "wait", time: 1 },
        { name: "joseph", yPos: 180 },
        { name: "wait", time: 7 },
        { name: "andrew", yPos: 50 },
        { name: "wait", time: 1 },
        { name: "gary", yPos: 150 },
        { name: "gary", yPos: 200 },
        { name: "wait", time: 7 },
        { name: "david", yPos: 25 },
        { name: "gary", yPos: 90 },
        { name: "david", yPos: 125 },
        { name: "david", yPos: 75 },
        { name: "wait", time: 1 },
        { name: "david", yPos: 150 },
        { name: "david", yPos: 275 },
        { name: "wait", time: 10 },
        { name: "joseph", yPos: 10 },
        { name: "joseph", yPos: 40 },
        { name: "wait", time: 1 },
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
        { name: "wait", time: 1 },
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

            const roundEnd = onUpdate(async () => {
                if (!get("enemy").length) {
                    roundEnd.cancel()
                    await toggleDarkOverlay(false, true)
                    await wait(1)
                    go("stage_four_elevator", playerTag)
                }
            })
        }
    })






})

scene("stage_four_elevator", async (playerTag) => {
    currentRound = 4.5
    await levelInit(playerTag, "Stage Four Elevator", "stage_four_elevator", ["stage_four_bg"])
    toggleDarkOverlay(false, true)


    const weightSign = add([
        sprite("weightLimitSprite"),
        pos(1200, 80),
        scale(5),
        fixed(),
        z(-101),
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
        z(-104),
        { speed: 100 },
    ]);

    const bg2 = add([
        sprite("stage_four_bg2"),
        pos(489, -height()),
        scale(10.5),
        z(-104),
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
        z(-102),
        { speed: 200 },
    ]);

    const side2 = add([
        sprite("stage_four_side"),
        pos(-20, -height()),
        scale(10),
        z(-102),
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
        z(-102),
        { speed: 200 },
    ]);

    const side4 = add([
        sprite("stage_four_side"),
        pos(1420, -height()),
        scale(10),
        z(-102),
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
        enemies = get("enemy")
        let enemyCount = 0;

        for (let i = 0; i < enemies.length; i++) {
            if (!enemies[i].dead) {
                enemyCount++;
            }
        }
        if (enemyCount < 6) {
            weightSign.play(String(enemyCount + 1))
        }
        else {
            if (currentRound === 4.5) {
                weightSign.play("6")
                playerControlEvents.keyDown.forEach(keyDownEvent => keyDownEvent.cancel()) // Stops the player from moving
                playerControlEvents.keyUp.forEach(keyUpEvent => keyUpEvent.cancel()) // Stops the player from moving
                disableEnemyAI(); // Stops the enemy AI from running
                await wait(0.5)
                fallingEntities = get("enemy")
                fallingEntities.push(get("player")[0], stageFourBackgroundEntity, weightSign)
                await fallingEntities.forEach(async fallingEntity => {
                    if (currentRound === 4.5) {
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
                if (currentRound === 4.5) {
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

    await spawnWave([
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "venus", yPos: 90 },
    ], 1)


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
    finalRound = false
    fightyManDead = false
    let bossSpawned = false
    await levelInit(playerTag, "Stage Five", "stage_five_a", ["stage_five_a_bg"])



    onKeyPress("p", () => {
        go("stage_six", playerTag)
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
        if (fightyManDead && bossSpawned === true) {
            roundEnd.cancel()
            stopMusic(currentSong)
            play("FinalBossOutro")
            await wait(15)
            await levelComplete()
            if (gameMode === "main") go("stage_six", playerTag)
            else {
                go("starting_menu")
            }
        }
    })
})

scene("stage_five_b", async (playerTag) => {
    currentRound = 5
    finalRound = true
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
        { name: "djinn", yPos: 90 },
    ], 2); // Spawns are capped at 1 at a time




    const roundEnd = onUpdate(async () => {
        if (!get("enemy").length) {
            roundEnd.cancel()
            await levelComplete()
            go("bad_ending", playerTag)
        }
    })
})


scene("stage_six", async (playerTag) => {
    finalRound = true
    let bossSpawned = false
    let finalBossSpawned = false
    fightyManDead = false
    await levelInit(playerTag, "Stage Six", "stage_six", ["stage_six"])
    currentRound = 6

    onKeyPress("p", () => {
        go("stage_one", playerTag)
    })


    await spawnWave([
        { name: "wait", time: 3 },
        { name: "gary", yPos: 50 },
        { name: "gary", yPos: 100 },
        { name: "joseph", yPos: 180 },
        { name: "wait", time: 7 },
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
        { name: "andrew", yPos: 50 },
        { name: "gary", yPos: 150 },
        { name: "gary", yPos: 200 },
        { name: "wait", time: 7 },
        { name: "david", yPos: 25 },
        { name: "gary", yPos: 90 },
        { name: "david", yPos: 125 },
        { name: "wait", time: 7 },
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
        { name: "david", yPos: 75 },
        { name: "david", yPos: 150 },
        { name: "david", yPos: 275 },


    ], 5); // Spawns are capped at 5 at a time


    const spawnBoss = onUpdate(async () => {
        if (!get("enemy").length) {
            spawnBoss.cancel()
            await spawnWave([
                { name: "fadeout" },
                { name: "wait", time: 2 },
                { name: "djinn", yPos: 90 },
            ], 2)
            bossSpawned = true
        }
    })


    const spawnFinalBoss = onUpdate(async () => {
        if (!get("enemy").length && bossSpawned === true) {
            spawnFinalBoss.cancel()
            await spawnWave([
                { name: "fadeout" },
                { name: "wait", time: 2 },
                { name: "fightyMan", yPos: 90 },
            ], 2)
            finalBossSpawned = true
        }
    })
    console.log(currentRound)

    const roundEnd = onUpdate(async () => {
        if (fightyManDead && finalBossSpawned === true) {
            roundEnd.cancel()
            stopMusic(currentSong)
            play("FinalBossOutro")
            await wait(15)
            await levelComplete()
            go("good_ending", playerTag)
        }
    })
})




















scene("boss_rush", async (playerTag) => {
    current_round = 6
    fightyManPhase2 = false
    stage_background = "stage_five_a_bg"
    difficultyMultiplier = ((currentRound + (4 + difficulty * 2)) / 10)

    await levelInit(playerTag, `Boss-Rush: ${difficultyNames[difficulty]}`, "None", [stage_background])
    await spawnWave([
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "ladro", yPos: 90 },
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "grigory", yPos: 90 },
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "hodson", yPos: 90 },
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "venus", yPos: 90 },
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "fightyMan", yPos: 90 },
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "djinn", yPos: 90 },
        { name: "fadeout" },
        { name: "wait", time: 1 },
        { name: "fightyMan", yPos: 90 },
    ], 1); // Spawns are capped at 1 at a time

    const roundEnd = onUpdate(async () => {
        if (!get("enemy").length) {
            roundEnd.cancel()
            await levelComplete()
            go("good_ending", playerTag)
        }
    })
}




)
scene("character_select", () => { // Opens up a new scene for the character select
    stopMusic(currentSong) // Stops the menu theme
    setCursor("default")

    currentSong = play(gameMode === "boss_rush" ? "Boss_Final_Theme" : "character_select", { loop: true, volume: globalVolume })

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
        beginRun() // sets lives: 3 for main, 1 for stage select / boss rush
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
        beginRun() // sets lives: 3 for main, 1 for stage select / boss rush
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
    await wait(3)
    await levelComplete()
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
    addButton("<", { x: 100, y: 60 }, vec2(width() / 2 - 880, (height() / 2) - 420), () => {
        play("button")
        go("starting_menu")
    })


})
scene("leaderboard", async (data) => {
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
        pos(vec2((width() / 2), (height() / 2) + 180)),
        anchor("center"),
    ])

    let versionText = add([
        text("v0.71.15 @LewisOlley, @WillTDA", { align: "center", size: 16 }),
        color(255, 255, 255),
        pos(250, 940),
        anchor("center"),
    ])
    let controlsText = add([
        text("Arrow Keys - Move\n\nZ - Select/Attack\n\nX - Attack 2\n\n C - Special", { align: "center", size: 16 }),
        color(255, 255, 255),
        pos(1750, 850),
        anchor("center"),
    ])

    fetch('splash.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split(/\r?\n/)
            const randomLine = lines[Math.floor(Math.random() * lines.length)]

            let splashText = add([
                text(randomLine, { align: "center", size: 16 }),
                color(255, 0, 0),
                pos(1500, 90),
                anchor("center"),
            ])
        })
        .catch(err => console.error('Error fetching file:', err))
    stopMusic(currentSong)
    setCursor("default")
    setBackground(255, 255, 255);

    addButton("Main Game", { x: 290, y: 80 }, vec2(width() / 2, (height() / 2) - 50), () => {
        play("button")
        gameMode = "main"
        go("character_select")
    })
    addButton("Boss Rush", { x: 290, y: 80 }, vec2(width() / 2, (height() / 2) + 64), async () => {
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

    addButton("<", { x: 80, y: 80 }, vec2((width() / 2) - 285, (height() / 2) + 180), () => {
        if (difficulty === 0) return play("bad");
        play("beep")
        difficulty--;
        difficultyText.text = difficultyNames[difficulty];
    })

    hiddenButton = addButton("II", { x: 130, y: 130 }, vec2(1475, 180), () => {
        currentSong = play("menu_theme", { loop: true, volume: globalVolume })
        hiddenButton.destroy()
        add([
            text("(", { align: "center", size: 150 }),
            color(255, 255, 255),
            pos(1482, 250),
            anchor("center"),
            rotate(-90),
            scale(1, 1.5)
        ])
    }, 0)

    addButton(">", { x: 80, y: 80 }, vec2((width() / 2) + 285, (height() / 2) + 180), () => {
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

    addButton("Stage Select", { x: 290, y: 80 }, vec2((width() / 2), (height() / 2) + 320), async () => {
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
