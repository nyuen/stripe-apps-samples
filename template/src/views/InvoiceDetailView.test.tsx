import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import InvoiceDetailView from "./InvoiceDetailView";

describe("InvoiceDetailView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<InvoiceDetailView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
