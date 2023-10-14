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
                return { phase: 'playing' }
            }

            return {}
        }),

        countArmy: 1,
    }
}))
