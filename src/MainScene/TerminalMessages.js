import React, { useState, useEffect, useRef } from "react";
import * as MessageActionsCreator from "../redux/actions/messagesActions";
import { useSelector, useDispatch } from "react-redux";

const CommandlineWelcomePart = ({ date, time }) => {
  return (
    <>
      <div
        style={{
          padding: 2,
          background: "rgba(33,150,243,.05)",
          color: "whitesmoke",
          fontFamily: "Monaco",
          fontSize: 12,
        }}
      >
        last login: {date} {time} on ttys000
        <span
          style={{
            padding: 2,
            background: "lightgrey",
            color: "#000",
            fontFamily: "Monaco",
            fontSize: 12,
            marginLeft: 100,
            textAlign: "right",
          }}
        >
          MyOS
        </span>
      </div>
      <div className={"weicomeMessageBox"}>
        <div className={"welcomeMessage"}>
          <span>please type => "--start" to begin </span>
        </div>
      </div>
    </>
  );
};

const CommandlineOuputFiled = (source) => {
  return source !== null
    ? source.source.map((e, i) => (
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
          <div
            style={{
              padding: 2,
              color: "whitesmoke",
              fontFamily: "Monaco",
              fontSize: 12,
            }}
          >
            {!Array.isArray(e.output)
              ? // <li
                //   style={{
                //     padding: 2,
                //     color: "whitesmoke",
                //     fontFamily: "Monaco",
                //     fontSize: 12,
                //     listStyleType: "none",
                //   }}
                //   // key={i}
                // >
                //   {"> "}
                //   {e.output}
                // </li>
                null
              : e.output.map((v) => (
                  <li
                    style={{
                      padding: 2,
                      color: "whitesmoke",
                      fontFamily: "Monaco",
                      fontSize: 12,
                      listStyleType: "none",
                    }}
                    key={v}
                  >
                    {"> "}
                    {v}
                  </li>
                ))}
          </div>
        </>
      ))
    : null;
};

export function TerminalMessages() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState(0);
  const [commands, setCommands] = useState([]);

  const sentTime = new Date().toLocaleTimeString();
  const sentDate = new Date().toLocaleDateString();

  const storeData = useSelector((state) => state.messages);
  const readyCommands = useSelector((state) => Object.values(state.commands));

  const dispatch = useDispatch();
  const payload = {
    id: id,
    timestamp: sentTime,
    command: data[0],
    output: commands,
  };

  const handlingCommands = (selection) => {
    if (!readyCommands.indexOf(selection)) {
      for (const i in readyCommands) {
        switch (readyCommands[i]) {
          case "ls":
            return setCommands((items) => [
              ...items,
              "opt",
              "usr",
              "bin",
              "home ",
              "etc",
              "private",
              "system",
              "dev",
            ]);
          case "--start":
            return setCommands(readyCommands);
          default:
            break;
        }
      }
    }
  };

  const handleMessage = (event) => {
    event.preventDefault();
    const x = event.target.value.length > 35 ? setFlag(true) : setFlag(false);
    setData([event.target.value]);
  };

  const keyPressed = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setId(id + 1);
      dispatch(MessageActionsCreator.add_message(payload));
      setFlag(false);
      setData([]);
      handlingCommands(data[0]);
      setTimeout(() => setCommands([]), 1000);
    }
  };

  return (
    <div>
      {/* Commandline Welocome portion on the top */}
      <CommandlineWelcomePart date={sentDate} time={sentTime} />
      <div className={"terminal"}>
        {/* command line output section */}
        <CommandlineOuputFiled source={storeData} />

        {/* command line input section */}

        <div className={"terminal-input"}>
          <div>
            <span
              style={{
                padding: 2,
                background: "rgba(255,235,59,1)",
                color: "#000",
                fontFamily: "Monaco",
                fontSize: 12,
              }}
            >
              {"user"}
            </span>
            <span
              style={{
                padding: 2,
                background: "rgba(33,150,243,1)",
                color: "#000",
                fontFamily: "Monaco",
                fontSize: 12,
              }}
            >
              {"~/"}
            </span>
          </div>

          <input
            className={"InputField"}
            onChange={(e) => {
              handleMessage(e);
            }}
            value={data}
            onKeyDown={(e) => keyPressed(e)}
          />
          <p>
            <span
              style={{
                padding: 2,
                visibility: !flag ? flag : "hidden",
                background: "lightgrey",
                color: "#000",
                fontFamily: "Monaco",
                fontSize: 12,
              }}
            >
              {"at "}
              {sentTime}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TerminalMessages;
