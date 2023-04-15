import './scss/index.css';

export const  Header = () => {
 return (
  <header className="header-home">
   <a href="https://github.com/matheusYy">
    <p>Lumine</p>
   </a>
   <div className="navbar-home">
    <nav>
     <ol>
      <a href="./"><li>Contato</li></a>
      <a href="https://github.com/matheusYy?tab=repositories"><li>Repositórios</li></a>
     </ol>
    </nav>
   </div>
  </header>
 )
}