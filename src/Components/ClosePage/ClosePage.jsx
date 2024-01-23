const ClosePage = () => {
  const handleClosePage = () => {
    if (window.confirm("Вы уверены, что хотите закрыть страницу?")) {
      window.open("about:blank", "_self");
      window.close();
    }
  };

  return (
    <div>
      <h2>Страница с кнопкой Закрыть</h2>
      <p>Нажмите на кнопку, чтобы закрыть страницу</p>
      <button onClick={handleClosePage}>Закрыть окно</button>
    </div>
  );
};

export default ClosePage;
