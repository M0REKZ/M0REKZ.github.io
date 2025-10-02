# Kaizo Network Documentation

- [Kaizo Network Documentation](#kaizo-network-documentation)
- [Map Settings](#map-settings)
  - [Kaizo Network config options for maps:](#kaizo-network-config-options-for-maps)
  - [Kaizo Network config options for compatibility with other mods](#kaizo-network-config-options-for-compatibility-with-other-mods)
- [Tiles](#tiles)
  - [Both +KZGame and +KZFront:](#both-kzgame-and-kzfront)
    - [ID 1: Switchable Solid Tile](#id-1-switchable-solid-tile)
    - [ID 2: Solid Stopper (Version 1)](#id-2-solid-stopper-version-1)
    - [ID 3: Portal Gun](#id-3-portal-gun)
    - [ID 4: Allow Portal](#id-4-allow-portal)
    - [ID 5: Disallow Portal](#id-5-disallow-portal)
    - [ID 6: Reset Portals](#id-6-reset-portals)
    - [ID 7: Plasma Turret/Damage Turret](#id-7-plasma-turretdamage-turret)
    - [ID 8: Explosive Plasma Turret/Explosive Damage Turret](#id-8-explosive-plasma-turretexplosive-damage-turret)
    - [ID 9: Damage Laser](#id-9-damage-laser)
    - [ID 10: Play map sound (in tile position)](#id-10-play-map-sound-in-tile-position)
    - [ID 11: Health Zone](#id-11-health-zone)
    - [ID 12: Damage Zone/Slow Death](#id-12-damage-zoneslow-death)
    - [ID 13: Mine](#id-13-mine)
    - [ID 14: Play map sound (only for player)](#id-14-play-map-sound-only-for-player)
    - [ID 17: Play map sound (in tile position, only for player)](#id-17-play-map-sound-in-tile-position-only-for-player)
    - [ID 21: Laser recover jump ON](#id-21-laser-recover-jump-on)
    - [ID 22: Laser recover jump OFF](#id-22-laser-recover-jump-off)
  - [+KZGame Only:](#kzgame-only)
    - [ID 15: No damage](#id-15-no-damage)
    - [ID 16: Hittable Switch/Button](#id-16-hittable-switchbutton)
    - [ID 18: Set Camera Position (Spec Position)](#id-18-set-camera-position-spec-position)
    - [ID 19: Switchable Solid Tile (Tee Only)](#id-19-switchable-solid-tile-tee-only)
    - [ID 20: Solid Stopper (Version 2)](#id-20-solid-stopper-version-2)
  - [+KZFront Only:](#kzfront-only)
    - [ID 15: +Pos](#id-15-pos)
    - [ID 16: +KZ Teleport (Switchable Teleport)](#id-16-kz-teleport-switchable-teleport)
    - [ID 18: Switchable Tune Zone](#id-18-switchable-tune-zone)
    - [ID 19: Tune Lock](#id-19-tune-lock)
    - [ID 20: Position Shifter](#id-20-position-shifter)
  - [About Binary Options](#about-binary-options)
    - [The reason explained](#the-reason-explained)
    - [How to use](#how-to-use)



# Map Settings

## Kaizo Network config options for maps:

* sv_portal_mode "Portal spawning behavior (0 = on every tile, 1 = only on allow portal tile, 2 = PPRace compatibility)"
* sv_portal_laser_reach "Portal gun laser reach"
* sv_max_health "Max amount of life"
* sv_damage_laser_cooldown "Cooldown for damage laser"
* sv_damage_laser_dmg "Damage laser damage"
* sv_damage_turret_dmg "Plasma turret damage"
* sv_damage_turret_explosive_dmg "Explosive plasma turret damage"
* sv_damage_mine_dmg "Mines damage"
* sv_kaizo_laser_recover_jump "Player recovers jump when hit by laser"

## Kaizo Network config options for compatibility with other mods

These options were intended for compatibility with maps made for other mods

On Kaizo Network they may not work equal to the original feature or may have some Kaizo Network specific extensions

* sv_portal_projectile "Kaizo-Insta compatibility: Use Portal Projectile instead of Laser"
* sv_kog_qquads_enable "Gores compatibility: Moving tiles"
* sv_kog_grenade_tele "Gores compatibility: Teleport grenade"

# Tiles

## Both +KZGame and +KZFront:

### ID 1: Switchable Solid Tile

![tile](img/image2x1.png)

Collision with this tile can be manipulated with a switch, players can not skip it.

You must set Value1, otherwise collision wont work.

Alternative to [ID 19: Switchable Solid Tile (Tee Only)](#id-19-switchable-solid-tile-tee-only)

* Number: Switch Number
* Value1: 1 = Hookable, 3 = Unhookable, Any other value is ignored

### ID 2: Solid Stopper (Version 1)

![tile](img/solidstopperv1.png)

One way tile, only Tees get affected, players can not skip it.

**Tile is OUTDATED, use [ID 20: Solid Stopper (Version 2)](#id-20-solid-stopper-version-2) instead, which has better collision handling and switch support**

Tile has NOT switch support

### ID 3: Portal Gun

![tile](img/image4x1.png)

Portal gun pickup

* Number: Switch Number

### ID 4: Allow Portal

![tile](img/image5x1.png)

Works for sv_portal_mode 1, must be placed on top of a solid tile

Allows placing a portal if player shoot with a portal gun to that tile

Tile has NOT switch support

### ID 5: Disallow Portal

![tile](img/image6x1.png)

Disallow portal works for sv_portal_mode 0, must be placed on top of a solid tile

Wont allow placing portals on that tile

Tile has NOT switch support

### ID 6: Reset Portals

![alt text](img/image7x1.png)

Destroy all portals made by player

Tile has NOT switch support

### ID 7: Plasma Turret/Damage Turret

![alt text](img/image8x1.png)

A turret that deals damage

Number: Switch Number

### ID 8: Explosive Plasma Turret/Explosive Damage Turret

![alt text](img/image9x1.png)

A turret that deals damage and makes explosions

Number: Switch Number

### ID 9: Damage Laser

![alt text](img/image10x1.png)

Damage Laser Entity, hurts when touched

* Number: Switch number
* Value1: Rotation speed

### ID 10: Play map sound (in tile position)

![alt text](img/image11x1.png)

When touched, will play a sound in the tile position for all players

* Number: Switch number
* Value1: Map sound ID

### ID 11: Health Zone

![alt text](img/image12x1.png)

Gives Health

* Number: Switch number
* Value1: How much health to give (Will give Value1 + 1 Health)

### ID 12: Damage Zone/Slow Death

![alt text](img/image13x1.png)

Deals Damage

* Number: Switch number
* Value1: How much damage to deal (Will deal Value1 + 1 Damage)

### ID 13: Mine

![alt text](img/image14x1.png)

Mine Entity, explodes and deals damage when touched, projectiles also can explode it, will respawn after some time.

Number: Switch Number

### ID 14: Play map sound (only for player)

![alt text](img/image15x1.png)

When touched, will play a sound only for that player, no matter what position he is in.

* Number: Switch number
* Value1: Map sound ID

### ID 17: Play map sound (in tile position, only for player)

![alt text](img/image2x2.png)

When touched, will play a sound in the tile position only for that player

* Number: Switch number
* Value1: Map sound ID

### ID 21: Laser recover jump ON

![alt text](img/tilejumpon.png)

Allows player to shoot a laser that will reload jumps for any player that the laser hit

Ability can be removed with [ID 22: Laser recover jump OFF](#id-22-laser-recover-jump-off)

* Number: Switch Number

### ID 22: Laser recover jump OFF

![alt text](img/tilejumpoff.png)

Removes ability given by [ID 21: Laser recover jump ON](#id-21-laser-recover-jump-on)

* Number: Switch Number

## +KZGame Only:

### ID 15: No damage

![alt text](img/image16x1.png)

Player cant get damage after touching this tile

NOTE: There is still not a tile that can revert this effect

* Number: Switch Number

### ID 16: Hittable Switch/Button

![alt text](img/hittableswitch.png)

* Number: Switch number to handle
* Value1: Switch Type (0 = Deactivate, 1 = Timed deactivate, 2 = Timed activate, 3 = Activate, 4 = Toggle)
* Value2: Delay
* Value3: Binary options [(How to use)](#about-binary-options)

Possible Options for Value3:

* 1 = Can ***NOT*** be hit with Hammer
* 2 = Can be hit with Gun
* 4 = Can be hit with Grenade
* 8 = Can be hit with Shotgun
* 16 = Can be hit with Laser
* 32 = Can be hit with Ninja

### ID 18: Set Camera Position (Spec Position)

![alt text](img/image3x2.png)

Force player camera to see a specific TILE position (NOTE: player will lose client-side prediction and produce laggy gameplay, so it is only useful for things like cutscenes)

* Number: Switch number
* Value1: X position
* Value2: Y position

### ID 19: Switchable Solid Tile (Tee Only)

![alt text](img/image4x2.png)

Collision with this tile can be manipulated with a switch.

Only tees can collide with this, weapons and hook wont.

You dont need to set Value1 for this one, unlike [ID 1: Switchable Solid Tile](#id-1-switchable-solid-tile)

* Number: Switch Number

### ID 20: Solid Stopper (Version 2)

![alt text](img/solidstopperv2.png)

One way tile, only Tees get affected, players can not skip it.

Collision with this tile can be manipulated with a switch.

* Number: Switch Number

## +KZFront Only:

### ID 15: +Pos

![alt text](img/frontpluspos.png)

Advanced tile that moves player position no matter what, can also limit player velocity with Value3

Alternative and more precise tile: [ID 20: Position Shifter](#id-20-position-shifter)

This is NOT a Speedup tile

* Number: Switch number
* Value1: Angle
* Value2: How much Player is pushed each Tick
* Value3: Max Player velocity in that direction (negative values will cancel the limitation)

### ID 16: +KZ Teleport (Switchable Teleport)

![alt text](img/fronttp.png)

Teleport that can be manipulated with switches

* Number: Switch number
* Value1: Red Teleport = 0, Blue Teleport = 1
* Value2: Teleport number

### ID 18: Switchable Tune Zone

![alt text](img/fronttune.png)

Tune zone but you can handle it with switches

* Number: Switch number
* Value1: Tune Zone

### ID 19: Tune Lock

![alt text](img/fronttunelock.png)

Lock tunes from a tune zone into a player

You can lock a player to tune zone 0 (Global tunes)

To remove lock, lock a player to tune zone **-1**

* Number: Switch Number
* Value1: Tune Zone

### ID 20: Position Shifter

![tile](img/posshifter.png)

Advanced tile that moves the player position in a more precise way than [ID 15: +Pos](#id-15-pos), supports moving projectiles and hook (if tee is hooked to a solid tile)

*Tile can NOT be skiped!*

* Number: Switch Number
* Value1: How much to add to Tee X position
* Value2: How much to add to Tee Y position
* Value3: Binary options [(How to use)](#about-binary-options)

Possible Options for Value3:

* 1 = Shift Hook position (if tee is hooked to a solid tile)
* 2 = Shift Projectiles position
* 4 = Invert X Velocity of Tee when shifted
* 8 = Invert Y Velocity of Tee when shifted

## About Binary Options

Some tiles like [ID 16: Hittable Switch/Button](#id-16-hittable-switchbutton) or [ID 20: Position Shifter](#id-20-position-shifter) has Values used as binary code.

I made them this way to allow multiple options at the same time, which would be even more complicated with normal numbers, making very long lists of possible values.

### The reason explained

Instead of

* Type 1 For Grenade
* Type 2 For Laser
* Type 3 For Shotgun
* Type 4 For Grenade and Laser
* Type 5 For Grenade and Shotgun
* bla bla bla

We have

* 001 For Grenade
* 010 For Laser
* 100 For Shotgun
* Combine them as you want :D

### How to use

Imagine that you want to use [ID 16: Hittable Switch/Button](#id-16-hittable-switchbutton) but you want it to work for Grenade and Laser:

Checking the tile documentation we can see that:

* Option to allow **Grenade** is ***4***
* Option to allow **Laser** is ***16***

To apply both options, you must combine both values:

* 4 + 16 = ***20***

So to allow both Grenade and Laser in the tile you must put value ***20*** in *Value3* of the tile