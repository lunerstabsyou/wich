namespace SpriteKind {
    export const which = SpriteKind.create()
}
let dripa = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
let Candele = sprites.create(assets.image`myImage0`, SpriteKind.Player)
Candele.setPosition(81, 94)
dripa.sayText("What do you want loser?", 2000, false)
pause(3000)
Candele.sayText("im not a loser", 2000, false)
pause(3000)
dripa.sayText("then lets fight", 2000, false)
pause(2000)
Candele.sayText("A witch fight", 2000, false)
pause(3000)
dripa.sayText("Your so weak i will give you some time to train", 5000, false)
pause(3000)
