import React from 'react';
import './sideBarOption.css'

const SideBarOption = ({option, isActive}) => {
    const classList = isActive ? "sideBarOption active": "sideBarOption";
  return (
    <div className={classList}>
        <div className='sidebar-icon'>{option.icon}</div>
        {option.name && <label className='sidebar-label'>{option.name}</label>}
    </div>
  )
}

export default SideBarOption