import SliderMonto from './components/slider-monto'

import SliderMensu from './components/slider-meses'

function App() {
  return (
    <>
      <div className="container-sm my-5 vh-100 d-flex align-items-center justify-content-center">
        <main className="text-center m-3 vh-100 d-flex flex-column w-100">
          <h1 className="fs-1 fw-bold">Simulá tu crédito</h1>
          <SliderMonto />
          <SliderMensu />
          <p>calculadora</p>
        </main>
      </div>
    </>
  )
}

export default App

// border border-bottom-0
