<template>
    <div id="compare-result">
        <a-split>
            <template #first>
                <div class="compare-resulte-block" v-html="data.srcDiff"></div>
            </template>
            <template #second>
                <div class="compare-resulte-block" v-html="data.tgtDiff"></div>
            </template>
        </a-split>
    </div>
</template>

<script setup lang="ts">
import { useData } from '@/stores/data';

const data = useData()
</script>

<style>
div.compare-resulte-block {
    text-align: left;
    font-size: 1.2rem;
    line-height: 1.1em;
}

ins {
    color: dodgerblue
}

del {
    color: red;
    font-size: 0.9rem;
}
</style>