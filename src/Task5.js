import React, { useState } from "react";
export const Task5 = () => {
  let oneToTy = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  let tenth = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const [input, setInput] = useState("");
  const[Output,setOutput]=useState("")
  const InputHandler = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const ClickHandler = () => {
    if (input.toString().length > 7) alert("Too Big number");
    let num = ("0000000" + input)
      .slice(-7)
      .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    if(!num) return ;
    let temp =
      num[1] != 0
        ? (oneToTy[Number(num[1])] ||
            `${tenth[num[1][0]]} ${oneToTy[num[1][1]]}`) + " million "
        : "";
        temp +=
      num[2] != 0
        ? (oneToTy[Number(num[2])] ||
            `${tenth[num[2][0]]} ${oneToTy[num[2][1]]}`) + "hundred "
        : " ";
        temp +=
      num[3] != 0
        ? (oneToTy[Number(num[3])] ||
            `${tenth[num[3][0]]} ${oneToTy[num[3][1]]}`) + " thousand "
        : " ";
        temp +=
      num[4] != 0
        ? (oneToTy[Number(num[4])] ||
            `${tenth[num[4][0]]} ${oneToTy[num[4][1]]}`) + "hundred "
        :  "  ";
        temp +=
      num[5] != 0
        ?oneToTy[Number(num[5])] ||
          `${tenth[num[5][0]]} ${oneToTy[num[5][1]]} `
        : " ";
        setOutput(temp)
  };
  return (
    <div>
      <h2>Number to word</h2>
      <input type="number" onChange={InputHandler} />
      <br />
      <br />
      <button className="button" onClick={ClickHandler}>
        Show
      </button>
      <br /><br />
     <h2> {input.length > 7 ? null : Output }</h2> 
    </div>
  );
};
