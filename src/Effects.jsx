import { EffectComposer, Bloom, Vignette, ToneMapping } from "@react-three/postprocessing"
import { BlendFunction } from 'postprocessing'

export function Effects() {
    return <EffectComposer disableNormalPass multisampling={4}>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <ToneMapping
            blendFunction={BlendFunction.NORMAL} // blend mode
            adaptive={true} // toggle adaptive luminance map usage
            resolution={128} // texture resolution of the luminance map
            middleGrey={0.6} // middle grey factor
            maxLuminance={10.0} // maximum luminance
            averageLuminance={1.0} // average luminance
            adaptationRate={1.0} // luminance adaptation rate
        />
          <Vignette
            offset={0.5} // vignette offset
            darkness={0.5} // vignette darkness
            eskil={false} // Eskil's vignette technique
            blendFunction={BlendFunction.NORMAL} // blend mode
        />
    </EffectComposer>
}
