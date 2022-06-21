import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import BalanceOverviewView from "./BalanceOverviewView";

describe("BalanceOverviewView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<BalanceOverviewView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
