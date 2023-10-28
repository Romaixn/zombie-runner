import { useProgress } from "@react-three/drei"
import useGame from "./stores/useGame"
import { css } from "../styled-system/css"
import { center } from "../styled-system/patterns"

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
            transition: 'opacity 1.5s',
        })}>
            <img
                className={css({
                    aspectRatio: '16 / 9',
                    objectFit: 'cover',
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    filter: 'blur(4px)',
                })}
                src="/images/waiting.png" alt="Screenshot of the game"
            />
            <div className={css(phase !== 'welcome' && {
                opacity: 0
            }, {
                padding: '4rem',
                paddingBottom: '2.5rem',
                backgroundColor: 'rgba(255, 165, 89, 0.7)',
                borderRadius: '2rem',
                textAlign: 'center',
                transition: 'opacity 0.4s',
                zIndex: 1,
                backdropFilter: 'blur(4px)',
            })}>
                <h1 className={css({
                    fontSize: '4rem',
                    fontFamily: 'shlop',
                    letterSpacing: '0.2rem',
                    color: 'white',
                    marginBottom: '1rem',
                })}>Get Ready for Zombie Runner!</h1>
                <button
                    className={css({
                        marginTop: '2rem',
                        marginBottom: '1rem',
                        padding: '8px 32px',
                        backgroundColor: { base: 'rgba(255, 96, 0, 1)', _hover: 'rgba(255, 96, 0, 0.42)'},
                        color: 'white',
                        border: 'none',
                        fontSize: '2.5rem',
                        borderRadius: '8px',
                        transition: 'background-color 0.4s',
                        cursor: { _disabled: 'not-allowed', _hover: 'pointer' },
                        _disabled: { opacity: 0.3 }
                    })}
                    disabled={progress < 100}
                    onClick={start}
                >
                    Unleash the game
                </button>
               <div
                    className={center({
                        marginTop: '2.5rem',
                        flexDirection: 'column',
                    })}
                >
                    <div
                        className={css({
                            overflow: 'hidden',
                            borderRadius: 'lg',
                            backgroundColor: 'rgba(229, 231, 235, 1)',
                            width: '18rem',
                        })}
                    >
                        <div
                            className={css({
                                height: '0.5rem',
                                borderRadius: 'lg',
                                backgroundColor: 'rgb(255, 96, 0)',
                                transition: `width 0.4s`,
                            })}
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>

                    <div className={css(progress >= 100 &&
                        { opacity: 0 },
                        { textAlign: 'center', fontSize: '1.5rem', color: 'rgb(69 69 69)', transition: 'opacity .4s' })}>
                        <p>World is loading...</p>
                    </div>
                </div>
            </div>
            <p className={css({
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                zIndex: 1,
                color: 'white',
                pointerEvents: 'auto'
            })}>Made with ❤️ by <a href='https://rherault.dev' target="_blank">rherault</a></p>
        </div>
    )
}
