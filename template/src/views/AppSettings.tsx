import {
  Box,
  Icon,
  Inline,
  Link,
  SettingsView,
} from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";

const AppSettings = ({userContext, environment}: ExtensionContextValue) => {
  return (
    <SettingsView onSave={()=>{}}>
      <Box
        css={{
          background: "container",
          borderRadius: "medium",
          padding: "large",
        }}>
        <Box css={{ marginBottom: "small" }}>
          <Icon name="settings" size="medium" />
        </Box>

        Edit{" "}
        <Inline css={{ fontFamily: "monospace" }}>src/views/AppSettings.tsx</Inline>{" "}
        and save to reload this view.

        <Link
          target="_blank"
          href={"https://stripe.com/docs/stripe-apps/build-test-views#add-application-settings"}
        >
          <Box css={{ marginTop: "medium" }}>
            Adding application settings{" "}
            <Icon name="arrowRight" size="xsmall" />
          </Box>
        </Link>
      </Box>
    </SettingsView>
  );
};

export default AppSettings;
