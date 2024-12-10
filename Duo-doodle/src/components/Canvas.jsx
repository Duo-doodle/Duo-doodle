import { useRef, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  
  let isDrawing = false, brushWidth = 5;

  window.addEventListener("load", (canvas) => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }); 
  
  const startDrawing = (ctx) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = brushWidth
  }

  const draw = (ctx, e) => {
    if(!isDrawing) return;
    console.log(`hi`)
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
  }


  useEffect(() => {
  const canvas = document.querySelector(`canvas`);
  console.log(canvas);
  canvasRef.current = canvas;
  const context = canvas.getContext(`2d`);

  canvas.addEventListener(`mousedown`, () => startDrawing(context))
  canvas.addEventListener(`mousemove`, (e) => draw(context, e))
  canvas.addEventListener(`mouseup`, () => isDrawing = false)
  }, [draw])

  return (
    <>
      <canvas id="canvas"></canvas>
    </>
  )
}

export default Canvas