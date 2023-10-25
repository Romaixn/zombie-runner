import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"

export default create(subscribeWithSelector((set) => {
    return {
        blocksCount: 50,
        blocksSeed: 0,

        soundPlaying: true,
        toggleSound: () => set((state) => ({ soundPlaying: !state.soundPlaying })),

        phase: 'welcome',
        start: () => set((state) => {
            if(state.phase === 'welcome') {
                return { phase: 'lobby' }
            }

            return {}
        }),
        play: () => set((state) => {
            if(state.phase === 'lobby') {
                return { phase: 'game' }
            }

            return {}
        }),
        end: () => set((state) => {
            if(state.phase === 'game') {
                return { phase: 'end' }
            }

            return {}
        }),

        countArmy: 1,
    }
}))
