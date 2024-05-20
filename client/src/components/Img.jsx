  // eslint-disable-next-line react/prop-types
  const Img = ({ isLarge, img, caption }) => {

    if (isLarge) {
      console.log('large' + caption);
      return (
        <div className="flex flex-col justify-center items-center my-7">
          <h1 className="text-3xl pb-5 font-bold">{caption}</h1>
          <img src={img} alt={caption} className="w-[700px] h-[400px]" />
        </div>
      );
    } else {
      console.log('small '+caption);
      return <img src={img} alt={caption}/>;
    }
  }

  export default Img;
