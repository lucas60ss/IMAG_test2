// import logo from "./logo.svg";
import "./app.scss";
import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";

function App() {
  const [selectBtn1, setSelectBtn1] = useState(null);
  const [selectBtn2, setSelectBtn2] = useState(null);
  const [moutainImage, setMoutainImage] = useState(null);
  const [image2, setImage2] = useState(null);

  // 選擇第一個按鈕
  const handleButtonClick1 = (button) => {
    setSelectBtn1(button);
    // 點擊按鈕時出現圖案
    if (button === "Moutain 1") {
      setMoutainImage("/images/mountain1.png");
    } else if (button === "Moutain 2") {
      setMoutainImage("/images/mountain2.png");
    } else {
      setMoutainImage(null);
    }
  };
  // console.log(selectBtn1);
  // 選擇第二個按鈕
  const handleButtonClick2 = (button) => {
    setSelectBtn2(button);
    if (button === "Sun") {
      setImage2("/images/Sun.png");
    } else if (button === "Moon") {
      setImage2("/images/Moon.png");
    } else {
      setImage2(null);
    }
  };

  // 抓ref圖片
  const middleImgRef = useRef(null);
  // 點擊下載圖片按鈕
  const handleDownload = () => {
    html2canvas(middleImgRef.current, {}).then((canvas) => {
      // canvas轉換為圖像URL
      const url = canvas.toDataURL("image/png");
      // 創建一個下載連結
      const link = document.createElement("a");
      link.href = url;
      link.download = "middle-img.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  return (
    <div className="container">
      <div className="top">
        <p>{selectBtn1}</p>
        <p>&</p>
        <p className="text2">{selectBtn2}</p>
      </div>
      <div className="middleIMG" ref={middleImgRef}>
        <img src={moutainImage} alt="" className="moutain1" />
        <img src={image2} alt="" className="image2" />
      </div>
      <div className="buttons">
        <button
          style={{
            backgroundColor:
              selectBtn1 === "Moutain 1"
                ? "#d1b4dd"
                : "rgb(240, 235, 241, 0.2)",
          }}
          onClick={() => handleButtonClick1("Moutain 1")}
        >
          Moutain 1
        </button>
        <button
          style={{
            backgroundColor:
              selectBtn1 === "Moutain 2"
                ? "#d1b4dd"
                : "rgb(240, 235, 241, 0.2)",
          }}
          onClick={() => handleButtonClick1("Moutain 2")}
        >
          Moutain 2
        </button>
        <button
          style={{
            backgroundColor:
              selectBtn2 === "Sun" ? "#d1b4dd" : "rgb(240, 235, 241, 0.2)",
          }}
          onClick={() => handleButtonClick2("Sun")}
        >
          Sun
        </button>
        <button
          style={{
            backgroundColor:
              selectBtn2 === "Moon" ? "#d1b4dd" : "rgb(240, 235, 241, 0.2)",
          }}
          onClick={() => handleButtonClick2("Moon")}
        >
          Moon
        </button>
        <button className="donload" onClick={handleDownload}>
          Donload card
        </button>
      </div>
    </div>
  );
}

export default App;
