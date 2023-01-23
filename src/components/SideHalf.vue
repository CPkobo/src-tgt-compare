<template>
    <div class="compare-sub">
        <a-divider orientation="center">OLD</a-divider>
        <TextSet :is-src="isSrc" :is-old="true" />
        <a-divider orientation="center">NEW</a-divider>
        <TextSet :is-src="isSrc" :is-old="false" />
    </div>
</template>

<script setup lang="ts">
import TextSet from './TextSet.vue';
import { defineProps } from 'vue';

const props = defineProps<{ isSrc: boolean }>()

</script>

<style>
.compare-sub {
    padding: 1.5rem
}
</style>