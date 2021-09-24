function Form({weight, height, onWeightChange, onHeightChange, onCalcClick}) {

  const handleClick = (e) => {
    e.preventDefault();
    onCalcClick();
  }

  return (
    <form className="Form">
      <label>Weight (in kg)
        <input
          value={weight}
          placeholder="50"
          onChange={e => onWeightChange(e.target.value)}
        />
      </label>
      {' '}
      <label>Height (in cm)
        <input
          value={height}
          placeholder="176"
          onChange={e => onHeightChange(e.target.value)}
        />
      </label>
      <p>
        <button onClick={handleClick}>Calculate BMI</button>
      </p>
    </form>
  );
}

export default Form;
