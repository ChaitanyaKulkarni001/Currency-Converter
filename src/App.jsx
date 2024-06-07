import useCurrencyInfo from "./hooks/useCurrenyInfo";

import InputBox from "./Components/InputBox";
import { useEffect, useState } from "react";

function App() {
  const [amount, SetAmount] = useState();
  const [from, setFrom] = useState("usd");
 // useCurrencyInfo(from);
  const [to, setTo] = useState("inr");
  const [convertedAmount, SetconvertedAmount] = useState(0);
 
  const currencyInfo = useCurrencyInfo(from);
  // useEffect(() => {x 
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    SetconvertedAmount(amount);
    SetAmount(convertedAmount);
  };
  const arr = ">";
  const convert = () => {
    SetconvertedAmount(amount * currencyInfo[to]);
    //console.log(convertedAmount);
  };
  
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                cuurencyOptions={options}
                onAmountChange={SetAmount}
                  selectCurrency={from}
                onCurrencyChange={setFrom}
             //   changer={from}
                //  currentType='usd'
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                cuurencyOptions={options}
                onCurrencyChange={setTo}
                amountdisable
                selectCurrency={to}
                // currentType='inr'
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} -{arr} {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
// import currencyInfo from "./hooks/useCurrenyInfo.js"
// import InputBox from "./Components/InputBox";
// import { useEffect, useState } from "react";

// function App() {
//   const [amount, setAmount] = useState(); // useState hook for managing amount
//   const [from, setFrom] = useState("usd"); // useState hook for managing 'from' currency
//   const [to, setTo] = useState("inr"); // useState hook for managing 'to' currency
//   const [convertedAmount, setConvertedAmount] = useState(0); // useState hook for managing converted amount

//   const currencyInfo = useCurrencyInfo(from);
//   const options = Object.keys(currencyInfo);

  
//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setConvertedAmount(amount);
//     setAmount(convertedAmount);
//   };

//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to]);
//   };

//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
//       }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert();
//             }}
//           >
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount} // Pass amount state as prop
//                 cuurencyOptions={options} // Pass currency options as prop
//                 onAmountChange={setAmount} // Pass setAmount function as prop
//                 onCurrencyChange={setFrom} // Pass setFrom function as prop
//                 selectCurrency={from} // Pass from state as prop
//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >
//                 swap
//               </button>
//             </div>
//             <div className="w-full mt-1 mb-4">
//               <InputBox
//                 label="To"
//                 amount={convertedAmount} // Pass convertedAmount state as prop
//                 cuurencyOptions={options} // Pass currency options as prop
//                 onCurrencyChange={setTo} // Pass setTo function as prop
//                 amountdisable
//                 selectCurrency={to} // Pass to state as prop
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
//             >
//               Convert {from.toUpperCase()} -&gt; {to.toUpperCase()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
