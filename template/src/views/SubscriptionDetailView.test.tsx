import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import SubscriptionDetailView from "./SubscriptionDetailView";

describe("SubscriptionDetailView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<SubscriptionDetailView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
