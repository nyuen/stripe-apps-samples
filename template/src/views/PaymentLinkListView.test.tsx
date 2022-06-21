import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import PaymentLinkListView from "./PaymentLinkListView";

describe("PaymentLinkListView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<PaymentLinkListView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
