<template>
    <div class="compare-sub">
        <a-split direction="vertical">
            <template #first>
                <a-divider orientation="center">OLD</a-divider>
                <TextSet :is-src="isSrc" :is-old="true" />
            </template>
            <template #second>
                <a-divider orientation="center">NEW</a-divider>
                <TextSet :is-src="isSrc" :is-old="false" />
            </template>
        </a-split>
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