import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import DrawerDefaultView from "./DrawerDefaultView";

describe("DrawerDefaultView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<DrawerDefaultView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
