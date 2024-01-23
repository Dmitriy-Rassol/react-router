import './OpenPage.css'
import { useState } from "react";

const OpenPage = () => {
  const [linkUrl, setLinkUrl] = useState("");

  const handleOpen = () => {
    window.open(linkUrl, "_blank", "");
  };

  const handleInputChange = (event) => {
    setLinkUrl(event.target.value);
  };

  return (
    <div>
      <h2>Страница с кнопкой Открыть</h2>
      <div className="form-container">
        <input
        className='form-container__input'
          type="text"
          value={linkUrl}
          onChange={handleInputChange}
          placeholder="Введите URL ссылки"
        />
        <button onClick={handleOpen}>Открыть в новой вкладке</button>
      </div>
    </div>
  );
};

export default OpenPage;
