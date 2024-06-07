import { useId } from "react";

function InputBox({
    label ,
    amount,
    onAmountChange,cuurencyOptions = [],
   currentType = "",
    amountdisable = false,
    currencyDisable = false,
    onCurrencyChange,
    className = "",
    changer,
    selectCurrency
}) {
 //   const [selectCurrency,SetSelectCurrency] = useState("")
    const amountinputId = useId()
   // const preCurrency = selectCurrency === "usd" || selectCurrency==="inr";
    // function onCurrencyChange(val){
    //     SetSelectCurrency(val)
        
    // }
    return (
        <div className={`bg-gray-700 flex justify-center mb-5 items-center p-3 rounded-lg text-sm w-fit mx-auto ${className}  `}>
            <div className="w-1/2">
                <label  className="text-white mb-2 inline-block" htmlFor={amountinputId}>
                    {label}
                </label>
                <input  

                    id={amountinputId }
                  
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisable}
                    value={amount}
                    onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
                />
            </div>
            <div className="w-1/2 flex  flex-wrap justify-end text-right">
                <p className="text-white mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-700 cursor-pointer outline-none"
                     onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                     value={selectCurrency}
                >
                    
                    { cuurencyOptions.map((e)=>{
                        return(
                            <option key = {e} value= {e}>
                            {e}
                           
                        </option>)
                        
                    })

                        }
                        
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
// import { useId } from "react"; // Removed unused useState import

// function InputBox({
//     label,
//     amount,
//     onAmountChange, // Prop for handling amount change
//     cuurencyOptions = [],
//     selectCurrency, // Prop for currently selected currency
//     amountdisable = false,
//     currencyDisable = false,
//     onCurrencyChange, // Prop for handling currency change
//     className = "",
// }) {
//     const amountinputId = useId(); // Generate unique ID for input

//     return (
//         <div className={`bg-gray-700 flex justify-center mb-5 items-center p-3 rounded-lg text-sm w-fit mx-auto ${className}`}>
//             <div className="w-1/2">
//                 <label className="text-white mb-2 inline-block" htmlFor={amountinputId}>
//                     {label}
//                 </label>
//                 <input
//                     id={amountinputId}
//                     className="outline-none w-full bg-transparent py-1.5"
//                     type="number"
//                     placeholder="Amount"
//                     disabled={amountdisable}
//                     value={amount} // Set value to amount prop
//                     onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // Handle amount change
//                 />
//             </div>
//             <div className="w-1/2 flex flex-wrap justify-end text-right">
//                 <p className="text-white mb-2 w-full">Currency Type</p>
//                 <select
//                     className="rounded-lg px-1 py-1 bg-gray-700 cursor-pointer outline-none"
//                     onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // Handle currency change
//                     value={selectCurrency} // Set value to selectCurrency prop
//                 >
//                     {cuurencyOptions.map((e) => (
//                         <option key={e} value={e}>
//                             {e}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         </div>
//     );
// }

// export default InputBox;
