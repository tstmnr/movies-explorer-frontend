import './Overlay.css'

function  Overlay({ isOpenHamburgerMenu, ...props }) {

  const overlayClassName = `overlay ${isOpenHamburgerMenu ? 'overlay_active' : ''}`

  return (
    <div className={overlayClassName}>
      {props.children}
    </div>
  );
}

export default Overlay;
