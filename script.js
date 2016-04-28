Array
  .from(document.querySelectorAll('.m-service .m-button-more-info'))
  .forEach( button => button.addEventListener( 'click', event => {
    const
      tile = event.target.parentNode.parentNode,
      classes = new Set( tile.className.split(' ') );
    if ( classes.has( 'mod-details' ) ) {
      classes.delete('mod-details');
      classes.delete('mod-times');
      event.target.innerText = 'More Info';
    } else {
      classes.add('mod-details');
      event.target.innerText = 'X';
    }
    tile.className = Array.from(classes).join(' ');
  } ) );

Array
  .from(document.querySelectorAll('.m-service .m-button-times'))
  .forEach( button => button.addEventListener( 'click', event => {
    const tile = event.target.parentNode.parentNode;
    tile.className = Array.from( new Set( tile.className.split(' ') ).add('mod-times') ).join(' ');
  } ) );

Array
  .from(document.querySelectorAll('.m-header .m-button-more-info'))
  .forEach( button => button.addEventListener( 'click', event => {
    const
      tile = event.target.parentNode.parentNode,
      classes = new Set( tile.className.split(' ') );
    if ( classes.has( 'mod-details' ) ) {
      classes.delete('mod-details');
      event.target.innerText = 'More Info';
    } else {
      classes.add('mod-details');
      event.target.innerText = 'X';
    }
    tile.className = Array.from(classes).join(' ');
  } ) );


Array
  .from(document.querySelectorAll('.m-editable-list-location'))
  .forEach( location => location.addEventListener( 'click', event => {
    const
      tile = event.target,
      classes = new Set( tile.className.split(' ') );
    if ( classes.has( 'mod-active' ) ) {
      classes.delete('mod-active');
    } else {
      classes.add('mod-active');
    }
    tile.className = Array.from(classes).join(' ');
  } ) );

document.querySelector('.m-editable-list').style.height = 20 + 38 * ( 1 + Array.from(document.querySelectorAll('.m-editable-list .m-editable-list-location')).length );

document.querySelector('.m-editable-list .m-button').addEventListener( 'click', event => {

  const
    menu = event.target.parentNode,
    classes = new Set( menu.className.split(' ') );
  if ( classes.has( 'mod-closed' ) ) {
    classes.delete('mod-closed');
    window.setTimeout( () => {event.target.innerText = 'Hide Location List'},300);
  } else {
    classes.add('mod-closed');
    window.setTimeout( () => {event.target.innerText = 'View Location List'},300);
  }

  menu.className = Array.from(classes).join(' ');

} );