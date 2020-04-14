import { PropsWithChildren, HTMLProps } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const CodeBlock = (props: PropsWithChildren<HTMLProps<HTMLDivElement>>) => (
  <div
    className={
      "flex justify-between bg-white rounded px-3 py-2 border " + (props.className || "")
    }
  >
    <p className="text-xs text-gray-900 focus:outline-none font-mono">{props.children}</p>
    <FontAwesomeIcon
      className="h-4 text-gray-500 cursor-pointer"
      onClick={() => copyToClipboard(props.children)}
      icon={faCopy}
    ></FontAwesomeIcon>
  </div>
);

function copyToClipboard(text) {
  // Create a hidden text field
  const inputText = document.createElement("input");
  inputText.style.position = "absolute";
  inputText.style.top = "-9999px";
  inputText.value = text;
  document.body.appendChild(inputText);

  // Select the text field
  inputText.select();

  // Copy the text inside the text field
  document.execCommand("copy");

  // Remove the input
  document.body.removeChild(inputText);
}

export default CodeBlock;
