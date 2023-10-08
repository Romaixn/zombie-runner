import { SSR, DepthOfField, EffectComposer } from "@react-three/postprocessing"

export default function Effects() {
    return <EffectComposer>
        <DepthOfField
            focusDistance={ 0.05 }
            focalLength={ 0.2 }
            bokehScale={ 3 }
        />
    </EffectComposer>
}
