export const requestPointerLock = (element) => {
    if (element && !document.pointerLockElement) {
        element.requestPointerLock();
    }
};

export const exitPointerLock = () => {
    if (document.pointerLockElement) {
        document.exitPointerLock();
    }
};
