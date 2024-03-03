using Microsoft.AspNetCore.Components;

namespace AdaptiveBlazor.Components;

/// <summary>
/// Badge component is used to highlight an item and attract attention or flag status, such as “New”, “Sale”, or other short phrases or a number to represent unread messages, updates available, etc..
/// Typical use cases include, but are not limited to, denoting a sale or new item, flagging an item as part of a category or representing a value of unread messages.
/// </summary>
public partial class AdaptiveBadge
{
    /// <summary>
    /// The default slot for the badge
    /// </summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }
}
