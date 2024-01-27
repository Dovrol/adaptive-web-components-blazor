import { AdaptiveDesignSystem } from "@adaptive-web/adaptive-web-components";
import { AllComponents } from "@adaptive-web/adaptive-web-components/all-components";
import { DesignToken } from "@microsoft/fast-foundation";

// This must be called during initialization for the Design Tokens to be setup so the component styling is applied.
DesignToken.registerDefaultStyleTarget();
AdaptiveDesignSystem.defineComponents(AllComponents);