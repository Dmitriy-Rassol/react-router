const ViewPortInfo = () => {
  return (
    <>
      <div>
        <p>
          ViewPort: {window.innerWidth} x {window.innerHeight}
        </p>
        <p>Плотность пикселей: {window.devicePixelRatio}</p>
      </div>
    </>
  );
};

export default ViewPortInfo;
