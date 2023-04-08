import Styles from "./filtermodal.module.css";

export default function Filtermodal(props) {
  const { title, options, onSelect, onClose } = props;

  return (
    <div className={Styles.popup_container}>
      <div className={Styles.popup_content}>
        <h2>{title}</h2>
        {options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={option.value}
              name="filter"
              value={option.value}
              onChange={onSelect}
              onClick={onClose}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
