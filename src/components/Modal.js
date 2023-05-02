
import ReactDOM from "react-dom"
import Link from "./Link"
function Modal({onSelect}) {
  const handleClick = () => {
    onSelect()
  }
  return  ReactDOM.createPortal(
  <div>
    <div  className="fixed inset-0 bg-white">
    </div>
    <div className="fixed inset-0 p-10 bg-white">
      <span className="text-5xl cursor-pointer"onClick={handleClick}>X</span>
      <div className="flex items-center justify-center flex-col gap-10 h-full">
        <Link className="text-5xl ">Home</Link>
        <Link className="text-5xl ">About</Link>
        <Link className="text-5xl ">Models</Link>
        <Link className="text-5xl ">Testimonials</Link>
        <Link className="text-5xl ">Our Team</Link>
        <Link className="text-5xl ">Contact</Link>
        <div className="flex justify-end">
        </div>
      </div>
    </div>
  </div>, document.querySelector(".portal-modal")
  )
}

export default Modal
