<template>
    <div id="compare-result">
        <a-split>
            <template #first>
                <div v-html="data.srcDiff"></div>
            </template>
            <template #second>
                <div v-html="data.tgtDiff"></div>
            </template>
        </a-split>
    </div>
</template>

<script setup lang="ts">
import { useData } from '@/stores/data';

const data = useData()
</script>

<style>
ins {
    color: dodgerblue
}

del {
    color: red;
    font-size: 0.9em;
}
</style>