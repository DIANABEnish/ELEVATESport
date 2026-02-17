import { useState, useRef, useEffect } from "react";
import "./CustomSelect.scss";

interface CustomSelectProps {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const CustomSelect = ({ options, value, onChange, placeholder = "Select" }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value || "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div className={`custom-select ${isOpen ? "open" : ""}`} ref={ref}>
      <div className="select-trigger" onClick={() => setIsOpen(!isOpen)}>
        <span className={selected ? "has-value" : "placeholder"}>
          {selected || placeholder}
        </span>
        <span className="arrow">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#ff523b" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </div>

      {isOpen && (
        <ul className="select-dropdown">
          {options.map((option, i) => (
            <li
              key={i}
              className={`select-option ${selected === option ? "selected" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option}
              {selected === option && (
                <svg className="check" width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5L5 9L13 1" stroke="#ff523b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;