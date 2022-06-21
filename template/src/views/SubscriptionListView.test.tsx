import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import SubscriptionListView from "./SubscriptionListView";

describe("SubscriptionListView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<SubscriptionListView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
