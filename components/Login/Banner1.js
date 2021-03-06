import AtomSlider7 from "@components/common/Atom/AtomSlider7";

export default function Banner1({
  defaultStyle = {},
  defaultClassName = "",
  fade = true,
}) {
  return (
    <AtomSlider7>
      {data.map((item, index) => (
        <div key={index} className='bg-yellow-700 h-screen'>
          <div className='relative w-full h-full'>
            <img
              className={`object-center object-cover w-full h-full`}
              src={item.image}
              alt='background-image'
              role='img'
            />
            {fade && (
              <div className='w-full h-full absolute inset-0 bg-black bg-opacity-30'></div>
            )}

            <div
              className={`px-4 md:px-10 lg:px-24 absolute w-full flex flex-col justify-center h-full inset-0`}
            >
              {item.title && (
                <h1
                  className={`text-xl md:text-3xl lg:text-4xl leading-5 md:leading-7 lg:leading-9 font-semibold text-white `}
                >
                  {item.title}
                </h1>
              )}

              {item.description && (
                <p className='w-11/12 text-base md:text-xl lg:text-2xl leading-6 md:leading-5 font-normal lg:leading-6 text-white mt-2'>
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </AtomSlider7>
  );
}

const data = [
  {
    image:
      "https://res.cloudinary.com/dzih5nqhg/image/upload/v1631092477/cloud/icons/image_2021_05_27T08_17_40_579Z_1_xixs2l.jpg",
    title: "Welcome to",
    description: "Veritech Customer Experience Portal",
  },
  {
    image:
      "https://i.pinimg.com/originals/da/b4/e3/dab4e3397aacd82a8a847008d3a79842.jpg",
    title: "Toyota Avalon",
    description: "How to photograph cars like a pro - CNET cnet.com",
  },
  {
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/105A3/production/_119897966_gettyimages-946828612.jpg",
    title: "Robot Future",
    description:
      "Would you let a robot lawyer defend you? - BBC News Visit Images may be subject to copyright. Learn More",
  },
];
