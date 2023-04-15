import { useCallback, useEffect, useState } from 'react';
import './scss/index.css';

export const SideBar = () => {
 const [animate, setAnimate] = useState(false);

 const style = {
  opacity: animate ? 1 : 0,
  color: 'blue',
  transition: 'opacity 2s ease-in-out 0.55s'
 }
 const createObserver = useCallback(() => {
  const config = {
   root: null
  }
  
  const ob = new IntersectionObserver((e) => {
   e.map((e) => {
    return e.isIntersecting ? setAnimate(() => true) : setAnimate(() => false);
   })
  }, config)
  const el = document.querySelectorAll('div.side-bar-container');
  el.forEach((e) => {
   ob.observe(e);
  });
 }, [])
 useEffect(() => {
  createObserver()
 }, [createObserver])
 return (
  <aside className="side-bar">
   <div 
    className="side-bar-container" 
    style={style}
   >
    <h1>Pequenas linhas</h1>
    <p>Repositório onde se encontra todos os códigos desse pequeno projeto.</p>
   </div>
   <div 
    className="side-bar-container"
    style={style}
   >
    <h1>Sobre o projeto</h1>
    <p>Esse projeto foi inspirado no <a href="https://codesandbox.io" style={{textDecoration: 'none', color: '#a3a3a3'}}>CodeSandBox.io</a></p>
   </div>
  </aside>
 )
}