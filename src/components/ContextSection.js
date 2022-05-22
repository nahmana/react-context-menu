import React, { useCallback, useEffect, useState } from 'react';
import ContextMenuWrapper from './ContextMenuWrapper';

const ContextSection = () => {

	const [menuPosition, setMenuPosition] = useState(null);

	// Trigger right click
	const handleRightClick = ( event ) => {
		event.preventDefault();
		
		setMenuPosition({
		  top: event.pageY,
		  left: event.pageX
		});
	};
	


	return (
		<>
		<div tabIndex={1} onContextMenu={handleRightClick}>ContextSection</div>
		{menuPosition &&<ContextMenuWrapper setMenuPosition={setMenuPosition}  menuPosition={menuPosition}>context menu</ContextMenuWrapper>}
		</>

	)
}

export default ContextSection;
