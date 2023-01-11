import { MdNoFood } from "react-icons/md";
import { BsCaretDown, BsInstagram, BsGithub, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './../home/home.css'
// import { RxInstagramLogo } from "react-icons/rx";


const phrases = ["Winter Is Coming", "Coffee Ready", "Frappe freezing"];

let Home = () => {
  let img = [
    "https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-1_tcm121-77064.jpg",
    "https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-2_tcm121-77065.jpg",
    "https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-3_tcm121-77066.jpg",
    "https://app.starbucks.com/weblx/images/drink-finder/iced_drink.png",
    "https://app.starbucks.com/weblx/images/drink-finder/hot_drink.png",
    "https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/SFLOwnedArt_tcm121-82220.jpg"]

  let socmed = [
    {name: "instagram", "url": "https://www.instagram.com/12rgilang/"},
    {name: "linkedin", "url": "https://www.linkedin.com/in/gilang-ramadhan-fullstackdev2022/"},
    {name: "facebook", "url": "https://www.facebook.com/gilang.ramadhan.39501789"},
    { name : "github", "url": "https://github.com/12rgilang"},
    { name: "twitter", "url": "https://twitter.com/G_R12/status/1574050538693758976"},
  ]
  ;

  const [isOpen, setIsOpen] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0])
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(phrases[index]);
      if(index === phrases.length -1){
        setIndex(0);
      }else {
        setIndex(index +1)
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [index])

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="parent flex">
          {/* left section */}
        <div className="left hidden md:h-screen md:sticky md:bottom-0 md:top-0 md:flex md:basis-2/5 justify-center items-center ">
          <div className="child flex my-fs-30 font-bold wavy wavy-text animated-texts">
            {currentPhrase}
          </div>
        </div>

        {/* right section */}
        {/* section 1 */}
        <div className="parent-right md:basis-3/5 border-x-4 space-x-8">
          {/* button righ bottom */}
        <div className="flex justify-end">
          <div className="flex m-3 fixed bottom-2">
            <div className="border-black text-white font-bold rounded-full px-3 py-3 my-bg-main justify-end text-lg">
              <Link to='/menu'>
                Start an order
              </Link>
            </div>
          </div>
        </div>
        <div className="rewards flex font-bold py-5 px-3">
            MAKANAN GRATIS
        </div>
        <div className="right flex">
        {/* item 1 */}
            <div className="item1 flex hvr-bob ">
              <div class="max-w-sm rounded-lg">
                  <img
                    class="rounded-lg"
                    src={img[0]}
                    alt=""
                  />
                <div class="p-1">
                  <a href="#">
                    <h5 class="mb-1 text-2xl font-bold ">
                      Food 
                    </h5>
                  </a>
                  <p class="mb-1 font-normal ">
                  Let us treat you—earn and redeem Stars for free drinks, food and more.
                  </p>
                </div>
              </div>
            </div>

            {/* item 2 */}
            <div className="item2 flex ml-2 mr-2 hvr-bob " >
            <div class="max-w-sm rounded-lg">
                  <img
                    class="rounded-lg"
                    src={img[1]}
                    alt=""
                  />
                <div class="p-1">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold ">
                      Take away
                    </h5>
                  </a>
                  <p class="mb-3 font-normal ">
                  Customize your order in the app and pick it up when it’s ready.
                  </p>
                </div>
              </div>
            </div>

            {/* item 3 */}
            <div className="item3 flex hvr-bob ">
            <div class="max-w-sm rounded-lg">
                  <img
                    class="rounded-lg"
                    src={img[2]}
                    alt=""
                  />
                <div class="p-1">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold ">
                      Free stuff
                    </h5>
                  </a>
                  <p class="mb-3 font-normal ">
                  Stop in on your birthday for a special treat on the house.
                  </p>
                </div>
              </div>
            </div>
            </div>
             {/* button */}
              <div className="flex justify-end md:justify-start">
                <div className="btn flex ml-2 mt-2 ">
                        <button className='my-bg-main px-3 py-3 flex my-dark rounded-full font-semibold hover:opacity-75 ' style={{ border: '1px solid black' } }>
                        <Link to='/register'>
                        Join now
                        </Link>
                        </button>
                        <button className='my-dark px-3 py-3 ml-2 flex rounded-full font-semibold hover:opacity-75' style={{ border: '1px solid black' } } >
                        Learn more
                        </button>
                </div>
              </div>

                {/*Section 2*/}
                <div className='py-10 flex-wrap ml-0 my-bg-grey flex rounded-lg justify-center'>
                {/* FAQ */}
                <div className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight border-bottom pb-3">Answer a few questions to find something new</h5>
                    <p className="font-normal">What type of drink are you looking for.</p>
                    <Link to='/menu'>
                    <div className='flex my-bg-main p-3 justify-between mt-3 rounded-md'>
                            <div className="flex-col ">
                                <h1 className='my-fs-20 my-light'>
                                    Iced
                                </h1>
                                <p className='my-light'>
                                    Cool off and uplift
                                </p>
                            </div>
                            <div className="">
                            <img src={img[3]} width='30px' height='30px' />
                            </div>
                    </div>
                    </Link>
                    <Link to='/menu'>
                    <div className='flex my-bg-main p-3 justify-between mt-3 rounded-md'>
                            <div className="flex-col ">
                                <h1 className='my-fs-20 my-light'>
                                    Hot
                                </h1>
                                <p className='my-light'>
                                    Warm up and get going
                                </p>
                            </div>
                            <div className="">
                            <img src={img[4]} width='30px' height='30px' />
                            </div>
                    </div>
                    </Link> 
                </div>


                {/* join*/}

                <div className="block max-w-lg mt-3 bg-white rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <a href="#">
                        <img className="rounded-lg" src={img[5]} alt="" />
                    </a>
                    <div className="flex pl-5 py-2 text-2xl font-bold">Play for your chance to win
                    </div>  
                    <div className="px-5 py-2 flex flex-wrap justify-end ">
                         <div className="mb-3 font-normal justify-end ">Starbucks for Life is here. Join Starbucks® Rewards to play for gift cards, drinks and more.
                        </div>
                        <div className="flex mb-3 ">
                          <div className="flex">
                            <div href="#" className="border-black text-white font-bold rounded-full px-2 py-2 my-bg-main text-lg ">
                              <Link to='/register'>
                                Join now  
                              </Link>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

                  {/* Section 3 */}
                  {/* Dropdown */}
                <div className="px-3 my-4 font-semibold my-fs-20 ml-0 flex-col">
                  <div className="about-us">
                    <button className="flex items-center justify-between w-11/12 inline-block py-2.5  active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#aboutUs" aria-expanded="false" aria-controls="aboutUs">
                      About us
                      <span className="pr-4"><BsCaretDown /></span>
                    </button>
                    <div className="collapse" id="aboutUs">
                      <div className="block p-6 rounded-lg shadow-lg bg-white">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                      </div>
                    </div>
                  </div> 
                  <div className="careers my-5">
                    <button className="flex items-center justify-between w-11/12 inline-block py-2.5 active:shadow-lg transition duration-150 ease-in-out" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#careers"
                    aria-expanded="false"
                    aria-controls="careers">
                      Careers
                      <span className="pr-4"><BsCaretDown /></span>
                    </button> 
                    <div className="collapse" id="careers">
                      <div className="block p-6 rounded-lg shadow-lg bg-white">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                      </div>
                    </div>
                  </div>
                  <div className="social-impact pb-4 border-b-2">
                    <button className="flex items-center justify-between w-11/12 inlin-block py-2.5 active:shadow-lg transition duration-150 ease-in-out" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#social-impact"
                    aria-expanded="false"
                    aria-controls="social-impact" >
                      Social Impact
                      <span className="pr-4"><BsCaretDown /></span>
                    </button> 
                    <div className="collapse" id="social-impact">
                      <div className="block p-6 rounded-lg shadow-lg bg-white">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                      </div>
                    </div>
                  </div>

                  {/* Socmed */}
                  <div className="socmed flex my-fs-30 px-3 my-3 border-b-2 pb-4 items-center">
                    <div className="instagram hvr-bob ">
                      <a href={socmed[0].url} target="_blank">
                        <BsInstagram />
                      </a>  
                    </div>
                    <div className="linkedin px-4 hvr-bob">
                      <a href={socmed[1].url} target="_blank">
                        <BsLinkedin />
                      </a>  
                    </div>
                    <div className="facebook hvr-bob">
                      <a href={socmed[2].url} target="_blank">
                        <BsFacebook />
                      </a>  
                    </div>
                    <div className="github px-4 hvr-bob">
                      <a href={socmed[3].url} target="_blank">
                        <BsGithub />
                      </a>
                    </div>
                    <div className="twitter hvr-bob ">
                      <a href={socmed[4].url} target="_blank"> 
                        <BsTwitter /> 
                      </a>
                    </div>
                  </div>

                  {/* copy right */}
                  <div className="copyrigth pt-4">
                    <div>
                    &copy; 2022 Gilang Ramadhan. All rights reserved.
                    </div>
                  </div>


            </div>

            </div>   
        </div>
    </>
  );
};

export default Home;
