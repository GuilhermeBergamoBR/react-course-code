import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  // método de ciclo de vida
  // quando adicionamos componentDidCatch,
  // ele transforma a classe um Error Boundary
  componentDidCatch(error) {
    console.log(error)
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Algo deu errado</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
