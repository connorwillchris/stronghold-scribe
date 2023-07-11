<script lang="ts">
    export let defaultValue = 0;
    export let sName: string;
</script>

<label>
    {sName}
    <input type="number" value={defaultValue}>
</label>

<style>
</style>
