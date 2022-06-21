import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import PaymentLinkDetailView from "./PaymentLinkDetailView";

describe("PaymentLinkDetailView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<PaymentLinkDetailView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
