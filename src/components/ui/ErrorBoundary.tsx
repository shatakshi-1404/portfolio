import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  fallback: ReactNode
  children: ReactNode
}

interface State {
  failed: boolean
}

/** Keeps the page alive if WebGL fails to initialise (old GPUs, blocked contexts). */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false }

  static getDerivedStateFromError(): State {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.warn('3D scene failed, using fallback.', error, info)
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}
