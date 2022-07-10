import React,{useRef,useEffect} from "react";
import { Container } from "reactstrap";
import './Navbar.css';

const navLink = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Services",
    url: "#services",
  },
  {
    name: "Portfolio",
    url: "#portfolio",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

const Navbar = () => {

  const headerRef = useRef(null);
  const menuRef =useRef(null);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 )
      {
        headerRef.current.classList.add('header__shrink');
      }else{
        headerRef.current.classList.remove('header__shrink');
      }
    })
    return ()=>{
      window.removeEventListener('scroll',this);
    };
  },[]);

  const menuToggle=()=> {menuRef.current.classList.toggle('menu__active');};


  // const handleClick =(e)=>{
  //   e.preventDefault();
  //   const targetAttr = e.target.getAttribute('href')
  //   const location= document.querySelector(targetAttr).offSetTop;

  //   window.scrollTo({
  //     left:0,
  //     top: location - 70,
  //   })
  // }  

  return (
    <>
      <header className="header" ref={headerRef}>
        <Container>
          <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo"><h5><a href="#home">Kalpit</a></h5></div>

            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                <ul className="nav__list">
                {navLink.map((item, index) => (
                    <li className="nav__item" key={index}>
                    {/* <a href={item.url} onClick={handleClick}>{item.name}</a> */}
                    <a href={item.url} onClick={()=>(document.title="Kalpit Prajapati | "+item.name )}>{item.name}</a>
                    </li>
                ))}
                </ul>
                <div  className="close__btn">
                <span><i className="ri-close-circle-fill"></i></span>
            </div>
            </div>
            

            <div className="nav__right d-flex align-items-center gap-4">
                <button className="btn contact__btn"><a href="#contact" onClick={()=>(document.title="Kalpit Prajapati | Contact")}>let's Talk</a></button>
                <span className="mobile__menu"><i className="ri-menu-5-line" onClick={menuToggle}></i></span>
            </div>

          </div>
          
        </Container>
      </header>
    </>
  );
};

export default Navbar;
