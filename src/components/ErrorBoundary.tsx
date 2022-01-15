import React, { Component } from 'react';
import ErrorScreen from './ErrorScreen';

interface FallbackProps {
  error: Error | null;
}

interface Props {
  children: React.ReactNode;
  fallback?: React.ComponentType<FallbackProps>;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    const { error }: State = this.state;
    const { children, fallback: Fallback }: Props = this.props;

    if (error && !Fallback) return <ErrorScreen error={error} />;
    if (error && Fallback) return <Fallback error={error} />;
    return children;
  }
}

export default ErrorBoundary;
export type { FallbackProps };
