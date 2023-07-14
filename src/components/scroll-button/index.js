import { ButtonDefault } from '../buttons/scroll-btn.js/scroll-btn';
  
const ScrollButton = () =>{ 
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'      
    });
  };

  return (
    <ButtonDefault onClick={scrollToTop}> Ir para o topo    
    </ButtonDefault>
  );
}
  
export default ScrollButton;


