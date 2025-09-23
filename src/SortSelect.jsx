// SortSelect.jsx
import React from 'react';
import Select from 'react-select';
import './Sort.css'
const sortOptions = [
  { value: 'newest', label: '📅 الأحدث أولًا' },
  { value: 'oldest', label: '📂 الأقدم أولًا' },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    direction: 'rtl',
    borderRadius: '6px',
    borderColor: state.isFocused ? '#007bff' : '#ccc',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(0,123,255,0.25)' : 'none',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: '#007bff',
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused
      ? '#e7f1ff'
      : state.isSelected
      ? '#007bff'
      : '#fff',
    color: state.isFocused || state.isSelected ? '#000' : '#333',
    padding: 10,
    cursor: 'pointer',
    fontWeight: state.isSelected ? 'bold' : 'normal',
    transition: 'background-color 0.2s ease',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#333',
  }),
};

export default function SortSelect({ value, onChange }) {
  const selectedOption = sortOptions.find((opt) => opt.value === value);

  return (
    <Select
      options={sortOptions}
      value={selectedOption}
      onChange={(selected) => onChange(selected.value)}
      placeholder="ترتيب..."
      isRtl
      styles={customStyles}
    />
  );
}
