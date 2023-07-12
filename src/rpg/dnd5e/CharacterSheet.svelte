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
<button type="button" class="btn btn-primary" on:click={randomName}>Random Name</button>

<!-- STATS -->
<h2>Stats</h2>
<button on:click={randomStats}>Random Stats</button>
<br>
{#each statNames as name, i}
    <Stat sName={name} defaultValue={stats[i]} />
    <br>
{/each}

<!-- VERSION -->
<p>version 0.1.0-prealpha</p>




<!-- REMOVE THIS LATER -->
<ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
    <li class="nav-item" role="presentation">
        <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
    </li>
</ul>






























<style lang="scss">
    $primary: #900;
    $enable-shadows: true;
    $prefix: "mo-";
    
    @import "../node_modules/bootstrap/scss/bootstrap";

    @import "../node_modules/bootstrap/scss/variables";
    @import "../node_modules/bootstrap/scss/variables-dark";
    @import "../node_modules/bootstrap/scss/maps";
    @import "../node_modules/bootstrap/scss/mixins";
    @import "../node_modules/bootstrap/scss/root";

    // Optional components
    @import "../node_modules/bootstrap/scss/utilities";
    @import "../node_modules/bootstrap/scss/reboot";
    @import "../node_modules/bootstrap/scss/containers";
    @import "../node_modules/bootstrap/scss/grid";
    @import "../node_modules/bootstrap/scss/helpers";
    @import "../node_modules/bootstrap/scss/utilities/api";
</style>
