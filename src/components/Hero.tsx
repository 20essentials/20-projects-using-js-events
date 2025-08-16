import '@/styles/Hero.css';
import { withBase } from '@/utils/functionsTs';
const img = withBase('/assets/js-events-logo.png');

export function Hero() {
  return (
    <article className='hero'>
      <h3>
        20 Projects Using Js Events <img src={img} alt='js Events' />
      </h3>
    </article>
  );
}
