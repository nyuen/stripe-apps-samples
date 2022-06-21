import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import InvoiceListView from "./InvoiceListView";

describe("InvoiceListView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<InvoiceListView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
