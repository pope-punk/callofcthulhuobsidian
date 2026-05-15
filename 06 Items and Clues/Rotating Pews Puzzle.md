**Tags:** #Puzzle #Mechanic #LoreIntegration #BSSA #OperationParthenon #Fauxflake

## Overview
The interactive puzzle encountered in the sub-sanctuary beneath the [[Seventh Tabernacle Church of Life]] during the Act II revisit. The chamber's modular pew system *is* the 3D [[Fauxflake]] — the basilisk instantiated in physical space — and players manipulate it from the [[Operation Parthenon|Parthenon]] control console. Driving the pews out of their cultivated arrangement and into a stable, neutral configuration collapses the 3D Fauxflake and disrupts [[IO (Emerging 1997)|IO]]'s emergence.

There is a working browser implementation of this puzzle, intended as the literal table prop — see [[#The Live App]] below.

## The Apparatus
The sub-sanctuary holds three things relevant to the puzzle:
- **The Modular Pew System** — three reconfigurable pew pairs on a hexagonal rail grid beneath the mirrored ceiling. Their arrangement is the active 3D [[Fauxflake]].
- **The Viewing Apparatus** — the overhead rig BSSA technicians use to observe the layout and translate it into 2D [[Snowflake Pattern Diagrams|diagrams]].
- **The Control Console** — the keypad station Syd worked at during his captivity (the "pew controls" referenced in [[Operation Parthenon]]). This is the puzzle interface: a 3×3 keypad of bust-shaped buttons that selects a target configuration and drives the rails to it.

## Mechanics
The chamber floor is modeled as a **3×3 grid** — three concentric **rings** crossed by three **diagonals**:

| Ring | Diagonals |
|---|---|
| **Inner** / **Middle** / **Outer** | **Horizontal** (0°) · **Top-Right/Bot-Left** (60°) · **Top-Left/Bot-Right** (120°) |

Each of the nine positions is either empty or holds one **pew pair**. There are exactly three pew pairs in the chamber.

### Valid configurations
The console only accepts — and the rails will only settle into — a configuration that obeys the chamber's geometry:
- **Exactly 3 pew pairs** placed (all three pairs are always on the floor).
- **At most 1 pair on the Inner ring** — the innermost ring is small and only has clearance for a single pair near the altar.

A target that breaks either rule is rejected at the console with an error (`Need N more pairs` / `Maximum 1 pair on inner ring` / `Arrangement doesn't match church geometry`).

### Moves
The pews never teleport. Any valid configuration is reached from the current one through a sequence of two move types, which the console animates:
- **Rotate a ring** — pick one ring; spin it **clockwise** or **counter-clockwise**. Every pew on that ring slides to the next diagonal (60° per step).
- **Shift a diagonal** — pick one diagonal; move it **inward** or **outward**. Every pew on that diagonal moves one ring toward the center or the rim. Pews already at the Inner or Outer ring stay put.

## The Solved States
There are **four** stable resting configurations — the only ones the chamber's geometry fully supports without the basilisk pattern holding the pews under tension. Reaching **any** of them collapses the 3D Fauxflake. They are the puzzle's win states.

The chamber's *default* / cultivated start is **Diagonal 1**; the active Fauxflake is a refined perturbation of it (Syd's coerced work), which is why the apparatus reads as "live."

```
Legend:  ●  pew pair      ·  empty
                Horiz   TR/BL   TL/BR

DIAGONAL 1 — Horizontal       (default / starting state)
   Inner      ●       ·       ·
   Middle     ●       ·       ·
   Outer      ●       ·       ·

DIAGONAL 2 — Top-Right/Bot-Left
   Inner      ·       ●       ·
   Middle     ·       ●       ·
   Outer      ·       ●       ·

DIAGONAL 3 — Top-Left/Bot-Right
   Inner      ·       ·       ●
   Middle     ·       ·       ●
   Outer      ·       ·       ●

OUTER RING
   Inner      ·       ·       ·
   Middle     ·       ·       ·
   Outer      ●       ●       ●
```

The three **Diagonal** states align all three pairs on a single spoke, one per ring. The **Outer Ring** state clears the inner sanctuary entirely, all three pairs pushed to the rim — the most thorough "stand-down" of the configuration.

## Running It
- **Use the live app as the prop.** Let the players operate the console directly: toggle a target on the keypad, hit *Apply Configuration*, and watch the pews rotate and slide on the church view under the mirrored ceiling. A rejected target gives them the geometry rules to reason with.
- **The objective** is to recognize that the live, humming arrangement is the basilisk, and that forcing the rails into one of the four neutral solved states breaks it. The challenge is half *insight* (this room is the weapon; the console disarms it) and half *spatial reasoning* (planning a legal sequence of ring/diagonal moves).
- **What solving it accomplishes** is a GM call keyed to table pacing — at minimum, collapsing the 3D Fauxflake stalls [[Operation Parthenon]] and the cultivation of [[IO (Emerging 1997)]]. The **Outer Ring** state reads best as a deliberate, total shutdown if you want a clean narrative beat.
- **Caution.** This is the most dangerous infohazard environment in the campaign short of the Quarry Hive. Working the console means looking at the active pattern; sanity checks while the players study and reconfigure it are appropriate.

## The Live App
A working React implementation exists as the table prop:
- **Play:** https://pope-punk.github.io/
- **Source:** `github.com/pope-punk/pope-punk.github.io` — puzzle logic in `src/utils/matrixUtils.js`, console in `src/components/MatrixInput.jsx`, animated chamber view in `src/components/HexagonalChurch.jsx`.

## Narrative Significance
- **The room is the puzzle.** Unlike the [[Rubinsky's Lockbox Puzzle|lockbox]] or [[Safe Puzzle|safe]], there are no clues to gather elsewhere — the apparatus, the rules, and the solution are all present in the chamber. The work is realizing that the [[Fauxflake]] is not a *diagram of* a weapon but the weapon itself, arranged in furniture.
- **Closes a Syd thread.** The console is where Syd Foxglove was coerced into refining the pattern. Players reach the same controls and use them to undo the work.
- **Gates nothing, disrupts much.** Solving it isn't required to progress the investigation (the chamber also holds [[Syd Foxglove]]'s empty cell, the [[Amanda Green Photograph]], and the [[Chapel of the Blessed Lamb Paperwork]]) — but it is the players' first chance to materially set back [[Operation Parthenon]].
