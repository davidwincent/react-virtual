type ScrollAlignment = 'start' | 'center' | 'end' | 'auto'

interface ScrollToOptions {
  align: ScrollAlignment
}

interface ScrollToOffsetOptions extends ScrollToOptions {}
interface ScrollToIndexOptions extends ScrollToOptions {}

export type VirtualItem = {
  index: number
  start: number
  end: number
  size: number
  measureRef: React.RefObject<any>
}

declare function useVirtual<T>(options: {
  size: number
  parentRef: React.RefObject<T>
  estimateSize?: (index: number) => number
  overscan?: number
  horizontal?: boolean
  scrollToFn?: (
    offset: number,
    defaultScrollToFn?: (offset: number) => void
  ) => void
  paddingStart?: number
  paddingEnd?: number
  useObserver?: (
    ref: React.RefObject<T>
  ) => {
    width: number
    height: number
    [key: string]: any
  }
}): {
  virtualItems: VirtualItem[]
  totalSize: number
  scrollToOffset: (index: number, options?: ScrollToOffsetOptions) => void
  scrollToIndex: (index: number, options?: ScrollToIndexOptions) => void
  measure: () => void
}

export { useVirtual }
