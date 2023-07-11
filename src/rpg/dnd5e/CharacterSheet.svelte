<script lang="ts">
    import Stat from '$lib/Stat.svelte';
    import Name from '$lib/Name.svelte';
    import { diceRoll } from '$lib/randomNum';
    // JSON imports
    import randomNames from '../dnd5e/data/randomNames.json';

    // variables and declarations
    let cName = "";
    let stats = [0, 0, 0, 0, 0, 0];
    const statNames = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

    // generate a random name from the list
    function randomName() {
        cName = randomNames.randomNames[Math.floor(Math.random()*randomNames.randomNames.length)];
    }

    // generate random stats
    function randomStats() {
        for(let i = 0; i < statNames.length; i++) {
            stats[i] = diceRoll(3, 6);
        }
    }
</script>


<h1>D&D Character</h1>

<!-- NAME -->
<h2>Basics</h2>
<Name cName={cName} />
<button on:click={randomName}>Random Name</button>

<!-- STATS -->
<h2>Stats</h2>
<button on:click={randomStats}>Random Stats</button>
<br>
{#each statNames as name, i}
    <Stat sName={name} defaultValue={stats[i]} />
{/each}

<p>version 0.1.0-prealpha</p>
