using Microsoft.AspNetCore.Components;

namespace AdaptiveBlazor.Components;

/// <summary>
/// An anchored region is a container component which enables authors to create layouts where the contents of the anchored region can be positioned relative to another "anchor" element. Additionally, the anchored region can react to the available space between the anchor and a parent "viewport" element such that the region is placed on the side of the anchor with the most available space, or even resize itself based on that space.
/// </summary>
public partial class AdaptiveAnchoredRegion
{
    /// <summary>
    /// The default slot for the content
    /// </summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }
}
