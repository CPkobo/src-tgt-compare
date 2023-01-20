<template>
    <a-textarea v-model="text" :auto-size="{
        minRows: 5,
    
    }" />
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useData } from '../stores/data'

interface Props {
    isSrc: boolean;
    isOld: boolean;
}

const props = defineProps<Props>()
const data = useData()
const texts = storeToRefs(data)
const { srcOld, srcNew, tgtOld, tgtNew } = texts

const text =
    props.isSrc
        ? props.isOld ? srcOld : srcNew
        : props.isOld ? tgtOld : tgtNew

</script>