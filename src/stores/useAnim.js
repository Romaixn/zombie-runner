import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"

export const useAnim = /* @__PURE__ */ create(
  /* @__PURE__ */ subscribeWithSelector(set => {
    return {
      /**
       * Character animations state manegement
       */
      // Initial animation
      curAnimation: null,
      animationSet: {},

      initializeAnimationSet: animationSet => {
        set(state => {
          if (Object.keys(state.animationSet).length === 0) {
            return { animationSet }
          }
          return {}
        })
      },

      reset: () => {
        set(state => {
          return { curAnimation: state.animationSet.idle }
        })
      },

      idle: () => {
        set(state => {
          if (state.curAnimation === state.animationSet.jumpIdle) {
            return { curAnimation: state.animationSet.jumpLand }
          } else if (
            state.curAnimation !== state.animationSet.action1 &&
            state.curAnimation !== state.animationSet.action2 &&
            state.curAnimation !== state.animationSet.action3 &&
            state.curAnimation !== state.animationSet.action4
          ) {
            return { curAnimation: state.animationSet.idle }
          }
          return {}
        })
      },

      walk: () => {
        set(state => {
          if (state.curAnimation !== state.animationSet.action4) {
            return { curAnimation: state.animationSet.walk }
          }
          return {}
        })
      },

      run: () => {
        set(state => {
          if (state.curAnimation !== state.animationSet.action4) {
            return { curAnimation: state.animationSet.run }
          }
          return {}
        })
      },

      jump: () => {
        set(state => {
          return { curAnimation: state.animationSet.jump }
        })
      },

      jumpIdle: () => {
        set(state => {
          if (state.curAnimation === state.animationSet.jump) {
            return { curAnimation: state.animationSet.jumpIdle }
          }
          return {}
        })
      },

      jumpLand: () => {
        set(state => {
          if (state.curAnimation === state.animationSet.jumpIdle) {
            return { curAnimation: state.animationSet.jumpLand }
          }
          return {}
        })
      },

      fall: () => {
        set(state => {
          return { curAnimation: state.animationSet.fall }
        })
      },

      action1: () => {
        set(state => {
          if (state.curAnimation === state.animationSet.idle) {
            return { curAnimation: state.animationSet.action1 }
          }
          return {}
        })
      },

      action2: () => {
        set(state => {
          if (state.curAnimation === state.animationSet.idle) {
            return { curAnimation: state.animationSet.action2 }
          }
          return {}
        })
      },

      action3: () => {
        set(state => {
          if (state.curAnimation === state.animationSet.idle) {
            return { curAnimation: state.animationSet.action3 }
          }
          return {}
        })
      },

      action4: () => {
        set(state => {
          if (
            state.curAnimation === state.animationSet.idle ||
            state.curAnimation === state.animationSet.walk ||
            state.curAnimation === state.animationSet.run
          ) {
            return { curAnimation: state.animationSet.action4 }
          }
          return {}
        })
      }

      /**
       * Additional animations
       */
      // triggerFunction: ()=>{
      //    set((state) => {
      //        return { curAnimation: state.animationSet.additionalAnimation };
      //    });
      // }
    }
  })
)
