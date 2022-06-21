import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import BillingOverviewView from "./BillingOverviewView";

describe("BillingOverviewView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<BillingOverviewView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
