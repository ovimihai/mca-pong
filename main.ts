namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    otherSprite.vx = -1 * otherSprite.vx
    if (otherSprite.x < 100) {
        otherSprite.left = sprite.right
        info.changeScoreBy(1)
    } else {
        otherSprite.right = sprite.left
        info.player2.changeScoreBy(1)
    }
})
function create_right_paddle () {
    right_paddle = sprites.create(assets.image`right paddle`, SpriteKind.Player)
    right_paddle.x = 155
    right_paddle.setStayInScreen(true)
    controller.player2.moveSprite(right_paddle, 0, speed)
}
function create_left_paddle () {
    left_paddle = sprites.create(assets.image`left paddle`, SpriteKind.Player)
    left_paddle.x = 5
    left_paddle.setStayInScreen(true)
    controller.moveSprite(left_paddle, 0, speed)
}
function create_ball () {
    ball = sprites.create(assets.image`myImage`, SpriteKind.Ball)
    ball.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
    ball.setStayInScreen(true)
    ball.setBounceOnWall(true)
    ball.vy = 50 * sign._pickRandom()
    ball.vx = 50 * sign._pickRandom()
}
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
let speed = 0
let sign: number[] = []
sign = [-1, 1]
speed = 60
create_left_paddle()
create_right_paddle()
create_ball()
info.startCountdown(40)
