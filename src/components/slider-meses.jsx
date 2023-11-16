import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

function SliderMensu() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-end mb-3">
        <h3>Plazo</h3>
        <input
          name="myInput"
          defaultValue="3"
          className="form-control"
          style={{ fontSize: '0.8rem' }}
        />
      </div>

      <Slider min={3} max={24} />

      <div className="d-flex justify-content-between mt-3">
        <p>3</p>
        <p>24 </p>
      </div>
    </div>
  )
}

export default SliderMensu
