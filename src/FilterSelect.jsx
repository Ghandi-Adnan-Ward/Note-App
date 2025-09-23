/* eslint-disable no-unused-vars */
// FilterSelect.jsx
import React from 'react';
import Select from 'react-select';
import './custom-select.css';

const filterOptions = [
  { value: 'all', label: 'الكل' },
  { value: 'completed', label: 'المكتملة' },
  { value: 'active', label: 'غير مكتملة' },
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

export default function FilterSelect({ value, onChange }) {
  const selectedOption = filterOptions.find((opt) => opt.value === value);

  return (
    <Select
      classNamePrefix="custom-select"
      options={filterOptions}
      value={selectedOption}
      onChange={(selected) => onChange(selected.value)}
      placeholder="تصفية..."
      isRtl
      />
  );
}
