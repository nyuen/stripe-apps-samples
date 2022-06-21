import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {ContextView} from "@stripe/ui-extension-sdk/ui";

import TaxReportOverviewView from "./TaxReportOverviewView";

describe("TaxReportOverviewView", () => {
  it("renders ContextView", () => {
    const {wrapper} = render(<TaxReportOverviewView {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("save to reload this view");
  });
});
