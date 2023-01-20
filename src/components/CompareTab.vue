<template>
    <div id="compare-main">
        <a-split>
            <template #first>
                <a-typography-title :heading="2">SOURCE</a-typography-title>
                <SideHalf :is-src="true" />
            </template>
            <template #second>
                <a-typography-title :heading="2">TARGET</a-typography-title>
                <SideHalf :is-src="false" />
            </template>
        </a-split>
        <a-button type="primary" @click="execDiff">CHECK DIFF</a-button>
    </div>
</template>

<script setup lang="ts">
import SideHalf from './SideHalf.vue'
import { useData } from '@/stores/data';

const execDiff = () => {
    const data = useData()
    data.execDiff()
}

</script>

<style>
#compare-main {
    padding: 1rem;
}
</style>