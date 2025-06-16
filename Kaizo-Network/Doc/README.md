# Kaizo Network Documentation




# Map Settings

* sv_portal_mode "Portal spawning behavior (0 = on every tile, 1 = only on allow portal tile, 2 = pprace compatibility)"
* sv_portal_projectile "Use Kaizo-Insta Portal Projectile instead of Laser"
* sv_portal_laser_reach "Portal gun laser reach"
* sv_max_health "Max amount of life"
* sv_damage_laser_cooldown "Cooldown for damage laser"
* sv_damage_laser_dmg "Damage laser damage"
* sv_damage_turret_dmg "Plasma turret damage"
* sv_damage_turret_explosive_dmg "Explosive plasma turret damage"
* sv_damage_mine_dmg "Mines damage"

# Tiles

## Both +KZGame and +KZFront:

### ID 1: Switchable Solid Tile

![tile](img/image2x1.png)

Collision with this tile can be manipulated with a switch.

* Number: Switch Number
* Value1: 1 = Hookable, 3 = Unhookable, Any other value is ignored

### ID 2: Solid Stopper

![tile](img/image3x1.png)

One way tile, only Tees get affected

Tile has NOT switch support

### ID 3: Portal Gun

![tile](img/image4x1.png)

Portal gun pickup

* Number: Switch Number

### ID 4: Allow Portal

![tile](img/image5x1.png)

Works for sv_portal_mode 1, must be placed on top of a solid tile

Allows placing a portal if player shoot with a portal gun to that tile

### ID 5: Disallow Portal

![tile](img/image6x1.png)

Disallow portal works for sv_portal_mode 0, must be placed on top of a solid tile

Wont allow placing portals on that tile

### ID 6: Reset Portals

![alt text](img/image7x1.png)

Remove all portals made by player

### ID 7: Plasma Turret

![alt text](img/image8x1.png)

### ID 8: Explosive Plasma Turret

![alt text](img/image9x1.png)

### ID 9: Damage Laser

![alt text](img/image10x1.png)

Damage Laser Entity

* Number: Switch number
* Value1: Rotation speed

### ID 10: Play map sound (in tile position)

![alt text](img/image11x1.png)

* Number: Switch number
* Value1: Sound ID

### ID 11: Health Zone

![alt text](img/image12x1.png)

### ID 12: Damage Zone

![alt text](img/image13x1.png)

### ID 13: Mine

![alt text](img/image14x1.png)

### ID 14: Play map sound (only for player)

![alt text](img/image15x1.png)

* Number: Switch number
* Value1: Sound ID

## +KZGame Only:

### ID 15: No damage

![alt text](img/image16x1.png)

### ID 16: Button

![alt text](img/image1x2.png)

* Number: Switch number
* Value1:
* Value2: Delay

### ID 18: Set Camera Position (Spec Position)

![alt text](img/image3x2.png)

Force player camera to see a specific tile position

* Number: Switch number
* Value1: X position
* Value2: Y position

### ID 19: Switchable Solid Tile (Tee Only)

![alt text](img/image4x2.png)

## +KZFront Only: