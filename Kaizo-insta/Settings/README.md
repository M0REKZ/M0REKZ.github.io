# Kaizo-Insta settings

These are the settings and commands that kaizo-insta adds to ddnet-insta

## kaizo-insta configs

+ `sv_gametype` Game type (ctf, gctf, ictf, dm, gdm, idm, tdm, gtdm, itdm, lms, ilms, glms, lts, ilts, glts, bomb, ifreeze, gfreeze, hfreeze, ifoot, gfoot, zcatch)
+ `sv_plasma_kills` Plasma turret damage for player
+ `sv_light_kills` Rotating Laser damage for player
+ `sv_ddrace_shotgun` DDrace shotgun (0 = vanilla, 1 = ddrace)
+ `sv_force_laser_type` Laser behavior, overriding sv_oldlaser and tunes but no tune zones (0 = default, 1 = ddrace 2 = vanilla)
+ `sv_ddrace_hud` Toggle to enable ddrace HUD
+ `sv_laser_jump` Create an explosion on first rifle bounce, allowing laser jumps.
+ `sv_spawn_pickup_weapons` enable or disable weapons spawning (does not work on instagib)
+ `sv_spawn_pickups` enable or disable heart and armor spawning (does not work on instagib)
+ `sv_bomb_time` Time in seconds for bomb to explode
+ `sv_bomb_amount` 1 bomb for each specified amount of players (spawns at least 1 if there is less players)
+ `sv_freeze_automelt_time` Time until the player respawns automatically when he's frozen
+ `sv_freeze_melt_range` Maximum range to melt a player
+ `sv_freeze_melt_time` Time (in ms) the player must stand next to a player to melt him
+ `sv_freeze_melt_respawn` If a player respawns after he was being melted
+ `sv_ball_respawn` Seconds for ball to go back to ball spawn

## kaizo-insta commands

    `if_gametypes` "s[gametypes] ?s[true result command] ?s[alternate result command]" Run command if running certain gametypes (like if_gametypes ictf,ctf,gctf "sv_scorelimit 1000" "sv_scorelimit 10")
    `"random_cmd` "s[command1] s[command2] ?s[...]" Run random command from the list given
    `question` Make a question (only works on vote)
	`/afk` Chat command to set afk state
