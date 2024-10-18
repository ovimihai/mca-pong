namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
// reverse horizontal speed
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    if (otherSprite.x < 100) {
        otherSprite.left = sprite.right
    } else {
        otherSprite.right = sprite.left
    }
    otherSprite.vx = -1 * otherSprite.vx
})
function create_right_paddle () {
    right_paddle = sprites.create(assets.image`right paddle`, SpriteKind.Player)
    right_paddle.x = 150
    right_paddle.setStayInScreen(true)
    controller.player2.moveSprite(right_paddle, 0, 50)
}
function create_left_paddle () {
    left_paddle = sprites.create(assets.image`left paddle`, SpriteKind.Player)
    left_paddle.x = 10
    left_paddle.setStayInScreen(true)
    controller.moveSprite(left_paddle, 0, 50)
}
function create_ball () {
    ball = sprites.create(assets.image`myImage`, SpriteKind.Ball)
    ball.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
    ball.setStayInScreen(true)
    ball.setBounceOnWall(true)
    ball.setVelocity(50, 50)
}
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
create_left_paddle()
create_right_paddle()
create_ball()
