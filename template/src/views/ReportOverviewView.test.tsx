import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import ReportOverviewView from "./ReportOverviewView";

describe("ReportOverviewView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<ReportOverviewView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
