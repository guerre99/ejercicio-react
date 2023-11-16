import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

function SliderMonto() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-end mb-3">
        <h3>Monto total</h3>
        <input
          name="myInput"
          defaultValue="Monto total"
          className="form-control"
          style={{ fontSize: '0.8rem' }}
        />
      </div>

      <Slider min={5000} max={50000} />

      <div className="d-flex justify-content-between mt-3">
        <p>$ 5.000</p>
        <p>$ 50.000</p>
      </div>
    </div>
  )
}

export default SliderMonto
