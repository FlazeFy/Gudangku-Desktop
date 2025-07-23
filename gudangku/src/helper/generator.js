export const generateSleepTime = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}