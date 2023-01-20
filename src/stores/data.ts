import { defineStore } from 'pinia'
import { SequenceMatcher } from '../../difflib/src/sequenceMatcher'

interface TextsStore {
    srcOld: string
    srcNew: string
    tgtOld: string
    tgtNew: string
    srcDiff: string
    tgtDiff: string
    sm: SequenceMatcher
    hasResult: boolean
}

const sm = new SequenceMatcher()

const state: TextsStore = {
    srcOld: 'This is the old source text',
    srcNew: 'This is the new source text',
    tgtOld: 'This is the old target text',
    tgtNew: 'This is the new target text',
    srcDiff: '',
    tgtDiff: '',
    sm,
    hasResult: false
}

export const useData = defineStore('data', {
    state: () => state,
    actions: {
        execDiff() {
            this.sm.setSeqs(this.srcOld, this.srcNew)
            this.srcDiff = this.sm.applyOpcodes(false)
            this.sm.setSeqs(this.tgtOld, this.tgtNew)
            this.tgtDiff = this.sm.applyOpcodes(false)
            this.hasResult = true
        }
    }
})