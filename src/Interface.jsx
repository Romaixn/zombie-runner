import useGame from "./stores/useGame"
import { css } from "../styled-system/css"
import { center } from '../styled-system/patterns'
import { useKeyboardControls } from "@react-three/drei"

export default function Interface() {
    const soundPlaying = useGame((state) => state.soundPlaying)
    const toggleSound = useGame((state) => state.toggleSound)
    const countArmy = useGame((state) => state.countArmy)
    const phase = useGame((state) => state.phase)
    const status = useGame((state) => state.status)
    const restart = useGame((state) => state.restart)

    const forward = useKeyboardControls((state) => state.forward)
    const backward = useKeyboardControls((state) => state.backward)
    const leftward = useKeyboardControls((state) => state.leftward)
    const rightward = useKeyboardControls((state) => state.rightward)
    const jump = useKeyboardControls((state) => state.jump)

    return <div className={css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
    })}>
        {phase === 'game' && (
            <div className={css({
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
            })}>
                <p className={css({
                    color: '#fff',
                    fontSize: '2.5rem',
                    fontFamily: 'shlop',
                    letterSpacing: '0.2rem',
                })}>{countArmy} points</p>
            </div>
        )}

        <div className={css({
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            cursor: 'pointer',
            pointerEvents: 'auto',
        })} onClick={toggleSound}>
            {soundPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={css({ color: '#fff', width: '3rem' })}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={css({ color: '#fff', width: '3rem' })}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
            )}
        </div>

        <div className="controls">
            {phase !== 'game' && (
                <div className="raw">
                    <div className={ `key ${ forward ? 'active' : '' }` }>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={css({ color: '#fff', width: '1.5rem' })}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                        </svg>
                    </div>
                </div>
            )}
            <div className="raw">
                <div className={ `key ${ leftward ? 'active' : '' }` }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={css({ color: '#fff', width: '1.5rem' })}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </div>
                {phase !== 'game' && (
                    <div className={ `key ${ backward ? 'active' : '' }` }>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={css({ color: '#fff', width: '1.5rem' })}>
                           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                        </svg>
                    </div>
                )}
                <div className={ `key ${ rightward ? 'active' : '' }` }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={css({ color: '#fff', width: '1.5rem' })}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
            {phase !== 'game' && (
                <div className="raw">
                    <div className={ `key large ${ jump ? 'active' : '' }` }></div>
                </div>
            )}
        </div>

        {status === 'lose' && (
            <div className={center({
                position: 'absolute',
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
            })}>
                <div className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '4rem',
                    backgroundColor: 'rgba(255, 165, 89, 0.7)',
                    borderRadius: '2rem',
                    backdropFilter: 'blur(4px)',
                })}>
                    <p className={css({
                        color: '#fff',
                        fontSize: '3rem',
                        textAlign: 'center',
                        paddingBottom: '1rem',
                    })}>You lose! 💀</p>
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
                        onClick={restart}
                    >
                        Restart the game
                    </button>
                </div>
            </div>
        )}

        {status === 'win' && (
            <div className={center({
                position: 'absolute',
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
            })}>
                <div className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '4rem',
                    backgroundColor: 'rgba(255, 165, 89, 0.7)',
                    borderRadius: '2rem',
                    backdropFilter: 'blur(4px)',
                })}>
                    <p className={css({
                        color: '#fff',
                        fontSize: '3rem',
                        textAlign: 'center',
                        paddingBottom: '1rem',
                    })}>You win! 🏆</p>
                    <p className={css({
                        color: '#fff',
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        paddingBottom: '1rem',
                    })}>With {countArmy} points.</p>
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
                        onClick={restart}
                    >
                        Restart the game (with more difficulty)
                    </button>
                </div>
            </div>
        )}
    </div>
}
