// PrioritySelect.jsx
import React from 'react';
import Select from 'react-select';

const priorityOptions = [
  { value: 'low', label: 'أولوية منخفضة' },
  { value: 'medium', label: 'أولوية متوسطة' },
  { value: 'high', label: 'أولوية عالية' },
];

 

export default function PrioritySelect({ value, onChange }) {
  const selectedOption = priorityOptions.find((opt) => opt.value === value);

  return (
    <Select
      classNamePrefix='custom-select'
      options={priorityOptions}
      value={selectedOption}
      onChange={(selected) => onChange(selected.value)}
      placeholder="اختر الأولوية"
      isRtl
    //   styles={customStyles}
    
    />
   );
}
