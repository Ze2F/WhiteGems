import style from '@Styles/cardpanel.component.module.css';
import { useEffect } from 'react';

export default function CardPanel() {

  useEffect(() => {
    if (document.readyState === 'complete') {
      const pCard = document.getElementById('card-drop')
      pCard?.childNodes.forEach((element) => {
        return addDAGEvent(element as Element);
      });
      addEventListener("wheel", onWhell);
    }
  }, [])

  function onWhell(ev:any) {
    const pCard = document.getElementById('card-drop')
    if (ev.deltaY > 0) pCard?.insertBefore(pCard.lastChild as Element, pCard.firstChild)
    if (ev.deltaY < 0) pCard?.appendChild(pCard.firstChild as Element)
  }

  function addDAGEvent(ev: Element) {
    ev?.setAttribute("draggable", "true");
    ev?.addEventListener("dragstart", onDrag);
    ev?.addEventListener("dragover", onDragOver);
    ev?.addEventListener("drop", onDrop);
  }

  function onDragOver(ev: any) {
    if (ev.target.draggable === true) {
      ev.preventDefault();
    }
  }

  function onDrag(ev: any) {
    ev.dataTransfer.setData("card", ev.target.id);
  }

  function onDrop(ev: any) {
    ev.preventDefault();

    const card = ev.dataTransfer.getData("card");
    const drag = document.getElementById(card);
    const trag = ev.target;

    const nDrag = drag?.cloneNode(true) as Element;
    addDAGEvent(nDrag);


    trag.replaceWith(nDrag);
    drag?.replaceWith(trag);
  }

  return (
    <>
      <div className={`${style.bg_card}`}>
        <div id='card-drop' className={`${style.container_card}`} onDragStart={(e) => { onDrag(e) }}>
          <div id='card-1' className={`bg-red-100 ${style.wild_card}`}>
            <h1 className={`${style.title_card}`} >Home</h1>
            <img className={`${style.img_card}`} loading="lazy" src='/assets/img/genshin_cover/Klee_Card.webp' alt='' />
          </div>
          <div id='card-2' className={`bg-yellow-100 ${style.wild_card}`}>
            <h1 className={`${style.title_card}`} >About</h1>
            <img className={`${style.img_card}`} loading="lazy" src='/assets/img/genshin_cover/Zhongli_Card.webp' alt=''/>
          </div>
          <div id='card-3' className={`bg-blue-100 ${style.wild_card}`}>
            <h1 className={`${style.title_card}`} >Contact</h1>
            <img className={`${style.img_card}`} loading="lazy" src='/assets/img/genshin_cover/Neuvillette_Card.webp' alt=''/>
          </div>
          <div id='card-4' className={`bg-purple-100 ${style.wild_card}`}>
            <h1 className={`${style.title_card}`} >Project</h1>
            <img className={`${style.img_card}`} loading="lazy" src='/assets/img/genshin_cover/Raiden_Shogun_Card.webp' alt=''/>
          </div>
        </div >
      </div>
    </>
  )
}