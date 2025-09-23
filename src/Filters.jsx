import React from 'react'
import FilterSelect from './FilterSelect';
import SortSelect from './SortSelect';
const Filters = ({filterStatus,
    setFilterStatus,
    sortOrder,
    setSortOrder,
    searchQuery,
    setSearchQuery,}) => {
  
  return (
        
      <div className="filters">
        <div>
          <label>تصفية:</label>
          <FilterSelect value={filterStatus} onChange={setFilterStatus} />

        </div>

        <div>
          <label>ترتيب:</label>
          <SortSelect value={sortOrder} onChange={setSortOrder} />
        </div>

      <div>
 
      <input
          type="text"
          placeholder="🔍 ابحث عن ملاحظة..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="searchInput"
        />
      </div>

      </div>
  )
}

export default Filters