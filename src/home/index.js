import { useCallback, useEffect, useState } from 'react';
import './style.css';
import { motion } from 'framer-motion';
import { SideBar } from './sideBar';

export const Home = () => {

 const [animationStock, setAnimationStock] = useState(false);
 const createObserver = useCallback(() => {
  let option = {
   root: null,
  }
  let observer = new IntersectionObserver((e) => {
    e.map((e) => {
      return e.isIntersecting ? setAnimationStock(() => true) : setAnimationStock(() => false)
    })
  }, option)
  const element = document.querySelectorAll('section.sct-text');
  element.forEach((e) => {
   observer.observe(e)
  })
 }, [])

 useEffect(() => {
  createObserver()
 }, [createObserver])
  return (
    <main className="Home">
     <article className="home-article">
      <section className="sct-text">
       <motion.h1>Desenvolva. Persista. Conquiste.
        <div className="sct-text-content">
         <div 
          className="sct-text-one" 
          aria_stock={animationStock.toString()}
          style={{color: animationStock ? 'var(--begColor)' : 'transparent'}}
         >
          <span>D</span>
          <span>e</span>
          <span>s</span>
          <span>e</span>
          <span>n</span>
          <span>v</span>
          <span>o</span>
          <span>l</span>
          <span>v</span>
          <span>a</span>
          <span>.</span>
         </div>
        </div>
        <div className="sct-text-content">
         <div 
          className="sct-text-two" 
          aria_stock={animationStock.toString()}
          style={{color: animationStock ? 'var(--begColor400)' : 'transparent'}} 
         >
          <span>P</span>
          <span>e</span>
          <span>r</span>
          <span>s</span>
          <span>i</span>
          <span>s</span>
          <span>t</span>
          <span>a</span>
          <span>.</span>
         </div>
        </div>
        <div className="sct-text-content">
         <div 
          className="sct-text-three" 
          aria_stock={animationStock.toString()}
          style={{color: animationStock ? 'var(--begColor200)' : 'transparent'}} 
         >
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>q</span>
          <span>u</span>
          <span>i</span>
          <span>s</span>
          <span>t</span>
          <span>e</span>
          <span>.</span>
         </div>
        </div>
       </motion.h1>
      </section>
     </article>
     <SideBar />
    </main>
  );
}
