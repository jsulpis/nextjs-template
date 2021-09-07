import { PropsWithChildren, HTMLProps } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const CodeBlock = (props: PropsWithChildren<HTMLProps<HTMLDivElement>>) => (
  <div
    className={
      "flex justify-between bg-white rounded px-3 py-2 border " + (props.className || "")
    }
  >
    <p className="font-mono text-xs text-gray-900 focus:outline-none">{props.children}</p>
    <button
      className="px-2 transition-colors rounded-sm hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300"
      onClick={() => copyToClipboard(props.children)}
    >
      <FontAwesomeIcon
        className="h-4 text-gray-500 cursor-pointer"
        icon={faCopy}
      ></FontAwesomeIcon>
    </button>
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
