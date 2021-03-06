import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as setRedirection from "../redux/actions/setRedirect";

const availableMethods = ["start", "ls", "cd" ,"echo", "clear", "--help"];
const listView = ["etc", "opt","bin","./sadikerisen", "home"]

const matchStrings=(stringA, stringB)=>{
  
    if (stringB !== undefined || stringB === null){
      
        if (stringA.toString().split("").length !== stringB.toString().split("").length){ 
          return false
      }else {
        for (const i in stringA.toString().split("")){
          if (stringA.toString().split("")[i]=== stringB.toString().split("")[i]) return true
          return  false
        }
      }
    }
    else{
      return "wrong input"
    }
  
}

const CommandlineOuput_bodyfield = (outputData) => {
  const [value, setValue] = useState([]);
  const verify = availableMethods.includes(outputData.outputData);
  const inputCommand = outputData.outputData.toLowerCase().split(/ (.*)/);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    const command = inputCommand[0]
    switch (command) {
      case "ls":
        return setValue(listView);

      case "echo":
        return setValue(inputCommand.slice(1)[0]);

      case "--help":
        return setValue(availableMethods);

      case "start":
        const connecting = "connecting..."
        dispatch(setRedirection.setRedirect(true))
        return   setValue([connecting])
        // return setInterval(() => {
        //   setValue([connecting]),
       
        //   // setRedirect(true)
        // }, 800);
    
      case command.includes("cd") ? command.toString(): null:
        if(inputCommand[1]!==undefined){
          const verify = matchStrings(inputCommand[1].toString(), 
          listView[listView.indexOf(!listView.includes(inputCommand[1]) ?
           null
           : inputCommand[1].toString()
           )])
          if (verify === true){
            return setValue([`interpreter: Permission denied`]);      
          }else{
            return setValue([`cd: no such file or directory: ${inputCommand[1]}`]);      
          }
        }else{
          return setValue([`${command}`]); 
        }
            
          
      default:
        return setValue(["cannot find the command"]);
    }


  }, []);

  return verify ? (
    <div>
      <span
        style={{
          padding: 2,
          color: "whitesmoke",
          fontFamily: "Monaco",
          fontSize: 12,
        }}
      >
        {"> "}
      </span>
      {Array.isArray(value) ? (
        value.sort().map((e, i) => (
          <span
            style={{
              padding: 2,
              color: "whitesmoke",
              fontFamily: "Monaco",
              fontSize: 12,
            }}
            key={i}
          >
            {e}{" "}
          </span>
        ))
      ) : (
        <span
          style={{
            padding: 2,
            color: "whitesmoke",
            fontFamily: "Monaco",
            fontSize: 12,
          }}
        >
          value
        </span>
      )}
    </div>
  ) : (
    <div>
      <span
        style={{
          padding: 2,
          color: "whitesmoke",
          fontFamily: "Monaco",
          fontSize: 12,
        }}
      >
        {"> "}
      </span>
      <span
        style={{
          padding: 2,
          color: "whitesmoke",
          fontFamily: "Monaco",
          fontSize: 12,
        }}
      >
        {value}
      </span>

    </div>
  );
};

const CommandlineOuputField = (source) => {
  return source !== null
    ? source.source.messages.map((e, i) => (
        <>
          <div className={"terminal-output"}>
            <div>
              <span
                style={{
                  padding: 2,
                  background: "rgba(33,150,243,1)",
                  color: "whitesmoke",
                  fontFamily: "Monaco",
                  fontSize: 12,
                }}
                key={i}
              >
                {">>"}
              </span>
              <span
                style={{
                  padding: 2,
                  color: "whitesmoke",
                  fontFamily: "Monaco",
                  fontSize: 12,
                }}
              >
                {e.command}
              </span>
            </div>

            <div>
              <span
                style={{
                  padding: 2,
                  background: "lightgrey",
                  color: "#000",
                  fontFamily: "Monaco",
                  fontSize: 12,
                }}
              >
                {"at "}
                {e.timestamp}
              </span>
            </div>
          </div>
          <CommandlineOuput_bodyfield outputData={e.command} />
        </>
      ))
    : null;
};
export default CommandlineOuputField;
