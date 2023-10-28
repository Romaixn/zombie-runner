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
            if (state.countArmy <= 0) {
                return { phase: 'end', status: 'lose' }
            }

            return { phase: 'end' }
        }),
        restart: () => set((state) => {
            if(state.phase === 'end' && state.status === 'win') {
                return { phase: 'lobby', blocksSeed: Math.random(), countArmy: 1, status: null, blocksCount: state.blocksCount + 20 }
            }

            return { phase: 'lobby', blocksSeed: Math.random(), countArmy: 1, status: null }
        }),

        countArmy: 1,
        status: null
    }
}))
