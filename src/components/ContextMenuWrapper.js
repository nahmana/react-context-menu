import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';

const ContextMenuWrapper = (props) => {

	const {menuPosition, setMenuPosition} = props;

	const closeContextEvent = useCallback(
		(event) => {
			// If user clicks outside the contextMenu window, then close contextMenu by calling closeContextMenu()
			if ( !event.target.matches("#context-menu") ) {
				closeContextMenu();
			}
		  },
	  [],
	)
	
	const closeContextMenu = () => {
	  document.querySelector("#context-menu").style.display = "none";
	  setMenuPosition(null);
	}

	useEffect(() => {
		document.addEventListener( "click", closeContextEvent)
	
		return () => {
			document.removeEventListener( "click", closeContextEvent)
		}
	}, [closeContextEvent]);
	

  return (
	<ContextMenu id={"context-menu"} menuPosition={menuPosition}>ContextMenuWrapper
	<div>f</div>
	<div>f</div>
	<div>f</div>
	<div>f</div>
	
	
	</ContextMenu>
  )
}

export default ContextMenuWrapper;

const ContextMenu = styled.div`
	position: absolute;
	Background-color: light-green;
	left: ${props => props.menuPosition.left };
	top: ${props => props.menuPosition.top };
`