using Microsoft.AspNetCore.Components;

namespace AdaptiveBlazor.Components;

/// <summary>
/// An individual item in an <see cref="AdaptiveAccordion"/>
/// </summary>
public partial class AdaptiveAccordionItem
{
    protected override void OnInitialized()
    {
        Id ??= Guid.NewGuid().ToString();
        Parent?.Additem(this);
    }

    [CascadingParameter] public AdaptiveAccordion? Parent { get; set; }
    [Parameter] public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// Configures the <see href="https://www.w3.org/TR/wai-aria-1.1/#aria-level">aria level</see> of the heading element.
    /// </summary>
    [Parameter] public int HeadingLevel { get; set; } = 2;

    /// <summary>
    /// Expands or collapses the item.
    /// </summary>
    [Parameter] public bool Expanded { get; set; } = false;

    /// <summary>
    /// Disables an accordion item
    /// </summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>
    /// Content which serves as the accordion item heading and text of the expand button
    /// </summary>
    [Parameter, Slot("heading")] public RenderFragment? HeadingSlot { get; set; }
    /// <summary>
    /// Content which can be provided between the heading and the icon
    /// </summary>
    [Parameter, Slot("start")] public RenderFragment? StartSlot { get; set; }
    /// <summary>
    /// Content which can be provided between the start slot and icon
    /// </summary>
    [Parameter, Slot("end")] public RenderFragment? EndSlot { get; set; }
    /// <summary>
    /// The expanded icon
    /// Warning: currently there seems to be bug in awc implementation, as slot is not rendered correctly
    /// </summary>
    [Parameter, Slot("expanded-icon")] public RenderFragment? ExpandedIconSlot { get; set; }
    /// <summary>
    /// The collapsed icon
    /// Warning: currently there seems to be bug in awc implementation, as slot is not rendered correctly
    /// </summary>
    [Parameter, Slot("collapsed-icon")] public RenderFragment? CollapsedIconSlot { get; set; }
}
