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
        <a-space>
            <a-button type="primary" @click="execDiff">CHECK DIFF</a-button>
            <a-divider direction="vertical" />
            <a-input v-model="fileName" />
            <a-button type="primary" @click="download">DOWNLOAD</a-button>
        </a-space>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SideHalf from './SideHalf.vue'
import { useData } from '@/stores/data';

const fileName = ref('result')

const data = useData()

const execDiff = () => {
    data.execDiff()
}

const download = () => {
    const htmlText = data.createHtml()
    console.log(htmlText)
    const blob = new Blob([htmlText], { type: 'text/html' });
    const link = document.createElement('a')
    link.download = `${fileName.value}.html`
    link.href = window.URL.createObjectURL(blob)
    link.target = '_blank'
    link.click()
    URL.revokeObjectURL(link.href)
}

</script>

<style>
#compare-main {
    padding: 1rem;
}
</style>