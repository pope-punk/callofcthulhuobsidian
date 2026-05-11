---
tags: #Item #Document #Clue #PuzzleElement #SDEC #Handout
---

## Overview
A document found at the [[Ellensburg Numbers Station]], detailing the logic of the segment randomizer tool provided by [[SDEC (San Diego Entomology Club)]] to [[David Brewster]] and [[Maria Chen]] in mid-1992. This explains how a **four-digit code (Input: `XXXX`)** determines the order of the **six standard "Axon and Dendrite" broadcast segments (Output: Segment Order `1-6`)**.

## Format
Likely a technical printout, possibly with handwritten annotations by Brewster or Chen. May bear [[SDEC (San Diego Entomology Club)]] insignia or formatting.

## Content (Example Ruleset - Needs Finalization)

**(GM Note: This is an EXAMPLE ruleset. You need to define a specific, solvable logic puzzle here. The goal is for players to deduce the 4-digit Input Code given the Output Sequence found in [[Brewster's Final Segment Sequence Log]].)**

**SDEC Broadcast Segment Randomizer - Model: CICADA-RND6**
**Input:** 4-Digit Code (0000-9999)
**Output:** Permutation of Standard Segments {S1, S2, S3, S4, S5, S6}

* **Standard Segments (Example):**
    * S1: Opening Monologue / Soundscape
    * S2: Call-in Segment A
    * S3: Music Block / Weird Transmission
    * S4: Interview / Feature
    * S5: Call-in Segment B / Listener Mail
    * S6: Closing Remarks / Cryptic Sign-off

* **Mapping Logic (Example - Conceptual):**
    * **Digit 1 (Thousands Place):** Determines initial pair swap.
        * 0-4: No initial swap. Order remains S1, S2, S3, S4, S5, S6.
        * 5-9: Swap S1 and S6. Order becomes S6, S2, S3, S4, S5, S1.
    * **Digit 2 (Hundreds Place):** Controls position of S2. Value indicates final position (1st, 2nd, 3rd... 6th). Other segments shift accordingly.
        * *Example:* If sequence after Digit 1 is `S6, S2, S3, S4, S5, S1` and Digit 2 is `4`, S2 moves to the 4th position: `S6, S3, S4, S2, S5, S1`.
    * **Digit 3 (Tens Place):** Controls position of S4 relative to S3 *after* Digit 2's operation.
        * 0-4: S4 comes immediately *after* S3.
        * 5-9: S4 comes immediately *before* S3. (Adjust other segments).
    * **Digit 4 (Ones Place):** Determines final swap of adjacent segments. Value indicates the *first* segment in the pair to swap (1 swaps 1&2, 2 swaps 2&3, ..., 5 swaps 5&6).
        * 0 or 6-9: No final swap.

**(End Example Ruleset)**

## Significance
Provides the logical key necessary for players to solve the [[Brewster's Lockbox Puzzle]] by working backward from the known segment sequence. Confirms SDEC's technical capabilities and their method for disrupting [[EUROPA (1986-1992)]].