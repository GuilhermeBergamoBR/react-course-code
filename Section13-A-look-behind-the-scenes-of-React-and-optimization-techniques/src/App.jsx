import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");
  const [chosenCount, setChosenCount] = useState(0); // valor inicial é 0

  // executa quando clica em "Set"
  function handleSetCount(newCount) { // passa o valor digitado no input
    console.log('antigo valor', chosenCount) // imprime valor antigo
    setChosenCount(newCount); // atualiza o estado com o número digitado
    console.log('novo valor', chosenCount) // imprime valor antigo
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={(newCount) => handleSetCount(newCount)} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
