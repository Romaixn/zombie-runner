import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"

export default create(subscribeWithSelector((set) => {
    return {
        blocksCount: 50,
        blocksSeed: 0,
        maxSpeed: 10,
        speedIncreaseRate: 0.5,
        countArmy: 1,
        status: null,

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
                return { phase: 'lobby', blocksSeed: Math.random(), countArmy: 1, status: null, blocksCount: state.blocksCount + 20, maxSpeed: state.maxSpeed + 2, speedIncreaseRate: state.speedIncreaseRate + 0.15 }
            }

            return { phase: 'lobby', blocksSeed: Math.random(), countArmy: 1, status: null }
        }),
    }
}))
