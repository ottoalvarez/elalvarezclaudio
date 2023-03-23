export const NavBar = () => {
  return (
    <>
        <div className="fkNavBar">
            <div className="fkNavBar__column"><img src='../src/assets/brandLogo.png' alt="" className="fkNavBar__column__brand" /></div>
            <div className="fkNavBar__column"><span className="material-symbols-outlined fkNavBar__column__md-icon">menu</span></div> 
        </div>

        <div className="Menu">
          <div className="Menu__row">
            <div className="Menu__option">Home</div>
            <div className="Menu__option">Services</div>
            <div className="Menu__option">Blog</div>
            <div className="Menu__option">Contact</div>
          </div>
        </div>
    </>
  )
}