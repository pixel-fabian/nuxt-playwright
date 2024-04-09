<script setup lang="ts">
import { ref } from 'vue';

let counter = ref(0)
function count() {
    counter.value++;
}
</script>

<template>
    <div>
        <button @click="count">count</button>
        <p>The mighty count is <span class="counter">{{ counter }}</span></p>
    </div>
</template>

<style scoped>
.counter {
    font-weight: bold;
}
</style>