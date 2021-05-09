import {act, render, screen} from "@testing-library/react";
import { useState } from "react";
import { SimpleMdeReact } from "SimpleMdeReact";
import userEvent from "@testing-library/user-event";

// @ts-ignore
Document.prototype.createRange = function () {
  return {
    setEnd: function () {},
    setStart: function () {},
    getBoundingClientRect: function () {
      return { right: 0 };
    },
    getClientRects: function () {
      return {
        length: 0,
        left: 0,
        right: 0,
      };
    },
  };
};

const Editor = () => {
  const [value, setValue] = useState("");
  return <SimpleMdeReact value={value} onChange={setValue} />;
};

describe("Renders", () => {
  it("succesfully", async () => {
    act(() => {
      render(<Editor />);
    });
    const editor = await screen.findByRole("textbox");
    userEvent.type(editor, "hello")
    expect(screen.getByText('hello')).toBeDefined()
  });
});
