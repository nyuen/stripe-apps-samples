import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import ProductDetailView from "./ProductDetailView";

describe("ProductDetailView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<ProductDetailView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
