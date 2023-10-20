import { useProgress } from "@react-three/drei"
import useGame from "./stores/useGame"
import { css } from "../styled-system/css"

export function LoadingScreen() {
    const { progress } = useProgress()
    const start = useGame((state) => state.start)
    const phase = useGame((state) => state.phase)

    return (
        <div className={css(phase !== 'welcome' && {
            opacity: 0,
            pointerEvents: 'none'
        }, {
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 1.5s'
        })}>
            <div className={css({
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                height: '12px'
            })}>
                <div
                    className={css({
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgb(0 0 0 / 50%)',
                        transition: `width 0.4s`,
                    })}
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
            <div className={css(phase !== 'welcome' && {
                opacity: 0
            }, {
                padding: '4rem',
                backgroundColor: 'rgb(22 160 75 / 42%)',
                borderRadius: '2rem',
                textAlign: 'center',
                transition: 'opacity 0.4s'
            })}>
                <h1 className={css({
                    fontSize: '4rem',
                    color: 'rgba(0, 0, 0, 0.5)',
                    margin: 0,
                    marginBottom: '8px',
                })}>Zombie Runner</h1>
                <button
                    className={css({
                        padding: '8px 32px',
                        backgroundColor: { base: 'rgba(0, 0, 0, 0.24)', _hover: 'rgba(0, 0, 0, 0.42)'},
                        color: 'white',
                        border: 'none',
                        fontWeight: 'bold',
                        fontSize: '2.5rem',
                        borderRadius: '8px',
                        transition: 'background-color 0.4s',
                        cursor: { _disabled: 'not-allowed', _hover: 'pointer' },
                        _disabled: { opacity: 0.3 }
                    })}
                    disabled={progress < 100}
                    onClick={start}
                >
                    Start
                </button>
            </div>
        </div>
    )
}
