<template>
    <div>
        <CompareTab />
        <ResultTab v-if="data.hasResult" />
    </div>
</template>

<script setup lang="ts">
import CompareTab from './CompareTab.vue';
import ResultTab from './ResultTab.vue';
import { useData } from '@/stores/data';

const data = useData()
</script>
