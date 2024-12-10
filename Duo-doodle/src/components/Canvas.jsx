import { useRef, useEffect } from "react";

import { PiRectangle } from "react-icons/pi";
import { GoCircle } from "react-icons/go";
import { IoTriangleOutline } from "react-icons/io5";
import { BsBrush } from "react-icons/bs";
import { BsEraser } from "react-icons/bs";

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

  canvas.addEventListener(`mousedown`, () => startDrawing(context));
  canvas.addEventListener(`mousemove`, (e) => draw(context, e));
  canvas.addEventListener(`mouseup`, () => isDrawing = false);
  }, [draw]);

  return (
    <>
      <div className="container">
        <section className="tools-board">
          <div className="row">
            <label className="title">Shapes</label>
            <ul className="options">
              <li className="option">
                <PiRectangle />
                <span>Rectangle</span>
              </li>
              <li className="option">
                <GoCircle />
                <span>Circle</span>
              </li>
              <li className="option">
                <IoTriangleOutline />
                <span>Triangle</span>
              </li>
              <li>
                <label>
                  <input type="checkbox"/>
                  Fill Color
                </label>
              </li>
            </ul>
          </div>
          <div className="row">
            <label className="title">Options</label>
            <ul className="options">
              <li className="option">
                <BsBrush />
                <span>Brush</span>
              </li>
              <li className="option">
                <BsEraser />
                <span>Eraser</span>
              </li>
              <li>
                <input type="range" id="size-slider"/>
              </li>
            </ul>
          </div>
          <div className="row">
            <label className="title">Colors</label>
            <ul className="options">
              <li className="option"></li>
              <li className="option"></li>
              <li className="option"></li>
              <li className="option"></li>
              <li className="option"></li>
            </ul>
          </div>
          <div className="row">
            <button className="clear-canvas">Clear Canvas</button>
            <button className="save-img">Save Drawing</button>
          </div>
        </section>
        <canvas id="canvas"></canvas>
      </div>
    </>
  )
}

export default Canvas