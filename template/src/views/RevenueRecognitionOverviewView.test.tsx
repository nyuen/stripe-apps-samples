import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import RevenueRecognitionOverviewView from "./RevenueRecognitionOverviewView";

describe("RevenueRecognitionOverviewView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<RevenueRecognitionOverviewView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
