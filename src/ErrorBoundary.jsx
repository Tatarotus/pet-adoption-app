import { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    // Typically log this to an error reporting service like Sentry, TrackJS or NewRelic
    console.error('ErrorBoundary caught an error', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to='/'>Click here</Link>{' '}
          to back to the home page or wait five seconds.
        </h1>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
