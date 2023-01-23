<template>
    <div>
        <CompareSection />
        <ResultSection v-if="data.hasResult" />
    </div>
</template>

<script setup lang="ts">
import CompareSection from './CompareSection.vue';
import ResultSection from './ResultSection.vue';
import { useData } from '@/stores/data';

const data = useData()
</script>
