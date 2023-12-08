import React from 'react';
import './MiniSettingsWindowstyle.css'; 

function MiniSettingsWindowstyle({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
}

export default MiniSettingsWindowstyle;