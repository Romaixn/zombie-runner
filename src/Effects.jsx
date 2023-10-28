import { SSR, DepthOfField, EffectComposer, Noise, Bloom, Vignette } from "@react-three/postprocessing"

export function Effects() {
    return <EffectComposer disableNormalPass multisampling={4}>
    </EffectComposer>
}
