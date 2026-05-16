**Tags:** #Puzzle #Mechanic #Environmental #LoreIntegration #BSSA #SydFoxgloveHolding

## Overview
An environmental puzzle in the sub-sanctuary beneath the [[Seventh Tabernacle Church of Life]], encountered during the Act II revisit. The chamber's modular pew system — the 3D [[Fauxflake]] — doubles as the lock on the level below it. Executing a **particular sequence of pew transitions** at the control console puts the system into **override mode**, which releases the basement floor and opens access to the **maintenance tunnels** running beneath it. BSSA's holding cell — where [[Syd Foxglove]] was kept — is down there. Solving the puzzle is how the players reach Syd's (now empty) cell, the [[Amanda Green Photograph]], and the second set of [[Ylynthii Numerals|Ylynthii]] markings.

The puzzle is *not* a way to disrupt the Fauxflake or [[Operation Parthenon]] — it is purely a lock. There is a working browser implementation of the pew console — see [[#The Live App]].

## The Apparatus
The sub-sanctuary holds three things relevant to the puzzle:
- **The Modular Pew System** — three reconfigurable pew pairs on a hexagonal rail grid beneath the mirrored ceiling. Their arrangement is the active 3D [[Fauxflake]]; it is also the mechanism players manipulate.
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

## Reference Configurations
The console recognizes four **canonical configurations** — stable arrangements that obey the chamber geometry, which the pathfinder routes through. They are landmarks, useful as orientation points when planning the override sequence; they are *not themselves* the solution. The chamber's default resting state is **Diagonal 1**.

```
Legend:  ●  pew pair      ·  empty
                Horiz   TR/BL   TL/BR

DIAGONAL 1 — Horizontal       (default / resting state)
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

## The Override Sequence
Override mode is triggered not by reaching a particular configuration but by executing a **particular ordered set of transitions** — a specific run of ring rotations and diagonal shifts that the system reads as the unlock code. Performing it releases the basement floor and exposes the way down into the maintenance tunnels.

> [!todo] Sequence not yet recorded
> The exact override sequence is **not recoverable from the puzzle source**. The deployed app (`pope-punk.github.io`) and its full git history implement only the configuration-transition visualizer described above — there is no override-detection logic in any version — and the vault holds no record of the sequence. It must be supplied from the GM's own notes or designed fresh, then documented here, along with the step-by-step transitions and how the players learn it.

## Running It
- **Use the live app as the prop.** Let the players operate the console directly — toggle a target on the keypad, hit *Apply Configuration*, watch the pews rotate and slide. A rejected target hands them the geometry rules to reason with.
- **It is an environmental lock, not a combat or disruption beat.** The objective is to work out and perform the override sequence; success drops the floor and opens the route down to the maintenance tunnels and Syd's holding cell.
- **Where the players learn the sequence is an open clue-design question** (see the callout above) — it should have a discoverable source in the chamber or elsewhere in the BSSA fronts arc, in keeping with the campaign's redundant-clue-paths principle.
- **Caution.** This is the most dangerous infohazard environment in the campaign short of the Quarry Hive. Working the console means studying the active pattern; sanity checks while the players plan and execute the sequence are appropriate.

## The Live App
A working React implementation of the pew console exists as the table prop:
- **Play:** https://pope-punk.github.io/
- **Source:** `github.com/pope-punk/pope-punk.github.io` — puzzle logic in `src/utils/matrixUtils.js`, console in `src/components/MatrixInput.jsx`, animated chamber view in `src/components/HexagonalChurch.jsx`.

> [!note] The app does not yet implement override mode
> As shipped, the app only visualizes transitions between valid configurations. If the puzzle is to detect the override sequence in play (rather than the GM adjudicating it by eye), that logic would need to be added to the app.

## Narrative Significance
- **An environmental gate.** Unlike the [[Rubinsky's Lockbox Puzzle|lockbox]] or [[Safe Puzzle|safe]], the puzzle does not yield a document or a code — it physically opens a path. The maintenance tunnels beneath the basement, and Syd's holding cell within them, are reachable *only* by solving it.
- **Closes a Syd thread.** The console is where Syd Foxglove was coerced into refining the [[Fauxflake]]. The players reach the same controls — and use them to open the door to the cell where he was caged.
- **Leads onward.** Syd's empty cell holds the [[Amanda Green Photograph]] and the second set of [[Ylynthii Numerals|Ylynthii]] markings; the [[Chapel of the Blessed Lamb Paperwork]] in the storage area points the investigation toward [[Ellensburg Area, WA|Ellensburg]].
