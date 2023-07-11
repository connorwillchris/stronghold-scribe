<script lang="ts">
    //import Character from '$lib/Character.svelte';
    import Stat from '$lib/Stat.svelte';
    import Name from '$lib/Name.svelte';
    import { diceRoll } from '$lib/randomNum';

    import randomNames from '../dnd5e/data/randomNames.json';

    let _name = "";
    let stats = [0, 0, 0, 0, 0, 0];
    const statNames = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

    // random name generator
    function randomName() {
        let len = randomNames.randomNames.length;
        _name = randomNames.randomNames[Math.floor(Math.random()*len)];
    }

    // random stats function
    function randomStats() {
        for(let i = 0; i < statNames.length; i++) {
            stats[i] = diceRoll(3, 6);
        }
    }
</script>


<h1>D&D Character</h1>

<!-- NAME HERE -->
<h2>Basics</h2>
<Name cName={_name} />
<button on:click={randomName}>Random Name</button>

<!-- STATS HERE -->
<h2>Stats</h2>
<button on:click={randomStats}>Random Stats</button>
<br>
{#each statNames as name, i}
    <Stat sName={name} defaultValue={stats[i]} />
{/each}

