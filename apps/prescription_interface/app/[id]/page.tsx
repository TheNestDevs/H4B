'use client';
import Button from "@/components/ui/Button";
import { use, useState } from "react";

export default function Home({ params }: { params: { id: string } }) {
    const [verified, setVerified] = useState(false);
    const[modal, setModal] = useState("hidden");
    const handleClick = () => {
        if(!verified){setModal("loading");
        setTimeout(() => {
            setModal("done")
            setTimeout(() => {
                setModal("hidden")
            }, 1000)
            setVerified(true);
        }, 1000)}
    }
    return (
            <>
        <div className="w-[420px] h-[595px] relative overflow-hidden bg-white drop-shadow-md mx-auto">
  <p className="w-[210px] h-[18px] absolute left-[30px] top-[67px] text-xs font-medium text-left text-[#204f6e]">
    <span className="w-[210px] h-[18px] text-xs font-medium text-left text-[#204f6e]">
      Dr. Avdsjf ajfkafj
    </span>
    <br />
  </p>
  <p className="w-[210px] h-[43px] absolute left-[105px] top-[15px] text-base font-medium text-center text-[#349899]">
    ZenithMed
  </p>
  <svg
    width={360}
    height={2}
    viewBox="0 0 360 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[28.5px] top-[99.5px]"
    preserveAspectRatio="none"
  >
    <line y1={1} x2={360} y2={1} stroke="#349899" stroke-width={2} />
  </svg>
  <svg
    width={360}
    height={2}
    viewBox="0 0 360 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[28.5px] top-[486.5px]"
    preserveAspectRatio="none"
  >
    <line y1={1} x2={360} y2={1} stroke="#349899" stroke-width={2} />
  </svg>
  <p className="w-[210px] h-[22px] absolute left-[30px] top-[110px] text-[10px] font-medium text-left text-[#656565]">
    Patient Name: Tieury hadufah
  </p>
  <p className="w-[60px] h-[22px] absolute left-[30px] top-[132px] text-[10px] font-medium text-left text-[#656565]">
    Age: 23
  </p>
  <p className="w-[75px] h-[22px] absolute left-[105px] top-[132px] text-[10px] font-medium text-left text-[#656565]">
    Gender: Male
  </p>
  <p className="w-[60px] h-4 absolute left-[30px] top-[175px] text-[10px] font-medium text-left text-[#204f6e]">
    Medicines:
  </p>
  <p className="w-[60px] h-4 absolute left-[30px] top-[429px] text-[10px] font-medium text-left text-[#204f6e]">
    Remarks:
  </p>
  <p className="w-[360px] h-4 absolute left-[30px] top-[445px] text-[10px] font-medium text-left text-[#656565]">
    Patient is stable
  </p>
  <p className="w-[360px] h-[22px] absolute left-[30px] top-[198px] text-[10px] font-medium text-left text-[#656565]">
    Paracetamol, 300mg, twice per day
  </p>
  <p className="w-[360px] h-[22px] absolute left-[30px] top-[220px] text-[10px] font-medium text-left text-[#656565]">
    Paracetamol, 300mg, twice per day
  </p>
  <p className="w-[117px] h-[21px] absolute left-[30px] top-[498px] text-[10px] font-medium text-left text-[#349899]">
    Signature Verification
                </p>
                {
                verified ? <Button variant={"secondary"} onClick={handleClick} className="w-[60px] h-[30px] absolute left-[30px] top-[520px] text-[10px] center"
                >Verified
                </Button>: <Button variant={"primary"} onClick={handleClick} className="bg-[#349899] w-[60px] h-[30px] absolute left-[30px] top-[520px] text-[10px]"
                >Verify
                </Button> 
                    
                }
            </div>
    <div className={modal === "hidden" ? " flex flex-col justify-center absolute w-full h-full left-0 top-0 hidden" : "flex flex-col justify-center absolute w-full h-full left-0 top-0"}>
                
                    <div className="text-sm mx-auto text-center"><div className="h-48 w-64 drop-shadow-xl bg-white rounded-lg mx-auto flex flex-col justify-center">
                    {
                        modal === "done" && <svg className="w-16 h-16 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 16 16">
      <defs>
        <linearGradient
          x2="0"
          y1="986.67"
          y2="-2.623"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ffce3b"></stop>
          <stop offset="1" stopColor="#ffd762"></stop>
        </linearGradient>
      </defs>
      <g fill="#da4453" transform="translate(-10.994 -2071.68) scale(1.99997)">
        <rect
          width="8"
          height="8"
          x="7"
          y="1037.36"
          fill="#32c671"
          rx="4"
        ></rect>
        <path
          fill="#fff"
          strokeWidth="9.512"
          d="M13.577 1040.285l-.483-.483a.329.329 0 00-.241-.1.329.329 0 00-.242.1l-2.33 2.334-1.045-1.048a.329.329 0 00-.241-.1.329.329 0 00-.242.1l-.483.483a.329.329 0 00-.1.242c0 .094.034.175.1.241l1.286 1.286.483.483c.066.067.147.1.242.1a.329.329 0 00.241-.1l.483-.483 2.572-2.572a.33.33 0 00.1-.241.329.329 0 00-.1-.242"
        ></path>
      </g>
    </svg>
                    }
                    
                    {modal === "loading" && <svg
                        className="w-16 h-16 mx-auto animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
    >
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="none"
        stroke="#696969"
        strokeWidth="4"
        opacity="1"
      ></circle>
      <circle cx="8" cy="54" r="6" fill="#fff" stroke="#696969" strokeWidth="3">
        <animateTransform
          attributeName="transform"
          dur="2s"
          from="0 50 48"
          repeatCount="indefinite"
          to="360 50 52"
          type="rotate"
        ></animateTransform>
      </circle>
                    </svg>}</div>
                </div>
            </div></>
    );
}
