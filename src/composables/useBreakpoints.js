import {
    breakpointsTailwind,
    useBreakpoints
} from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md') // only smaller than lg
const activeBreakpoint = breakpoints.active();

export const viewport = { isMobile, activeBreakpoint}